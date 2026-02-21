import Navbar from './Navbar';
import Link from 'next/link';
import MobileNav from './MobileNav';
import { TypographyH3 } from '@/components/ui/h3';
import SocialMediaIcons from '@/components/socialMediaIcons/SocialMediaIcons';
import Image from 'next/image';

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
                    
                        <Image
                            src='/images/site-logo.png'
                            alt='logo'
                            width={130}
                            height={50}
                            className='inline-block mr-2'
                        />

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
