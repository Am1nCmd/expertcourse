# Deployment Guide - Expert Course Landing Page

## 🚀 Deploy ke Vercel (Recommended)

### Method 1: Via Vercel Dashboard

1. **Push code ke GitHub**
   ```bash
   git add .
   git commit -m "Initial commit: Expert Course landing page"
   git push origin main
   ```

2. **Import di Vercel**
   - Buka [vercel.com](https://vercel.com)
   - Klik "Add New Project"
   - Import repository GitHub Anda
   - Vercel akan otomatis detect Next.js configuration

3. **Configure (Optional)**
   - Set environment variables jika diperlukan
   - Configure custom domain

4. **Deploy**
   - Klik "Deploy"
   - Tunggu build selesai (~2-3 menit)
   - Landing page siap diakses!

### Method 2: Via Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login ke Vercel
vercel login

# Deploy
vercel

# Deploy ke production
vercel --prod
```

## 📋 Pre-Deployment Checklist

- [ ] Update content di `lib/data.ts`
- [ ] Replace placeholder images di `public/images/`
- [ ] Update metadata di `app/layout.tsx`
- [ ] Set environment variables (jika ada)
- [ ] Test build locally: `npm run build`
- [ ] Test production build: `npm start`

## 🔧 Environment Variables

Jika menggunakan environment variables, set di Vercel Dashboard:

1. Go to Project Settings
2. Navigate to Environment Variables
3. Add variables:
   - `NEXT_PUBLIC_SITE_URL`: Your production URL
   - `NEXT_PUBLIC_GA_ID`: Google Analytics ID (optional)

## 🌐 Custom Domain

1. Go to Project Settings > Domains
2. Add your custom domain
3. Update DNS records sesuai instruksi Vercel
4. Wait for DNS propagation (~24-48 hours)

## 📊 Performance Monitoring

Setelah deploy, monitor performance di:
- Vercel Analytics Dashboard
- Google PageSpeed Insights
- Lighthouse CI

## 🔄 Continuous Deployment

Vercel otomatis deploy setiap push ke:
- **main branch** → Production
- **other branches** → Preview deployments

## 🐛 Troubleshooting

### Build Failed

```bash
# Check build locally
npm run build

# Check for TypeScript errors
npm run lint
```

### Images Not Loading

- Pastikan images ada di folder `public/`
- Check image paths di components
- Verify Next.js Image configuration

### Styling Issues

- Clear `.next` folder: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind configuration

## 📞 Support

Jika ada masalah deployment:
1. Check Vercel deployment logs
2. Review build errors
3. Contact Vercel support

---

Happy Deploying! 🎉
