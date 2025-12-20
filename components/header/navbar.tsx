'use client';
import React from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import {usePathname} from 'next/navigation';

type NavbarProps = {
    navItems: {
        label: string;
        href: string;
    }[];
    className?: string;
    isVertical?: boolean;
};

function Navbar({navItems, className, isVertical = false}: NavbarProps) {
    const pathName = usePathname();
    return (
        <div className={clsx(className)}>
            <ul className={clsx(isVertical ? 'space-y-3' : 'flex gap-10')}>
                {navItems.map((el) => (
                    <li key={el.href}>
                        <Link
                            href={el.href}
                            className={clsx(
                                'text-base font-semibold font-inter text-stone-800 hover:text-stone-800/70',
                                pathName === el.href &&
                                    'underline underline-offset-5 decoration-2 decoration-stone-800'
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
