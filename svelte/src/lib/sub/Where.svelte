<script>
      import HeadTitle from '$lib/components/HeadTitle.svelte';
      import Socials from '$lib/components/Socials.svelte';

</script>
<div class="flex flex-col text-center md:container md:mx-auto md:px-0 parallelcoin">
        <HeadTitle>Where is ParallelCoin???</HeadTitle>
        <div class="my-24 px-8 worp" >

            <amp-list layout="responsive" width="600" height="300" src="https://api.parallelcoin.io/subs" reset-on-refresh items="."
                  binding="no">
            <template type="amp-mustache">
  <a class="flex flex-row justify-center my-4 text-2xl no-underline text-light" href="{'https://{{ slug }}'}.parallelcoin.info">
            <div class="character">{`{{ title }}`}</div>
            <div class="flex-grow hidden mx-1 mb-2 border-b-2 border-dotted md:flex"></div>
            <div class="hidden md:flex">{`{{ slug }}`}.parallelcoin.info</div>
          </a>
        </template>
        </amp-list>



        
        </div>
        <p class="worp"><Socials></Socials></p>
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