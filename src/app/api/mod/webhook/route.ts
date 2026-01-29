import { NextRequest, NextResponse } from "next/server";
import { verifyWebhookSignature, reviewPR, getPRComments, handleDiscussion } from "../lib";

const BOT_LOGIN = `${process.env.GITHUB_APP_SLUG || "punkmodbot"}[bot]`;

interface PullRequestEvent {
  action: string;
  pull_request: {
    number: number;
    title: string;
    state: string;
  };
}

interface IssueCommentEvent {
  action: string;
  issue: {
    number: number;
    pull_request?: { url: string };
  };
  comment: {
    body: string;
    user: { login: string };
  };
}

interface DiscussionEvent {
  action: string;
  discussion: {
    number: number;
    title: string;
    body: string;
  };
}

interface DiscussionCommentEvent {
  action: string;
  discussion: {
    number: number;
    title: string;
  };
  comment: {
    body: string;
    user: { login: string };
  };
}

type WebhookEvent = PullRequestEvent | IssueCommentEvent | DiscussionEvent | DiscussionCommentEvent;

function isPullRequestEvent(event: WebhookEvent): event is PullRequestEvent {
  return "pull_request" in event;
}

function isIssueCommentEvent(event: WebhookEvent): event is IssueCommentEvent {
  return "comment" in event && "issue" in event;
}

function isDiscussionEvent(event: WebhookEvent): event is DiscussionEvent {
  return "discussion" in event && !("comment" in event);
}

function isDiscussionCommentEvent(event: WebhookEvent): event is DiscussionCommentEvent {
  return "discussion" in event && "comment" in event;
}

export async function POST(request: NextRequest) {
  const appId = process.env.GITHUB_APP_ID;
  const installationId = process.env.GITHUB_APP_INSTALLATION_ID;
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const webhookSecret = process.env.GITHUB_WEBHOOK_SECRET;

  if (!appId || !installationId || !privateKey || !anthropicKey) {
    return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
  }

  const rawBody = await request.text();
  const signature = request.headers.get("x-hub-signature-256");

  if (webhookSecret && !verifyWebhookSignature(rawBody, signature)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = request.headers.get("x-github-event");
  const payload: WebhookEvent = JSON.parse(rawBody);

  // Handle pull_request events
  if (event === "pull_request" && isPullRequestEvent(payload)) {
    if (payload.action === "opened" || payload.action === "synchronize") {
      const prNumber = payload.pull_request.number;

      try {
        const result = await reviewPR(prNumber);
        return NextResponse.json({ event: "pull_request", action: payload.action, pr: prNumber, ...result });
      } catch (error) {
        console.error(`Error reviewing PR #${prNumber}:`, error);
        return NextResponse.json({ error: "Failed to review PR", pr: prNumber }, { status: 500 });
      }
    }

    return NextResponse.json({ event: "pull_request", action: payload.action, skipped: true });
  }

  // Handle issue_comment events (for conversational replies)
  if (event === "issue_comment" && isIssueCommentEvent(payload)) {
    if (!payload.issue.pull_request) {
      return NextResponse.json({ event: "issue_comment", skipped: true, reason: "not_a_pr" });
    }

    if (payload.action !== "created") {
      return NextResponse.json({ event: "issue_comment", skipped: true, reason: "not_created" });
    }

    // Ignore comments from the bot itself (avoid infinite loops)
    if (payload.comment.user.login === BOT_LOGIN) {
      return NextResponse.json({ event: "issue_comment", skipped: true, reason: "bot_comment" });
    }

    const prNumber = payload.issue.number;

    // Check if bot has already participated in this PR
    const comments = await getPRComments(prNumber);
    const botHasCommented = comments.some((c) => c.user.login === BOT_LOGIN);

    // If bot hasn't commented yet, only respond if mentioned
    if (!botHasCommented) {
      const commentBody = payload.comment.body.toLowerCase();
      const mentionsBot = commentBody.includes("@punkmodbot") || commentBody.includes("punkmodbot");
      if (!mentionsBot) {
        return NextResponse.json({ event: "issue_comment", skipped: true, reason: "not_participating" });
      }
    }

    try {
      const result = await reviewPR(prNumber, true); // Force re-review
      return NextResponse.json({ event: "issue_comment", action: "re_review", pr: prNumber, ...result });
    } catch (error) {
      console.error(`Error re-reviewing PR #${prNumber}:`, error);
      return NextResponse.json({ error: "Failed to re-review PR", pr: prNumber }, { status: 500 });
    }
  }

  // Handle discussion events (new discussion created)
  if (event === "discussion" && isDiscussionEvent(payload)) {
    if (payload.action !== "created") {
      return NextResponse.json({ event: "discussion", action: payload.action, skipped: true });
    }

    const discussionNumber = payload.discussion.number;

    try {
      const result = await handleDiscussion(discussionNumber);
      return NextResponse.json({ event: "discussion", action: "created", discussion: discussionNumber, ...result });
    } catch (error) {
      console.error(`Error handling discussion #${discussionNumber}:`, error);
      return NextResponse.json({ error: "Failed to handle discussion", discussion: discussionNumber }, { status: 500 });
    }
  }

  // Handle discussion_comment events (someone replied in a discussion)
  if (event === "discussion_comment" && isDiscussionCommentEvent(payload)) {
    if (payload.action !== "created") {
      return NextResponse.json({ event: "discussion_comment", action: payload.action, skipped: true });
    }

    // Ignore comments from the bot itself (avoid infinite loops)
    if (payload.comment.user.login === BOT_LOGIN) {
      return NextResponse.json({ event: "discussion_comment", skipped: true, reason: "bot_comment" });
    }

    const discussionNumber = payload.discussion.number;

    try {
      const result = await handleDiscussion(discussionNumber);
      return NextResponse.json({ event: "discussion_comment", action: "reply", discussion: discussionNumber, ...result });
    } catch (error) {
      console.error(`Error replying to discussion #${discussionNumber}:`, error);
      return NextResponse.json({ error: "Failed to reply to discussion", discussion: discussionNumber }, { status: 500 });
    }
  }

  return NextResponse.json({ event, skipped: true, reason: "event_not_supported" });
}
