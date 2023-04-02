const getBase = () =>
    import.meta.env.VITE_BASE_URL || 'http://localhost:3000/api';

console.log(import.meta.env.VITE_BASE_URL);

const getHeaders = (token: string | undefined) => ({
    Authorization: `Bearer ${token}`,
});

const fetchHello = async () => {
    const base = getBase();
    const result = await fetch(`${base}/hello`);
    return result.json();
};

const fetchPrivateHello = (token: string) => async () => {
    const base = getBase();
    const result = await fetch(`${base}/privatehello`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return result.json();
};

export { fetchHello, fetchPrivateHello };
