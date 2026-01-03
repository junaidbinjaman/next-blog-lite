import React from 'react'
import { StarFilledIcon } from '../icons/ant-design-star-filled'
import { StarOutlinedIcon } from '../icons/ant-design-star-outlined'
import { TypographyP } from '../ui/paragraph'
import { TypographyH5 } from '../ui/h5'

export type ReviewBoxProps = {
    star: number;
    description: string;
    name: string;
    designation: string;
}

function ReviewBox({star, description, name, designation}: ReviewBoxProps) {
    const emptyStar = 5 - star;
  return (
    <div className='shadow-md rounded-md p-5! bg-white space-y-7'>
                    <div>
                        <div className='flex mb-3'>
                            {Array.from({length: star}, (_, index) => (
                                <StarFilledIcon
                                    key={index}
                                    size={23}
                                    className='text-[#FDC700]'
                                    data-testid="rating-star"
                                />
                            ))}
                            {Array.from({length: emptyStar}, (_, index) => (
                                <StarOutlinedIcon
                                    key={index}
                                    size={23}
                                    className='text-gray-400'
                                />
                            ))}
                        </div>
                        <TypographyP>{description}</TypographyP>
                    </div>
                    <div>
                        <TypographyH5 className='text-primary'>{name}</TypographyH5>
                        <TypographyP>{designation}</TypographyP>
                    </div>
                </div>
  )
}

export default ReviewBox
