import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import About from '@/components/About';
import Packages from '@/components/Packages';
import Courses from '@/components/Courses';
import HowToRegister from '@/components/HowToRegister';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
// import ScrollMorphHeadline from '@/components/ScrollMorphHeadline';
// import ScrollMorphLogo from '@/components/ScrollMorphLogo';
import { heroData, values, packages, courses, testimonials, ctaSectionData } from '@/lib/data';

export default function Home() {
  return (
    <main className="relative">
      {/* Apple-style scroll-linked morph animations - Temporarily disabled */}
      {/* <ScrollMorphHeadline /> */}
      {/* <ScrollMorphLogo /> */}

      <Hero {...heroData} />
      <ValueProposition values={values} />
      <About />
      <Packages packages={packages} />
      <Courses courses={courses} />
      <HowToRegister />
      <Testimonials testimonials={testimonials} />
      <CTA {...ctaSectionData} />
      <Footer />
    </main>
  );
}
