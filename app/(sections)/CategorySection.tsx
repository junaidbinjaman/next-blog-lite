'use client';
import CategoryBox, { CategoryBoxProps } from '@/components/categoryBox/CategoryBox';
import Loader from '@/components/skeletons/BlogSkeleton';
import CategorySkeleton from '@/components/skeletons/CategorySkeleton';
import { Button } from '@/components/ui/button';
import { TypographyH2 } from '@/components/ui/h2';
import { TypographyP } from '@/components/ui/paragraph';
import { useCategories } from '@/hooks/useCategories';
import Link from 'next/link';

function CategorySection() {
    const { isLoading, data, error } = useCategories(6);

    if (error) {
        return <p className="text-red-500 text-center">Something went wrong</p>;
    }

    return (
        <section className="max-w-282.5 mx-auto mb-15 flex flex-col gap-10">
            <div className="flex flex-col items-center gap-2.5 text-text-color">
                <TypographyH2 className="text-primary">
                    Explore Categories
                </TypographyH2>
                <TypographyP>
                    Browse through our diverse range of topics and find content
                    that interests you.
                </TypographyP>
            </div>

            {isLoading ? (
                <div className="flex justify-center">
                    <CategorySkeleton />
                </div>
            ) : (
                <div className="grid grid-cols-3 gap-6 mx-auto">
                    {data?.data.map((el: CategoryBoxProps) => (
                        <CategoryBox
                            key={el.title}
                            title={el.title}
                            href={el.href}
                            numOfArticles={el.numOfArticles}
                            bgColor={el.bgColor}
                            headingColor={el.headingColor}
                            articleTextColor={el.articleTextColor}
                            thumbnail={el.thumbnail}
                        />
                    ))}
                </div>
            )}

            <Button className='w-1/4 mx-auto active:scale-75'>
                <Link href='/categories'>Browse All Categories</Link>
            </Button>
        </section>
    );
}

export default CategorySection;
