import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Expert Course - Bimbel TERBAIK Khusus Mahasiswa Telkom University",
    template: "%s | Expert Course"
  },
  description: "🎓 Bimbel terpercaya khusus mahasiswa Telkom University Bandung. Expert Squad dengan tutor berpengalaman. Video tutorial, latihan soal, dan konsultasi. Paket mulai 160K! ⭐4.9/5 #expertcourse #bimbelnyamahasiswa",
  keywords: [
    "bimbel telkom university",
    "les privat telkom university",
    "expert course",
    "bimbel mahasiswa tel-u",
    "tutor telkom university",
    "kalkulus telkom",
    "algoritma pemrograman",
    "rangkaian listrik",
    "expert squad",
    "bimbel bandung"
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
    title: "Expert Course - Bimbel TERBAIK Khusus Mahasiswa Telkom University",
    description: "🎓 Bimbel terpercaya khusus mahasiswa Telkom University Bandung. Expert Squad dengan tutor berpengalaman. Paket mulai 160K! ⭐4.9/5",
    type: "website",
    locale: "id_ID",
    url: "https://expertcourse.vercel.app",
    siteName: "Expert Course - Telkom University",
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
    title: "Expert Course - Bimbel TERBAIK Mahasiswa Telkom University",
    description: "🎓 Expert Squad dengan tutor berpengalaman. Paket mulai 160K! ⭐4.9/5 #expertcourse #bimbelnyamahasiswa",
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
    "name": "Expert Course",
    "alternateName": "Expert Course Telkom University",
    "description": "Bimbel TERBAIK khusus mahasiswa Telkom University Bandung. Expert Squad dengan tutor berpengalaman, video tutorial, dan latihan soal lengkap.",
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
      "streetAddress": "Telkom University, Jl. Telekomunikasi No. 1",
      "addressLocality": "Bandung",
      "addressRegion": "Jawa Barat",
      "postalCode": "40257",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-6.9734",
      "longitude": "107.6253"
    },
    "foundingDate": "2018",
    "numberOfEmployees": "10-50",
    "priceRange": "Rp 160.000 - Rp 750.000",
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
            "name": "Paket A (Bronze)",
            "description": "3 minggu, 1 mata kuliah, 4 pertemuan"
          },
          "price": "160000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Paket B (Silver)",
            "description": "7 minggu, semua mata kuliah, sertifikat kelulusan"
          },
          "price": "750000",
          "priceCurrency": "IDR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Course",
            "name": "Paket C (Gold)",
            "description": "4 minggu, 1 mata kuliah, 7 pertemuan intensif"
          },
          "price": "500000",
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
          "name": "Budi Santoso"
        },
        "reviewBody": "Alhamdulillah IPK naik dari 2.8 jadi 3.5 setelah ikut Expert Course! Tutor-tutornya paham banget sama kurikulum Tel-U."
      }
    ],
    "sameAs": [
      "https://www.facebook.com/expertcourse.id",
      "https://www.instagram.com/expertcourse.id",
      "https://line.me/R/ti/p/@expertcourse",
      "https://www.youtube.com/c/expertcourseid"
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
          <Navbar />
          {children}
        </Providers>
      </body>
    </html>
  );
}
