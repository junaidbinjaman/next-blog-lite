import React from 'react';
import Image from 'next/image';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyP} from '@/components/ui/paragraph';
import FocusBox2 from '@/components/focusBox2/FocusBox2';
import {FiUsers} from 'react-icons/fi';
import {LuBadgeCheck} from 'react-icons/lu';
import {MdShowChart} from 'react-icons/md';

function AboutSection() {
    return (
        <section className='mb-15 max-w-282.5 mx-auto flex flex-col md:flex-row space-y-5 md:space-x-12.5 md:item px-5'>
            <Image
                src={'/images/home-page-about-image.jpg'}
                width={479.837}
                height={359.876}
                alt='home'
                className='shadow-md rounded-md flex-3/6'
            />
            <div className='space-y-10 flex-3/6'>
                <div className='space-y-3'>
                    <TypographyH2 className='text-primary'>
                        About LiteBlog
                    </TypographyH2>
                    <TypographyP className='text-text-color'>
                        We&apos;re a passionate team of writers, creators, and
                        storytellers dedicated to bringing you high-quality
                        content that inspires, educates, and entertains. Our
                        mission is to create a space where ideas flourish and
                        voices are heard.
                    </TypographyP>
                </div>
                <div className='space-y-12.5'>
                    <TypographyP className='text-text-color'>
                        Since our launch, we&apos;ve grown into a vibrant
                        community of readers and contributors from around the
                        world, sharing stories that matter and perspectives that
                        challenge the status quo.
                    </TypographyP>

                    <div className='flex justify-between max-w-5/6'>
                        <FocusBox2
                            icon={
                                <FiUsers className='text-stone-800' size={20} />
                            }
                            label='10k+'
                            caption='Readers'
                        />
                        <FocusBox2
                            icon={
                                <LuBadgeCheck
                                    className='text-stone-800'
                                    size={20}
                                />
                            }
                            label='500+'
                            caption='Articles'
                        />
                        <FocusBox2
                            icon={
                                <MdShowChart
                                    className='text-stone-800'
                                    size={20}
                                />
                            }
                            label='50+'
                            caption='Writers'
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
