import HeroSection from './(sections)/HeroSection';
import FocusSection from './(sections)/FocusSection';
import AboutSection from './(sections)/AboutSection';
import ServiceSection from './(sections)/ServiceSection';
import CategorySection from './(sections)/CategorySection';
import BlogsSections from './(sections)/BlogsSections';
import CategorySkeleton from '@/components/skeletonCard/CategorySkeleton';

export default function Home() {
    return (
        <>
            <HeroSection />
            <FocusSection />
            <AboutSection />
            <ServiceSection />
            <CategorySection />
            <BlogsSections />
        </>
    );
}
