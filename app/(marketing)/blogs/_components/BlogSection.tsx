'use client';
import BlogBox, {BlogBoxProps} from '@/components/blogBox/BlogBox';
import SkeletonCard from '@/components/skeletons/BlogSkeleton';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyP} from '@/components/ui/paragraph';
import {useBlog} from '@/hooks/useBlog';
import {ChevronLeftIcon} from '@/components/icons/lucide-chevron-left';
import {ChevronRightIcon} from '@/components/icons/lucide-chevron-right';
import {useSearchParams, useRouter} from 'next/navigation';
import {useRef} from 'react';

function BlogSection() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const sectionRef = useRef<HTMLHeadingElement | null>(null);

    const currentPage = Number(searchParams.get('page')) || 1;
    const limit = 6;

    const {isLoading, data, error} = useBlog(limit, currentPage);

    const goToPage = (page: number) => {
        const param = new URLSearchParams(searchParams.toString());
        param.set('page', page.toString());
        router.push(`?${param.toString()}`, {scroll: false});

        sectionRef.current?.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    return (
        <section ref={sectionRef} className='max-w-282.5 mx-auto py-10 px-20'>
            <TypographyH2 className='text-primary text-center'>
                Latest Blog Posts
            </TypographyH2>
            <TypographyP className='text-center'>
                Discover our latest articles and updates on various topics.
            </TypographyP>
            {error ? (
                <TypographyP className='text-red-500 text-center mt-5'>
                    Failed to load blogs: {error.message}
                </TypographyP>
            ) : isLoading ? (
                <div className='mt-6'>
                    <SkeletonCard />
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-10'>
                    {data &&
                        data.data.map((blog: BlogBoxProps) => (
                            <BlogBox
                                key={blog.href}
                                thumbnail={blog.thumbnail}
                                href={blog.href}
                                title={blog.title}
                                excerpt={blog.excerpt}
                                category={blog.category}
                                date={blog.date}
                                readTime={blog.readTime}
                            />
                        ))}
                </div>
            )}

            {/* Pagination */}
            <div className='flex gap-1.5 justify-center mt-10'>
                <button
                    className='
                     flex gap-2 border border-[#E9E9E9] py-2 px-3 rounded-md
                     cursor-pointer transition duration-150
                     enabled:active:scale-85
                   disabled:text-gray-400 disabled:cursor-not-allowed
                    '
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    <ChevronLeftIcon /> Back
                </button>
                <div className='flex gap-1.5'>
                    {Array.from(
                        {length: data && data.meta.total_pages},
                        (_, i) => {
                            const page = i + 1;

                            return (
                                <button
                                    key={i}
                                    onClick={() => goToPage(page)}
                                    className={`border border-[#E9E9E9] py-2 px-3 rounded-md cursor-pointer active:scale-75 transition duration-150 ${
                                        page === currentPage
                                            ? 'pagination-is-active'
                                            : ''
                                    }`}
                                >
                                    {page}
                                </button>
                            );
                        },
                    )}
                </div>
                <button
                    className='
                        flex gap-2 border border-[#E9E9E9] py-2 px-3 rounded-md
                        cursor-pointer transition duration-150
                        enabled:active:scale-85
                      disabled:text-gray-400 disabled:cursor-not-allowed
                    '
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === data?.meta.total_pages}
                >
                    <ChevronRightIcon />
                    Next
                </button>
            </div>
        </section>
    );
}

export default BlogSection;
