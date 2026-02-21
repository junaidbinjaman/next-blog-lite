'use client';
import {TypographyH2} from '@/components/ui/h2';
import FeatureBlogBox from '@/components/featureBlogBox/FeatureBlogBox';
import BlogBox, {BlogBoxProps} from '@/components/blogBox/BlogBox';
import {useBlog} from '@/hooks/useBlog';
import {TypographyP} from '@/components/ui/paragraph';
import SkeletonCard from '@/components/skeletons/BlogSkeleton';
import {Button} from '@/components/ui/button';
import Link from 'next/link';

function BlogsSections() {
    const {isLoading, isError, error, data} = useBlog(7);

    const featureBlog: BlogBoxProps | undefined = data?.data[0];
    const otherBlogs: BlogBoxProps[] = data?.data?.slice(1) || [];

    return (
        <section className='max-w-250 mx-auto mb-15 p-5'>
            <TypographyH2 className='text-primary'>
                Latest Articles
            </TypographyH2>

            <div className='mt-5'>
                {isLoading ? (
                    <SkeletonCard />
                ) : isError ? (
                    <p className='text-red-500 text-center'>
                        Error while loading blogs. Message:{' '}
                        <strong>{error.message}</strong>
                    </p>
                ) : !data || data.data.length === 0 ? (
                    <TypographyP className='text-text-color'>
                        You haven&apos;t posted any blog yet.
                    </TypographyP>
                ) : (
                    <>
                        <FeatureBlogBox
                            href={featureBlog!.href}
                            thumbnail={featureBlog!.thumbnail}
                            category={featureBlog!.category}
                            title={featureBlog!.title}
                            excerpt={featureBlog!.excerpt}
                            date={featureBlog!.date}
                            readTime={featureBlog!.readTime}
                        />

                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 items-stretch'>
                            {otherBlogs.map((blog: BlogBoxProps) => (
                                <BlogBox
                                    key={blog.href}
                                    category={blog.category}
                                    thumbnail={blog.thumbnail}
                                    href={blog.href}
                                    title={blog.title}
                                    excerpt={blog.excerpt}
                                    date={blog.date}
                                    readTime={blog.readTime}
                                />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div className='flex items-center justify-center mt-10'>
                <Link href='/blogs'>
                    <Button className='active:scale-75'>
                        Browse All Blogs
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export default BlogsSections;
