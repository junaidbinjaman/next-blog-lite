import {Button} from '@/components/ui/button';
import {TypographyH2} from '@/components/ui/h2';
import {Input} from '@/components/ui/input';
import {TypographyP} from '@/components/ui/paragraph';

function NewsLetterSubscriptionBox() {
    return (
        <div className='max-w-282.5 mx-auto mt-12 mb-15 bg-[#f1f1f1] flex flex-col items-center justify-center rounded-lg p-15 space-y-6'>
            <TypographyH2 className='text-primary text-center'>
                Subscribe to Our Newsletter
            </TypographyH2>
            <TypographyP className='text-center'>
                Get the latest articles and insights delivered directly to your
                inbox.
            </TypographyP>
            <div className='flex flex-col md:flex-row items-center md:items-start justify-center gap-4'>
                <Input
                    placeholder='Enter your email'
                    className='w-73.5 h-12.5'
                />
                <Button className='w-34 h-12.5'>Subscribe</Button>
            </div>
        </div>
    );
}

export default NewsLetterSubscriptionBox;
