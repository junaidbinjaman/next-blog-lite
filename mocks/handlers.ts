import {http, HttpResponse} from 'msw';
import { data } from './data';

export const handlers = [
    http.post(
        `${process.env.NEXT_PUBLIC_API_URL}/subscribe`,
        async ({request}) => {
            const body = (await request.json()) as {email: string};
            const {email} = body;

            return HttpResponse.json({
                id: 10,
                email,
                message: "You've subscribed successfully",
            });
        }
    ),

    http.get(`${process.env.NEXT_PUBLIC_API_URL}/categories`, ({request}) => {
        const url = new URL(request.url);
        const limitParam = url.searchParams.get('limit');
        const limit = limitParam ? parseInt(limitParam) : undefined;

        const allCategories = data.blogCategories;

        const categories = limit ? allCategories.slice(0, limit) : allCategories;

        return HttpResponse.json({
            status: 'success',
            message: 'The data loaded successfully',
            data: categories,
        });
    }),

    http.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, ({request}) => {                      
        const url = new URL(request.url);

        const page = Number(url.searchParams.get('page') ?? 1);
        const limit = Number(url.searchParams.get('limit') ?? 10);

        const allBlogs = data.blogs;
        const totalItems = allBlogs.length;
        const totalPages = Math.ceil(totalItems / limit);

        const start = (page - 1) * limit;
        const end = start + limit;

        const blogs = allBlogs.slice(start, end);

        return HttpResponse.json({
            status: 'success',
            message: 'Blogs are retrieved successfully',
            data: blogs,
            meta: {
                current_page: page,
                per_page: limit,
                total_items: totalItems,
                total_pages: totalPages,
                has_next: page < totalPages,
                has_prev: page > 1
            }
        });
    }),

    http.get(`${process.env.NEXT_PUBLIC_API_URL}/writers`, ({request}) => { 
        const url = new URL(request.url);
        const limitParam = url.searchParams.get('limit');
        const limit = limitParam ? parseInt(limitParam) : undefined;

        const allWriters = data.writers;
        const writers = allWriters.slice(0, limit);

        return HttpResponse.json({
            status: 'success',
            message: 'Writers are retrieved successfully',
            data: writers
        });
    }),

    http.get(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`, () => {

        return HttpResponse.json({
            status: 'success',
            message: 'Reviews are retrieves successfully',
            data: data.testimonials
        })
    })
];
