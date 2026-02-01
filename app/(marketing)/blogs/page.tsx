import NewsLetterSubscriptionBox from '@/components/NewsLetterSubscriptionBox/NewsLetterSubscriptionBox';
import BlogsSections from '@/components/sections/BlogsSections';
import CategorySection from './_components/CategorySection';

function page() {
    return (
        <>
            <CategorySection />
            <BlogsSections />
            <NewsLetterSubscriptionBox />
        </>
    );
}

export default page;
