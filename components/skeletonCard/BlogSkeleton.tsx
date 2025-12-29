import {Skeleton} from '@/components/ui/skeleton';

export default function SkeletonCard() {
    const repeat = 4;

    return (
        <div className='grid grid-cols-2 gap-10'>
            {Array.from({length: repeat}, (_, index) => (
                <div key={index} className='flex flex-col space-y-3'>
                    <Skeleton className='h-62.5 w-125 rounded-md bg-gray-200' />
                    <div className='space-y-5'>
                        <Skeleton className='h-4 w-87.5 bg-gray-200 rounded-md' />
                        <div className='space-y-2'>
                            <Skeleton className='h-2 w-120 bg-gray-200 rounded-md' />
                            <Skeleton className='h-2 w-90 bg-gray-200 rounded-md' />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
