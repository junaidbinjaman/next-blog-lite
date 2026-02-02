import { blogFetcher } from "@/lib/api/blogFetcher";
import { useQuery } from "@tanstack/react-query"

export const useBlog = (limit?: number, page?: number) => {
    return useQuery({
        queryKey: ['blogs', limit, page],
        queryFn: () => blogFetcher(limit, page)
    });
}