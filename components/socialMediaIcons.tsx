import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';

function SocialMediaIcons({className}: {className?: string}) {
    return (
        <ul className={clsx(
            'flex gap-7.5',
            className
        )}>
            <li>
                <Link href='#'>
                    <Image
                        src='/images/linkedin.svg'
                        width={28}
                        height={28}
                        alt='linkedin'
                    />
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <Image
                        src='/images/facebook.svg'
                        width={28}
                        height={28}
                        alt='facebook'
                    />
                </Link>
            </li>
            <li>
                <Link href='#'>
                    <Image
                        src='/images/instagram.svg'
                        width={28}
                        height={28}
                        alt='instagram'
                    />
                </Link>
            </li>
        </ul>
    );
}

export default SocialMediaIcons;
