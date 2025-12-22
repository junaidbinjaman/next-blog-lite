'use client';
import {useSubscribe} from '@/hooks/useSubscribe';
import {useForm, SubmitHandler} from 'react-hook-form';

type Inputs = {
    email: string;
};

function SubscribeForm() {
    const mutation = useSubscribe();
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = (data) =>
        mutation.mutate(data.email);

    console.log(mutation.data);

    return (
        <div className='mt-12.5 mb-16'>
            <form
                className='general-shadow rounded-[10] py-1 px-1 flex w-fit gap-3.75'
                onSubmit={handleSubmit(onSubmit)}
            >
                <input
                    placeholder='Insert your email..'
                    {...register('email', {
                        required: true,
                        pattern:
                            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                        disabled: mutation.isPending,
                    })}
                    className='text-base not-italic font-normal outline-0 lg:w-75 md:w-70.5 pl-2'
                />
                <input
                    type='submit'
                    className='cursor-pointer font-semibold bg-accent text-natural-background py-2.5 px-7.5 rounded-[10px] active:scale-75 transition-all'
                    value='Subscribe Now'
                />
            </form>
            {mutation.isPending && (
                <small className='text-sm text-stone-600'>Subscribing..</small>
            )}
            {mutation.isSuccess && (
                <small className='text-sm text-green-600'>
                    you&apos;ve subscribed successfully
                </small>
            )}
            {mutation.isError && (
                <small className='text-sm text-red-600'>
                    you&apos;ve failed to subscribed: {mutation.error.message}
                </small>
            )}
            {errors.email?.type === 'required' && (
                <small className='text-sm text-red-600'>
                    Email is required..
                </small>
            )}
            {errors.email?.type === 'pattern' && (
                <small className='text-sm text-red-600'>Invalid email..</small>
            )}
        </div>
    );
}

export default SubscribeForm;
