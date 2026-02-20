import Link from 'next/link';
import {TypographyP} from '../ui/paragraph';
import {TypographyH4} from '../ui/h4';
import {LuCalendar} from 'react-icons/lu';
import {TypographyH5} from '../ui/h5';
import {FaRegClock} from 'react-icons/fa';

type FeatureBlogBoxProps = {
    thumbnail?: string;
    href: string;
    title?: string;
    excerpt?: string;
    category?: string;
    date?: string;
    readTime?: string;
};

function FeatureBlogBox({
    thumbnail,
    href,
    category,
    title,
    excerpt,
    date,
    readTime,
}: FeatureBlogBoxProps) {
    if (!thumbnail) {
        thumbnail = '/fallback.jpg';
    }

    if (!title) {
        title = 'Untitled';
    }
    return (
        <div className='flex flex-col md:flex-row space-x-10 shadow-sm rounded-md overflow-hidden'>
            <Link href={href}>
                <div
                    data-testid='thumbnail'
                    style={{
                        backgroundImage: `url(${thumbnail})`,
                    }}
                    className='flex-2 
                        bg-cover 
                        bg-center
                        w-125 
                        h-63.75 
                        rounded-tl-md 
                        md:rounded-bl-md 
                        p-3 pr-5
                        transform transition-transform duration-300 ease-in-out
                        hover:scale-105
                    '
                >
                    <TypographyP className='bg-white py-1 px-2.5 rounded-md w-fit'>
                        {category}
                    </TypographyP>
                </div>
            </Link>
            <div className='flex-3 flex flex-col gap-5 justify-center p-3'>
                <div>
                    <Link href={href}>
                        <TypographyH4 className='text-primary'>
                            {title}
                        </TypographyH4>
                    </Link>
                    <TypographyP className='text-text-color mt-3'>
                        {excerpt}
                    </TypographyP>
                </div>
                <div className='flex items-center space-x-3'>
                    <div className='flex items-center gap-2.5'>
                        <LuCalendar className='text-[rgb(106,114,130)]' />
                        <TypographyH5 className='text-base text-[#6A7282]'>
                            {date}
                        </TypographyH5>
                    </div>
                    <div className='flex items-center gap-2.5'>
                        <FaRegClock className='text-[rgb(106,114,130)]' />
                        <TypographyH5 className='text-base text-[#6A7282]'>
                            {readTime}
                        </TypographyH5>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeatureBlogBox;
