import {TypographyH5} from '../ui/h5';
import {TypographyP} from '../ui/paragraph';
import {Button} from '../ui/button';
import {CheckIcon} from 'lucide-react';
import clsx from 'clsx';
import Link from 'next/link';

type PricingBoxProps = {
    price: number;
    title: string;
    buttonTitle: string;
    period: string;
    shortDescription: string;
    features: string[];
    type: 'default' | 'popular';
};

function PricingBox({
    price,
    title,
    buttonTitle,
    period,
    shortDescription,
    features,
    type,
}: PricingBoxProps) {
    return (
        <div
            className={clsx(
                'p-8 shadow-sm rounded-lg flex flex-col gap-6.5',
                type === 'popular' ? 'shadow-lg! -mb-4' : ''
            )}
        >
            <div className='flex flex-col gap-2.5'>
                {type === 'popular' && (
                    <TypographyP className='bg-primary rounded-full px-3 py-1 text-white w-fit'>
                        Most Popular
                    </TypographyP>
                )}
                <TypographyH5
                    className={clsx(type !== 'popular' && 'text-primary')}
                >
                    {title}
                </TypographyH5>
            </div>
            <div>
                <TypographyP className='text-black'>
                    ${price}/ {period}
                </TypographyP>
                <TypographyP>{shortDescription}</TypographyP>
            </div>
            <Link href='/contact'>
                <Button
                    variant='outline'
                    className={clsx(
                        'w-full shadow-none py-6! hover:bg-[#F3F4F6]/40 transition-colors duration-300',
                        type === 'popular'
                            ? 'bg-black text-white'
                            : 'bg-[#F3F4F6]'
                    )}
                >
                    {buttonTitle}
                </Button>
            </Link>
            <div className='flex flex-col gap-y-3'>
                {features.map((el: string, index: number) => (
                    <div key={index} className='flex gap-4 items-center'>
                        <CheckIcon
                            className='text-accent'
                            width={20}
                            height={20}
                        />
                        <TypographyP>{el}</TypographyP>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default PricingBox;
