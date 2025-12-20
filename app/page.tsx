import {TypographyH1} from '@/components/ui/h1';
import {TypographyP} from '@/components/ui/paragraph';
import Image from 'next/image';
import {FiUsers} from 'react-icons/fi';
import {FaRegComment, FaRegNewspaper} from 'react-icons/fa6';
import {MdShowChart} from 'react-icons/md';
import {CiClock2, CiGlobe} from 'react-icons/ci';
import FocusBox from '@/components/focusBox';
import {TypographyH2} from '@/components/ui/h2';
import FocusBox2 from '@/components/focusBox2';
import {LuBadgeCheck} from 'react-icons/lu';
import {TypographyH3} from '@/components/ui/h3';
import {IoBookOutline} from 'react-icons/io5';
import {TypographyH5} from '@/components/ui/h5';
import ServiceBox from './serviceBox';

export default function Home() {
    return (
        <div>
            <section className='max-w-282.5 mx-auto flex items-center mt-7.5 md:p-5 p-2.5'>
                <div className='lg:flex-1 space-y-6'>
                    <TypographyH1 className='text-primary lg:w-full md:w-4/6'>
                        Read Blogs That Inspires Everyday Life
                    </TypographyH1>

                    <TypographyP className='text-text-color'>
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomised words which
                        don&apos;t look even slightly believable. If you are
                        going to use a passage of Lorem Ipsum, you need to be
                        sure there isn&apos;t anything embarrassing hidden in
                        the middle of text.
                    </TypographyP>

                    <form className='general-shadow rounded-[10] py-1 px-1 flex w-fit gap-3.75 mt-12.5 mb-16'>
                        <input
                            placeholder='Insert your email..'
                            className='text-base not-italic font-normal outline-0 lg:w-75 md:w-70.5 pl-2'
                        />
                        <input
                            type='submit'
                            className='cursor-pointer font-semibold bg-accent text-natural-background py-2.5 px-7.5 rounded-[10px] active:scale-75 transition-all'
                            value='Subscribe Now'
                        />
                    </form>
                </div>
                <div className='lg:flex-1 hidden lg:block'>
                    <Image
                        src='/images/home-hero-banner.png'
                        width={509}
                        height={399}
                        alt='hero home page'
                    />
                </div>
            </section>
            <section className='bg-black-color p-8 mb-15'>
                <div className='flex items-center max-w-282.5 mx-auto justify-between'>
                    <div className='space-y-2'>
                        <FocusBox
                            icon={
                                <FiUsers
                                    className='text-natural-background'
                                    size={31}
                                />
                            }
                            title='15,000+'
                            caption='Active Readers'
                        />
                    </div>
                    <div className='space-y-2'>
                        <FocusBox
                            icon={
                                <FaRegNewspaper
                                    className='text-natural-background'
                                    size={31}
                                />
                            }
                            title='850+'
                            caption='Published Articles'
                        />
                    </div>
                    <div className='space-y-2'>
                        <FocusBox
                            icon={
                                <MdShowChart
                                    className='text-natural-background'
                                    size={31}
                                />
                            }
                            title='2.5M+'
                            caption='Monthly Views'
                        />
                    </div>
                    <div className='space-y-2'>
                        <FocusBox
                            icon={
                                <CiGlobe
                                    className='text-natural-background'
                                    size={31}
                                />
                            }
                            title='120+'
                            caption='Countries Reached'
                        />
                    </div>
                </div>
            </section>
            <section className='mb-15 max-w-282.5 mx-auto flex space-x-12.5 item'>
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
                            We&apos;re a passionate team of writers, creators,
                            and storytellers dedicated to bringing you
                            high-quality content that inspires, educates, and
                            entertains. Our mission is to create a space where
                            ideas flourish and voices are heard.
                        </TypographyP>
                    </div>
                    <div className='space-y-12.5'>
                        <TypographyP className='text-text-color'>
                            Since our launch, we&apos;ve grown into a vibrant
                            community of readers and contributors from around
                            the world, sharing stories that matter and
                            perspectives that challenge the status quo.
                        </TypographyP>

                        <div className='flex justify-between max-w-5/6'>
                            <FocusBox2
                                icon={
                                    <FiUsers
                                        className='text-stone-800'
                                        size={20}
                                    />
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
            <section className='max-w-282.5 bg-[#f0f0f0] mx-auto p-10 rounded-lg mb-12.5 space-y-16.5'>
                <div className='space-y-5 text-center'>
                    <TypographyH2 className='text-center text-primary'>
                        What We Offer
                    </TypographyH2>
                    <TypographyH3 className='max-w-4/6 mx-auto text-[#4A5565]'>
                        Discover the features that make LiteBlog your go-to
                        destination for quality reading and learning.
                    </TypographyH3>
                </div>
                <div className='flex justify-between'>
                    <ServiceBox
                        icon={
                            <IoBookOutline
                                size={23}
                                className='text-stone-700'
                            />
                        }
                        title='Quality Content'
                    >
                        Carefully curated articles written by expert writers and
                        industry professionals across various topics.
                    </ServiceBox>
                    <ServiceBox
                        icon={
                            <CiClock2
                                size={23}
                                className='text-stone-700'
                            />
                        }
                        title='Daily Updates'
                    >
                        Fresh content published daily to keep you informed and inspired with the latest insights and trends.
                    </ServiceBox>
                    <ServiceBox
                        icon={
                            <CiGlobe
                                size={23}
                                className='text-stone-700'
                            />
                        }
                        title='Global Perspectives'
                    >
                        Diverse voices from around the world sharing unique perspectives and cultural insights.
                    </ServiceBox>
                    <ServiceBox
                        icon={
                            <FaRegComment
                                size={23}
                                className='text-stone-700'
                            />
                        }
                        title='Community Driven'
                    >
                        Engage with authors and fellow readers through comments, discussions, and community events.
                    </ServiceBox>
                </div>
            </section>
        </div>
    );
}
