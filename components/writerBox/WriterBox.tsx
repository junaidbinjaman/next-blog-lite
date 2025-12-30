import {TypographyH4} from '../ui/h4';
import {Caption} from '../ui/caption';
import {FacebookIcon} from '../icons/lucide-facebook';
import Link from 'next/link';
import {InstagramIcon} from '../icons/lucide-instagram';
import {LinkedinIcon} from '../icons/lucide-linkedin';
import Image from 'next/image';
import {TypographyP} from '../ui/paragraph';

export type WriterBoxProps = {
    avatar: string;
    name: string;
    designation: string;
    bio: string;
    facebook: string;
    instagram: string;
    linkedin: string;
};

function WriterBox({
    avatar,
    name,
    designation,
    bio,
    facebook,
    instagram,
    linkedin,
}: WriterBoxProps) {
    if (!avatar) {
        avatar = '/fallback.jpg';
    }
    return (
        <div className='flex flex-col  items-center justify-center gap-y-2.5 shadow-md p-5 rounded-md bg-white'>
            <Image
                className='rounded-full shadow-md'
                src={avatar}
                width={120}
                height={120}
                alt='writer avatar'
            />
            <TypographyH4 className='text-primary'>{name}</TypographyH4>

            <Caption className='text-[#6A7282]'>{designation}</Caption>
            <TypographyP className='text-center'>{bio}</TypographyP>
            <TypographyP className='text-accent'>45 Articles</TypographyP>

            {/* Social media icons */}
            <div>
                <div className='flex gap-3 mt-2'>
                    {facebook && (
                        <Link href={facebook} target='_blank'>
                            <FacebookIcon
                                width={24}
                                height={24}
                                className='text-accent'
                            />
                        </Link>
                    )}
                    {instagram && (
                        <Link href={instagram} target='_blank'>
                            <InstagramIcon
                                width={24}
                                height={24}
                                className='text-accent'
                            />
                        </Link>
                    )}
                    {linkedin && (
                        <Link href={linkedin} target='_blank'>
                            <LinkedinIcon
                                width={24}
                                height={24}
                                className='text-accent'
                            />
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
}

export default WriterBox;
