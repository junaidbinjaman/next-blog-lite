"use client";
import {MailIcon} from '@/components/icons/lucide-mail';
import {MapPinIcon} from '@/components/icons/lucide-map-pin';
import {PhoneIcon} from '@/components/icons/lucide-phone';
import {Button} from '@/components/ui/button';
import {TypographyH2} from '@/components/ui/h2';
import {TypographyH5} from '@/components/ui/h5';
import {Input} from '@/components/ui/input';
import {TypographyP} from '@/components/ui/paragraph';
import {Textarea} from '@/components/ui/textarea';
import {Label} from '@radix-ui/react-label';
import { useForm, SubmitHandler } from "react-hook-form"

type Inputs = {
    name: string;
    email: string;
    subject: string;
    textarea: string;
};

function ContactSection() {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <section className='max-w-282.5 mx-auto mt-12 mb-15 flex gap-12'>
            <div className='flex-1/2'>
                <TypographyH2 className='text-primary'>
                    Get In Touch
                </TypographyH2>
                <TypographyP>
                    Have questions or feedback? We&apos;d love to hear from you.
                    Send us a message and we&apos;ll respond as soon as
                    possible.
                </TypographyP>
                <div className='flex items-center space-x-4 mt-6'>
                    <div className='bg-[#e9e9e9] rounded-md p-3'>
                        <MailIcon width={20} height={20} color='#000' />
                    </div>
                    <div>
                        <TypographyH5>Email</TypographyH5>
                        <TypographyP>hello@liteblog.com</TypographyP>
                    </div>
                </div>
                <div className='flex items-center space-x-4 mt-6'>
                    <div className='bg-[#e9e9e9] rounded-md p-3'>
                        <PhoneIcon width={20} height={20} color='#000' />
                    </div>
                    <div>
                        <TypographyH5>Phone</TypographyH5>
                        <TypographyP>+1 (555) 123-4567</TypographyP>
                    </div>
                </div>
                <div className='flex items-center space-x-4 mt-6'>
                    <div className='bg-[#e9e9e9] rounded-md p-3'>
                        <MapPinIcon />
                    </div>
                    <div>
                        <TypographyH5>Phone</TypographyH5>
                        <TypographyP>
                            123 Blog Street, Content City, CC 12345
                        </TypographyP>
                    </div>
                </div>
            </div>
            <div className='flex-1/2'>
                <form
                    className='p-7.5 bg-white rounded-lg flex flex-col gap-8'
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <p className='leading-7'>
                        <Label htmlFor='name'>Name</Label>
                        <Input
                            id='name'
                            placeholder='Your name'
                            {...register('name', {required: true})}
                        />
                    </p>
                    <p className='leading-7'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            placeholder='Your email'
                            {...register('email', {required: true})}
                        />
                    </p>
                    <p className='leading-7'>
                        <Label htmlFor='subject'>Subject</Label>
                        <Input
                            id='subject'
                            placeholder='How can we help'
                            {...register('subject', {required: true})}
                        />
                    </p>
                    <p className='leading-7'>
                        <Label htmlFor='message'>Message</Label>
                        <Textarea
                            id='message'
                            placeholder='Your message...'
                            className='min-h-30'
                            {...register('textarea')}
                        />
                    </p>
                    <Button type='submit'>Send Message</Button>
                </form>
            </div>
        </section>
    );
}

export default ContactSection;
