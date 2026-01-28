---
title: Add Your Project
---

# Share Your Work

Made by Punks is a directory of projects that explore CryptoPunks art and culture. If you hold a punk and you've created something inspired by or related to CryptoPunks, we want to feature it here.

---

## What Counts as a Project?

Anything that explores, celebrates, or builds on CryptoPunks.

- **Art** - Derivatives, remixes, animations, illustrations inspired by punks
- **Writing** - Books, essays, zines about punk culture and history
- **Film** - Documentaries, videos about the punk community
- **Music** - Soundtracks, albums inspired by punk aesthetics
- **Physical goods** - Prints, merch, collectibles featuring punks
- **Tools** - Apps, explorers, utilities for the punk community
- **Community projects** - Events, collabs, initiatives around punks

If it's about punks and you made it, it belongs here.

---

## Two Ways to Add Your Project

### Option 1: Fill Out a Form (Easy)

Not comfortable with GitHub? No problem. Fill out [this form](https://github.com/madebypunks/directory/issues/new?template=project-submission.md&title=New+Project:+[Your+Project+Name]) and we'll add your project for you.

Just tell us:
- Your punk ID
- Project name
- What it is (a sentence or two)
- Website or link
- Your Twitter handle (optional)
- A thumbnail image (optional)

A maintainer will take it from there.

### Option 2: Submit via GitHub (For Those Who Know Git)

If you're comfortable with GitHub, you can add your project directly:

1. **Fork** the [repository](https://github.com/madebypunks/directory)
2. **Create** a file in `content/projects/your-project.md`
3. **Add** your project info (see format below)
4. **Submit** a pull request

That's it. No gatekeepers, no approvals process. Just git.

---

## Project File Format

```
---
name: Your Project Name
description: A brief description (1-2 sentences)
url: https://your-project.com
launchDate: 2024-01-15
tags:
  - Art
  - Book
  - Film
creators:
  - 1234
twitter: your_handle
---

Write more about your project here if you want.
```

**Tags to choose from:**
Art, Book, Film, Documentary, Music, Photography, Animation, Illustration, Derivative, Generative, History, Guide, Education, Creation, Memes, Fun, Playful, Community, Collector, Marketplace, Explorer, Archive

---

## Add Your Punk Profile

Want your own page? Create `content/punks/[YOUR_PUNK_ID].md`:

```
---
name: Your Name
twitter: your_handle
website: https://your-site.com
---

Write anything you want here. This is your space.
```

---

## Collabs Welcome

Projects can have multiple creators. List all the punk IDs:

```
creators:
  - 1234
  - 5678
```

The project will appear on both punk pages.

---

## Add a Thumbnail

Drop your image in `public/projects/` and reference it:

```
thumbnail: /projects/your-project.png
```

Keep it around 1200x630px for best results.

---

## The Spirit of This Place

CryptoPunks belong to no one and everyone. This directory is the same.

- **No database** - Everything lives in simple text files
- **No backend** - Just static files, forkable and remix-friendly
- **No gatekeepers** - Anyone can contribute, anyone can fork
- **Community-maintained** - Volunteers who hold punks, nothing more

This is lore that belongs to everyone. Take it and build.

---

## Questions?

Open an issue on [GitHub](https://github.com/madebypunks/directory/issues) or reach out to one of the maintainers.
