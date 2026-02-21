import {Button} from '@/components/ui/button';
import {TypographyH1} from '@/components/ui/h1';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyH3} from '@/components/ui/h3';
import {TypographyP} from '@/components/ui/paragraph';
import Image from 'next/image';
import Link from 'next/link';

function Hero() {
    return (
        <>
            {/* Hero area top */}
            <section className='mt-10'>
                <div className='max-w-282.5 mx-auto flex justify-between items-center'>
                    <div>
                        <TypographyH1 className='text-primary text-5xl!'>
                            About Us
                        </TypographyH1>
                        <TypographyP className='w-84.5 mt-4 mb-6'>
                            At Besnik Consultancy, we take pride in our values –
                            service, integrity, and excellence.
                        </TypographyP>
                    </div>
                    <div>
                        <Link href='/contact'>
                            <Button>Contact Us</Button>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Hero area bottom */}
            <section>
                <div className='max-w-282.5 mx-auto flex justify-between gap-10 py-10'>
                    <div className='grid grid-cols-2 gap-5 flex-3'>
                        <div>
                            <TypographyH2 className='text-[#244D4D] text-7xl! font-bold'>
                                1.
                            </TypographyH2>
                            <TypographyH3 className='text-primary text-3xl font-bold'>
                                Who We Are
                            </TypographyH3>
                            <TypographyP className='text-base text-[#64717C]'>
                                You get a 2-week free trial to kick the Smarty
                                tries. We want you to.
                            </TypographyP>
                        </div>
                        <div>
                            <TypographyH2 className='text-[#244D4D] text-7xl! font-bold'>
                                2.
                            </TypographyH2>
                            <TypographyH3 className='text-primary text-3xl font-bold'>
                                Who We Are
                            </TypographyH3>
                            <TypographyP className='text-base text-[#64717C]'>
                                You get a 2-week free trial to kick the Smarty
                                tries. We want you to.
                            </TypographyP>
                        </div>
                        <div>
                            <TypographyH2 className='text-[#244D4D] text-7xl! font-bold'>
                                3.
                            </TypographyH2>
                            <TypographyH3 className='text-primary text-3xl font-bold'>
                                Who We Are
                            </TypographyH3>
                            <TypographyP className='text-base text-[#64717C]'>
                                You get a 2-week free trial to kick the Smarty
                                tries. We want you to.
                            </TypographyP>
                        </div>
                        <div>
                            <TypographyH2 className='text-[#244D4D] text-7xl! font-bold'>
                                4.
                            </TypographyH2>
                            <TypographyH3 className='text-primary text-3xl font-bold'>
                                Who We Are
                            </TypographyH3>
                            <TypographyP className='text-base text-[#64717C]'>
                                You get a 2-week free trial to kick the Smarty
                                tries. We want you to.
                            </TypographyP>
                        </div>
                    </div>
                    <div className='flex gap-5.75 flex-2'>
                        <div>
                            <Image
                                src='/images/about-us-page/about-hero-4.png'
                                className='rounded-lg mt-14.5 hover:scale-105 transition-transform duration-300'
                                alt='hero'
                                width={250}
                                height={150}
                            />
                            <Image
                                src='/images/about-us-page/about-hero-3.png'
                                className='rounded-lg mt-4 hover:scale-105 transition-transform duration-300'
                                alt='hero'
                                width={250}
                                height={270}
                            />
                        </div>
                        <div>
                            <Image
                                src='/images/about-us-page/about-hero-1.png'
                                className='rounded-lg h-67.5 hover:scale-105 transition-transform duration-300'
                                alt='hero'
                                width={250}
                                height={270}
                            />
                            <Image
                                src='/images/about-us-page/about-hero-2.png'
                                className='rounded-lg mt-4 hover:scale-105 transition-transform duration-300'
                                alt='hero'
                                width={250}
                                height={150}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
