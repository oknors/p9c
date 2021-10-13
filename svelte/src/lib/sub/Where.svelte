<script>
      import HeadTitle from '$lib/components/HeadTitle.svelte';
      import Socials from '$lib/components/Socials.svelte';

   

       


    
	
    import { onMount } from "svelte";

  const apiURL = "https://api.parallelcoin.info/subs";
  let data = [];


  onMount(async function() {
        const response = await fetch(apiURL);
        data = await response.json();
    });


</script>




<div class="flex flex-col text-center parallelcoin">



    {#each data as item }
            <div>
                <p> {item.title} </p>
            </div>
        {/each}


        <HeadTitle>Where is ParallelCoin???</HeadTitle>
        <div class="my-24 worp" >
            
  <!-- <a class="flex flex-row justify-center my-4 text-2xl no-underline text-text-primary" href="{`'https://'{{ slug }}'.parallelcoin.info'`}">
            <div class="character">{`{{ title }}`}</div>
            <div class="flex-grow hidden mx-1 mb-2 border-b-2 border-dotted md:flex"></div>
            <div class="hidden md:flex">{`{{ slug }}`}.parallelcoin.info</div>
          </a>
         -->

        
        </div>
             <amp-img
                alt="ParallelCoin - Plan 9 from Crypto-Space - Ruler"
                src="https://s.okno.rs/parallelcoin/img/rulerdesk.png"
                width="500"
                height="332"
                layout="responsive"
                class="self-center w-64 rulerdesk worp"
        >
        </amp-img>
      </div>



      