# 🚀 Quick Setup Guide

Get your AI Tool Finder running in 5 minutes!

## Prerequisites

Before you begin, make sure you have:
- **Node.js 18+** installed ([Download](https://nodejs.org/))
- **npm** or **yarn** package manager
- A code editor (VS Code recommended)

## Installation Steps

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Lucide React (icons)

### 2. Start Development Server

```bash
npm run dev
```

### 3. Open in Browser

Navigate to: `http://localhost:3000`

You should see the AI Tool Finder homepage! 🎉

## What You'll See

### Homepage Features
- ✨ Hero section with search
- 🔍 Smart recommendation engine
- 🎯 Advanced filters
- 📊 Tool cards with ratings
- 🎨 Interactive category grid
- 🔥 Trending tools section

### Try These Actions

1. **Search for tools:**
   - Type "create YouTube videos"
   - See relevant recommendations appear

2. **Use filters:**
   - Select a category (e.g., "Writing")
   - Choose pricing (e.g., "Free")
   - Set minimum rating

3. **Browse categories:**
   - Scroll to the categories section
   - Click any category card
   - View filtered results

4. **Explore trending:**
   - Scroll to trending section
   - See popular tools

## Project Structure Overview

```
ai-tool-finder/
├── app/
│   ├── layout.tsx      ← Root layout
│   ├── page.tsx        ← Home page (main logic)
│   └── globals.css     ← Global styles
├── components/         ← React components
├── data/
│   └── tools.ts        ← AI tools data (edit here!)
├── lib/
│   └── utils.ts        ← Helper functions
└── types/
    └── index.ts        ← TypeScript types
```

## Making Your First Change

### Add a New AI Tool

1. Open `data/tools.ts`

2. Add a new tool object:

```typescript
{
  id: 'tool-027',
  name: 'My Awesome Tool',
  description: 'Does something amazing',
  logo: '🎯',
  category: 'Productivity',
  pricing: 'Free',
  rating: 4.5,
  reviewCount: 100,
  url: 'https://example.com',
  tags: ['productivity', 'automation'],
  verified: true,
}
```

3. Save and refresh browser - your tool appears!

### Customize Colors

1. Open `tailwind.config.ts`

2. Modify the colors:

```typescript
colors: {
  primary: {
    500: '#your-color',
  }
}
```

3. Colors update automatically!

## Common Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## File Editing Tips

### Main Files to Edit

1. **Add Tools:** `data/tools.ts`
2. **Modify Layout:** `app/page.tsx`
3. **Change Styles:** `app/globals.css`
4. **Update Logic:** `lib/utils.ts`
5. **Edit Components:** `components/*.tsx`

### Common Customizations

**Change hero title:**
```tsx
// components/Hero.tsx
<h1>Your New Title</h1>
```

**Modify search suggestions:**
```typescript
// lib/utils.ts
export const searchSuggestions = [
  'Your custom suggestion',
  // ...
];
```

**Update footer:**
```tsx
// components/Footer.tsx
// Edit links, social media, etc.
```

## Troubleshooting

### Port 3000 already in use?

```bash
# Kill the process
npx kill-port 3000

# Or use a different port
npm run dev -- -p 3001
```

### Module not found?

```bash
# Delete and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes not showing?

```bash
# Hard refresh browser
Ctrl + Shift + R (Windows/Linux)
Cmd + Shift + R (Mac)
```

### TypeScript errors?

```bash
# Restart TypeScript server in VS Code
Ctrl/Cmd + Shift + P → "TypeScript: Restart TS Server"
```

## Next Steps

### 1. Explore the Code
- Read through component files
- Understand data flow
- Check out the recommendation logic

### 2. Make Customizations
- Add your own tools
- Change color scheme
- Modify layouts

### 3. Add Features
- Implement bookmarks
- Add user authentication
- Create tool detail pages

### 4. Deploy
- Push to GitHub
- Deploy to Vercel
- Share with the world!

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Lucide Icons](https://lucide.dev/)

## Need Help?

- Check `README.md` for detailed documentation
- Read `DOCUMENTATION.md` for architecture details
- Open an issue on GitHub
- Review the code comments

## Development Tips

### Hot Reload
- Changes to components auto-reload
- No need to restart server
- Errors show in browser overlay

### VS Code Extensions (Recommended)
- ESLint
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)
- Auto Rename Tag
- Prettier

### Keyboard Shortcuts
- `Ctrl/Cmd + S` - Save
- `Ctrl/Cmd + P` - Quick file open
- `Ctrl/Cmd + Shift + F` - Search in files

## Production Build

When ready to deploy:

```bash
# 1. Build
npm run build

# 2. Test production locally
npm start

# 3. Deploy to Vercel
# Connect GitHub repo at vercel.com
```

---

**Happy coding! 🎉**

If you get stuck, remember:
1. Check the console for errors
2. Read error messages carefully
3. Google is your friend
4. Documentation is your guide
