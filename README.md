
# Iseegreenray Blog Module

A high-fidelity blog module built with React, TypeScript, and Tailwind CSS. This project emulates the clean, minimalist aesthetic of the "iseegreenray" Wix site with pixel-perfect accuracy.

## Features

- **Pixel-Perfect Layout**: 980px center container, custom typography (Fahkwang & Helvetica), and minimalist spacing.
- **Local Data Handling**: Content is served from an MDX-style JavaScript source (`data/posts.ts`).
- **Interaction System**: 
  - Simulated local database using `localStorage` for View counting, Likes, and Comments.
  - No external backend required for immediate demonstration.
- **Responsive Design**: Stacks gracefully for mobile users (<768px).
- **SEO Ready**: Semantic HTML, meta-optimized structure, and descriptive alt tags.

## Project Structure

- `data/posts.ts`: Source of truth for blog content. To add a new post, simply append a new object to the `POSTS` array.
- `services/dbService.ts`: Handles the logic for persistent stats and comments.
- `components/`: Reusable UI elements strictly following the Wix style guide.
- `pages/`: Route-level components for the blog listing and detail view.

## Running Locally

1. Install dependencies: `npm install`
2. Start the development server: `npm start`
3. Access at `http://localhost:3000`

## Adding New Content

Modify `data/posts.ts` to add your own articles. Each article supports:
- `slug`: Unique URL identifier.
- `readingTime`: Estimated duration.
- `content`: HTML/MDX string for the body.
- `coverImage`: URL to the primary article visual.
