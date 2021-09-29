export async function fetchCoin(slug) {
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    return async function load({ page, fetch, session, context }) {
        const url = 'https://api.okno.rs/coins/' + slug;
        const res = await fetch(url);
        if (res.ok) {
            return {
                props: {
                    coin: await res.json()
                }
            };
        }
    }
}




