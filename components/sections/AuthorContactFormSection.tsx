'use client';
import { Button } from '@/components/ui/button';
import { TypographyH2 } from '@/components/ui/h2';
import { Input } from '@/components/ui/input';
import { TypographyP } from '@/components/ui/paragraph';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@radix-ui/react-label';
import { useForm, SubmitHandler } from 'react-hook-form';

type AuthorContactFormInputs = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    source: string;
    message: string;
};

function AuthorContactFormSection() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthorContactFormInputs>();

    const onSubmit: SubmitHandler<AuthorContactFormInputs> = (data) => {
        console.log('Form submitted:', data);
    };

    return (
        <section className='max-w-282.5 mx-auto my-15 px-5'>
            <div className='flex flex-col items-center justify-center mb-10'>
                <TypographyH2 className='text-primary text-center'>
                    What We Offer
                </TypographyH2>
                <TypographyP className='text-center'>
                    Discover the features that make LiteBlog your go-to destination for quality reading and learning.
                </TypographyP>
            </div>

            <form
                className='max-w-3xl mx-auto p-7.5 bg-white rounded-lg flex flex-col gap-6'
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='leading-7'>
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input
                            id='firstName'
                            placeholder='First Name'
                            {...register('firstName', { required: true })}
                        />
                    </div>
                    <div className='leading-7'>
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input
                            id='lastName'
                            placeholder='Last Name'
                            {...register('lastName', { required: true })}
                        />
                    </div>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                    <div className='leading-7'>
                        <Label htmlFor='email'>Email</Label>
                        <Input
                            id='email'
                            type='email'
                            placeholder='your@email.com'
                            {...register('email', { required: true })}
                        />
                    </div>
                    <div className='leading-7'>
                        <Label htmlFor='phone'>Phone Number</Label>
                        <Input
                            id='phone'
                            placeholder='0170x'
                            {...register('phone', { required: true })}
                        />
                    </div>
                </div>

                <div className='leading-7'>
                    <Label htmlFor='source'>There did you find us</Label>
                    <select
                        id='source'
                        className='w-full px-3 py-2.5 border border-input rounded-md transition-[color,box-shadow] outline-none focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:ring-[3px] bg-transparent dark:bg-input/30'
                        {...register('source', { required: true })}
                    >
                        <option value=''>How can we help?</option>
                        <option value='google'>Google</option>
                        <option value='social_media'>Social Media</option>
                        <option value='friend'>Friend Referral</option>
                        <option value='other'>Other</option>
                    </select>
                </div>

                <div className='leading-7'>
                    <Label htmlFor='message'>Message</Label>
                    <Textarea
                        id='message'
                        placeholder='Your message...'
                        className='min-h-30'
                        {...register('message', { required: true })}
                    />
                </div>

                <Button type='submit'>Send Message</Button>
            </form>
        </section>
    );
}

export default AuthorContactFormSection;
