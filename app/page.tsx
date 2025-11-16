import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Packages from '@/components/Packages';
import Courses from '@/components/Courses';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';
import { heroData, values, packages, courses, testimonials, ctaSectionData } from '@/lib/data';

export default function Home() {
  return (
    <main>
      <Hero {...heroData} />
      <ValueProposition values={values} />
      <Packages packages={packages} />
      <Courses courses={courses} />
      <Testimonials testimonials={testimonials} />
      <CTA {...ctaSectionData} />
      <Footer />
    </main>
  );
}
