'use client';

import { PackageCardProps } from '@/types';
import { Check, ArrowRight, Crown } from 'lucide-react';

export default function PackageCard({ package: pkg }: PackageCardProps) {
  return (
    <div 
      className={`card bg-white shadow-xl hover:shadow-2xl transition-all duration-300 relative group h-full ${
        pkg.isPopular 
          ? 'ring-4 ring-primary-100 bg-gradient-to-b from-white to-primary-25' 
          : 'hover:border-primary-200'
      } hover-lift`}
    >
      {pkg.isPopular && (
        <>
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
            <div className="badge badge-secondary gap-2 px-5 py-4 bg-gradient-to-r from-primary-500 to-red-600 text-white font-bold shadow-xl text-sm border-none">
              <Crown className="w-4 h-4" />
              <span>POPULER</span>
            </div>
          </div>
          {/* Gradient overlay for popular card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-red-500/5 rounded-xl -z-10" />
        </>
      )}
      
      <div className="card-body flex flex-col items-center pt-10 pb-8 text-center">
        {/* Header Section */}
        <h3 className={`card-title text-2xl md:text-3xl font-bold mb-3 justify-center ${
          pkg.isPopular ? 'text-primary-600' : 'text-gray-900'
        }`}>
          {pkg.name}
        </h3>

        <div className="mt-6 mb-3">
          <div className="flex items-baseline justify-center">
            <span className="text-xl text-gray-500 mr-2 font-medium">Rp</span>
            <span className={`text-5xl md:text-6xl font-black tracking-tight ${
              pkg.isPopular ? 'text-primary-500' : 'text-gray-900'
            }`}>
              {(pkg.price / 1000).toFixed(0)}k
            </span>
          </div>
          <span className="text-gray-600 text-base font-medium mt-2 block">{pkg.duration}</span>
        </div>
        
        {pkg.isPopular && (
          <div className="badge badge-success gap-1 bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-3 text-xs font-bold border-none">
            💰 HEMAT 25%
          </div>
        )}

        {/* Body Section - Features */}
        <div className="flex-1 space-y-6 px-0 md:px-2 mt-6 w-full">
          <ul className="space-y-4 text-left">
            {pkg.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-1 ${
                  pkg.isPopular
                    ? 'bg-primary-500 text-white'
                    : 'bg-green-100 text-green-600'
                }`}>
                  <Check className="w-3 h-3" />
                </div>
                <span className="text-base text-gray-700 leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
          
          {/* Additional perks for popular package */}
          {pkg.isPopular && (
            <div className="mt-6 p-4 bg-gradient-to-r from-primary-50 to-red-50 rounded-xl border border-primary-100">
              <div className="text-sm text-primary-600 font-semibold mb-2">🎁 Bonus Eksklusif:</div>
              <ul className="text-xs text-gray-600 space-y-1 text-left">
                <li>• E-book strategi belajar efektif</li>
                <li>• Template catatan kuliah</li>
                <li>• Akses workshop eksklusif</li>
              </ul>
            </div>
          )}
        </div>

        {/* Footer Section - CTA */}
        <div className="card-actions justify-center w-full mt-6 flex-col gap-3">
          <a
            href={pkg.ctaLink}
            className={`btn btn-primary btn-block btn-lg gap-2 font-bold text-base ${
              pkg.isPopular
                ? 'bg-gradient-to-r from-primary-500 to-red-600 hover:from-red-600 hover:to-primary-500 border-none'
                : 'bg-gray-900 hover:bg-primary-500 border-none'
            } hover-scale`}
          >
            {pkg.ctaText}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <p className="text-xs text-gray-600 font-medium text-center">
            {pkg.isPopular ? '🔒 Akses instan' : 'Mulai hari ini'}
          </p>
        </div>
      </div>
    </div>
  );
}
