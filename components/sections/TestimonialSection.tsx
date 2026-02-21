'use client';
import ReviewBox, {ReviewBoxProps} from '@/components/reviewBox/ReviewBox';
import ReviewSkeleton from '@/components/skeletons/ReviewSkeleton';
import {Button} from '@/components/ui/button';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyP} from '@/components/ui/paragraph';
import {useTestimonials} from '@/hooks/useTestimonials';
import clsx from 'clsx';
import {useEffect, useState} from 'react';

function TestimonialSection() {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const {data, isLoading, isError, error} = useTestimonials();

    useEffect(() => {
        if (!api) return;

        const onSelect = () => {
            setCurrent(api.selectedScrollSnap());
        };

        api.on('select', onSelect);
        onSelect();

        return () => {
            api.off('select', () => {
                onSelect();
            });
        };
    }, [api]);

    const snap = api?.scrollSnapList().length ?? 0;

    const handleDotClick = (index: number) => {
        api?.scrollTo(index);
    };

    return (
        <section className='max-w-282.5 mx-auto mb-12.5 bg-[#f0f0f0] p-5 md:p-10 rounded-md'>
            <div className='mb-6'>
                <TypographyH2 className='text-primary text-center'>
                    What Our Readers Say
                </TypographyH2>
                <TypographyP className='text-center mt-2.5'>
                    Join thousands of satisfied readers who trust LiteBlog for
                    their daily dose of inspiration.
                </TypographyP>
            </div>
            {isLoading && <ReviewSkeleton repeat={3} />}
            {isError && (
                <TypographyP className='text-red-500'>
                    Error: {error.message}
                </TypographyP>
            )}
            {!isLoading && !isError && data.data.length < 1 && (
                <p>No review submitted yet</p>
            )}
            {!isLoading && !isError && data.data.length > 0 && (
                <Carousel setApi={setApi}>
                    <CarouselContent className='mb-5'>
                        {data.data.map((el: ReviewBoxProps, index: number) => (
                            <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3 px-2'>
                                <ReviewBox
                                    star={el.star}
                                    description={el.description}
                                    name={el.name}
                                    designation={el.designation}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            )}
            <div className='flex items-center justify-center gap-x-2.5 mt-2'>
                {Array.from({length: snap}, (_, index) => (
                    <Button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={clsx(
                            'w-4 h-4 rounded-full shadow-sm p-0 m-0 hover:bg-primary',
                            current === index ? 'bg-primary' : 'bg-white'
                        )}
                    ></Button>
                ))}
            </div>
        </section>
    );
}

export default TestimonialSection;
