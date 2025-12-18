import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

function SocialMediaIcons() {
    return (
        <ul className='flex gap-7.5'>
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
