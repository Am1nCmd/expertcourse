import { HeroProps, ValueItem, Package, Course, Testimonial, CTASectionProps } from '@/types';

// Hero Section Data
export const heroData: HeroProps = {
  headline: "Bimbel TERBAIK Khusus Mahasiswa Telkom University",
  subheadline: "Tingkatkan prestasi akademikmu bersama Expert Course - bimbingan belajar terpercaya di Telkom University Bandung. Metode pembelajaran terbukti efektif dengan tutor berpengalaman. #expertcourse #bimbelnyamahasiswa",
  primaryCTA: {
    text: "Daftar Sekarang",
    href: "#paket",
    variant: "primary"
  },
  secondaryCTA: {
    text: "Lihat Testimoni",
    href: "#testimoni",
    variant: "secondary"
  },
  heroImage: "/images/hero-illustration.svg"
};

// Value Proposition Data
export const values: ValueItem[] = [
  {
    id: "1",
    icon: "GraduationCap",
    title: "Tutor Berpengalaman",
    description: "Expert Squad kami terdiri dari tutor-tutor terbaik yang memahami kurikulum Telkom University dan siap membantumu"
  },
  {
    id: "2",
    icon: "BookOpen",
    title: "Video Pembelajaran Lengkap",
    description: "Video tutorial berkualitas tinggi yang dapat ditonton dan diunduh kapan saja, dilengkapi dengan latihan soal dan pembahasan PDF"
  },
  {
    id: "3",
    icon: "Users",
    title: "Komunitas Expert Squad",
    description: "Bergabung dengan komunitas Expert Squad - mahasiswa Telkom University yang saling support dan berbagi ilmu"
  },
  {
    id: "4",
    icon: "Clock",
    title: "Paket Belajar Fleksibel",
    description: "Pilih paket belajar sesuai kebutuhanmu - dari 1 mata kuliah hingga semua mata kuliah dengan durasi yang bervariasi"
  }
];

// Packages Data
export const packages: Package[] = [
  {
    id: "paket-a",
    name: "Paket A (Bronze)",
    price: 160000,
    duration: "per batch",
    features: [
      "Durasi 3 minggu",
      "1 mata kuliah pilihan",
      "4 kali pertemuan",
      "Video tutorial yang dapat diunduh",
      "Latihan soal + pembahasan PDF",
      "Akses grup Expert Squad"
    ],
    isPopular: false,
    ctaText: "Daftar Paket A",
    ctaLink: "/kontak?package=paket-a"
  },
  {
    id: "paket-b",
    name: "Paket B (Silver)",
    price: 750000,
    duration: "per batch",
    features: [
      "Durasi 7 minggu",
      "SEMUA mata kuliah",
      "Pertemuan reguler per minggu",
      "Video tutorial lengkap (download)",
      "Bank soal + pembahasan lengkap",
      "Akses Expert Squad VIP",
      "Sertifikat kelulusan",
      "Konsultasi dengan Expert Team"
    ],
    isPopular: true,
    ctaText: "Daftar Paket B",
    ctaLink: "/kontak?package=paket-b"
  },
  {
    id: "paket-c",
    name: "Paket C (Intensif)",
    price: 500000,
    duration: "per batch",
    features: [
      "Durasi 4 minggu",
      "1 mata kuliah pilihan",
      "7 kali pertemuan intensif",
      "Video pembelajaran premium",
      "Latihan soal advanced + pembahasan",
      "Personal guidance dari Expert Team",
      "Akses Expert Squad Premium",
      "Sertifikat kelulusan"
    ],
    isPopular: false,
    ctaText: "Daftar Paket C",
    ctaLink: "/kontak?package=paket-c"
  }
];

// Courses Data - Sesuai Kurikulum Telkom University
export const courses: Course[] = [
  // Fakultas Teknik (15 mata kuliah)
  { id: "1", name: "Kalkulus", icon: "Calculator", category: "Fakultas Teknik" },
  { id: "2", name: "Fisika", icon: "Atom", category: "Fakultas Teknik" },
  { id: "3", name: "Kimia", icon: "FlaskConical", category: "Fakultas Teknik" },
  { id: "4", name: "Matriks & Ruang Vektor", icon: "Grid3x3", category: "Fakultas Teknik" },
  { id: "5", name: "Matematika Diskrit", icon: "Binary", category: "Fakultas Teknik" },
  { id: "6", name: "Algoritma & Pemrograman", icon: "Code", category: "Fakultas Teknik" },
  { id: "7", name: "Probabilitas & Statistika", icon: "BarChart3", category: "Fakultas Teknik" },
  { id: "8", name: "Rangkaian Listrik", icon: "Zap", category: "Fakultas Teknik" },
  { id: "9", name: "Persamaan Diferensial & Aplikasi", icon: "Calculator", category: "Fakultas Teknik" },
  { id: "10", name: "Struktur Data", icon: "Database", category: "Fakultas Teknik" },
  { id: "11", name: "Basis Data", icon: "HardDrive", category: "Fakultas Teknik" },
  { id: "12", name: "Jaringan Komputer", icon: "Network", category: "Fakultas Teknik" },
  { id: "13", name: "Sistem Operasi", icon: "Monitor", category: "Fakultas Teknik" },
  { id: "14", name: "Rekayasa Perangkat Lunak", icon: "Code", category: "Fakultas Teknik" },
  { id: "15", name: "Arsitektur & Organisasi Komputer", icon: "Cpu", category: "Fakultas Teknik" },
  // Fakultas Ekonomi & Bisnis (3 mata kuliah)
  { id: "16", name: "Akuntansi Biaya", icon: "Calculator", category: "Fakultas Ekonomi & Bisnis" },
  { id: "17", name: "Manajemen Keuangan", icon: "TrendingUp", category: "Fakultas Ekonomi & Bisnis" },
  { id: "18", name: "Ekonomi Mikro & Makro", icon: "DollarSign", category: "Fakultas Ekonomi & Bisnis" }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Budi Santoso",
    university: "Telkom University",
    major: "Teknik Informatika",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    text: "Alhamdulillah IPK naik dari 2.8 jadi 3.5 setelah ikut Expert Course! Tutor-tutornya paham banget sama kurikulum Tel-U. Materinya jelas dan mudah dipahami. Recommended untuk mahasiswa Tel-U!"
  },
  {
    id: "2",
    name: "Siti Nurhaliza",
    university: "Telkom University",
    major: "Teknik Elektro",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
    text: "Expert Course sangat membantu! Dulu sempat kesulitan di mata kuliah Rangkaian Listrik, sekarang sudah paham. Video tutorialnya bisa diunduh jadi bisa belajar offline. Expert Squad-nya juga supportive banget!"
  },
  {
    id: "3",
    name: "Rizky Pratama",
    university: "Telkom University",
    major: "Manajemen Bisnis Telekomunikasi & Informatika",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
    text: "Worth it banget! Paket B-nya komplet, semua mata kuliah bisa dipelajari. Expert Team-nya profesional dan selalu siap membantu. Thanks Expert Course sudah membantu saya lulus dengan IPK yang memuaskan!"
  }
];

// CTA Section Data
export const ctaSectionData: CTASectionProps = {
  headline: "Siap Menjadi Bagian dari Expert Squad?",
  description: "Bergabunglah dengan Expert Course - bimbel terpercaya untuk mahasiswa Telkom University. Raih IPK impianmu bersama Expert Team dan Expert Squad. Pilih paket yang sesuai kebutuhanmu dan mulai belajar sekarang!",
  ctaButton: {
    text: "Hubungi Kami",
    href: "/kontak",
    variant: "primary"
  }
};
