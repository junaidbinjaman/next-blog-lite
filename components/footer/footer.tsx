import React from 'react';
import {TypographyP} from '../ui/paragraph';
import {TypographyH5} from '../ui/h5';
import FooterNav from './footerNav';
import SocialMediaIcons from '../socialMediaIcons';

function Footer() {
    const quickLinksNav = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'Blogs',
            href: '/blogs',
        },
        {
            label: 'Categories',
            href: '/categories',
        },
        {
            label: 'About',
            href: '/about-us',
        },
    ];

    const categoryNav = [
        {
            label: 'Lifestyle',
            href: '/',
        },
        {
            label: 'Technology',
            href: '/',
        },
        {
            label: 'Travel',
            href: '/',
        },
        {
            label: 'Design',
            href: '/',
        },
    ];
    return (
        <div className='bg-[#101828] pt-12.5 pb-5'>
            <div className='lg:flex justify-between max-w-282.5 mx-auto md:grid md:grid-cols-2 space-y-10 p-5'>
                <div className='space-y-2'>
                    <TypographyH5 className='text-natural-background'>
                        LiteBlog
                    </TypographyH5>

                    <TypographyP className='text-natural-background'>
                        Your destination for quality <br /> content and
                        inspiring stories.
                    </TypographyP>
                </div>
                <div className='space-y-2'>
                    <TypographyH5 className='text-natural-background'>
                        Quick Links
                    </TypographyH5>

                    <FooterNav items={quickLinksNav} />
                </div>
                <div className='space-y-2'>
                    <TypographyH5 className='text-natural-background'>
                        Categories
                    </TypographyH5>

                    <FooterNav items={categoryNav} />
                </div>
                <div className='space-y-2'>
                    <TypographyH5 className='text-natural-background'>
                        Follow Us
                    </TypographyH5>

                    <SocialMediaIcons className='mt-5' />
                </div>
            </div>
            <div className='lg:mt-17.5 md:mt-0 mt-3'>
                <TypographyP className='text-[#99A1AF] text-base font-inter not-italic text-center'>
                    © 2025 LiteBlog. All rights reserved. Developed by All Next
                    Ver Team
                </TypographyP>
            </div>
        </div>
    );
}

export default Footer;
