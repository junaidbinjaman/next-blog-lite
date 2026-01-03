import { testimonials } from "@/lib/api/testimonialsFetcher"
import { useQuery } from "@tanstack/react-query"

export const useTestimonials = () => {
    return useQuery({
        queryKey: ['testimonials'],
        queryFn: testimonials
    })
}   