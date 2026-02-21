import NewsLetterSubscriptionBox from '@/components/NewsLetterSubscriptionBox/NewsLetterSubscriptionBox';
import BlogsSections from '@/components/sections/BlogsSections';
import CategorySection from '@/components/sections/CategorySection';

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
