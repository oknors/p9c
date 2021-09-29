import { writable } from 'svelte/store';

import { fetchCoin } from '$lib/api/coin.js';

function createCoin(slug) {
    const {subscribe, set, update} = writable([]);

    return {
        subscribe,
        fetchOne: () => {
            const fetchedCoin = fetchCoin(slug);
            // set(fetchedCoin);
        }
    }
}

export const coin = createCoin();
