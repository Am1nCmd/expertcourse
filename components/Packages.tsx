'use client';

import { PackagesProps } from '@/types';
import PackageCard from './PackageCard';
import { Star, Shield, Clock } from 'lucide-react';
import { motion, Variants } from 'framer-motion';

const headerVariants: Variants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const packageVariants: Variants = {
  offscreen: {
    y: 80,
    opacity: 0,
    scale: 0.9,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      type: 'spring',
      bounce: 0.3,
      duration: 0.8,
    },
  },
};

export default function Packages({ packages }: PackagesProps) {
  return (
    <section id="paket" className="section-padding-large bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(214,0,0,0.03),transparent_50%)]" />
      <div className="absolute top-20 right-10 w-32 h-32 bg-primary-100 rounded-full blur-3xl opacity-50" />
      <div className="absolute bottom-20 left-10 w-24 h-24 bg-red-100 rounded-full blur-2xl opacity-30" />

      <div className="container mx-auto px-6 max-w-7xl relative">
        {/* Enhanced Header */}
        <motion.div
          className="text-center mb-20"
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 text-primary-600 px-5 py-2.5 rounded-xl text-sm font-semibold mb-6">
            💎 Paket Premium
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Investasi Terbaik untuk
            <span className="text-primary-500 block md:inline md:ml-3">Masa Depanmu</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Dapatkan akses pembelajaran berkualitas tinggi dengan harga yang terjangkau.
            <span className="text-primary-600 font-semibold"> Pilih paket yang tepat untuk kebutuhan akademikmu!</span>
          </p>
          
          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span className="font-medium">Garansi Uang Kembali</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500 fill-current" />
              <span className="font-medium">Rating 4.9/5</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <span className="font-medium">Akses 24/7</span>
            </div>
          </div>
        </motion.div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16 pt-8 mt-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.2 }}
              variants={packageVariants}
              transition={{ delay: index * 0.15 }}
            >
              <PackageCard package={pkg} />
            </motion.div>
          ))}
        </div>

        {/* Bottom guarantee section */}
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-100">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-h3 text-gray-900 mb-4">
              Jaminan 100% Satisfaction
            </h3>
            <p className="text-body text-gray-600 max-w-2xl mx-auto">
              Tidak puas dengan layanan kami? Dapatkan refund penuh dalam 30 hari pertama. 
              Kami yakin Expert Course akan membantu meningkatkan prestasi akademikmu.
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-6 text-sm text-gray-600">
              <span>✓ Tanpa pertanyaan ribet</span>
              <span>✓ Proses cepat 1-3 hari</span>
              <span>✓ Garansi resmi</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
