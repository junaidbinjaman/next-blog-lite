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
            <div className='flex justify-between max-w-282.5 mx-auto'>
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

                    <SocialMediaIcons />
                </div>
            </div>
            <div className='mt-17.5'>
                <TypographyP className='text-[#99A1AF] text-base font-inter not-italic text-center'>
                    © 2025 LiteBlog. All rights reserved. Developed by All Next
                    Ver Team
                </TypographyP>
            </div>
        </div>
    );
}

export default Footer;
