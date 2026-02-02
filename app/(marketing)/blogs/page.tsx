import NewsLetterSubscriptionBox from '@/components/NewsLetterSubscriptionBox/NewsLetterSubscriptionBox';
import CategorySection from './_components/CategorySection';
import BlogSection from './_components/BlogSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blogs - LiteBlog | Latest Articles and Insights',
    description:
        'Explore the latest articles, insights, and trends in the world of blogging with LiteBlog. Stay updated with our expert tips and industry news.',
    authors: [{name: 'LiteBlog Team'}],
    robots: 'index, follow',
    openGraph: {
        title: 'Blogs - LiteBlog | Latest Articles and Insights',
        description:
            'Explore the latest articles, insights, and trends in the world of blogging with LiteBlog. Stay updated with our expert tips and industry news.',
        type: 'website',
        locale: 'en_US',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Blogs - LiteBlog | Latest Articles and Insights',
        description:
            'Explore the latest articles, insights, and trends in the world of blogging with LiteBlog.',
    },
};

function page() {
    return (
        <>
            <CategorySection />
            <BlogSection />
            <NewsLetterSubscriptionBox />
        </>
    );
}

export default page;
