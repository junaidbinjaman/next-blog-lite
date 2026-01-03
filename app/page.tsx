import HeroSection from './(sections)/HeroSection';
import FocusSection from './(sections)/FocusSection';
import AboutSection from './(sections)/AboutSection';
import ServiceSection from './(sections)/ServiceSection';
import CategorySection from './(sections)/CategorySection';
import BlogsSections from './(sections)/BlogsSections';
import CTASection from '@/components/CTASection/CTASection';
import WriterSection from '@/app/(sections)/WriterSection';
import TestimonialSection from './(sections)/TestimonialSection';
import PricingSection from './(sections)/PricingSection';

export default function Home() {
    return (
        <>
            <HeroSection />
            <FocusSection />
            <AboutSection />
            <ServiceSection />
            <CategorySection />
            <BlogsSections />
            <CTASection />
            <WriterSection />
            <TestimonialSection />
            <PricingSection />
        </>
    );
}
