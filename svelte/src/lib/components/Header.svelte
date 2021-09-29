<script>
    import Ufo from '$lib/helpers/Ufo.svelte';
    import Themeselect from '$lib/helpers/Themeselect.svelte';
    import Logo from '$lib/components/Logo.svelte';



</script>
    <header class="relative flex flex-col items-center justify-center w-full">
        <div class="relative flex flex-row items-center justify-center md:container md:mx-auto md:px-0 ">
            <Ufo></Ufo>
            <a href="/" class="p-4 dark"><Logo size="64"></Logo></a>

            <Themeselect @darkmode="darkmode" ></Themeselect>
        </div>
        
                <h1 class="text-sm tracking-widest uppercase xl:text-5xl text-light font-title md:container md:mx-auto md:px-0 "><slot></slot></h1>
    </header>
