'use client';

import { CTASectionProps } from '@/types';
import { Button } from '@heroui/react';
import { ArrowRight, Zap, Clock, Shield, Star } from 'lucide-react';

export default function CTA({ headline, description, ctaButton }: CTASectionProps) {
  return (
    <section className="section-padding-large relative overflow-hidden">
      {/* Enhanced Background with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-red-600 to-primary-700" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.05),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-24 h-24 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <div className="text-center space-y-8">
          {/* Enhanced Icon with animation */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="p-6 bg-white/20 rounded-xl backdrop-blur-sm border border-white/30 shadow-2xl">
                <Zap className="w-16 h-16 text-white" />
              </div>
              {/* Pulsing ring */}
              <div className="absolute inset-0 rounded-xl border-4 border-white/30 animate-ping"></div>
            </div>
          </div>

          {/* Enhanced Headline */}
          <div className="space-y-4">
            <h2 className="text-h2 text-white">
              {headline}
            </h2>
            <div className="w-24 h-1 bg-white rounded-lg mx-auto"></div>
          </div>

          {/* Enhanced Description */}
          <p className="text-body-large text-white/95 max-w-3xl mx-auto font-medium">
            {description}
          </p>

          {/* Urgency indicator */}
          <div className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-bold text-lg shadow-lg">
            <Clock className="w-5 h-5" />
            <span>Promo Terbatas!</span>
          </div>

          {/* Enhanced CTA Button */}
          <div className="pt-6">
            <Button
              as="a"
              href={ctaButton.href}
              size="lg"
              className="bg-white text-primary-600 hover:bg-gray-50 font-bold px-10 py-6 text-lg shadow-xl hover-scale transition-all duration-300 rounded-lg"
              endContent={<ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />}
            >
              {ctaButton.text}
            </Button>
            
            {/* Money back guarantee */}
            <p className="text-white/90 text-sm mt-4 font-medium">
              💰 Garansi 30 hari | ⚡ Akses instan
            </p>
          </div>

          {/* Enhanced Trust indicators with stats */}
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">1K+</span>
                  </div>
                </div>
                <div className="text-white font-semibold">Mahasiswa Aktif</div>
                <div className="text-white/80 text-sm">Bergabung bulan ini</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center">
                    <Star className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
                <div className="text-white font-semibold">Rating 4.9/5</div>
                <div className="text-white/80 text-sm">Dari 500+ review</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="text-white font-semibold">100% Terpercaya</div>
                <div className="text-white/80 text-sm">Garansi resmi</div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="flex items-center justify-center mb-3">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">85%</span>
                  </div>
                </div>
                <div className="text-white font-semibold">IPK Meningkat</div>
                <div className="text-white/80 text-sm">Dalam 3 bulan</div>
              </div>
            </div>
          </div>

          {/* Final push with scarcity */}
          <div className="pt-8">
            <div className="bg-red-600/80 backdrop-blur-sm rounded-xl p-6 border border-red-400/50 max-w-md mx-auto">
              <div className="text-white font-bold text-lg mb-2">⏰ Terbatas Hari Ini</div>
              <div className="text-red-100 text-sm">
                Bergabung sebelum promo berakhir!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
