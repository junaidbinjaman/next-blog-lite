export const testimonials = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/testimonials`);

    if (!res) {
        throw new Error('Something went wrong.');
    }

    return res.json();
};
