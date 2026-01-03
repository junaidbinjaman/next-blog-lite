import {CheckIcon} from '@/components/icons/lucide-check';
import {Button} from '@/components/ui/button';
import {Caption} from '@/components/ui/caption';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyH5} from '@/components/ui/h5';
import {TypographyP} from '@/components/ui/paragraph';
import React from 'react';

function PricingSection() {
    return (
        <section className='mb-12.5 max-w-250 mx-auto'>
            <TypographyH2 className='text-primary text-center'>
                Simple, Transparent Pricing
            </TypographyH2>
            <div className='grid grid-cols-3 space-x-4'>
                <div className='p-8 shadow-sm rounded-lg flex flex-col gap-6.5'>
                    <TypographyH5 className='text-primary'>Free</TypographyH5>
                    <div>
                        <TypographyP>$0/ forever</TypographyP>
                        <TypographyP>Perfect for casual readers</TypographyP>
                    </div>
                    <Button variant='outline' className='w-full shadow-none py-6! bg-[#F3F4F6] hover:bg-[#F3F4F6]/40'>
                        Get Started
                    </Button>
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Access to most articles</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Weekly newsletter</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Comment on posts</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Mobile responsive</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Basic search</TypographyP>
                        </div>
                    </div>
                </div>
                <div className='p-8 shadow-sm rounded-lg flex flex-col gap-6.5'>
                    <TypographyH5 className='text-primary'>Free</TypographyH5>
                    <div>
                        <TypographyP>$0/ forever</TypographyP>
                        <TypographyP>Perfect for casual readers</TypographyP>
                    </div>
                    <Button variant='outline' className='w-full shadow-none py-6! bg-[#F3F4F6] hover:bg-[#F3F4F6]/40'>
                        Get Started
                    </Button>
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Access to most articles</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Weekly newsletter</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Comment on posts</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Mobile responsive</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Basic search</TypographyP>
                        </div>
                    </div>
                </div>
                <div className='p-8 shadow-sm rounded-lg flex flex-col gap-6.5'>
                    <TypographyH5 className='text-primary'>Free</TypographyH5>
                    <div>
                        <TypographyP>$0/ forever</TypographyP>
                        <TypographyP>Perfect for casual readers</TypographyP>
                    </div>
                    <Button variant='outline' className='w-full shadow-none py-6! bg-[#F3F4F6] hover:bg-[#F3F4F6]/40'>
                        Get Started
                    </Button>
                    <div className='flex flex-col gap-y-3'>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Access to most articles</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Weekly newsletter</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Comment on posts</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Mobile responsive</TypographyP>
                        </div>
                        <div className='flex gap-3 items-center'>
                            <CheckIcon
                                className='text-accent'
                                width={20}
                                height={20}
                            />
                            <TypographyP>Basic search</TypographyP>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;
