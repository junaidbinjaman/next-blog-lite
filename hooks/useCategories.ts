import { categories } from "@/lib/api/categoryFetcher"
import { useQuery } from "@tanstack/react-query"

export const useCategories = (limit?: number) => {
    return useQuery({
        queryKey: ['repoData'],
        queryFn: () => categories(limit)
    })
}