'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';

function Navbar({navItems}: {navItems: {label: string; href: string}[]}) {
    const isActive: boolean = false;
    const pathName = usePathname();

    
    return (
        <div>
            <ul className='flex gap-10'>
                {navItems.map((el) => (
                    <li key={el.href}>
                        <Link
                            href={el.href}
                            className={clsx(
                                'text-base font-semibold font-inter text-stone-800 hover:text-stone-800/70',
                                pathName === el.href && 'underline underline-offset-5 decoration-2 decoration-stone-800'
                            )}
                        >
                            {el.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Navbar;
