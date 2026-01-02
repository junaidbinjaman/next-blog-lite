import {Skeleton} from '../ui/skeleton';

type ReviewSkeletonProps = {
    repeat: number;
};

function ReviewSkeleton({repeat}: ReviewSkeletonProps) {
    return (
        <div className='grid grid-cols-3 gap-4'>
            {Array.from({length: repeat}, (_, index: number) => (
                <div
                    key={index}
                    className='flex flex-col space-y-10 p-5 rounded-lg shadow-md bg-white'
                >
                    <div className='flex gap-1 w-1/2'>
                        <Skeleton className='h-5 w-5 rounded-full bg-gray-200 mx-auto' />
                        <Skeleton className='h-5 w-5 rounded-full bg-gray-200 mx-auto' />
                        <Skeleton className='h-5 w-5 rounded-full bg-gray-200 mx-auto' />
                        <Skeleton className='h-5 w-5 rounded-full bg-gray-200 mx-auto' />
                        <Skeleton className='h-5 w-5 rounded-full bg-gray-200 mx-auto' />
                    </div>

                    <div className='flex flex-col space-y-1.5'>
                        <Skeleton className='w-55 h-2 bg-gray-200 rounded-md' />
                        <Skeleton className='w-45 h-2 bg-gray-200 rounded-md' />
                        <Skeleton className='w-35 h-2 bg-gray-200 rounded-md' />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <Skeleton className='w-30 h-3 bg-gray-200 rounded-md' />
                        <Skeleton className='w-25 h-2 bg-gray-200 rounded-full' />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ReviewSkeleton;
