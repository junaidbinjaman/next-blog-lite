'use client';
import CategoryBox, {
    CategoryBoxProps,
} from '@/components/categoryBox/CategoryBox';
import {TypographyH1} from '@/components/ui/h1';
import {TypographyP} from '@/components/ui/paragraph';
import {useCategories} from '@/hooks/useCategories';
import CategorrySkeleton from '@/components/skeletons/CategorySkeleton';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';

function CategorySection() {
    const {isLoading, data, error} = useCategories();
    return (
        <section className='max-w-288 mx-auto py-10 px-20'>
            <TypographyH1 className='text-primary text-center'>
                Explore Categories
            </TypographyH1>
            <TypographyP className='text-center'>
                Browse through our diverse range of topics and find content that
                interests you.
            </TypographyP>
            {error ? (
                <TypographyP className='text-red-500 text-center'>
                    Failed to load categories: {error.message}
                </TypographyP>
            ) : isLoading ? (
                <div className='mt-6'>
                    <CategorrySkeleton repeat={6} />
                </div>
            ) : (
                <Carousel className='mt-6 relative'>
                    <CarouselContent>
                        {data &&
                            data.data.map((category: CategoryBoxProps) => (
                                <CarouselItem
                                    key={category.href}
                                    className='basis-1/3'
                                >
                                    <CategoryBox
                                        title={category.title}
                                        numOfArticles={category.numOfArticles}
                                        href={`/blogs/category/${category.href}`}
                                        thumbnail={category.thumbnail}
                                    />
                                </CarouselItem>
                            ))}
                    </CarouselContent>
                    <CarouselPrevious className='rounded-sm hover:text-white absolute -left-6 z-10' size="icon-lg" />
                    <CarouselNext className='rounded-sm hover:text-white absolute -right-6 z-10' size="icon-lg" />
                </Carousel>
            )}
        </section>
    );
}

export default CategorySection;
