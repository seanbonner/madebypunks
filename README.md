# Made by Punks

A community-curated directory of projects, tools, and art inspired by CryptoPunks. Celebrating builders who keep the punk spirit alive.

## Features

- Browse projects by punk ID
- Individual punk profile pages
- Pixel art aesthetic with CryptoPunks colors
- SEO optimized with dynamic Open Graph images
- Dark mode support

## Add Your Project

Building something with Punks? Add it to the directory:

1. Fork this repository
2. Edit `src/data/projects.ts`
3. Find or add the punk ID associated with your project
4. Add your project following the structure below
5. Submit a PR!

### Project Structure

```typescript
{
  id: "my-project",           // Unique identifier (kebab-case)
  name: "My Project",         // Project name
  description: "...",         // Short description (max 200 chars)
  thumbnail: "/images/...",   // Project thumbnail
  url: "https://...",         // Project website
  launchDate: "2024-01-15",   // ISO date (YYYY-MM-DD)
  tags: ["Tool", "Art"],      // Relevant tags
  twitter: "myproject",       // (optional) Twitter handle
  github: "https://...",      // (optional) GitHub repo URL
  discord: "https://...",     // (optional) Discord invite URL
}
```

### Punk Structure

```typescript
{
  id: 1234,                   // Punk ID
  name: "YourName",           // (optional) Display name
  twitter: "yourhandle",      // (optional) Twitter handle
  website: "https://...",     // (optional) Personal website
  projects: [...]             // Array of projects
}
```

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- [Next.js 16](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS v4](https://tailwindcss.com/) - Styling
- Dynamic OG images with `next/og`

## Colors

The design uses the official CryptoPunks color palette:
- Punk Blue: `#638696`
- Punk Pink: `#ff69b4`

## Deploy

Deploy on [Vercel](https://vercel.com) with one click:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/gwendall/madebypunks)

## License

MIT
