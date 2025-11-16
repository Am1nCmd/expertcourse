import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Expert Course - Raih IPK 3.8+ dengan Bimbel Online Terpercaya",
    template: "%s | Expert Course"
  },
  description: "🎓 Bimbel online khusus mahasiswa dengan tutor IPK 3.8+ dari UI, ITB, UGM. 1000+ mahasiswa terbukti naik IPK dalam 3 bulan. Gratis trial 7 hari! ⭐4.9/5",
  keywords: [
    "bimbel online mahasiswa",
    "cara menaikkan IPK",
    "tutor mahasiswa",
    "les privat kuliah online",
    "bimbingan belajar universitas",
    "kalkulus online",
    "statistika tutor",
    "IPK 4.0 tips",
    "expert course",
    "mahasiswa sukses"
  ],
  authors: [{ name: "Expert Course Indonesia" }],
  creator: "Expert Course Indonesia",
  publisher: "Expert Course Indonesia",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://expertcourse.vercel.app",
  },
  openGraph: {
    title: "Expert Course - Raih IPK 3.8+ dengan Bimbel Online Terpercaya",
    description: "🎓 Bimbel online khusus mahasiswa dengan tutor IPK 3.8+ dari UI, ITB, UGM. 1000+ mahasiswa terbukti naik IPK dalam 3 bulan. Gratis trial 7 hari!",
    type: "website",
    locale: "id_ID",
    url: "https://expertcourse.vercel.app",
    siteName: "Expert Course Indonesia",
    images: [
      {
        url: "https://expertcourse.vercel.app/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Expert Course - Bimbel Online Mahasiswa Terpercaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Expert Course - Raih IPK 3.8+ dengan Bimbel Online",
    description: "🎓 1000+ mahasiswa terbukti naik IPK dalam 3 bulan. Gratis trial 7 hari! ⭐4.9/5",
    images: ["https://expertcourse.vercel.app/images/og-image.png"],
    creator: "@expertcourse_id",
    site: "@expertcourse_id",
  },
  verification: {
    google: "google-verification-code-here",
  },
  category: "Education",
  classification: "Educational Services",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "EducationalOrganization",
    "name": "Expert Course Indonesia",
    "alternateName": "Expert Course",
    "description": "Platform bimbingan belajar online khusus mahasiswa Indonesia dengan tutor berpengalaman dari universitas terkemuka",
    "url": "https://expertcourse.vercel.app",
    "logo": {
      "@type": "ImageObject",
      "url": "https://expertcourse.vercel.app/images/ExpertCourse.webp",
      "width": "1280",
      "height": "720"
    },
    "image": "https://expertcourse.vercel.app/images/og-image.png",
    "telephone": "+62 812-3456-7890",
    "email": "hello@expertcourse.id",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Gedung Cyber, Jl. Kuningan Raya No. 26",
      "addressLocality": "Jakarta Selatan",
      "addressRegion": "DKI Jakarta",
      "postalCode": "12950",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.2298",
      "longitude": "106.8253"
    },
    "foundingDate": "2020",
    "numberOfEmployees": "50-100",
    "priceRange": "Rp 199.000 - Rp 549.000",
    "paymentAccepted": "Transfer Bank, E-Wallet, Kartu Kredit",
    "currenciesAccepted": "IDR",
    "areaServed": "Indonesia",
    "serviceType": "Online Education",
    "educationalCredentialAwarded": "Sertifikat Digital",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Paket Belajar Expert Course",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Paket Basic",
            "description": "5 mata kuliah pilihan dengan video pembelajaran berkualitas tinggi"
          },
          "price": "199000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course", 
            "name": "Paket Premium",
            "description": "Semua mata kuliah dengan konsultasi 1-on-1"
          },
          "price": "349000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Paket Ultimate", 
            "description": "Akses selamanya dengan career mentoring"
          },
          "price": "549000",
          "priceCurrency": "IDR"
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "ratingCount": "500"
    },
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sarah Putri Andalas"
        },
        "reviewBody": "IPK gue naik dari 2.9 jadi 3.6 dalam 2 semester! Materinya praktis dan tutor-tutornya sabar banget."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/expertcourse.id",
      "https://www.instagram.com/expertcourse.id", 
      "https://www.youtube.com/c/expertcourseid",
      "https://www.linkedin.com/company/expertcourse"
    ]
  };

  return (
    <html lang="id">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#D60000" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="msapplication-TileColor" content="#D60000" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Expert Course" />
        
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
