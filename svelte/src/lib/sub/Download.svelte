<script>
      import HeadTitle from '$lib/components/HeadTitle.svelte';
      import Socials from '$lib/components/Socials.svelte';
      import ButtonZoom from '$lib/helpers/ButtonZoom.svelte';
</script>
<svelte:head>
  <script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>
</svelte:head>
  <style>
    body > div{
      background-image: url(https://s.okno.rs/parallelcoin/img/detectivzombi.png),url(https://s.okno.rs/img/go/crash-dummy.svg);
      background-repeat: no-repeat;
      background-position: center bottom,left bottom;
    }
    .stage {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      max-width: 100%;
    }
    
    
    p{
      margin:0 auto
    }
    #loading {
      background-color: #303030;
      color: #cfcfcf;
      font-size: 32px;
      padding-top: 10vh;
      height: 100vh;
      text-align: center;
    }
    </style>
    
          
        {@html '<amp-state id="downloads" src="https://api.parallelcoin.io/downloads"></amp-state>'}

        <div class="flex flex-col text-center text-light md:container md:mx-auto md:px-0">


        <HeadTitle>Download ParallelCoin</HeadTitle>
  
    

  <h2 class="text-3xl text-center">ParallelCoin wallet application</h2>

  <amp-list layout="fixed-height" width="auto" height="300" src="amp-state:downloads" reset-on-refresh items="."
  binding="no">
<template type="amp-mustache">
  {'{{^legacy}}'}  
<ButtonZoom></ButtonZoom>
{'{{/legacy}}'}  
</template>
</amp-list>

<h3 class="text-2xl text-center">ParallelCoin legacy wallet application</h3>

<amp-list layout="responsive" width="600" height="300" src="amp-state:downloads" reset-on-refresh items="."
binding="no">
<template type="amp-mustache">
  {'{{#legacy}}'}  
  <ButtonZoom></ButtonZoom>
{'{{/legacy}}'}  
</template>
</amp-list>
        
</div>


