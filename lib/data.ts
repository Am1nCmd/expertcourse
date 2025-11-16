import { HeroProps, ValueItem, Package, Course, Testimonial, CTASectionProps } from '@/types';

// Hero Section Data
export const heroData: HeroProps = {
  headline: "Raih IPK Impianmu dengan Bimbingan Belajar Online #1",
  subheadline: "Tingkatkan prestasi akademikmu bersama tutor berpengalaman dari kampus terbaik. Metode pembelajaran terbukti efektif, materi lengkap, dan komunitas mahasiswa aktif. Saatnya wujudkan target IPK yang selama ini kamu impikan!",
  primaryCTA: {
    text: "Daftar Sekarang",
    href: "#packages",
    variant: "primary"
  },
  secondaryCTA: {
    text: "Lihat Testimoni",
    href: "#testimonials",
    variant: "secondary"
  },
  heroImage: "/images/hero-illustration.svg"
};

// Value Proposition Data
export const values: ValueItem[] = [
  {
    id: "1",
    icon: "GraduationCap",
    title: "Tutor Berkualitas Tinggi",
    description: "Semua tutor adalah mahasiswa dan alumni terbaik dengan IPK minimal 3.8 dari PTN terkemuka seperti UI, ITB, UGM, dan ITS"
  },
  {
    id: "2",
    icon: "Clock",
    title: "Fleksibilitas Maksimal",
    description: "Belajar kapan saja, di mana saja. Cocok untuk kamu yang kuliah sambil kerja, aktif organisasi, atau punya jadwal tidak menentu"
  },
  {
    id: "3",
    icon: "BookOpen",
    title: "Materi Selalu Ter-update",
    description: "Video HD, soal terbaru, dan pembahasan mendalam. Update sesuai kurikulum terbaru kampus seluruh Indonesia"
  },
  {
    id: "4",
    icon: "Users",
    title: "Komunitas Support 1000+",
    description: "Gabung grup eksklusif dengan 1000+ mahasiswa aktif. Diskusi, sharing tips, dan saling support 24/7"
  }
];

// Packages Data
export const packages: Package[] = [
  {
    id: "basic",
    name: "Basic",
    price: 199000,
    duration: "per bulan",
    features: [
      "5 mata kuliah pilihan utama",
      "Video pembelajaran berkualitas tinggi",
      "Bank soal + pembahasan lengkap",
      "Grup diskusi komunitas",
      "Sertifikat digital resmi",
      "Garansi 14 hari"
    ],
    isPopular: false,
    ctaText: "Daftar Sekarang",
    ctaLink: "/register?package=basic"
  },
  {
    id: "premium",
    name: "Premium",
    price: 349000,
    duration: "per bulan",
    features: [
      "SEMUA mata kuliah (50+ courses)",
      "Video pembelajaran 4K quality",
      "Unlimited akses bank soal",
      "Konsultasi 1-on-1 dengan tutor (2x/minggu)",
      "Priority support di grup VIP",
      "Materi bisa di-download",
      "Sertifikat premium + transcript",
      "E-book 'Strategi IPK 4.0'",
      "Template catatan kuliah premium"
    ],
    isPopular: true,
    ctaText: "Daftar Sekarang",
    ctaLink: "/register?package=premium"
  },
  {
    id: "ultimate",
    name: "Ultimate",
    price: 549000,
    duration: "per bulan",
    features: [
      "Semua fitur Premium",
      "Bimbingan intensif tugas & project",
      "Unlimited konsultasi pribadi",
      "Live class eksklusif (max 20 orang)",
      "Akses selamanya (lifetime access)",
      "Priority support 24/7 via WhatsApp",
      "Career mentoring + CV review",
      "Sertifikat premium + rekomendasi"
    ],
    isPopular: false,
    ctaText: "Daftar Sekarang",
    ctaLink: "/register?package=ultimate"
  }
];

// Courses Data  
export const courses: Course[] = [
  { id: "1", name: "Kalkulus I, II, III", icon: "Calculator", category: "Fakultas Teknik" },
  { id: "2", name: "Aljabar Linear & Geometri", icon: "Grid3x3", category: "Fakultas Teknik" },
  { id: "3", name: "Fisika Dasar I & II", icon: "Atom", category: "Fakultas Teknik" },
  { id: "4", name: "Kimia Organik & Anorganik", icon: "FlaskConical", category: "Fakultas MIPA" },
  { id: "5", name: "Statistika & Probabilitas", icon: "BarChart3", category: "Fakultas Ekonomi" },
  { id: "6", name: "Pemrograman (Python, Java, C++)", icon: "Code", category: "Fakultas Teknik" },
  { id: "7", name: "Struktur Data & Algoritma", icon: "Database", category: "Fakultas Teknik" },
  { id: "8", name: "Mikroekonomi & Makroekonomi", icon: "TrendingUp", category: "Fakultas Ekonomi" },
  { id: "9", name: "Akuntansi Dasar & Menengah", icon: "Calculator", category: "Fakultas Ekonomi" },
  { id: "10", name: "Bahasa Inggris Academic", icon: "Languages", category: "Mata Kuliah Umum" },
  { id: "11", name: "Mekanika Teknik", icon: "Cog", category: "Fakultas Teknik" },
  { id: "12", name: "Termodinamika", icon: "Flame", category: "Fakultas Teknik" }
];

// Testimonials Data
export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Putri Andalas",
    university: "Universitas Indonesia",
    major: "Teknik Informatika",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5,
    text: "IPK gue naik dari 2.9 jadi 3.6 dalam 2 semester! Yang paling gue suka itu tutor-tutornya sabar banget dan cara ngajarnya gak bikin ngantuk. Materinya juga praktis, langsung to the point. Recommended banget!"
  },
  {
    id: "2",
    name: "Ahmad Fauzan",
    university: "Institut Teknologi Bandung",
    major: "Manajemen",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5,
    text: "Expert Course beneran game changer! Dulu gue sempet mau DO karena IPK stuck di 2.3. Sekarang udah 3.4 dan dapet beasiswa prestasi dari kampus. Thanks Expert Course yang udah ngubah hidup gue!"
  },
  {
    id: "3",
    name: "Dinda Maharani",
    university: "Universitas Gadjah Mada",
    major: "Kimia",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 5,
    text: "Konsultasi 1-on-1 nya super helpful! Tutor ngebantu gue ngerjain thesis dan ngasih feedback yang constructive banget. Sekarang udah lulus cum laude dan keterima di S2 luar negeri. Worth every penny!"
  }
];

// CTA Section Data
export const ctaSectionData: CTASectionProps = {
  headline: "Siap Menjadi Mahasiswa Berprestasi?",
  description: "Bergabunglah dengan ribuan mahasiswa yang telah meningkatkan IPK mereka. Expert Course memberikan hasil nyata dengan metode pembelajaran yang terbukti efektif. Wujudkan target akademik Anda bersama kami!",
  ctaButton: {
    text: "Daftar Sekarang",
    href: "/register",
    variant: "primary"
  }
};
