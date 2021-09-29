export async function fetchCoins() {
    /**
     * @type {import('@sveltejs/kit').Load}
     */
    return async function load({ page, fetch, session, context }) {
        const url = 'https://api.okno.rs/coins/'
        const res = await fetch(url);
        if (res.ok) {
            return await res.json()};
    }
}




