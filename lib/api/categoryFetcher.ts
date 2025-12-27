export const categories = async (limit?: number) => {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/categories`);

    if (limit) {
        url.searchParams.append('limit', limit.toString());
    }

    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error('Invalid rest api. failed to fetch categories');
    }

    return res.json();
};
