import React from 'react'
import { StarFilledIcon } from '../icons/ant-design-star-filled'
import { StarOutlinedIcon } from '../icons/ant-design-star-outlined'
import { TypographyP } from '../ui/paragraph'
import { TypographyH5 } from '../ui/h5'

type ReviewBoxProps = {
    star: number;
}

function ReviewBox({star}: ReviewBoxProps) {
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
                        <TypographyP>
                            LiteBlog has become my daily go-to for quality
                            content. The diversity of topics and the quality of
                            writing is outstanding.
                        </TypographyP>
                    </div>
                    <div>
                        <TypographyH5 className='text-primary'>
                            Sarah Johnson
                        </TypographyH5>
                        <TypographyP>Content Creator</TypographyP>
                    </div>
                </div>
  )
}

export default ReviewBox