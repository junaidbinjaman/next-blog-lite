import SubscribeForm from '@/components/subscribeForm/SubscribeForm';
import {TypographyH1} from '@/components/ui/h1';
import {TypographyP} from '@/components/ui/paragraph';
import Image from 'next/image';

function HeroSection() {
    return (
        <section className='max-w-282.5 mx-auto flex items-center mt-7.5 md:p-5 p-2.5'>
            <div className='lg:flex-1 space-y-6'>
                <TypographyH1 className='text-primary lg:w-full md:w-4/6'>
                    Read Blogs That Inspires Everyday Life
                </TypographyH1>

                <TypographyP className='text-text-color'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomized words which
                    don&apos;t look even slightly believable. If you are going
                    to use a passage of Lorem Ipsum, you need to be sure there
                    isn&apos;t anything embarrassing hidden in the middle of
                    text.
                </TypographyP>

                <SubscribeForm />
            </div>
            <div className='lg:flex-1 hidden lg:block'>
                <Image
                    src='/images/home-hero-banner.png'
                    width={509}
                    height={399}
                    alt='hero home page'
                    className='w-full h-auto'
                />
            </div>
        </section>
    );
}

export default HeroSection;
