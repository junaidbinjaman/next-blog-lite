import Navbar from './navbar';
import Link from 'next/link';
import {TypographyH3} from '../ui/h3';
import SocialMediaIcons from '../socialMediaIcons';
import MobileNav from './mobileNav';

function Header() {
    const nav = [
        {
            label: 'Home',
            href: '/',
        },
        {
            label: 'About Us',
            href: '/about-us',
        },
        {
            label: 'Blogs',
            href: '/blogs',
        },
        {
            label: 'Writer',
            href: '/writer',
        },
        {
            label: 'Contact',
            href: '/contact',
        },
    ];
    return (
        <div>
            <div className='flex justify-between max-w-282.5 mx-auto items-center py-2.5 md:px-5 px-2.5'>
                <Link href='/'>
                    <TypographyH3 className='text-primary font-inter'>
                        NextBlog Lite
                    </TypographyH3>
                </Link>
                <Navbar navItems={nav} className='hidden lg:block' />
                <div className='md:flex space-x-15'>
                    <SocialMediaIcons className='hidden md:flex' />
                    <MobileNav className='lg:hidden' />
                </div>
            </div>
        </div>
    );
}

export default Header;
