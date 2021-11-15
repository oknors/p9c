<script>
    import { getContext } from 'svelte';

        import ParallelCoin from '$lib/sub/ParallelCoin.svelte';
        import WWW from '$lib/sub/WWW.svelte';
        import Download from '$lib/sub/Download.svelte';
        import Where from '$lib/sub/Where.svelte';
        import Legacy from '$lib/sub/Legacy.svelte';
        import Links from '$lib/sub/Links.svelte';
        import About from '$lib/sub/About.svelte';
        import Log from '$lib/sub/Log.svelte';
        import Faq from '$lib/sub/Faq.svelte';
        import Meme from '$lib/sub/Meme.svelte';

        
    const sub = getContext('sub');
    
</script>
 
{#if sub === "" || sub === "parallelcoin"}
<ParallelCoin></ParallelCoin>
{/if}
{#if sub === "www"}
<WWW></WWW>
{/if}
{#if sub === "where"}
<Where></Where>
{/if}
{#if sub === "legacy"}
<Legacy></Legacy>
{/if}
{#if sub === "download"}
<Download></Download>
{/if}
{#if sub === "links"}
<Links></Links>
{/if}
{#if sub === "log"}
<Log></Log>
{/if}
{#if sub === "faq"}
<Faq></Faq>
{/if}
{#if sub === "meme"}
<Meme></Meme>
{/if}
{#if sub === "about"}
<About></About>
{/if}


<style>


@font-face {
	font-family: 'bariollight';
	src: url('https://font.okno.rs/bariol/lightwoff2') format('woff2'),
	url('https://font.okno.rs/bariol/light.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'bariolregular';
	src: url('https://font.okno.rs/bariol/regular.woff2') format('woff2'),
	url('https://font.okno.rs/bariol/regular.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'bariolbold';
	src: url('https://font.okno.rs/bariol/bold.woff2') format('woff2'),
	url('https://font.okno.rs/bariol/bold.woff') format('woff');
	font-weight: normal;
	font-style: normal;
}
@font-face {
	font-family: 'plan9regular';
	font-style: normal;
	font-display: swap;
	font-weight: 400;
	src:
			local('plan9regular '),
			local('plan9regular'),
			url('https://font.okno.rs/plan9/regular.woff2') format('woff2'),
			url('https://font.okno.rs/plan9/regular.woff') format('woff');
}

</style>