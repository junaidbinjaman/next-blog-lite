import AboutSection from '@/components/sections/AboutSection';
import Hero from './_components/Hero';
import FocusSection from '@/components/sections/FocusSection';
import WriterSection from '@/components/sections/WriterSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import BrandSection from '@/components/sections/BrandSection';
import NewsLetterSubscriptionBox from '@/components/NewsLetterSubscriptionBox/NewsLetterSubscriptionBox';

function AboutUsPage() {
    return (
        <>
            <Hero />
            <FocusSection />
            <AboutSection />
            <TestimonialSection />
            <WriterSection />
            <BrandSection />
            <NewsLetterSubscriptionBox />
        </>
    );
}

export default AboutUsPage;
