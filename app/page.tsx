import {TypographyP} from '@/components/ui/paragraph';
import Image from 'next/image';
import {FiUsers} from 'react-icons/fi';
import {FaRegComment, FaRegNewspaper} from 'react-icons/fa6';
import {MdShowChart} from 'react-icons/md';
import {CiClock2, CiGlobe} from 'react-icons/ci';
import {TypographyH2} from '@/components/ui/h2';
import FocusBox2 from '@/components/focusBox2/FocusBox2';
import {LuBadgeCheck} from 'react-icons/lu';
import {TypographyH3} from '@/components/ui/h3';
import {IoBookOutline} from 'react-icons/io5';
import ServiceBox from './serviceBox';
import { TypographyH5 } from '@/components/ui/h5';
import HeroSection from './(sections)/HeroSection';
import FocusSection from './(sections)/FocusSection';
import AboutSection from './(sections)/AboutSection';


export default function Home() {
    return (
        <>
            {/* Hero area */}
            <HeroSection />

            {/* Focus box section */}
            <FocusSection />

            {/* About us section */}
            <AboutSection />

            {/* Service section */}
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
                        icon={<CiClock2 size={23} className='text-stone-700' />}
                        title='Daily Updates'
                    >
                        Fresh content published daily to keep you informed and
                        inspired with the latest insights and trends.
                    </ServiceBox>
                    <ServiceBox
                        icon={<CiGlobe size={23} className='text-stone-700' />}
                        title='Global Perspectives'
                    >
                        Diverse voices from around the world sharing unique
                        perspectives and cultural insights.
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
                        Engage with authors and fellow readers through comments,
                        discussions, and community events.
                    </ServiceBox>
                </div>
            </section>

            {/* Category section */}
            <section className='max-w-282.5 mx-auto mb-15'>
                <div>
                    <TypographyH2 className='text-primary'>
                    Explore Categories
                </TypographyH2>
                <TypographyP>
                    Browse through our diverse range of topics and find content that interests you.
                </TypographyP>
                </div>
                <div>
                    <div className='w-80 h-63.75 flex flex-col items-center justify-center bg-red-300 rounded-md'>
                        <TypographyH5>Technology</TypographyH5>
                        <TypographyP>95 Articles</TypographyP>
                    </div>
                </div>
            </section>
        </>
    );
}
