import { writable } from 'svelte/store';

import { fetchCoins } from '$lib/api/coins.js';


// export const sub = writable('');
export const coins = writable(fetchCoins);

// function createCoins() {
//     const coins = writable(fetchCoins);
//
//     const fetchedCoins = fetchCoins();
//
//     coins.set(fetchedCoins);
// }


// export const coins = createCoins();
