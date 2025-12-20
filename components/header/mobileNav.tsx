'use client';
import clsx from 'clsx';
import React, {useState} from 'react';
import {FaBars} from 'react-icons/fa';
import {IoClose} from 'react-icons/io5';
import Navbar from './navbar';
import {TypographyH4} from '../ui/h4';
import {TypographyP} from '../ui/paragraph';

function MobileNav({className}: {className?: string}) {
    const [isOpen, setIsOpen] = useState(false);

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
        <div className={clsx(
            className
        )}>
            <FaBars
                onClick={() => setIsOpen(true)}
                fontSize={25}
                className='text-primary transition-all cursor-pointer'
            />

            {isOpen && (
                <div
                    className='fixed inset-0 z-30 bg-black/25'
                    onClick={() => setIsOpen(false)}
                />
            )}

            <div
                className={clsx(
                    'fixed top-0 right-0 h-full w-4/5 bg-white z-40 transform transition-transform duration-300 p-2.5',
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                )}
            >
                <div className='flex mb-5'>
                    <TypographyH4 className='font-extrabold text-primary'>
                        NextBlog Lite
                    </TypographyH4>

                    <IoClose
                        onClick={() => setIsOpen(false)}
                        fontSize={25}
                        className='text-primary transition-all z-50 ml-auto cursor-pointer'
                    />
                </div>
                <Navbar navItems={nav} isVertical={true} />

                <hr className='mt-10' />
                <TypographyP className='text-center text-stone-400 mt-4 text-sm'>
                    &copy; All Right Reserved by All Next Ver
                </TypographyP>
            </div>
        </div>
    );
}

export default MobileNav;
