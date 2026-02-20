import {TypographyH2} from '@/components/ui/h2';
import {TypographyP} from '@/components/ui/paragraph';
import Image from 'next/image';

function BrandSection() {
    return (
        <section className='max-w-252 mx-auto py-15 px-10 bg-[#f0f0f0] mb-15 rounded-md'>
            <TypographyH2 className='text-primary text-center'>
                Trusted By Leading Brands
            </TypographyH2>
            <TypographyP className='text-center'>
                Join the companies that trust LiteBlog for quality content.
            </TypographyP>
            <div className='grid grid-cols-3 md:grid-cols-7 gap-10 mt-10'>
                <div className='bg-white rounded-md p-2.5 shadow-sm'>
                    <Image
                        src='/images/brand-logo/nasa-logo.png'
                        width={77}
                        height={77}
                        alt='nasa logo'
                    />
                </div>
                <div className='bg-white rounded-md p-2.5 shadow-sm'>
                    <Image
                        src='/images/brand-logo/all-next-ver-logo.png'
                        width={77}
                        height={77}
                        alt='nasa logo'
                    />
                </div>
                <div className='bg-white rounded-md p-2.5 shadow-sm'>
                    <Image
                        src='/images/brand-logo/apple-logo.png'
                        width={77}
                        height={77}
                        alt='nasa logo'
                    />
                </div>
                <div className='bg-white rounded-md p-2.5 shadow-sm'>
                    <Image
                        src='/images/brand-logo/facebook.png'
                        width={77}
                        height={77}
                        alt='nasa logo'
                    />
                </div>
                <div className='bg-white rounded-md p-2.5 shadow-sm'>
                    <Image
                        src='/images/brand-logo/figma-logo.png'
                        width={77}
                        height={77}
                        alt='nasa logo'
                    />
                </div>
                <div className='bg-white rounded-md p-2.5 shadow-sm'>
                    <Image
                        src='/images/brand-logo/all-next-ver-logo.png'
                        width={77}
                        height={77}
                        alt='nasa logo'
                    />
                </div>
                <div className='bg-white rounded-md p-2.5 shadow-sm'>
                    <Image
                        src='/images/brand-logo/tesla-logo.png'
                        width={77}
                        height={77}
                        alt='nasa logo'
                    />
                </div>
            </div>
        </section>
    );
}

export default BrandSection;
