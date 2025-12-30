export const writers = async (limit?: number) => {
    const url = new URL(`${process.env.NEXT_PUBLIC_API_URL}/writers`);

    if (limit) {
        url.searchParams.append('limit', limit.toString());
    }

    const res = await fetch(url.toString());

    if (!res) {
        throw new Error('Failed to fetch writers');
    }

    return res.json();
}