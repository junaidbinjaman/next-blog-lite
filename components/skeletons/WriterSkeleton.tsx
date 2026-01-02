import {Skeleton} from '@/components/ui/skeleton';

export default function WriterSkeleton({repeat = 1}: {repeat?: number}) {
    return (
        <div className='grid grid-cols-4 gap-7.5'>
            {Array.from({length: repeat}, (_, index) => (
                <div
                    key={index}
                    className='flex flex-col space-y-6 p-5 rounded-md shadow-md bg-white'
                >
                    <Skeleton className='h-30 w-30 rounded-full bg-gray-200 mx-auto' />
                    <Skeleton className='w-42 h-3 bg-gray-200 rounded-md mx-auto' />
                    <Skeleton className='w-30 h-1 bg-gray-200 rounded-md mx-auto' />

                    <div className='flex flex-col space-y-1.5 items-center'>
                        <Skeleton className='w-55 h-2 bg-gray-200 rounded-md' />
                        <Skeleton className='w-45 h-2 bg-gray-200 rounded-md' />
                        <Skeleton className='w-35 h-2 bg-gray-200 rounded-md' />
                    </div>
                    <Skeleton className='w-20 h-3 bg-gray-200 rounded-md mx-auto' />

                    <div className='flex items-center justify-center gap-x-2.5'>
                        <Skeleton className='w-6 h-6 bg-gray-200 rounded-full' />
                        <Skeleton className='w-6 h-6 bg-gray-200 rounded-full' />
                        <Skeleton className='w-6 h-6 bg-gray-200 rounded-full' />
                    </div>
                </div>
            ))}
        </div>
    );
}
