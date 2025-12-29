import { blogFetcher } from "@/lib/api/blogFetcher";
import { useQuery } from "@tanstack/react-query"

export const useBlog = (limit?: number) => {
    return useQuery({
        queryKey: ['blogs'],
        queryFn: () => blogFetcher(limit)
    });
}