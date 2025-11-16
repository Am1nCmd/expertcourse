'use client'

import { motion } from 'framer-motion'
import { Target, Eye, Award, Users } from 'lucide-react'

export default function About() {
  const aboutItems = [
    {
      icon: Eye,
      title: "Visi",
      description: "Menjadi platform bimbingan belajar terpercaya dan terbaik untuk mahasiswa Telkom University dalam meningkatkan prestasi akademik."
    },
    {
      icon: Target,
      title: "Misi",
      description: "Memberikan pembelajaran berkualitas tinggi dengan metode yang efektif, tutor berpengalaman, dan materi yang selalu ter-update sesuai kurikulum Telkom University."
    },
    {
      icon: Award,
      title: "Keunggulan",
      description: "Expert Course menyediakan video tutorial yang dapat diunduh, latihan soal lengkap dengan pembahasan PDF, dan komunitas Expert Squad yang supportive."
    },
    {
      icon: Users,
      title: "Expert Squad",
      description: "Bergabung dengan komunitas mahasiswa Telkom University yang saling support, berbagi ilmu, dan berkembang bersama menuju kesuksesan akademik."
    }
  ]

  const whyExpertCourse = [
    "Video tutorial berkualitas tinggi yang dapat ditonton dan diunduh",
    "Latihan soal dan pembahasan lengkap dalam format PDF",
    "Tutor berpengalaman yang memahami kurikulum Tel-U",
    "Paket belajar fleksibel sesuai kebutuhan",
    "Komunitas Expert Squad yang aktif dan supportive",
    "Metode pembelajaran yang terbukti efektif",
    "Harga terjangkau untuk mahasiswa",
    "Sertifikat kelulusan untuk paket tertentu"
  ]

  return (
    <section id="tentang" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Tentang Expert Course
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bimbel TERBAIK khusus mahasiswa yang berlokasi utama di Telkom University Bandung
          </p>
        </motion.div>

        {/* Visi, Misi, Keunggulan Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {aboutItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start space-x-4">
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-xl text-white flex-shrink-0">
                  <item.icon size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold mb-3 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mengapa Expert Course */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 md:p-12 rounded-2xl shadow-lg"
        >
          <h3 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mengapa Memilih Expert Course?
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {whyExpertCourse.map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex items-start space-x-3"
              >
                <div className="bg-gradient-to-br from-blue-500 to-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-sm font-bold">✓</span>
                </div>
                <p className="text-gray-700">{reason}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expert Course Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: "500+", label: "Expert Squad" },
            { number: "18", label: "Mata Kuliah" },
            { number: "2", label: "Fakultas" },
            { number: "4.9/5", label: "Rating" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white p-6 rounded-xl shadow-md">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
