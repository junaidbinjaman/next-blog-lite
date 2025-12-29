export const blogFetcher = async (limit?: number) => {
  const base = process.env.NEXT_PUBLIC_API_URL ?? '';
  const url = new URL(`${base}/blogs`, window.location.origin);

  if (limit) {
    url.searchParams.append('limit', limit.toString());
  }

  const res = await fetch(url.toString());

  if (!res.ok) {
    throw new Error('Failed to fetch blogs');
  }

  return res.json();
};
