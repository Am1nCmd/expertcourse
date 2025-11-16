'use client';

import { TestimonialCardProps } from '@/types';
import { Card, CardBody, Avatar } from '@heroui/react';
import { Star, Quote, GraduationCap } from 'lucide-react';

interface ExtendedTestimonialCardProps extends TestimonialCardProps {
  index?: number;
}

export default function TestimonialCard({ testimonial, index = 0 }: ExtendedTestimonialCardProps) {
  const cardVariants = [
    'bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200',
    'bg-gradient-to-br from-green-50 to-emerald-100 border-green-200', 
    'bg-gradient-to-br from-purple-50 to-violet-100 border-purple-200'
  ];

  const quoteColors = [
    'text-blue-300',
    'text-green-300',
    'text-purple-300'
  ];

  return (
    <Card className={`group ${cardVariants[index % 3]} hover:shadow-xl transition-all duration-500 hover-lift border-2 rounded-xl`}>
      <CardBody className="space-y-6 p-6">
        {/* Enhanced Quote Icon */}
        <div className="relative">
          <div className={`${quoteColors[index % 3]} opacity-20`}>
            <Quote className="w-12 h-12" fill="currentColor" />
          </div>
          {/* Success badge for featured testimonial */}
          {index === 0 && (
            <div className="absolute -top-2 -right-2 bg-green-500 text-white px-2 py-1 rounded-lg text-xs font-bold">
              ⭐ Featured
            </div>
          )}
        </div>

        {/* Enhanced Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            {[...Array(5)].map((_, starIndex) => (
              <Star
                key={starIndex}
                className={`w-5 h-5 ${
                  starIndex < testimonial.rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-gray-700">({testimonial.rating}/5)</span>
        </div>

        {/* Enhanced Testimonial Text */}
        <div className="relative">
          <p className="text-body text-gray-700 font-medium">
            &ldquo;{testimonial.text}&rdquo;
          </p>
          {/* Highlight for impressive results */}
          {testimonial.text.includes('IPK') && (
            <div className="mt-3 inline-flex items-center gap-2 bg-green-100 text-green-700 px-3 py-1 rounded-lg text-sm font-semibold">
              📈 Peningkatan IPK Terbukti
            </div>
          )}
        </div>

        {/* Enhanced Student Info */}
        <div className="flex items-center gap-4 pt-6 border-t-2 border-white/50">
          <div className="relative">
            <Avatar
              src={testimonial.avatar}
              name={testimonial.name}
              size="lg"
              className="flex-shrink-0 ring-2 ring-white"
              fallback={<GraduationCap className="w-6 h-6" />}
            />
            {/* Verification badge */}
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">✓</span>
            </div>
          </div>
          
          <div className="flex-1">
            <h4 className="text-h4 text-gray-900">{testimonial.name}</h4>
            <p className="text-primary-600 font-semibold text-sm">{testimonial.major}</p>
            <p className="text-body text-gray-600">{testimonial.university}</p>
          </div>
        </div>

        {/* Success indicator for standout testimonials */}
        {(testimonial.text.includes('3.6') || testimonial.text.includes('Worth it') || testimonial.text.includes('cum laude')) && (
          <div className="bg-white/80 rounded-xl p-3 border border-yellow-200">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                🏆
              </div>
              <span className="text-sm font-semibold text-gray-700">
                Hasil Luar Biasa
              </span>
            </div>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
