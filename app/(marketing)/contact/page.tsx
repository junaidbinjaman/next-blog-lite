import { TypographyH1 } from '@/components/ui/h1'
import { TypographyP } from '@/components/ui/paragraph'
import React from 'react'

function page() {
  return (
    <div className='max-w-282.5 mx-auto'>
        <TypographyH1>
            Welcome to Contact Us Page
        </TypographyH1>
        <TypographyP>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos obcaecati itaque expedita totam animi ut enim dolores alias doloremque ipsam?
        </TypographyP>
    </div>
  )
}

export default page