<script context="module">
    import "../styles/tailwind-output.css";
    import Bg from '$lib/helpers/Bg.svelte';
    import Header from '$lib/components/Header.svelte';
    import Footer from '$lib/components/Footer.svelte';

    let sub;



    /**
     * @type {import('@sveltejs/kit').Load}
     */
    export async function load({ page, fetch, session, context }) {
        let hostPort = page.host.split(":")
        let host = hostPort[0].split(".")
        if (page.params.parts) {
            // slugs = page.params.parts.split("/");
        }
        sub =  host[0]
        return {
            props: {
                // tld:tld,
                // slug:slug,
                sub:sub,
            }
        };
    }
</script>

<script>

    import {setContext} from "svelte";
    setContext('sub', sub);
</script>

<svelte:head>
    <script async custom-element="amp-list" src="https://cdn.ampproject.org/v0/amp-list-0.1.js"></script>
    <script async custom-template="amp-mustache" src="https://cdn.ampproject.org/v0/amp-mustache-0.2.js"></script>
    <script async custom-element="amp-form" src="https://cdn.ampproject.org/v0/amp-form-0.1.js"></script>
    <script async custom-element="amp-sidebar" src="https://cdn.ampproject.org/v0/amp-sidebar-0.1.js"></script>
    <script async custom-element="amp-bind" src="https://cdn.ampproject.org/v0/amp-bind-0.1.js"></script>
    <script async custom-element="amp-iframe" src="https://cdn.ampproject.org/v0/amp-iframe-0.1.js"></script>
    <script async custom-element="amp-font" src="https://cdn.ampproject.org/v0/amp-font-0.1.js"></script>
</svelte:head>


{#if sub !== "legacy"}
<div id="layout" class="relative flex flex-col items-center justify-between min-h-screen antialiased font-text text-text-primary ">
    <Bg></Bg>
    <Header>
 sub:{sub} :L
    </Header>
    <main class="flex flex-col flex-1 w-full text-text-primary">
        <slot></slot>
    </main>
    <Footer>
</Footer>
</div>
{:else}
    <slot></slot>
{/if}