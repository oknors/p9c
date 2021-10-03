import { onMount } from 'svelte';

let photos = [];

onMount(async () => {
    const res = await fetch(`https://api.parallelcoin.io/subs`);
    photos = await res.json();
});