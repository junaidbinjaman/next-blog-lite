import clsx from 'clsx';
import {TypographyH5} from '../ui/h5';
import {TypographyP} from '../ui/paragraph';
import Link from 'next/link';

export type CategoryBoxProps = {
    title: string;
    numOfArticles: number;
    href: string;
    thumbnail?: string;
    bgColor?: string;
    headingColor?: string;
    articleTextColor?: string;
};

function CategoryBox({
    title,
    numOfArticles,
    href,
    thumbnail,
    bgColor = '#F54927',
    headingColor,
    articleTextColor,
}: CategoryBoxProps) {
    const fallbackThumbnail =
        'https://www.veggistips.no/wp-content/plugins/affiliatex/src/images/fallback.jpg';
    return (
        <Link href={href}>
            <div
                style={{
                    backgroundImage: `url(${thumbnail || fallbackThumbnail})`,
                }}
                className='relative bg-cover bg-center w-80 h-63.75 flex flex-col items-center justify-center bg-red-300 rounded-md overflow-hidden'
            >
                <div
                    style={{backgroundColor: `${bgColor}99`}}
                    className='absolute inset-0'
                ></div>
                <div className='z-10'>
                    <TypographyH5 className={clsx('text-white', headingColor)}>
                        {title}
                    </TypographyH5>
                    <TypographyP
                        className={clsx(
                            'text-white text-center',
                            articleTextColor
                        )}
                    >
                        Articles {numOfArticles}
                    </TypographyP>
                </div>
            </div>
        </Link>
    );
}

export default CategoryBox;
