'use client'
import CategoryBox, { CategoryBoxProps } from '@/components/categoryBox/CategoryBox';
import { TypographyH1 } from '@/components/ui/h1'
import { TypographyP } from '@/components/ui/paragraph'
import { useCategories } from '@/hooks/useCategories'
import CategorrySkeleton from '@/components/skeletons/CategorySkeleton';

function CategorySection() {
    const {isLoading, data, error} = useCategories();
  return (
    <section className='max-w-282.5 mx-auto py-10 px-20'>
        <TypographyH1 className='text-primary text-center'>Explore Categories</TypographyH1>
        <TypographyP className='text-center'>Browse through our diverse range of topics and find content that interests you.</TypographyP>
        {
            error ? (
                <TypographyP className='text-red-500 text-center'>Failed to load categories: {error.message}</TypographyP>
            ) : isLoading ? (
                <div className='mt-6'>
                    <CategorrySkeleton repeat={6} />
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
                    {data && data.data.map((category: CategoryBoxProps) => (
                        <CategoryBox
                            key={category.href}
                            title={category.title}
                            numOfArticles={category.numOfArticles}
                            href={`/blogs/category/${category.href}`}
                            thumbnail={category.thumbnail}
                        />
                    ))}
                </div>
            )
        }
    </section>
  )
}

export default CategorySection