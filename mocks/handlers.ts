import {http, HttpResponse} from 'msw';

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

        const allCategories = [
            {
                title: 'Technology',
                href: '/categories/technology',
                numOfArticles: 95,
                thumbnail:
                    'https://media.noria.com/sites/Uploads/2019/11/19/3ad0b198-2717-4831-a344-f2e35e943bae_ArticleImages_RP31161_1234x694_08022019_extra_large.jpeg',
                bgColor: '#27F538',
                headingColor: '#000',
                articleTextColor: '#000',
            },
            {
                title: 'Travel',
                href: '/categories/travel',
                numOfArticles: 135,
                thumbnail:
                    'https://t4.ftcdn.net/jpg/01/36/15/53/360_F_136155386_TLEQLB3GqiSSKDpjcdZqAjLYaxQPCvrV.jpg',
                bgColor: '#F52727',
                headingColor: '#000',
                articleTextColor: '#000',
            },
            {
                title: 'Food & Drink',
                href: '/categories/food-and-drink',
                numOfArticles: 76,
                thumbnail:
                    'https://pentagonfoodgroup.co.uk/blog/wp-content/uploads/2025/01/Food-and-Drink-Trends-scaled.jpg',
                bgColor: '#F5EE27',
                headingColor: '#000',
                articleTextColor: '#000',
            },
            {
                title: 'Design',
                href: '/categories/design',
                numOfArticles: 24,
                thumbnail:
                    'https://img-cdn.inc.com/image/upload/f_webp,c_fit,w_1920,q_auto/images/panoramic/getty_537311951_100178.jpg',
                bgColor: '#C8C1097',
                headingColor: '#000',
                articleTextColor: '#000',
            },
            {
                title: 'Culture',
                href: '/categories/culture',
                numOfArticles: 57,
                thumbnail:
                    'https://static.vecteezy.com/system/resources/thumbnails/004/864/049/small/multicultural-team-friends-unity-in-diversity-people-of-different-nationalities-multinational-society-vector.jpg',
                bgColor: '#F5A627',
                headingColor: '#000',
                articleTextColor: '#000',
            },
            {
                title: 'Books',
                href: '/categories/books',
                numOfArticles: 134,
                thumbnail:
                    'https://www.popsci.com/wp-content/uploads/2024/07/buy_physical_books.jpg',
                bgColor: '#A3F527',
                headingColor: '#000',
                articleTextColor: '#000',
            },
            {
                title: 'Agriculture',
                href: '/categories/agriculture',
                numOfArticles: 37,
                thumbnail:
                    'https://www.protectourlivelihood.in/wp-content/uploads/2022/02/aggriculture-banner.jpg',
                bgColor: '12A803',
                headingColor: '#fff',
                articleTextColor: '#fff',
            },
        ];

        const data = limit ? allCategories.slice(0, limit) : allCategories;

        return HttpResponse.json({
            status: 'success',
            message: 'The data loaded successfully',
            data: data,
        });
    }),
];
