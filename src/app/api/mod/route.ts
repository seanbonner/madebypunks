import { NextResponse } from "next/server";
import { getOpenPRs, reviewPR } from "./lib";

// GET /api/mod - Review all open PRs that haven't been reviewed yet
export async function GET() {
  const appId = process.env.GITHUB_APP_ID;
  const installationId = process.env.GITHUB_APP_INSTALLATION_ID;
  const privateKey = process.env.GITHUB_APP_PRIVATE_KEY;
  const anthropicKey = process.env.ANTHROPIC_API_KEY;

  if (!appId || !installationId || !privateKey || !anthropicKey) {
    return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
  }

  const prs = await getOpenPRs();
  const reviewed: number[] = [];
  const skipped: { pr: number; reason: string }[] = [];

  for (const pr of prs) {
    const result = await reviewPR(pr.number);

    if (result.reviewed) {
      reviewed.push(pr.number);
    } else {
      skipped.push({ pr: pr.number, reason: result.reason || "unknown" });
    }

    // Rate limit between PRs
    await new Promise((r) => setTimeout(r, 1000));
  }

  return NextResponse.json({ reviewed, skipped, total: prs.length });
}
