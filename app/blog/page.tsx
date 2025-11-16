'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Tag } from 'lucide-react'
import Image from 'next/image'

// Sample blog data - nanti bisa diganti dengan data dari CMS atau database
const blogPosts = [
  {
    slug: 'tips-meningkatkan-ipk-telkom-university',
    title: '7 Tips Ampuh Meningkatkan IPK di Telkom University',
    excerpt: 'Temukan strategi terbukti untuk meningkatkan IPK kamu di Tel-U. Dari manajemen waktu hingga teknik belajar efektif.',
    author: 'Expert Team',
    date: '2025-01-10',
    category: 'Tips Belajar',
    image: '/images/blog/blog-1.jpg',
    readTime: '5 menit'
  },
  {
    slug: 'panduan-lengkap-kalkulus-telkom',
    title: 'Panduan Lengkap Menguasai Kalkulus untuk Mahasiswa Tel-U',
    excerpt: 'Kalkulus terasa sulit? Pelajari teknik dan strategi khusus untuk mata kuliah Kalkulus di Telkom University.',
    author: 'Expert Team',
    date: '2025-01-08',
    category: 'Mata Kuliah',
    image: '/images/blog/blog-2.jpg',
    readTime: '8 menit'
  },
  {
    slug: 'cara-efektif-belajar-algoritma-pemrograman',
    title: 'Cara Efektif Belajar Algoritma & Pemrograman',
    excerpt: 'Algoritma & Pemrograman jadi momok? Ikuti panduan step-by-step kami untuk menguasai mata kuliah ini.',
    author: 'Expert Team',
    date: '2025-01-05',
    category: 'Mata Kuliah',
    image: '/images/blog/blog-3.jpg',
    readTime: '6 menit'
  },
  {
    slug: 'strategi-menghadapi-ujian-tengah-semester',
    title: 'Strategi Jitu Menghadapi Ujian Tengah Semester',
    excerpt: 'UTS sudah dekat? Persiapkan diri dengan strategi belajar yang tepat dan raih nilai maksimal.',
    author: 'Expert Team',
    date: '2025-01-03',
    category: 'Tips Belajar',
    image: '/images/blog/blog-4.jpg',
    readTime: '7 menit'
  },
  {
    slug: 'mengenal-expert-squad-komunitas-mahasiswa-telkom',
    title: 'Mengenal Expert Squad: Komunitas Mahasiswa Tel-U yang Saling Support',
    excerpt: 'Bergabunglah dengan Expert Squad dan rasakan manfaat belajar bersama komunitas yang supportive.',
    author: 'Expert Team',
    date: '2025-01-01',
    category: 'Expert News',
    image: '/images/blog/blog-5.jpg',
    readTime: '4 menit'
  },
  {
    slug: 'review-paket-belajar-expert-course',
    title: 'Review Paket Belajar Expert Course: Mana yang Cocok Untukmu?',
    excerpt: 'Bingung pilih paket? Simak perbandingan lengkap Paket A, B, dan C untuk menemukan yang paling sesuai.',
    author: 'Expert Team',
    date: '2024-12-28',
    category: 'Expert News',
    image: '/images/blog/blog-6.jpg',
    readTime: '6 menit'
  }
]

const categories = ['Semua', 'Tips Belajar', 'Mata Kuliah', 'Expert News']

export default function BlogPage() {
  return (
    <main className="pt-20 min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Expert News & Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tips belajar, panduan mata kuliah, dan berita terbaru dari Expert Course
          </p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                index === 0
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-16"
        >
          <Link href={`/blog/${blogPosts[0].slug}`}>
            <div className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all group">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-200 to-purple-200">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-6xl">📚</div>
                  </div>
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm">{blogPosts[0].readTime}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <div className="flex items-center space-x-2">
                        <User size={16} />
                        <span>{blogPosts[0].author}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar size={16} />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString('id-ID', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}</span>
                      </div>
                    </div>
                    <ArrowRight className="text-blue-600 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`}>
                <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all h-full flex flex-col group">
                  {/* Image Placeholder */}
                  <div className="relative h-48 bg-gradient-to-br from-blue-200 to-purple-200">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-5xl">
                        {post.category === 'Tips Belajar' && '💡'}
                        {post.category === 'Mata Kuliah' && '📖'}
                        {post.category === 'Expert News' && '📰'}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-3 mb-3">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-medium">
                        {post.category}
                      </span>
                      <span className="text-gray-500 text-xs">{post.readTime}</span>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-gray-600 mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between text-sm text-gray-500 pt-4 border-t border-gray-100">
                      <div className="flex items-center space-x-2">
                        <Calendar size={14} />
                        <span>{new Date(post.date).toLocaleDateString('id-ID', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric'
                        })}</span>
                      </div>
                      <ArrowRight size={18} className="text-blue-600 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-3 bg-white border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all">
            Muat Lebih Banyak
          </button>
        </motion.div>
      </div>
    </main>
  )
}
