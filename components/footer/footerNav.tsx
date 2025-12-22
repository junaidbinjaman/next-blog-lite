import Link from 'next/link'
import React, { ReactNode } from 'react'

function FooterNav({items}: {items: {label: ReactNode, href: string}[]}) {
  return (
    <div>
        <ul className='space-y-2.5'>
            {items.map(el => (
                <li key={el.href}>
                    <Link href={el.href} className='text-base font-source-sans-pro not-italic font-normal text-natural-background'>
                        {el.label}
                    </Link>
                </li>
            ))}
        </ul>
    </div>
  )
}

export default FooterNav