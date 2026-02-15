# 🚀 Deployment Guide

This guide covers deploying the AI Tool Finder application to various platforms.

## 📋 Pre-Deployment Checklist

- [ ] All dependencies installed
- [ ] Build runs successfully locally (`npm run build`)
- [ ] Environment variables configured
- [ ] No TypeScript errors
- [ ] All components tested
- [ ] Performance optimized

## ☁️ Deployment Platforms

### 1. Vercel (Recommended)

Vercel is the easiest option for Next.js applications.

#### Steps:
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Production deployment**
   ```bash
   vercel --prod
   ```

#### Via GitHub:
1. Push code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Import repository
4. Deploy automatically

### 2. Netlify

#### Steps:
1. Build the project
   ```bash
   npm run build
   ```

2. Install Netlify CLI
   ```bash
   npm i -g netlify-cli
   ```

3. Deploy
   ```bash
   netlify deploy --prod
   ```

#### Build Settings:
- **Build command**: `npm run build`
- **Publish directory**: `.next`

### 3. AWS Amplify

#### Steps:
1. Install AWS Amplify CLI
   ```bash
   npm i -g @aws-amplify/cli
   ```

2. Initialize
   ```bash
   amplify init
   ```

3. Deploy
   ```bash
   amplify publish
   ```

### 4. Docker

Create `Dockerfile`:

```dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000

CMD ["node", "server.js"]
```

Build and run:
```bash
docker build -t ai-tool-finder .
docker run -p 3000:3000 ai-tool-finder
```

### 5. Traditional Hosting (VPS/Dedicated Server)

#### Using PM2:

1. **Install PM2**
   ```bash
   npm i -g pm2
   ```

2. **Build the project**
   ```bash
   npm run build
   ```

3. **Start with PM2**
   ```bash
   pm2 start npm --name "ai-tool-finder" -- start
   ```

4. **Save PM2 config**
   ```bash
   pm2 save
   pm2 startup
   ```

#### Using Nginx as Reverse Proxy:

Create `/etc/nginx/sites-available/ai-tool-finder`:

```nginx
server {
    listen 80;
    server_name yourdomain.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/ai-tool-finder /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

## 🔐 Environment Variables

Set these in your deployment platform:

```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=AI Tool Finder
```

## 🔧 Build Optimization

### 1. Enable Compression
Add to `next.config.js`:

```javascript
module.exports = {
  compress: true,
}
```

### 2. Image Optimization
Use Next.js Image component for all images.

### 3. Code Splitting
Already handled by Next.js automatically.

### 4. Remove Source Maps (Production)
Add to `next.config.js`:

```javascript
module.exports = {
  productionBrowserSourceMaps: false,
}
```

## 📊 Performance Monitoring

### Recommended Tools:
- **Vercel Analytics**: Built-in for Vercel deployments
- **Google Analytics**: Add tracking code
- **Sentry**: Error tracking
- **Lighthouse**: Performance audits

## 🔄 Continuous Deployment

### GitHub Actions Example:

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 🛡️ Security Checklist

- [ ] HTTPS enabled
- [ ] Environment variables secured
- [ ] No sensitive data in client-side code
- [ ] CORS configured properly
- [ ] Rate limiting implemented (if using API)
- [ ] Input validation on all forms

## 📈 Post-Deployment

### 1. Test Production Site
- Check all pages load
- Test search functionality
- Verify filters work
- Test mobile responsiveness
- Check performance scores

### 2. Setup Monitoring
- Configure error tracking
- Setup uptime monitoring
- Enable analytics

### 3. SEO Optimization
- Submit sitemap
- Verify meta tags
- Test social media previews

## 🔧 Troubleshooting

### Build Fails
```bash
# Clear cache
rm -rf .next
npm run build
```

### Port Already in Use
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
```

### Memory Issues
```bash
# Increase Node memory
NODE_OPTIONS="--max-old-space-size=4096" npm run build
```

## 📞 Support

For deployment issues:
1. Check build logs
2. Verify environment variables
3. Test locally first
4. Review platform documentation

---

**Happy Deploying! 🎉**
