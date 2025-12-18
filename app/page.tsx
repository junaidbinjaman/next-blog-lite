import {TypographyH1} from '@/components/ui/h1';
import {TypographyP} from '@/components/ui/paragraph';
import Image from 'next/image';

export default function Home() {
    return (
        <div className='max-w-282.5 mx-auto flex items-center mt-7.5'>
            <div className='flex-1 space-y-5'>
                <TypographyH1 className='text-primary'>
                    Read Blogs That Inspires Everyday Life
                </TypographyH1>

                <TypographyP className='text-text-color'>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don&apos;t
                    look even slightly believable. If you are going to use a
                    passage of Lorem Ipsum, you need to be sure there isn&apos;t
                    anything embarrassing hidden in the middle of text.
                </TypographyP>
            </div>
            <div className='flex-1'>
                <Image
                    src='/images/home-hero-banner.png'
                    width={509}
                    height={399}
                    alt='hero home page'
                />
            </div>
        </div>
    );
}
