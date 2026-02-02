export const blogFetcher = async (limit?: number, page?: number) => {
    const base = process.env.NEXT_PUBLIC_API_URL ?? '';
    const url = new URL(`${base}/blogs`, window.location.origin);

    if (limit) url.searchParams.append('limit', String(limit));
    if (page) url.searchParams.append('page', String(page));
    const res = await fetch(url.toString());

    if (!res.ok) {
        throw new Error('Failed to fetch blogs');
    }

    return res.json();
};
