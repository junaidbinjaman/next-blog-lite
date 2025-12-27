import {TypographyH2} from '@/components/ui/h2';
import {TypographyH3} from '@/components/ui/h3';
import React from 'react';
import ServiceBox from '../serviceBox';
import {IoBookOutline} from 'react-icons/io5';
import {CiClock2, CiGlobe} from 'react-icons/ci';
import {FaRegComment} from 'react-icons/fa';

function ServiceSection() {
    return (
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
                        <IoBookOutline size={23} className='text-stone-700' />
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
                    icon={<FaRegComment size={23} className='text-stone-700' />}
                    title='Community Driven'
                >
                    Engage with authors and fellow readers through comments,
                    discussions, and community events.
                </ServiceBox>
            </div>
        </section>
    );
}

export default ServiceSection;
