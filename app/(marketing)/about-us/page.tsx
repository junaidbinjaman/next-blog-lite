import AboutSection from '@/components/sections/AboutSection';
import Hero from './_components/Hero';
import FocusSection from '@/components/sections/FocusSection';
import WriterSection from '@/components/sections/WriterSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import BrandSection from '@/components/sections/BrandSection';
import NewsLetterSubscriptionBox from '@/components/NewsLetterSubscriptionBox/NewsLetterSubscriptionBox';

export const metadata = {
    title: 'About Us - LiteBlog | Learn More About Our Mission and Team',
    description:
        'Discover the story behind LiteBlog, our mission to provide quality content, and meet the passionate team that makes it all possible.',
    authors: [{name: 'LiteBlog Team'}],
    robots: 'index, follow',
    openGraph: {
        title: 'About Us - LiteBlog | Learn More About Our Mission and Team',
        description:
            'Discover the story behind LiteBlog, our mission to provide quality content, and meet the passionate team that makes it all possible.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'About Us - LiteBlog | Learn More About Our Mission and Team',
        description:
            'Discover the story behind LiteBlog, our mission to provide quality content, and meet the passionate team that makes it all possible.',
    },
};

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
