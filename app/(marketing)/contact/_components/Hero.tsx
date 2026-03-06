import { TypographyH1 } from '@/components/ui/h1';
import { TypographyP } from '@/components/ui/paragraph';
import Link from 'next/link';

function Hero() {
    return (
        <section className='py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8'>
            <div className='max-w-6xl mx-auto'>
                <TypographyH1 className='text-3xl md:text-4xl lg:text-5xl mb-4 text-primary font-bold'>
                    Contact Us
                </TypographyH1>
                <TypographyP className='text-base md:text-lg text-muted-foreground mb-6 max-w-2xl'>
                    Complete the form below to send us a message. Our support
                    team will promptly respond to your request.
                </TypographyP>
                <Link
                    href='/'
                    className='inline-flex items-center gap-2 text-accent font-semibold hover:opacity-80 transition-opacity bg-[#e9e9e9] p-3 rounded'
                >
                    Back to home
                    <svg
                        width='16'
                        height='16'
                        viewBox='0 0 24 24'
                        fill='none'
                        stroke='currentColor'
                        strokeWidth='2'
                    >
                        <path d='M5 12h14M12 5l7 7-7 7'></path>
                    </svg>
                </Link>
            </div>
        </section>
    );
}

export default Hero;
