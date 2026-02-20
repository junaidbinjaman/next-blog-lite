import React from 'react';
import {TypographyP} from '../ui/paragraph';
import {Button} from '../ui/button';
import {TypographyH2} from '../ui/h2';
import Link from 'next/link';

function CTASection() {
    return (
        <section className='mb-12.5'>
            <div className='bg-[#1E2939] lg:w-267.5 lg:p-16 p-10 mx-auto rounded-lg flex flex-col gap-10 items-center justify-center'>
                <TypographyH2 className='text-white text-center'>
                    Ready to Start Your Journey?
                </TypographyH2>
                <TypographyP className='md:w-2/3 text-center text-white'>
                    Join our community of readers and writers. Get access to
                    exclusive content, engage with like-minded individuals, and
                    discover stories that inspire.
                </TypographyP>
                <div className='flex flex-col md:flex-row gap-5 items-center mx-auto w-fit'>
                    <Button className='px-9! h-15'>
                        Get Started Free
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.5}
                            stroke='currentColor'
                            className='size-6'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3'
                            />
                        </svg>
                    </Button>
                    <Link href='/contact'>
                        <Button className='px-9! h-15 bg-transparent border-2 border-accent hover:border-accent/80'>
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    );
}

export default CTASection;
