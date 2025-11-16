# Expert Course Landing Page

Platform bimbingan belajar online khusus mahasiswa - Landing Page

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS 4.x
- **UI Components**: HeroUI (NextUI successor)
- **Icons**: Lucide React
- **Language**: TypeScript
- **Deployment**: Vercel

## 📦 Installation

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

## 🌐 Development

Server akan berjalan di [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
expert-course-landing/
├── app/
│   ├── layout.tsx          # Root layout dengan metadata SEO
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles & Tailwind
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── ValueProposition.tsx # Value highlights
│   ├── Packages.tsx        # Paket belajar section
│   ├── PackageCard.tsx     # Individual package card
│   ├── Courses.tsx         # Mata kuliah section
│   ├── CourseItem.tsx      # Individual course item
│   ├── Testimonials.tsx    # Testimonial section
│   ├── TestimonialCard.tsx # Individual testimonial
│   ├── CTA.tsx             # Call-to-action section
│   └── Footer.tsx          # Footer component
├── lib/
│   └── data.ts             # Static data
├── types/
│   └── index.ts            # TypeScript interfaces
└── public/
    ├── images/             # Images dan assets
    └── icons/              # SVG icons
```

## ✨ Features

- ✅ Responsive design (mobile, tablet, desktop)
- ✅ SEO optimized dengan metadata lengkap
- ✅ Performance optimized dengan Next.js Image
- ✅ Structured data (JSON-LD)
- ✅ Smooth scroll behavior
- ✅ Modern UI dengan HeroUI components
- ✅ TypeScript untuk type safety

## 🎨 Sections

1. **Hero Section** - Value proposition dan CTA utama
2. **Value Proposition** - Keunggulan Expert Course
3. **Packages** - Paket belajar dengan pricing
4. **Courses** - Mata kuliah yang tersedia
5. **Testimonials** - Review dari mahasiswa
6. **CTA Section** - Final call-to-action
7. **Footer** - Informasi kontak dan links

## 🚀 Deployment

### Deploy ke Vercel

1. Push code ke GitHub repository
2. Import project di [Vercel](https://vercel.com)
3. Vercel akan otomatis detect Next.js dan deploy

Atau gunakan Vercel CLI:

```bash
npm install -g vercel
vercel
```

## 📝 Customization

### Update Content

Edit file `lib/data.ts` untuk mengubah:
- Hero text
- Value propositions
- Packages dan pricing
- Courses list
- Testimonials

### Update Styling

Edit `app/globals.css` untuk mengubah:
- Color palette
- Typography
- Custom CSS variables

## 📄 License

© 2024 Expert Course. All rights reserved.
