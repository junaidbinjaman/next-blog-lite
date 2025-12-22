import {http, HttpResponse} from 'msw';

export const handlers = [
    http.post('https://example.com/api/subscribe', async ({request}) => {
        const body = (await request.json()) as {email: string};
        const {email} = body;

        return HttpResponse.json({
            id: 10,
            email,
            message: "You've subscribed successfully",
        });
    }),
];
