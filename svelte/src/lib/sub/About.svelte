<script>
    import HeadTitle from '$lib/components/HeadTitle.svelte';
    import Socials from '$lib/components/Socials.svelte';
</script>
<svelte:head>
<script async custom-element="amp-lightbox" src="https://cdn.ampproject.org/v0/amp-lightbox-0.1.js"></script>

  <title>About ParallelCoin - Plan 9 from Cryptospace</title>
  <link rel="canonical" href="https://about.parallelcoin.info/">
</svelte:head>
      {@html '<amp-state id="about" src="https://api.parallelcoin.io/about"></amp-state>'}
  
<div class="flex flex-1 flex-col text-center text-light md:container md:mx-auto md:px-0">

            <HeadTitle>About ParallelCoin</HeadTitle>
          <nav class="flex flex-col section bg-background-primary my-8 border-dashed border-2 border-black border-opacity-25" >
            <div class="flex flex-col vampira p-8" >
            <h4 class="pb-8 text-xl">Contents</h4>    
            <amp-list layout="fixed-height" width="auto" height="180" src="amp-state:about" reset-on-refresh items="pasus" binding="no">
                {@html `<template type="amp-mustache">
            <a href="#" id="'nav-'+{'{{slug}}'}" on="tap:top.scrollTo(duration=200)" class="pb-2 text-xl">{{title}}</a>
            </template>`}
          </amp-list>
            </div>
          </nav>
          <amp-list layout="flex-item" src="amp-state:about" reset-on-refresh items="pasus" binding="no">
            <template type="amp-mustache">
        <section class="section my-8 bg-background-primary border-dashed border-2 border-black border-opacity-25 text-text-primary text-lg leading-relaxed" id="{'{{slug}}'}">
            <h2 class="text-3xl">{'{{title}}'}</h2>
            <div class="entry-content">{'{{{html}}}'}</div>
            <amp-img src="https://s.okno.rs/img/go/morning-coffee.gif" layout="responsive" width="100" height="100" class="gopher"></amp-img>
          </section>
        </template>
        </amp-list>
            {@html `<a href="#" id="end" class="my-0 mx-auto" on="tap:top.scrollTo(duration=200)"><amp-img src="https://s.okno.rs/img/go/unicorn.png" layout="responsive" width="100" height="100" class="inspector"></amp-img></a>`}
</div>

<div>
    
</div>

<style>
    .vampira{
      background-image: url(https://s.okno.rs/parallelcoin/img/vampira3.png);
      background-repeat: no-repeat;
      background-position: right bottom;
      background-size: 120px;
    }
    .gopher{
      position: absolute;
      bottom: 0;
      left: 0;
    }
    
    .nav a{
      text-decoration: none;
    }
    .nav a:hover{
      color:#3080cf;
    }
    .content{
      padding-top: 300px;
    }
    
    
    
    .section{
      background: #cfcfcf url(https://s.okno.rs/img/whitepaperboard.png);
      color: #303030;
    }
    
    .container.hi-contrast .section {
      background: #303030;
      color: #cfcfcf;
    }
    .container.hi-contrast a {
      color: #cfcfcf;
    }
    .container.hi-contrast a:hover {
      color: #3080cf;
    }
    .container.hi-contrast .bttn {
      color: #cfcfcf;
      background: transparent;
      border-color: #cfcfcf;
    }
    .container.hi-contrast .bttn:hover {
      background: #cfcfcf;
      color: #888;
    }
    .container.hi-contrast input {
      color: #ffffff;
      border-color: #888;
    }
    
    
    section {
      position: relative;
      display: inline-block;
      float: left;
      padding: 3rem;
      box-sizing: border-box;
    }
    
    section h2 {
      margin-bottom: 1rem;
    }
    section .entry-content {
      line-height: 1.4;
    }
    section .entry-content p {
      margin: 0 0 14px;
    }
    section .entry-content a {
      font-weight: 400;
    }
    section .entry-content table {
      width: 100%;
    }
    section .entry-content td {
      font-weight: 300;
      border: 1px solid;
      padding: 10px;
    }
    section .entry-content th {
      font-weight: 700;
    }
    section .entry-content ul {
      padding: 10px 0 20px 40px;
      list-style-type: disc;
    }
    section .entry-content iframe {
      max-width: 100%;
    }
    section .entry-content img {
      max-width: 100%;
      height: auto;
    }
    
    
    h1, h2, h3, h4, h5, h6 {
      font-family: plan9regular, serif;
      margin: 0;
      font-weight: 400;
      line-height: 1.2;
    }
    
    
    
    
    main.main {
      min-height: 100vh;
      background-image: radial-gradient(ellipse at center, rgba(48,48,48,0.3) 0%, rgba(207,207,207,0.03) 80%);
    }
    
    
    
    .logobox{
      height: 128px;
      width: 128px;
    }
    .logobox.round{
      background-color: rgba(40,40,40,255);
      transition: background-color 9s linear;
      animation: logobg 9s linear infinite;
    }
    
    
    </style>