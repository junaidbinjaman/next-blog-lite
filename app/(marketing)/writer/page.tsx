import {Metadata} from 'next';
import TeamHeroSection from '@/components/sections/TeamHeroSection';
import WriterSection from '@/components/sections/WriterSection';
import AuthorContactFormSection from '@/components/sections/AuthorContactFormSection';
import NewsLetterSubscriptionBox from '@/components/NewsLetterSubscriptionBox/NewsLetterSubscriptionBox';

export const metadata: Metadata = {
    title: 'Authors - LiteBlog | Meet Our Team Members',
    description:
        'Meet the talented authors and team members behind LiteBlog. Learn about our writers, their expertise, and get in touch with our team.',
    authors: [{name: 'LiteBlog Team'}],
    robots: 'index, follow',
    openGraph: {
        title: 'Authors - LiteBlog | Meet Our Team Members',
        description:
            'Meet the talented authors and team members behind LiteBlog. Learn about our writers, their expertise, and get in touch with our team.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Authors - LiteBlog | Meet Our Team Members',
        description:
            'Meet the talented authors and team members behind LiteBlog.',
    },
};

export default function AuthorsPage() {
    return (
        <>
            <TeamHeroSection />
            <WriterSection />
            <AuthorContactFormSection />
            <NewsLetterSubscriptionBox />
        </>
    );
}
