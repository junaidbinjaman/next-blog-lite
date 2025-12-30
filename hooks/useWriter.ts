import {writers} from '@/lib/api/writerFetcher';
import {useQuery} from '@tanstack/react-query';

export const useWriter = (limit?: number) => {
    return useQuery({
        queryKey: ['writers'],
        queryFn: () => writers(limit),
    });
};
