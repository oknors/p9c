<script context="module">
    let COMponent;
</script>

<script>
    import { getContext } from 'svelte';

        import ParallelCoin from '$lib/sub/ParallelCoin.svelte';
        import WWW from '$lib/sub/WWW.svelte';
        import Download from '$lib/sub/Download.svelte';
        import Where from '$lib/sub/Where.svelte';


    const sub = getContext('sub');
    
</script>

 sub:{sub} :I
{#if sub === ""}
<ParallelCoin></ParallelCoin>
{/if}
{#if sub === "www"}
<WWW></WWW>
{/if}
{#if sub === "where"}
<Where></Where>
{/if}
{#if sub === "download"}
<Download></Download>
{/if}
<svelte:component this={COMponent}></svelte:component>