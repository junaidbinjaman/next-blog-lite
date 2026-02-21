import HeroSection from './_components/HeroSection';
import FocusSection from '../components/sections/FocusSection';
import AboutSection from '../components/sections/AboutSection';
import ServiceSection from './_components/ServiceSection';
import CategorySection from '../components/sections/CategorySection';
import BlogsSections from '../components/sections/BlogsSections';
import CTASection from '@/components/CTASection/CTASection';
import WriterSection from '@/components/sections/WriterSection';
import TestimonialSection from '../components/sections/TestimonialSection';
import PricingSection from './_components/PricingSection';
import FaqSection from './_components/_faqSection/FaqSection';
import BrandSection from '../components/sections/BrandSection';
import InstagramFeedSection from './_components/InstagramFeedSection';
import ContactSection from './_components/ContactSection';
import NewsLetterSubscriptionBox from '../components/NewsLetterSubscriptionBox/NewsLetterSubscriptionBox';

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
            <FaqSection />
            <BrandSection />
            <InstagramFeedSection />
            <ContactSection />
            <NewsLetterSubscriptionBox />
        </>
    );
}
