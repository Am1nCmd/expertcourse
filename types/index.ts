// TypeScript interfaces untuk Expert Course Landing Page

export interface CTAButton {
  text: string;
  href: string;
  variant: 'primary' | 'secondary';
}

export interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCTA: CTAButton;
  secondaryCTA?: CTAButton;
  heroImage: string;
}

export interface ValueItem {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export interface ValuePropositionProps {
  values: ValueItem[];
}

export interface Package {
  id: string;
  name: string;
  price: number;
  duration: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
  ctaLink: string;
}

export interface PackagesProps {
  packages: Package[];
}

export interface PackageCardProps {
  package: Package;
}

export interface Course {
  id: string;
  name: string;
  icon: string;
  category?: string;
}

export interface CoursesProps {
  courses: Course[];
}

export interface CourseItemProps {
  course: Course;
}

export interface Testimonial {
  id: string;
  name: string;
  university: string;
  major: string;
  avatar: string;
  rating: number;
  text: string;
}

export interface TestimonialsProps {
  testimonials: Testimonial[];
}

export interface TestimonialCardProps {
  testimonial: Testimonial;
}

export interface CTASectionProps {
  headline: string;
  description: string;
  ctaButton: CTAButton;
}
