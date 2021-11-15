<script>



  </script>
  <svelte:head>
     <title>ParallelCoin - Plan 9 from Cryptospace</title>
     <link rel="canonical" href="https://parallelcoin.info/">
  </svelte:head>


<div class="w-full h-screen"><amp-iframe layout="fill" sandbox="allow-scripts allow-same-origin allow-popups" src="https://plan9.parallelcoin.info/"><amp-img layout="responsive" src="https://s.okno.rs/parallelcoin/img/splash.svg" placeholder></amp-img></amp-iframe></div>

 <style>
    
     #poster { 
          perspective: 60vmax;
          width: 100%;
          position: relative;
          min-height: 100%;
         margin: 0 auto;
     }
     
     #banner { 
          text-transform: uppercase; 
          text-align: center; 
          font-size: 3vmin;
          width: 62%;
     
          line-height: .9; 
          transform-origin: top left; 
          transform: rotateX(15deg) skewX(9deg) translateX(0);
          background: #fff; 
          position: relative;
          height: 100%;
     }
     #banner h1 {
          top:24vmax;
          font-family: 'plan9regular', sans-serif; 
          color: #CF3030;
          font-size: 12vmin;
          letter-spacing: .2vmin;
       line-height: 1.2;
     }
     #banner .intro {
          padding: 0 9vmin;
          font-family: 'bariolregular', sans-serif; 
          font-size: 0.9rem;
          letter-spacing: 0;
          line-height: 1.6;
     }
     #posterimgs{
          position: relative;
          width: 100%;
          height: 100%;
     }
     #man {
          position: absolute;
          bottom: 0px;
          left: 0px;
          max-width: 38vh;
          max-height: 200px;
     }
     #men {
          position: absolute;
          bottom: 0;
          left: 50px;
          max-width: 38vh;
          max-height: 100px;
     }
     #dig {
          position: absolute;
          bottom: 30px;
          right:20px;
          max-width: 38vh;
          max-height: 100px;
     }
     #woman {
          position: absolute;
          bottom: 120px;
          right: 0;
          max-width: 38vh;
          max-height:160px;
     }
     #grave {
          position: absolute;
          bottom: 80px;
          right: 0px;
          max-width: 38vh;
          max-height: 100px;
     }
     #plan9 {
          position: absolute;
          bottom: 0;
       width:100%;
     }
     #spaceship {
          position: absolute;
          top: 20px;
          right: 9%;
          max-width: 38vh;
          max-height: 150px;
     }
     #credits {
          position: absolute;
          top:72vmax;
          right: 3vmax;
       width: 50%;
          text-align: center;
     }
     #credits span:first-of-type {
          font-size: 16px;
          letter-spacing: 1px;
          margin-top: 1rem;
       line-height: 1.6;
     }
     .actor {
          text-transform: uppercase;
          font-size: 12px;
          letter-spacing: 0;
          display: block;
          line-height: 1.2;
     }
     .production {
          font-size: 6px;
          letter-spacing: 0px;
          font-family: 'bariolregular'; 
          line-height: 0.2;
     }
     
     
     .link{
          position: absolute;
          bottom: 5vmax;
          background-color: #cfcfcf;
          background-size: 88%;
          background-repeat: no-repeat;
          background-position: center;
          border-radius: 100%;
     }
     
     .link {
          width: 92px;
          height: 92px;
          box-shadow: 0 0 0 4px rgba(255, 255, 255, 1);
     }
     .link.small {
          width:45px;
          height:45px;
     }
     .link.mini {
          width:30px;
          height:30px;
     }
     .hovicon.effect-4:before {
          line-height: 92px;
     }
     .hovicon.effect-4:after {
          top: -4px;
          left: -4px;
          padding: 0;
          z-index: 10;
          border: 4px dashed #fff;
     }
     .hovicon.effect-4:hover {
          box-shadow: 0 0 0 0 rgba(255, 255, 255, 0);
          color: #fff;
     }
     .hovicon.effect-4:hover i {
          color: #fff;
     }
     /* Effect 4b */
     .link:hover {
          -webkit-transition: box-shadow 0.2s;
          -moz-transition: box-shadow 0.2s;
          transition: box-shadow 0.2s;
     }
     .link:hover:after {
          -webkit-animation: spinAround 9s linear infinite;
          -moz-animation: spinAround 9s linear infinite;
          animation: spinAround 9s linear infinite;
     }
     @-webkit-keyframes spinAround {
          from {
               -webkit-transform: rotate(0deg)
          }
          to {
               -webkit-transform: rotate(360deg);
          }
     }
     @-moz-keyframes spinAround {
          from {
               -moz-transform: rotate(0deg)
          }
          to {
               -moz-transform: rotate(360deg);
          }
     }
     @keyframes spinAround {
          from {
               transform: rotate(0deg)
          }
          to {
               transform: rotate(360deg);
          }
     }
     
     
     .legacy{
          left: 12vmax;
          background-image: url("https://s.okno.rs/img/go/legacy.png");
          background-size: 100%;
          background-position: -10% bottom;
     }
     .plan{
          right: 12vmax;
          background-image: url("https://s.okno.rs/img/go/p9c.png");
     }
     #skrollr-body {width:100%; height:100%; position:fixed; }
     #skrollr-body div {overflow:hidden; position:absolute; }
     
     .centered { top:0; bottom:0; left:0; right:0; margin:auto; }
     
     #slide1     {z-index:10; background: linear-gradient(rgba(48,128,207,0.38),rgba(255,255,255,0.38) 62%);}
     #slide1 h1  {position:absolute; text-align: center; width:72%; left:0; right:0; margin:0 auto;}
     
     
     #slide2     {z-index:9;}
     #slide2 h2  {position:absolute; text-align: center; left:0; right:0; margin:15% auto 0;white-space: nowrap;}
     
     img.biker     {position:absolute; bottom: 0;max-width:160px;}
     img.gopherru     {position:absolute; top: 3%;max-width:140px;}
     img.ufo     {position:absolute; top: 5%;}
     
     img.gophersr  {position:absolute; bottom: 45%;max-width:120px;}
     img.gopherhb  {position:absolute; bottom: 45%;max-width:60px;z-index:-2;}
     img.sgopher  {position:absolute; top: 5%;max-width:140px;}
     img.bgopher  {position:absolute;bottom: 35%;max-width:60px;}
     
     span.road    {position:absolute; bottom:0;width:900%; height:100px; background: url(https://s.okno.rs/parallelcoin/img/road.jpg) repeat-x; z-index: -1; background-size: 300px;}
     
     span.trees   {position:absolute; left:-60px;bottom:90px;width:600%; height:380px; background: url(https://s.okno.rs/parallelcoin/img/trees.png) repeat-x; z-index: -2; background-size: 300px; opacity: 1}
     span.trees2   {position:absolute; bottom:0px;width:600%; height:260px; background:url(https://s.okno.rs/parallelcoin/img/trees.png) repeat-x; z-index: -3; background-size: 200px; opacity: .6}
     
     
     #slide3 .logo    {width:62vmin; height:62vmin;z-index:10;}
     #slide3 h2  {position:absolute; text-align: center; left:0; right:0; top:8rem; bottom:0; margin:0 auto;}
     img.parallelcoin {position:absolute; left:0; right:0; margin:0 auto;}
     
     
     
     
     @media (min-width:777px){
          button.tab{
               border-left-width:4px;
               border-bottom-width:0
          }
          button.active-tab,button.tab:hover{
               color:var(--purple);
               color:rgba(59,121,119,var(--text-opacity))
          }
          button.active-tab,button.active-tab:hover,button.tab:hover{
               --text-opacity:1;
               border-left-width:4px;
               border-bottom-width:0
          }
          button.active-tab:hover{
               color:#4a5568;
               color:rgba(74,85,104,var(--text-opacity))
          }
          #posterimgs{
               max-width: 64rem;
          }
          #banner {
               width: 62%;
               max-width: 42rem;
               transform: rotateX(15deg) skewX(15deg) translateX(3vw);
          }
          #banner h1 {
               top:12rem;
               font-size: 9rem;
               letter-spacing: 1px;
               line-height: 1.1;
          }
          #banner .intro {
               top:4rem;
               width: 100%;
               padding: 0;
               font-size: 1rem;
               letter-spacing: 2px;
               line-height: 1.2;
          }
          #banner .intro span{
               display: block;
               margin: 0 auto;
               max-width: 16rem;
          }
          #man {
               position: absolute;
               bottom: 0px;
               left: 0px;
               max-width: 320px;
               max-height: 480px;
          }
          #men {
               position: absolute;
               bottom: 10px;
               left: 100px;
               max-width: 240px;
               max-height: 240px;
          }
          #dig {
               position: absolute;
               bottom: 350px;
               right:200px;
               max-width: 38vh;
               max-height: 62vw;
          }
          #woman {
               position: absolute;
               bottom: 3rem;
               right: 0;
               max-width: 120px;
               max-height: 280px;
          }
          #grave {
               position: absolute;
               bottom: 180px;
               right: 0px;
               max-width: 38vh;
               max-height: 62vw;
          }
          #plan9 {
               position: absolute;
               bottom: 0;
               width:100%;
          }
          #spaceship {
               position: absolute;
               top: 80px;
               right:0;
               max-width: 240px;
               max-height: 240px;
          }
          #credits {
               position: absolute;
               top:52rem;
               right: 3vmax;
               width: 50%;
               text-align: center;
          }
          #credits span:first-of-type {
               font-size: 0.6rem;
               letter-spacing: 1px;
               margin-top: 1rem;
               line-height: 1.6;
          }
          .actor {
               text-transform: uppercase;
               font-size: 1.2rem;
               letter-spacing: 0;
               display: block;
               line-height: 1.2;
          }
          .production {
               font-size: 0.6rem;
               letter-spacing: 0px;
               line-height: 0.2;
          }
     
     }
     
     @media (min-width:1999px){
          #banner {
               max-width: 72rem;
               transform: rotateX(15deg) skewX(15deg) translateX(3vw);
          }
          #banner h1 {
     
          }
          #posterimgs{
               max-width: 111rem;
          }
          #man {
               max-width: 440px;
               max-height: 820px;
          }
          #men {
               max-width: 480px;
               max-height: 480px;
               left:200px;
          }
          #dig {
               max-width: 38vh;
               max-height: 62vw;
          }
          #woman {
               max-width: 240px;
               max-height: 560px;
          }
     }
     </style>