'use client'

import { motion } from 'framer-motion'
import { UserPlus, MessageSquare, CreditCard, BookOpen } from 'lucide-react'
import Link from 'next/link'

export default function HowToRegister() {
  const steps = [
    {
      number: 1,
      icon: MessageSquare,
      title: "Hubungi Kami",
      description: "Hubungi Expert Course melalui WhatsApp, Line, atau form kontak. Tim kami siap membantu Anda memilih paket yang sesuai."
    },
    {
      number: 2,
      icon: UserPlus,
      title: "Pilih Paket",
      description: "Pilih paket belajar yang sesuai kebutuhan - Paket A (1 matkul), Paket B (semua matkul), atau Paket C (intensif)."
    },
    {
      number: 3,
      icon: CreditCard,
      title: "Pembayaran",
      description: "Lakukan pembayaran sesuai paket yang dipilih. Kami menerima transfer bank dan e-wallet. Invoice akan dikirimkan."
    },
    {
      number: 4,
      icon: BookOpen,
      title: "Mulai Belajar",
      description: "Akses video tutorial, latihan soal, dan bergabung dengan komunitas Expert Squad. Mulai perjalanan menuju IPK impianmu!"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-primary-700 bg-clip-text text-transparent">
            Cara Pendaftaran
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Bergabung dengan Expert Course sangat mudah! Ikuti 4 langkah sederhana berikut
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-primary-300 to-primary-400 -z-10" />
              )}

              <div className="bg-gradient-to-br from-red-50 to-primary-50 p-6 rounded-2xl hover:shadow-xl transition-shadow h-full">
                {/* Step Number */}
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full font-bold text-xl mb-4">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="bg-white w-16 h-16 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <step.icon size={32} className="text-primary-600" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-3 text-gray-900">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Link
            href="/kontak"
            className="inline-block bg-gradient-to-r from-primary-600 to-primary-700 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Daftar Sekarang
          </Link>
          <p className="mt-4 text-gray-500 text-sm">
            Atau hubungi kami melalui WhatsApp/Line untuk konsultasi gratis
          </p>
        </motion.div>
      </div>
    </section>
  )
}
