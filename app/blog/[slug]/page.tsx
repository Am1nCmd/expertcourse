'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, Clock, ArrowLeft, Share2, Facebook, Twitter, Linkedin } from 'lucide-react'
import { notFound } from 'next/navigation'

// Sample blog data - sama dengan di blog/page.tsx
const blogPosts = [
  {
    slug: 'tips-meningkatkan-ipk-telkom-university',
    title: '7 Tips Ampuh Meningkatkan IPK di Telkom University',
    excerpt: 'Temukan strategi terbukti untuk meningkatkan IPK kamu di Tel-U. Dari manajemen waktu hingga teknik belajar efektif.',
    author: 'Expert Team',
    date: '2025-01-10',
    category: 'Tips Belajar',
    readTime: '5 menit',
    content: `
<p>Meningkatkan IPK di Telkom University membutuhkan strategi yang tepat dan konsisten. Berikut adalah 7 tips yang terbukti efektif membantu mahasiswa Tel-U meraih IPK impian mereka.</p>

<h2>1. Manajemen Waktu yang Efektif</h2>
<p>Buat jadwal belajar yang terstruktur. Alokasikan waktu khusus untuk setiap mata kuliah, terutama yang dianggap sulit seperti Kalkulus, Algoritma & Pemrograman, atau Rangkaian Listrik.</p>

<h2>2. Bergabung dengan Komunitas Belajar</h2>
<p>Expert Squad adalah komunitas mahasiswa Tel-U yang saling support dan berbagi ilmu. Bergabung dengan komunitas seperti ini akan membantu kamu mendapat pemahaman lebih dalam dan motivasi belajar.</p>

<h2>3. Manfaatkan Video Tutorial</h2>
<p>Video pembelajaran dapat membantu kamu memahami konsep yang sulit. Expert Course menyediakan video tutorial berkualitas tinggi yang dapat diunduh dan ditonton berulang kali.</p>

<h2>4. Latihan Soal Rutin</h2>
<p>Kerjakan latihan soal sebanyak mungkin. Dengan latihan yang konsisten, kamu akan lebih familiar dengan tipe soal yang keluar saat ujian.</p>

<h2>5. Jangan Malu Bertanya</h2>
<p>Jika ada materi yang tidak dipahami, jangan ragu untuk bertanya kepada tutor atau teman. Expert Course menyediakan konsultasi dengan Expert Team yang siap membantu.</p>

<h2>6. Review Materi Secara Berkala</h2>
<p>Jangan hanya belajar menjelang ujian. Review materi secara berkala akan membantu informasi tersimpan di memori jangka panjang.</p>

<h2>7. Jaga Kesehatan Mental dan Fisik</h2>
<p>IPK tinggi tidak hanya soal belajar keras, tapi juga tentang menjaga keseimbangan. Pastikan kamu cukup istirahat, makan bergizi, dan luangkan waktu untuk refreshing.</p>

<h2>Kesimpulan</h2>
<p>Meningkatkan IPK adalah proses yang membutuhkan komitmen dan strategi yang tepat. Dengan menerapkan 7 tips di atas dan bergabung dengan Expert Course, kamu akan memiliki support system yang kuat untuk mencapai target IPK impianmu.</p>
    `
  },
  {
    slug: 'panduan-lengkap-kalkulus-telkom',
    title: 'Panduan Lengkap Menguasai Kalkulus untuk Mahasiswa Tel-U',
    excerpt: 'Kalkulus terasa sulit? Pelajari teknik dan strategi khusus untuk mata kuliah Kalkulus di Telkom University.',
    author: 'Expert Team',
    date: '2025-01-08',
    category: 'Mata Kuliah',
    readTime: '8 menit',
    content: `
<p>Kalkulus merupakan salah satu mata kuliah fundamental di Telkom University yang sering menjadi momok bagi mahasiswa baru. Namun dengan pendekatan yang tepat, kamu bisa menguasainya!</p>

<h2>Mengapa Kalkulus Penting?</h2>
<p>Kalkulus adalah fondasi untuk banyak mata kuliah lanjutan seperti Persamaan Diferensial, Rangkaian Listrik, dan berbagai mata kuliah teknik lainnya. Menguasai Kalkulus akan sangat membantu perjalanan akademikmu.</p>

<h2>Topik-topik Utama dalam Kalkulus</h2>
<ul>
<li>Limit dan Kontinuitas</li>
<li>Turunan (Diferensial)</li>
<li>Integral</li>
<li>Aplikasi Integral</li>
<li>Deret dan Barisan</li>
</ul>

<h2>Tips Belajar Kalkulus Efektif</h2>
<p>1. <strong>Kuasai Konsep Dasar</strong>: Pastikan kamu memahami konsep limit sebelum melanjut ke turunan dan integral.</p>
<p>2. <strong>Latihan Soal Bervariasi</strong>: Kerjakan soal-soal dari berbagai sumber, tidak hanya dari textbook.</p>
<p>3. <strong>Visualisasi</strong>: Gunakan grafik untuk membantu memahami konsep abstrak dalam Kalkulus.</p>

<h2>Bergabung dengan Expert Course</h2>
<p>Expert Course menyediakan materi Kalkulus yang disesuaikan dengan kurikulum Telkom University, lengkap dengan video tutorial dan bank soal dengan pembahasan detail.</p>
    `
  }
]

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = blogPosts.find(p => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter(p => p.slug !== params.slug && p.category === post.category).slice(0, 3)

  return (
    <main className="pt-20 min-h-screen bg-white">
      {/* Article Header */}
      <div className="bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-6 font-medium"
            >
              <ArrowLeft size={20} />
              <span>Kembali ke Blog</span>
            </Link>

            <div className="flex items-center space-x-3 mb-4">
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm font-medium">
                {post.category}
              </span>
              <span className="text-gray-500 text-sm flex items-center space-x-1">
                <Clock size={14} />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
              <div className="flex items-center space-x-2">
                <User size={18} />
                <span>{post.author}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar size={18} />
                <span>{new Date(post.date).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}</span>
              </div>
            </div>

            {/* Share Buttons */}
            <div className="flex items-center space-x-3">
              <span className="text-gray-600 text-sm font-medium">Bagikan:</span>
              <div className="flex space-x-2">
                <button className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                  <Facebook size={18} />
                </button>
                <button className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600 transition-colors">
                  <Twitter size={18} />
                </button>
                <button className="p-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                  <Linkedin size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Article Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 max-w-4xl py-12"
      >
        {/* Featured Image Placeholder */}
        <div className="mb-12 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-200 to-purple-200 aspect-video flex items-center justify-center">
          <div className="text-8xl">
            {post.category === 'Tips Belajar' && '💡'}
            {post.category === 'Mata Kuliah' && '📖'}
            {post.category === 'Expert News' && '📰'}
          </div>
        </div>

        {/* Article Body */}
        <div
          className="prose prose-lg max-w-none
            prose-headings:font-bold prose-headings:text-gray-900
            prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4
            prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
            prose-ul:my-6 prose-ul:list-disc prose-ul:pl-6
            prose-li:text-gray-700 prose-li:mb-2
            prose-strong:text-gray-900 prose-strong:font-semibold
            prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* CTA Box */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">Ingin Belajar Lebih Efektif?</h3>
          <p className="mb-6 text-blue-50">
            Bergabunglah dengan Expert Course dan dapatkan akses ke video tutorial, latihan soal, dan komunitas Expert Squad yang supportive!
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#paket"
              className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Lihat Paket Belajar
            </Link>
            <Link
              href="/kontak"
              className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
            >
              Hubungi Kami
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Artikel Terkait</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost, index) => (
                <motion.div
                  key={relatedPost.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link href={`/blog/${relatedPost.slug}`}>
                    <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all h-full">
                      <div className="relative h-40 bg-gradient-to-br from-blue-200 to-purple-200 flex items-center justify-center">
                        <div className="text-5xl">
                          {relatedPost.category === 'Tips Belajar' && '💡'}
                          {relatedPost.category === 'Mata Kuliah' && '📖'}
                          {relatedPost.category === 'Expert News' && '📰'}
                        </div>
                      </div>
                      <div className="p-6">
                        <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                          {relatedPost.category}
                        </span>
                        <h3 className="text-lg font-bold mt-3 mb-2 text-gray-900 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
