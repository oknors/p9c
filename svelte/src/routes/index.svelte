<script context="module">
    let COMponent;
</script>

<script>
    import { getContext } from 'svelte';
    const sub = getContext('sub');
    let path = '../lib/sub/' + sub + '.svelte'
    import(path.toString()).then(res => (COMponent = res.default));
</script>

 sub:{sub} :I

<svelte:component this={COMponent}></svelte:component>