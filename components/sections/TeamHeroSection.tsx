'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { TypographyH2 } from '@/components/ui/h2';
import { TypographyP } from '@/components/ui/paragraph';

function TeamHeroSection() {
    return (
        <section className='max-w-282.5 mx-auto py-12 px-5'>
            <TypographyH2 className='text-primary'>
                Meet our team members
            </TypographyH2>
            <TypographyP>
                Complete the form below to send us a message. Our support team will promptly respond to your request.
            </TypographyP>
            <div className='flex items-center gap-4 mt-6'>
                <Link href='/contact'>
                    <Button variant='link' className='text-accent underline'>
                        Apply Now →
                    </Button>
                </Link>
                <Link href='/contact'>
                    <Button>
                        Contact Us →
                    </Button>
                </Link>
            </div>
        </section>
    );
}

export default TeamHeroSection;
