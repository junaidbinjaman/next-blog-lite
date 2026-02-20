import { Skeleton } from '@/components/ui/skeleton';

type CategorySkeletonProps = {
    repeat?: number;
}

export default function CategorySkeleton({repeat = 6}: CategorySkeletonProps) {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.from({ length: repeat }, (_, index) => (
                <div
                    key={index}
                    className='h-80 w-80 relative mx-auto'
                >
                    <Skeleton className='w-full h-full rounded-md bg-gray-200' />
                    <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 flex flex-col items-center space-y-2'>
                        <Skeleton className='h-4 w-30 bg-white rounded-md' />
                        <Skeleton className='h-3 w-20 bg-white rounded-md' />
                    </div>
                </div>
            ))}
        </div>
    );
}
