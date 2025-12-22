import {subscribe} from '@/lib/api/subscribeFetcher';
import {useMutation} from '@tanstack/react-query';

export const useSubscribe = () => {
    return useMutation({
        mutationFn: (email: string) => subscribe(email),
    });
};
