import CategoryBox from '@/components/categoryBox/CategoryBox'
import { TypographyH1 } from '@/components/ui/h1'
import { TypographyP } from '@/components/ui/paragraph'
import React from 'react'

function Categories() {
  return (
    <section>
        <TypographyH1>Explore Categories</TypographyH1>
        <TypographyP>Browse through our diverse range of topics and find content that interests you.</TypographyP>
        <CategoryBox />
    </section>
  )
}

export default Categories