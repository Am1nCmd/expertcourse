'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, MessageSquare } from 'lucide-react'
import { SiLine, SiWhatsapp, SiFacebook, SiInstagram } from 'react-icons/si'
import Link from 'next/link'

export default function KontakPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    package: '',
    subject: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulasi submit - ganti dengan actual API call
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({
        name: '',
        email: '',
        phone: '',
        package: '',
        subject: '',
        message: ''
      })

      setTimeout(() => setSubmitStatus('idle'), 5000)
    }, 1500)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const contactInfo = [
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+62 812-3456-7890",
      link: "https://wa.me/6281234567890"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@expertcourse.id",
      link: "mailto:hello@expertcourse.id"
    },
    {
      icon: MapPin,
      title: "Lokasi",
      value: "Telkom University, Bandung",
      link: "https://maps.google.com/?q=Telkom+University+Bandung"
    },
    {
      icon: MessageSquare,
      title: "Line Official",
      value: "@expertcourse",
      link: "https://line.me/R/ti/p/@expertcourse"
    }
  ]

  const socialMedia = [
    {
      icon: SiWhatsapp,
      name: "WhatsApp",
      link: "https://wa.me/6281234567890",
      color: "text-green-600 hover:bg-green-50"
    },
    {
      icon: SiLine,
      name: "Line",
      link: "https://line.me/R/ti/p/@expertcourse",
      color: "text-green-500 hover:bg-green-50"
    },
    {
      icon: SiInstagram,
      name: "Instagram",
      link: "https://instagram.com/expertcourse.id",
      color: "text-pink-600 hover:bg-pink-50"
    },
    {
      icon: SiFacebook,
      name: "Facebook",
      link: "https://facebook.com/expertcourse.id",
      color: "text-blue-600 hover:bg-blue-50"
    }
  ]

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
            Hubungi Kami
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Punya pertanyaan tentang Expert Course? Tim kami siap membantu Anda!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-gray-900">Kirim Pesan</h2>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Nama Lengkap *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Masukkan nama lengkap"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Nomor WhatsApp *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="08xxxxxxxxxx"
                />
              </div>

              <div>
                <label htmlFor="package" className="block text-sm font-medium text-gray-700 mb-2">
                  Paket yang Diminati
                </label>
                <select
                  id="package"
                  name="package"
                  value={formData.package}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">Pilih paket (opsional)</option>
                  <option value="paket-a">Paket A (Bronze) - Rp 160.000</option>
                  <option value="paket-b">Paket B (Silver) - Rp 750.000</option>
                  <option value="paket-c">Paket C (Gold) - Rp 500.000</option>
                </select>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subjek *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Misal: Ingin tahu lebih lanjut tentang Paket B"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Pesan *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                  Terima kasih! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                  Maaf, terjadi kesalahan. Silakan coba lagi atau hubungi kami melalui WhatsApp.
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Mengirim...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Kirim Pesan</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Contact Cards */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all flex items-start space-x-4 group"
                >
                  <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-3 rounded-lg text-white group-hover:scale-110 transition-transform">
                    <info.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.title}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Media Sosial</h3>
              <div className="grid grid-cols-2 gap-3">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 p-3 rounded-lg border border-gray-200 transition-all ${social.color}`}
                  >
                    <social.icon size={24} />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Map Embed */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="font-bold text-gray-900 mb-4">Lokasi Kami</h3>
              <div className="aspect-video rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.3087927447783!2d107.6253831!3d-6.973123799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e9adf177bf8d%3A0x437398556f9fa03!2sTelkom%20University!5e0!3m2!1sen!2sid!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Telkom University Location"
                />
              </div>
              <p className="text-sm text-gray-600 mt-3">
                Telkom University, Jl. Telekomunikasi No. 1, Bandung, Jawa Barat 40257
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 rounded-xl text-white">
              <h3 className="font-bold text-xl mb-2">Respon Cepat via WhatsApp</h3>
              <p className="mb-4 text-blue-50">
                Untuk pertanyaan mendesak, hubungi kami langsung via WhatsApp untuk respon lebih cepat!
              </p>
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all"
              >
                <SiWhatsapp size={20} />
                <span>Chat WhatsApp</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* FAQ Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-4">
            Punya pertanyaan umum? Lihat halaman FAQ kami atau kembali ke
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/"
              className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all"
            >
              Beranda
            </Link>
            <Link
              href="/#paket"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
            >
              Lihat Paket
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  )
}
