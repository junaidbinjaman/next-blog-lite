export const subscribe = async (email: string) => {
    const res = await fetch('https://example.com/api/subscribe', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email})
    });

    if (!res.ok) {
        throw new Error('Something went wrong while subscribing');
    }

    return res;
}