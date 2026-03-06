import {InstagramIcon} from '@/components/icons/lucide-instagram';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyP} from '@/components/ui/paragraph';
import Image from 'next/image';

function InstagramFeedSection() {
    return (
        <section className='mb-15'>
            <div className='flex flex-col items-center justify-center gap-3'>
                <InstagramIcon
                    width={32}
                    height={32}
                    className='text-primary'
                />
                <TypographyH2 className='text-primary'>@LiteBlog</TypographyH2>
            </div>
            <TypographyP className='text-center mt-2'>
                Follow us on Instagram for daily inspiration and
                behind-the-scenes content.
            </TypographyP>

            <div className='flex items-center md:justify-center mx-auto gap-x-4 mt-7.5 overflow-y-auto py-2 p-5'>
                <Image
                    src='/images/instagram-images/instagram-image-1.jpg'
                    className='rounded-lg w-38.75 h-38.75 hover:rotate-12 hover:scale-90 transition-all duration-300 ease-in-out shrink-0'
                    width={155}
                    height={155}
                    alt='instagram image 1'
                />
                <Image
                    src='/images/instagram-images/instagram-image-3.jpg'
                    className='rounded-lg w-38.75 h-38.75 hover:rotate-12 hover:scale-90 transition-all duration-300 ease-in-out shrink-0'
                    width={155}
                    height={155}
                    alt='instagram image 1'
                />
                <Image
                    src='/images/instagram-images/instagram-image-4.jpg'
                    className='rounded-lg w-38.75 h-38.75 hover:rotate-12 hover:scale-90 transition-all duration-300 ease-in-out shrink-0'
                    width={155}
                    height={155}
                    alt='instagram image 1'
                />
                <Image
                    src='/images/instagram-images/instagram-image-5.jpg'
                    className='rounded-lg w-38.75 h-38.75 hover:rotate-12 hover:scale-90 transition-all duration-300 ease-in-out shrink-0'
                    width={155}
                    height={155}
                    alt='instagram image 1'
                />
                <Image
                    src='/images/instagram-images/instagram-image-6.jpg'
                    className='rounded-lg w-38.75 h-38.75 hover:rotate-12 hover:scale-90 transition-all duration-300 ease-in-out shrink-0'
                    width={155}
                    height={155}
                    alt='instagram image 1'
                />
            </div>
        </section>
    );
}

export default InstagramFeedSection;
