import React from 'react'
import { TypographyH1 } from '../ui/h1'
import { TypographyH2 } from '../ui/h2'
import { TypographyH3 } from '../ui/h3'
import { TypographyH4 } from '../ui/h4'
import { TypographyH5 } from '../ui/h5'
import { TypographyH6 } from '../ui/h6'
import { TypographyP } from '../ui/paragraph'

function Header() {
  return (
    <div>
      <TypographyH1 className='text-red-500'>Heading 1 title</TypographyH1>
      <TypographyH2>Heading 2 title</TypographyH2>
      <TypographyH3>Heading 3 title</TypographyH3>
      <TypographyH4>Heading 4 title</TypographyH4>
      <TypographyH5>Heading 5 title</TypographyH5>
      <TypographyH6>Heading 6 title</TypographyH6>
      <TypographyP>Body text starts here: The king, seeing how much happier his subjects were, realized the error of
      his ways and repealed the joke tax.</TypographyP>
    </div>
  )
}

export default Header