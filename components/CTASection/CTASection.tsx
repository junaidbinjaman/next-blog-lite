import React from 'react';
import {TypographyP} from '../ui/paragraph';
import {Button} from '../ui/button';
import {TypographyH2} from '../ui/h2';
import Link from 'next/link';

function CTASection() {
    return (
        <section className='mb-12.5'>
            <div className='bg-[#1E2939] w-267.5 mx-auto p-16 rounded-lg flex flex-col gap-6 items-center justify-center'>
                <TypographyH2 className='text-white'>
                    Ready to Start Your Journey?
                </TypographyH2>
                <TypographyP className='w-2/3 text-center text-white'>
                    Join our community of readers and writers. Get access to
                    exclusive content, engage with like-minded individuals, and
                    discover stories that inspire.
                </TypographyP>
                <div className='flex space-x-4 mx-auto w-fit'>
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
