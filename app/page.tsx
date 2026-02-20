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
import FaqSection from './(sections)/(faqSection)/FaqSection';
import BrandSection from './(sections)/BrandSection';
import InstagramFeedSection from './(sections)/InstagramFeedSection';
import ContactSection from './(sections)/ContactSection';
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
            <div className='hidden'>
            </div>
        </>
    );
}
