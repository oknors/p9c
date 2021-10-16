<script>
</script>



<style amp-custom>


    /* Resets (http://meyerweb.com/eric/tools/css/reset/ | v2.0 | 20110126 | License: none (public domain)) */

    html,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{margin:0;padding:0;border:0;font-size:100%;font:inherit;vertical-align:baseline;}article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block;}body{line-height:1;}ol,ul{list-style:none;}blockquote,q{quotes:none;}blockquote:before,blockquote:after,q:before,q:after{content:'';content:none;}table{border-collapse:collapse;border-spacing:0;}body{-webkit-text-size-adjust:none}

    /* Box Model */

    *, *:before, *:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
    }

    /* Container */

    .container {
        margin-left: auto;
        margin-right: auto;

        /* width: (containers) */
        width: 92%;
    }

    /* Modifiers */



    /* Grid */

    .row {
        border-bottom: solid 1px transparent;
    }

    .row > * {
        float: left;
    }

    .row:after, .row:before {
        content: '';
        display: block;
        clear: both;
        height: 0;
    }

    .row.uniform > * > :first-child {
        margin-top: 0;
    }

    .row.uniform > * > :last-child {
        margin-bottom: 0;
    }

    /* Gutters */

    /* Normal */

    .row > * {
        /* padding: (gutters.horizontal) 0 0 (gutters.vertical) */
        padding: 40px 0 0 40px;
    }

    .row {
        /* margin: -(gutters.horizontal) 0 -1px -(gutters.vertical) */
        margin: -40px 0 -1px -40px;
    }

    .row.uniform > * {
        /* padding: (gutters.vertical) 0 0 (gutters.vertical) */
        padding: 40px 0 0 40px;
    }

    .row.uniform {
        /* margin: -(gutters.vertical) 0 -1px -(gutters.vertical) */
        margin: -40px 0 -1px -40px;
    }


    /* Cells */

    .d12u { width: 100%; clear: none; margin-left: 0; }
    .d11u { width: 91.6666666667%; clear: none; margin-left: 0; }
    .d10u { width: 83.3333333333%; clear: none; margin-left: 0; }
    .d9u { width: 75%; clear: none; margin-left: 0; }
    .d8u { width: 66.6666666667%; clear: none; margin-left: 0; }
    .d7u { width: 58.3333333333%; clear: none; margin-left: 0; }
    .d6u { width: 50%; clear: none; margin-left: 0; }
    .d5u { width: 41.6666666667%; clear: none; margin-left: 0; }
    .d4u { width: 33.3333333333%; clear: none; margin-left: 0; }
    .d3u { width: 25%; clear: none; margin-left: 0; }
    .d2u { width: 16.6666666667%; clear: none; margin-left: 0; }
    .d1u { width: 8.3333333333%; clear: none; margin-left: 0; }








    :root {
        --blue: #3030cf;
        --light-blue: #30cfcf;

        --green: #30cf30;
        --orange: #ff7500;
        --yellow: #ffd500;
        --red: #cf3030;
        --purple: #cf30cf;

        --black: #303030;
        --white: #fcfcfc;

        --dark-gray:#4d4d4d;
        --gray:#808080;
        --light-gray:#c0c0c0;

        --base:#cfcfcf;
        --light:#c3c3c3;
        --lighter: #f3f3f3;


        --border-light: rgba(255, 255, 255, .62);
        --border-dark: rgba(0,0,0, .38);

        --trans-light: rgba(255, 255, 255, .24);
        --trans-dark: rgba(0,0,0, .62);
        --trans-gray: rgba(48,48,48, .38);


    }



    /*
      Miniport by HTML5 UP
      html5up.net | @n33co
      Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
    */

    /*********************************************************************************/
    /* Basic                                                                         */
    /*********************************************************************************/

    body,input,textarea,select
    {
        font-family: 'Open Sans', sans-serif;
        line-height: 1.85em;
        color: #888;
        font-weight: 300;
    }

    body.is-loading *
    {
        -moz-transition: none ;
        -webkit-transition: none ;
        -o-transition: none ;
        -ms-transition: none ;
        transition: none ;
        -moz-animation: none ;
        -webkit-animation: none ;
        -o-animation: none ;
        -ms-animation: none ;
        animation: none ;
    }
    body{

        background-image: url(https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/main.webp);
        background-position: center center;
        background-repeat: no-repeat;
        background-size: cover;
        background-attachment: fixed;
    }
    a, a:visited
    {
        color: #888;
        text-decoration: none;
        -moz-transition: color .2s ease-in-out;
        -webkit-transition: color .2s ease-in-out;
        -o-transition: color .2s ease-in-out;
        -ms-transition: color .2s ease-in-out;
        transition: color .2s ease-in-out;
    }

    a:hover
    {

    }

    a img
    {
        border: 0;
    }

    b, strong
    {
        font-weight: 600;
        color: #3e3e3e;
    }

    i, em
    {
        font-style: italic;
    }

    sub
    {
        position: relative;
        top: 0.5em;
        font-size: 0.8em;
    }

    sup
    {
        position: relative;
        top: -0.5em;
        font-size: 0.8em;
    }

    blockquote
    {
        border-left: solid 0.75em #eee;
        padding: 1em 0 1em 1.5em;
        font-style: italic;
    }

    h1, h2, h3, h4, h5, h6
    {
        color: #3e3e3e;
    }

    h1 a, h2 a, h3 a, h4 a, h5 a, h6 a
    {
        text-decoration: none;
        color: inherit;
    }

    h2, h3, h4, h5, h6
    {
        font-weight: 700;
    }

    h1
    {
        font-weight: 300;
    }

    h1 strong
    {
        font-weight: 700;
    }

    em, i
    {
        font-style: italic;
    }

    br.clear
    {
        clear: both;
    }

    hr
    {
        border: 0;
        border-top: solid 1px #444;
        border-top-color: rgba(0,0,0,0.35);
        box-shadow: 0px 1px 0px 0px rgba(255,255,255,0.1);
        height: 1px;
        margin: 3em 0 4em 0;
    }

    p, ul, ol, dl, table
    {
        margin-bottom: 2em;
    }

    /* Form */

    form
    {
    }

    form label
    {
        color: #3e3e3e;
        font-weight: 700;
        display: block;
        margin: 0 0 0.5em 0;
    }

    form input[type=text],
    form input[type=email],
    form input[type=password],
    form select,
    form textarea
    {
        -webkit-appearance: none;
        display: block;
        border: 0;
        padding: 0.75em;
        font-size: 1em;
        border-radius: 8px;
        border: solid 1px #ddd;
        background: #fff;
        color: #bbb;
        box-shadow: inset 0px 2px 3px 1px rgba(0,0,0,0.05), 0px 1px 0px 0px rgba(255,255,255,0.025);
        width: 100%;
        -moz-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;
        -webkit-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;
        -o-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;
        -ms-transition: background .2s ease-in-out, box-shadow .2s ease-in-out;
        transition: background .2s ease-in-out, box-shadow .2s ease-in-out;
    }

    form input[type=text]:focus,
    form input[type=email]:focus,
    form input[type=password]:focus,
    form select:focus,
    form textarea:focus
    {
        background: #fafafa;
        box-shadow: inset 0px 2px 5px 0px rgba(0,0,0,0.05), 0px 1px 0px 0px rgba(255,255,255,0.025), inset 0px 0px 2px 1px #43bff0;
    }

    form textarea
    {
        height: 15em;
    }

    form .formerize-placeholder
    {
        color: #555 ;
    }

    form ::-webkit-input-placeholder
    {
        color: #555 ;
    }

    form :-moz-placeholder
    {
        color: #555 ;
    }

    form ::-moz-placeholder
    {
        color: #555 ;
    }

    form :-ms-input-placeholder
    {
        color: #555 ;
    }

    form ::-moz-focus-inner
    {
        border: 0;
    }

    /* Tables */

    table
    {
        width: 100%;
    }

    table.default
    {
        width: 100%;
    }

    table.default tr
    {
        border-top: solid 1px #eee;
    }

    table.default tr:first-child
    {
        border-top: 0;
    }

    table.default td
    {
        padding: 0.5em 1em 0.5em 1em;
    }

    table.default th
    {
        text-align: left;
        padding: 0.5em 1em 0.5em 1em;
        font-weight: 600;
        margin: 0 0 1em 0;
    }

    table.default thead
    {
        background: #4f4f4f;
        color: #fff;
    }

    table.default tfoot
    {
    }

    table.default tbody
    {
    }

    /* Section/Article */

    section,
    article
    {
        margin-bottom: 3em;
    }

    section > :last-child,
    article > :last-child
    {
        margin-bottom: 0;
    }

    section:last-child,
    article:last-child
    {
        margin-bottom: 0;
    }

    /* Image */

    .image
    {
        display: inline-block;
        position: relative;
    }

    .image img
    {
        display: block;
        width: 100%;
    }

    .image.fit
    {
        display: block;
        width: 100%;
    }

    .image.featured
    {
        display: block;
        width: 100%;
        margin: 0 0 2em 0;
    }

    .image.left
    {
        float: left;
        margin: 0 2em 2em 0;
    }

    .image.centered
    {
        display: block;
        margin: 0 0 2em 0;
    }

    .image.centered img
    {
        margin: 0 auto;
        width: auto;
    }

    /* Button */

    input[type="button"],
    input[type="submit"],
    input[type="reset"],
    .button
    {
        -webkit-appearance: none;
        position: relative;
        display: inline-block;
        color: #fff ;
        text-decoration: none;
        font-weight: 700;
        border: 0;
        outline: 0;
        cursor: pointer;
        border-radius: 8px;
        text-shadow: -1px -1px 0.5px rgba(48,48,48,0.5);
        overflow: hidden;
        box-shadow: inset 0px 0px 0px 1px rgba(48,48,48,0.5), inset 0px 2px 1px 0px rgba(207,207,207,0.75);
        background: var(--black);
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-moz-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-webkit-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-o-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-ms-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        -moz-transition: background-color .2s ease-in-out;
        -webkit-transition: background-color .2s ease-in-out;
        -o-transition: background-color .2s ease-in-out;
        -ms-transition: background-color .2s ease-in-out;
        transition: background-color .2s ease-in-out;
    }

    input[type="button"]:hover,
    input[type="submit"]:hover,
    input[type="reset"]:hover,
    .button:hover
    {
        background-color: #101010;
        color: #fff ;
    }

    input[type="button"]:active,
    input[type="submit"]:active,
    input[type="reset"]:active,
    .button:active
    {
        background-color: #505050;
        top: 1px;
    }

    input[type="button"].alt,
    input[type="submit"].alt,
    input[type="reset"].alt,
    .button.alt
    {
        background-color: #444;
        box-shadow: inset 0px 0px 0px 1px #242424, inset 0px 2px 1px 0px rgba(255,255,255,0.2);
    }

    input[type="button"].alt:hover,
    input[type="submit"].alt:hover,
    input[type="reset"].alt:hover,
    .button.alt:hover
    {
        background-color: var(--dark-gray);
        color: #fff ;
    }

    input[type="button"].alt:active,
    input[type="submit"].alt:active,
    input[type="reset"].alt:active,
    .button.alt:active
    {
        background-color:var(--gray);
    }

    /* List */

    ul
    {
    }

    ul.default
    {
        list-style: disc;
        padding-left: 1em;
    }

    ul.default li
    {
        padding-left: 0.5em;
    }

    ul.social
    {
        cursor: default;
        margin: 0;
    }

    ul.social li
    {
        position: relative;
        display: inline-block;
        margin: 0.25em;
        top: 0;
    }

    ul.social li a {
        display: block;
        width: 48px;
        height: 48px;
        border-radius: 6px;
        top: 0;
        position: relative;

        -moz-transition: top .2s ease-in-out;
        -webkit-transition: top .2s ease-in-out;
        -o-transition: top .2s ease-in-out;
        -ms-transition: top .2s ease-in-out;
        transition: top .2s ease-in-out;
    }

    ul.social li a:before {
        background-color: var(--black);
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-moz-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-webkit-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-o-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),-ms-linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        background-image:url('https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png'),linear-gradient(top, rgba(48,48,48,0), rgba(48,48,48,0.2));
        border-radius: 6px;
        box-shadow: inset 0px 0px 0px 1px var(--black), inset 0px 2px 1px 0px rgba(207,207,207,0.1);
        color: var(--dark-gray) ;
        display: block;
        font-size: 26px;
        height: 48px;
        line-height: 48px;
        text-align: center;
        outline: 0;
        overflow: hidden;
        text-shadow: 1px 1px 0px rgba(255,255,255,0.1);
        width: 48px;

        -moz-transition: background-color .2s ease-in-out;
        -webkit-transition: background-color .2s ease-in-out;
        -o-transition: background-color .2s ease-in-out;
        -ms-transition: background-color .2s ease-in-out;
        transition: background-color .2s ease-in-out;
    }

    ul.social li a.fa-twitter		{ background-color: #2DAAE4; }
    ul.social li a.fa-facebook		{ background-color: #3C5A98; }
    ul.social li a.fa-dribbble		{ background-color: #C4376B; }
    ul.social li a.fa-linkedin		{ background-color: #006599; }
    ul.social li a.fa-tumblr		{ background-color: #51718A; }
    ul.social li a.fa-google-plus	{ background-color: #DA2713; }
    ul.social li a.fa-github		{ background-color: #FAFAFA; }
    ul.social li a.fa-rss			{ background-color: #F2600B; }
    ul.social li a.fa-instagram		{ background-color: #E0D7C8; }
    ul.social li a.fa-foursquare	{ background-color: #39A3D4; }
    ul.social li a.fa-skype			{ background-color: #10BEF1; }
    ul.social li a.fa-soundcloud	{ background-color: #FE5419; }
    ul.social li a.fa-youtube		{ background-color: #BF2E25; }
    ul.social li a.fa-blogger		{ background-color: #FF6501; }
    ul.social li a.fa-flickr		{ background-color: #0062DB; }
    ul.social li a.fa-vimeo			{ background-color: #4C8AB0; }

    ul.social li a:hover
    {
        top: -5px;
    }

    ul.social li a:hover:before
    {
        background-color: transparent;
    }

    ul.actions
    {
    }

    ul.actions li
    {
        display: inline-block;
        margin: 0 0 0 1em;
    }

    ul.actions li:first-child
    {
        margin-left: 0;
    }

    ol
    {
    }

    ol.default
    {
        list-style: decimal;
        padding-left: 1.25em;
    }

    ol.default li
    {
        padding-left: 0.25em;
    }

    /* Box */

    .box
    {
        background: #fff;
        box-shadow: inset 0px 0px 0px 1px rgba(0,0,0,0.15), 0px 2px 3px 0px rgba(0,0,0,0.1);
        text-align: center;
    }

    /*********************************************************************************/
    /* Icons                                                                         */
    /*********************************************************************************/

    .icon {
        text-decoration: none;
    }

    .icon:before {
        display: inline-block;
        font-family: FontAwesome;
        font-size: 1.25em;
        text-decoration: none;
        font-style: normal;
        font-weight: normal;
        line-height: 1;
        -webkit-font-smoothing:antialiased;
        -moz-osx-font-smoothing:grayscale;
    }

    .icon > .label {
        display: none;
    }

    .icon.featured
    {
        color: #2f2f2f;
        display: block;
        margin: 0 0 1.5em 0;
        cursor: default;
    }

    .icon.featured:before
    {
        font-size: 6em;
    }

    /*********************************************************************************/
    /* Wrappers                                                                      */
    /*********************************************************************************/

    .wrapper
    {
        background-image: url(https://web.archive.org/web/20210702081625im_/https://parallelcoin.info/assets/bg.png);
        box-shadow: inset 0px 1px 0px 0px rgba(0,0,0,0.05), inset 0px 2px 3px 0px rgba(0,0,0,0.1);
    }

    .wrapper.first
    {
        box-shadow: none;
    }

    .wrapper.style0{
        background-image: none;
        background-color: #fff;

    }

    .wrapper.style1
    {
        background-image: none;
        background-color: #cfcfcf;
    }
    .wrapper.style1 h1,.wrapper.style1 p,.wrapper.style1 li
    {
        color: #303030;
    }

    .wrapper.style2
    {
        background-color: #fafafa;
        text-shadow: 1px 1px 0px #fff;
    }

    .wrapper.style3
    {
        background-color: #f4f4f4;
        text-shadow: 1px 1px 0px #fff;
    }

    .wrapper.style4
    {
        background-color: #303030;
        color: #999;
        text-shadow: -1px -1px 0px #181818;
    }

    .wrapper.style4 h1,
    .wrapper.style4 h2,
    .wrapper.style4 h3,
    .wrapper.style4 h4,
    .wrapper.style4 h5,
    .wrapper.style4 h6
    {
        color: #fff;
    }

    .wrapper.style4 form input[type=text],
    .wrapper.style4 form input[type=password],
    .wrapper.style4 form select,
    .wrapper.style4 form textarea
    {
        border: none;
        background: #303030;
    }

    .wrapper.style4 form input[type=text]:focus,
    .wrapper.style4 form input[type=password]:focus,
    .wrapper.style4 form select:focus,
    .wrapper.style4 form textarea:focus
    {
        background: #252525;
    }

    /*********************************************************************************/
    /* Nav                                                                           */
    /*********************************************************************************/

    #nav
    {
        background-color: #303030;
        text-align: center;
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        z-index: 10000;
        cursor: default;
    }

    #nav ul
    {
        margin-bottom: 0;
    }

    #nav li
    {
        display: inline-block;
    }

    #nav a
    {
        position: relative;
        display: block;
        color: #fff;
        text-decoration: none;
        outline: 0;
    }

    #nav a:hover
    {
        color: #fff ;
    }

    #nav a.active:before
    {
        content: '';
        display: block;
        position: absolute;
        bottom: -0.6em;
        left: 50%;
        margin-left: -0.75em;
        border-left: solid 0.75em transparent;
        border-right: solid 0.75em transparent;
        border-top: solid 0.6em #303030;
    }

    /*********************************************************************************/
    /* Articles                                                                      */
    /*********************************************************************************/

    #top
    {
    }

    #top .image
    {
        border-radius: 50%;
    }

    #top .image img
    {
        border-radius: 50%;
    }

    #top p
    {
    }

    #top p a
    {
        color: inherit;
    }

    /*********************************************************************************/
    /* Copyright                                                                     */
    /*********************************************************************************/

    #copyright
    {
        color: #666;
    }

    #copyright a
    {
        color: inherit;

        -moz-transition: color .2s ease-in-out;
        -webkit-transition: color .2s ease-in-out;
        -o-transition: color .2s ease-in-out;
        -ms-transition: color .2s ease-in-out;
        transition: color .2s ease-in-out;
    }

    #copyright a:hover
    {
        color: #777;
    }

    .box p{
        margin: 0;
    }
    /*
      Miniport by HTML5 UP
      html5up.net | @n33co
      Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
    */

    /*********************************************************************************/
    /* Basic                                                                         */
    /*********************************************************************************/

    body,input,textarea,select
    {
        font-size: 13pt;
    }

    h1
    {
        font-size: 3.25em;
        letter-spacing: -0.025em;
    }

    h2
    {
        font-size: 2em;
        letter-spacing: -0.015em;
    }

    h3
    {
        font-size: 1.5em;
        letter-spacing: -0.015em;
    }

    h1, h2, h3, h4, h5, h6
    {
        margin: 0 0 0.75em 0;
        font-family: "IBM Plex Mono";
    }

    header
    {
        margin: 0 0 3em 0;
    }

    header > p
    {
        font-size: 1.25em;
        margin: 0;
    }

    footer
    {
        margin: 3em 0 0 0;
    }

    footer > p
    {
        font-size: 1.25em;
    }

    /* Form */

    form
    {
    }

    form .button
    {
        margin: 0 0.5em 0 0.5em;
    }

    /* Button */

    input[type="button"],
    input[type="submit"],
    input[type="reset"],
    .button
    {
        padding: 1em 2.35em 1em 2.35em;
        font-size: 1.1em;
    }

    input[type="button"].big,
    input[type="submit"].big,
    input[type="reset"].big,
    .button.big
    {
        font-size: 1.5em;
        letter-spacing: -0.025em;
    }

    /* Box */

    .box
    {
        padding: 2em;
    }

    .box.style1
    {
        padding: 3em 2em 3.5em 2em;
    }

    .box.style1 h3
    {
        margin-bottom: 0.5em;
    }

    .box.style2
    {
    }

    .box.style2 h3
    {
        margin-bottom: 0.25em;
    }

    .box.style2 .image
    {
        position: relative;
        left: 2em;
        top: 2em;
        margin: -4em 0 4em -4em;
        width: auto;
    }

    /*********************************************************************************/
    /* Wrappers                                                                      */
    /*********************************************************************************/

    .wrapper
    {
        padding: 8em 0 8em 0;
        text-align: center;
    }

    .wrapper.first
    {
        padding-top: 12em;
    }

    /*********************************************************************************/
    /* Nav                                                                           */
    /*********************************************************************************/

    #nav
    {
    }

    #nav a:hover
    {
        background: #383838;
    }

    #nav a:active
    {
        background: #484848;
    }

    #nav a
    {
        padding: 0.2em 1em 0.2em 1em;
        margin: 0.6em 0.2em 0.6em 0.2em;
        font-weight: 600;
        border-radius: 8px;
        -moz-transition: background-color .2s ease-in-out;
        -webkit-transition: background-color .2s ease-in-out;
        -o-transition: background-color .2s ease-in-out;
        -ms-transition: background-color .2s ease-in-out;
        transition: background-color .2s ease-in-out;
        color: #fff;
    }

    /*********************************************************************************/
    /* Articles                                                                      */
    /*********************************************************************************/

    #top
    {
        text-align: left;
    }

    #top .image
    {
        text-align:center;
        margin: 0;
    }

    h1
    {
        margin-top: 0.35em;
        line-height:4rem;
    }

    #top p
    {
        font-size: 1.5em;
        line-height: 1.75em;
    }

    #contact
    {
    }

    #contact footer
    {
        font-size: 0.9em;
    }

    /*********************************************************************************/
    /* Copyright                                                                     */
    /*********************************************************************************/

    #copyright
    {
        font-size: 1em;
        line-height: 1em;
    }

    #copyright li
    {
        display: inline-block;
        border-left: solid 1px rgba(0,0,0,0.5);
        box-shadow: -1px 0px 0px 0px rgba(255,255,255,0.1);
        padding: 0 0 0 1em;
        margin: 0 0 0 1em;
    }

    #copyright li:first-child
    {
        border: 0;
        box-shadow: none;
        padding-left: 0;
        margin-left: 0;
    }
















    .teaser{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        right:0;
        width: 100%;
        height: 100vh;
        background-color: #303030;
        overflow:hidden;
        line-height:1;
        z-index: 11111;
        animation-name: teaseranim;
        animation-duration: 5s;
        animation-iteration-count: 1;
        opacity:0;
        pointer-events: none;
    }
    @keyframes teaseranim {
        0%  {opacity:1}
        90%  {opacity:1}
        99.99% {left:0}
        100% {display:block;opacity:0;left:-100%}
    }
    .kggkTh {
        display: flex;
        flex-direction: column;
        height: 100%;
        color: #cfcfcf;
        background: url(/web/20210702081625im_/https://parallelcoin.info/assets/intro-bg-grid.svg) center 920px #303030;
    }
    .buZDsR {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: .5;
        display: flex;
        align-items: stretch;
        justify-content: stretch;
        pointer-events: none;
    }
    .cnVHDz {
        flex: auto;
        margin: 0 -100px;
    }
    .cnVHDz>video[playsinline][class] {
        position: static;
        object-fit: cover;
        z-index: -1000;
    }
    .buZDsRO {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 1;
        display: flex;
        height: 100vh;
        background: linear-gradient(to bottom, rgba(48,48,48,1) 0%,rgba(48,48,48,0) 38%,rgba(48,48,48,0) 62%,rgba(48,48,48,1) 100%);
    }
    .gzDaIA {
        display: flex;
        margin: auto;
        position: relative;
        padding: 0 16px;
        flex-direction: column;
    }

    .hAlYFz {
        opacity: .7;
        margin-bottom: 40px;
    }

    .datRyl {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .dUzKEk {
        text-transform: uppercase;
        font-family: Oswald;
        position: -webkit-sticky;
        position: sticky;
        top: 2vh;
    }
    .dUzKEk, .gNaQIH strong {
        font-weight: 700;
    }
    .bqzsXD, .dENNLc, .dUzKEk, .hAlYFz, .hchilx {
        text-align: center;
    }

    .fNmApF {
        position: relative;
        width: 100%;
        padding: 0 25px;
    }

    .fNmApF, .jtNXQs {
        white-space: nowrap;
    }
    .jqSTTi {
        font-size: 8vh;
    }
    .hJXFGi {
        font-size: 16vh;
    }

    .iJXdPE {
        font-size: 28vh;
    }
    .bgwhite{
        background: #CFCFCF;
        fill:#CFCFCF;
    }



    @media only screen and (max-width: 600px) {
        h1
        {
            font-size: 2.75em;
            letter-spacing: 0;
        }
        .d12u, .d11u, .d10u, .d9u, .d8u, .d7u, .d6u, .d5u, .d4u, .d3u, .d2u, .d1u { width: 100%; clear: none; margin-left: 0; }

        #top{
            text-align:center;
        }
        .jqSTTi {
            font-size: 5vh;
        }
        .hJXFGi {
            font-size: 12vh;
        }
        .iJXdPE {
            font-size: 15vh;
        }

    }


    tspan{white-space:pre}
    .shp0{fill:#303030}
    .shp1{fill:#cfcfcf}
</style>

<svelte:head>
  <script async custom-element="amp-video" src="https://cdn.ampproject.org/v0/amp-video-0.1.js"></script>  
  <script async custom-element="amp-twitter" src="https://cdn.ampproject.org/v0/amp-twitter-1.0.js"></script>
  <script async custom-element="amp-facebook-page" src="https://cdn.ampproject.org/v0/amp-facebook-page-0.1.js"></script>  

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&family=Open+Sans:wght@300;600;700&family=Oswald:wght@300;700&display=swap" rel="stylesheet">
</svelte:head>


<div class="scs">
<!-- Nav -->
<nav id="nav">
  <ul class="container">
    <li><a href="#top">Top</a></li>
    <li><a href="#specs">Specifications</a></li>
    <li><a href="#work">Downloads</a></li>
    <li><a href="#portfolio">Resources</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<!-- Home -->
<div class="wrapper style0 first">
  <article class="container" id="top">
    <div class="row">
      <div class="d4u">
                        <span class="image fit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewbox="0 0 1024 1024" width="256" height="256">
<path class="shp0" d="M512,0c-282.88,0 -512,229.12 -512,512c0,282.88 229.12,512 512,512c282.88,0 512,-229.12 512,-512c0,-282.88 -229.12,-512 -512,-512z"/>
<path class="shp1" d="M634.88,198.42c19.2,5.12 34.56,12.79 51.2,23.03c29.44,19.2 52.48,42.25 70.4,72.97c19.2,30.72 26.88,65.28 26.88,102.4c0,35.84 -8.96,70.38 -26.87,101.1c-17.92,32 -40.96,56.33 -70.4,74.25c-16.64,10.24 -34.56,19.21 -51.2,24.33c-19.2,5.12 -38.4,7.68 -57.6,7.68v-71.68c34.56,-1.28 66.57,-12.8 94.72,-39.68c28.16,-26.88 42.23,-58.9 42.23,-97.3c0,-38.4 -12.79,-70.4 -39.67,-97.28c-26.88,-26.88 -58.87,-39.68 -97.27,-39.68c-38.4,0 -71.68,12.8 -97.27,39.68c-26.88,26.88 -39.7,58.88 -39.7,97.28v426.25c-15.36,-15.36 -39.66,-38.41 -69.1,-67.85v-358.4c0,-19.2 2.56,-38.38 7.68,-56.3c5.12,-19.2 12.78,-35.84 23.02,-51.2c19.2,-29.44 42.26,-52.5 72.98,-71.7c30.72,-17.92 65.28,-25.6 102.4,-25.6c19.2,0 39.68,2.58 57.6,7.7zM641.28,395.52c0,35.84 -29.43,65.3 -65.27,65.3c-37.12,1.28 -65.3,-28.18 -65.3,-65.3c0,-35.84 29.46,-65.28 65.3,-65.28c35.84,0 65.27,29.44 65.27,65.28zM320.01,369.92v344.32c-30.72,-30.72 -55.05,-53.76 -69.12,-69.12v-275.2z"/>
</svg>


</span>
      </div>
      <div class="d8u">
        <header>
          <h1>What is ParallelCoin?</h1>
        </header>
        <p>ParallelCoin is an new digital currency that enables instant payments to anyone, anywhere in the world. <br>ParallelCoin uses peer-to-peer technology to operate with no central authority: managing transactions and issuing money are carried out collectively by the network.<br> ParallelCoin is also the name of the open source software which enables the use of this currency.</p>
        <a href="#specs" class="button big scrolly">Specifications</a>
      </div>
    </div>
  </article>
</div>

<!-- Specs -->
<div class="wrapper style1">
  <article class="container" id="specs">
    <div class="row">
      <div class="d12u">
        <header>
          <h1>ParallelCoin specifications</h1>
        </header>
        <p>Multi-algo proof of work crypto currency.<br>Fair release with no premine, no IPO and no ICO.<br></p>
        <ul>
          <li>Algorithms: SHA256D &amp; SCRYPT</li>
          <li>Abbreviation: DUO</li>
          <li>Total Coins: 1,000,000</li>
          <li>Block Reward: Blocks 1-998 = 0.02 DUO (Fair Release) | Blocks &gt; 998 = 2 DUO</li>
          <li>Block Time: 5 minutes</li>
          <li>Halving Interval: 250,000 blocks</li>
          <li>P2P Port: 11047 (21047 Testnet)</li>
          <li>RPC Port: 11048 (21048 Testnet)</li>
        </ul>
        
        <a href="#work" class="button big scrolly">Get started!</a>
      </div>
    </div>
  </article>
</div>

<!-- Work -->
<div class="wrapper style2">
  <article id="work">
    <header>
      <h2>Download</h2>
      <p>Wallets for your system.</p>
    </header>
    <div class="container">
      <div class="row">
        <div class="d4u">
          <section class="box style1">
            <span class="icon featured fa-windows"></span>
            <h3>Windows</h3>
            <a href="https://github.com/p9c/pod/releases/download/1.2.0/Parallelcoin-qt-v1.2.0.0-Win.zip" target="_blank">
              <p>Download Windows wallet.</p>
            </a>
          </section>
        </div>
        <div class="d4u">
          <section class="box style1">
            <span class="icon featured fa-linux"></span>
            <h3>Linux</h3>
            <a href="https://github.com/p9c/pod/releases/download/1.2.0/parallelcoin-qt-x86_64.AppImage" target="_blank">
              <p>Download QT wallet App Image.</p>
            </a>
            <a href="https://github.com/p9c/pod/releases/download/1.2.0/parallelcoind-x86_64.AppImage" target="_blank">
              <p>Download daemon App Image.</p>
            </a>
          </section>
        </div>
        <div class="d4u">
          <section class="box style1">
            <span class="icon featured fa-github"></span>
            <h3>Source</h3>
            <a href="https://github.com/parallelcointeam/parallelcoin" target="_blank">
              <p>View source on GitHub.</p>
            </a>
          </section>
        </div>
      </div>
    </div>
    <footer>
      <p>
      <p>If your wallet does not want to start syncing:</p>
      <p>Try adding these nodes to your configuration (parallelcoin.conf file located in the wallet folder):</p>

      <p>
        <small>
          addnode=185.69.55.35:11047<br/>
          addnode=46.28.107.182:11047<br/>
          addnode=91.206.16.214:11047<br/>
          addnode=157.161.128.62:11047<br/>
          addnode=85.15.179.171:11047<br/>
          addnode=103.254.148.9:11047<br/>
          addnode=144.217.73.92:11047<br/>
          addnode=165.227.110.22:11047<br/>
          addnode=194.135.88.119:11047<br/>
          addnode=73.164.170.207:11047<br/>
          addnode=76.176.77.120:11047<br/>
          addnode=89.40.12.55:11047<br/>
          addnode=coins.prohashing.com:6245</small>
      </p>


      <p>This should help you getting your Parallelcoin wallet to start syncing, and as soon it started syncing it will also find and add further nodes automatically.</p>
      <a href="#portfolio" class="button big scrolly">Resources</a>
    </footer>
  </article>
</div>

<!-- Portfolio -->
<div class="wrapper style3">
  <article id="portfolio">
    <header>
      <h2>Resources</h2>
      <p>Here you can find pools and exchanges for ParallelCoin.</p>
    </header>
    <div class="container">
      <div class="row">
        <div class="d4u">
          <article class="box style2">
            <h3>Exchanges</h3>
            <p><a href="https://dex-trade.com/spot/trading/DUOBTC" target="_blank">Dex-Trade DUO-BTC</a></p>
            <p><a href="https://dex-trade.com/spot/trading/DUOUSDT" target="_blank">Dex-Trade DUO-USDT</a></p>
            <p><a href="https://c-patex.com/markets/duobtc" target="_blank">C-Patex DUO-BTC</a></p>
            <p><a href="https://c-patex.com/markets/duoltc" target="_blank">C-Patex DUO-LTC</a></p>
            <p><a href="https://c-patex.com/markets/duodoge" target="_blank">C-Patex DUO-DOGE</a></p>
          </article>
        </div>
        <div class="d4u">
          <article class="box style2">
            <h3>Blockchain explorer</h3>
            <p><a href="http://explorer.parallelcoin.info/" target="_blank">ParallelCoin block explorer</a></p>
            <p><a href="https://prohashing.com/explorer/Parallelcoin/" target="_blank">Prohashing block explorer</a></p>
          </article>
        </div>

        <div class="d4u">
          <article class="box style2">
            <h3>Faucet</h3>
            <p><a href="http://faucet.parallelcoin.info/">ParallelCoin Faucet</a></p>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="d6u">
          <article class="box style2">
            <h3>Pools</h3>
            <p><a href="https://gigapool.eu/site/mining" target="_blank">Gigapool scrypt pool</a></p>
            <p><a href="http://duo.smarterhash.com/" target="_blank">Smarterhash</a></p>
            <p><a href="http://italyiimp.com/site/mining/" target="_blank">Italyiimp</a></p>
            <p><a href="https://duo.coinstop.me/" target="_blank">Coinstop</a></p>
            <p><a href="http://timeteh.com/" target="_blank">TimeTeh</a></p>
          </article>
        </div>
        <div class="d6u">
          <article class="box style2">
            <h3>Market Information</h3>
            <p><a href="http://coinmarketcap.com/currencies/parallelcoin" target="_blank">Coinmarketcap</a></p>
            <p><a href="https://bitinfocharts.com/de/parallelcoin/" target="_blank">bitinfocharts</a></p>
            <p><a href="https://www.cryptocompare.com/coins/duo/overview" target="_blank">Cryptocompare</a></p>
            <p><a href="http://www.cryptocoincharts.info/coins/show/duo" target="_blank">Cryptocoincharts</a></p>
            <p><a href="https://www.coinhills.com/market/duo/" target="_blank">Coinhills</a></p>
            <p><a href="http://www.blockchainstats.org/altcoin-market-data/parallelcoin-market-data/" target="_blank">Blockchainstats</a></p>
          </article>
        </div>
      </div>
    </div>
    <footer>
      <p>More information?</p>
      <a href="#contact" class="button big scrolly">More</a>
    </footer>
  </article>
</div>



<!-- Portfolio -->
<div class="wrapper style3">
  <article id="portfolio">
    <header>
      <h2>Latest info</h2>
      <p>Here you can find latest information about development of ParallelCoin.</p>
    </header>
    <div class="container">
      <div class="row">
        <div class="d6u">
          <article class="box style2">
            <h3>Facebook</h3>

            <amp-facebook-page width="340" height="430" layout="responsive" data-hide-cover="true" data-href="https://www.facebook.com/parallelcoin/">
            </amp-facebook-page>

          </article>
        </div>
        <div class="d6u">
          <article class="box style2">
            <h3>Twitter</h3>

            <amp-twitter width="340" height="430" layout="responsive" data-tweetid="1326573881138810883">
            </amp-twitter>
          </article>
        </div>
      </div>
    </div>
    <footer>
      <p>More information?</p>
      <a href="#contact" class="button big scrolly">More</a>
    </footer>
  </article>
</div>

<!-- Contact -->
<div class="wrapper style4">
  <article id="contact" class="container 75%">
    <header>
      <h2>Have some question or suggestion?</h2>
      <p>If you have anything to ask development team do not hesitate to ask.</p>
    </header>
    <div>
      <!--			<div class="row">
              <div class="12u">
                <form method="post" action="#">
                  <div>
                    <div class="row">
                      <div class="6u">
                        <input type="text" name="name" id="name" placeholder="Name" />
                      </div>
                      <div class="6u">
                        <input type="text" name="email" id="email" placeholder="Email" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="12u">
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="12u">
                        <textarea name="message" id="message" placeholder="Message"></textarea>
                      </div>
                    </div>
                    <div class="row 200%">
                      <div class="12u">
                        <ul class="actions">
                          <li><input type="submit" value="Send Message" /></li>
                          <li><input type="reset" value="Clear Form" class="alt" /></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>  -->
      <div class="row">
        <div class="d12u">
          <hr/>
          <h3>Find ParallelCoin on ...</h3>
          <ul class="social">
            <li><a href="https://twitter.com/parallelcoinduo" class="icon fa-twitter"><span class="label">Twitter</span></a></li>
            <li><a href="https://www.facebook.com/parallelcoin" class="icon fa-facebook"><span class="label">Facebook</span></a></li>
            <!--
            <li><a href="#" class="icon fa-dribbble"><span class="label">Dribbble</span></a></li>
            <li><a href="#" class="icon fa-linkedin"><span class="label">LinkedIn</span></a></li>
            <li><a href="#" class="icon fa-tumblr"><span class="label">Tumblr</span></a></li>
            <li><a href="#" class="icon fa-google-plus"><span class="label">Google+</span></a></li>
            <li><a href="#" class="icon fa-github"><span class="label">Github</span></a></li>
            <li><a href="#" class="icon fa-rss"><span>RSS</span></a></li>
            <li><a href="#" class="icon fa-instagram"><span>Instagram</span></a></li>
            <li><a href="#" class="icon fa-foursquare"><span>Foursquare</span></a></li>
            <li><a href="#" class="icon fa-skype"><span>Skype</span></a></li>
            <li><a href="#" class="icon fa-soundcloud"><span>Soundcloud</span></a></li>
            <li><a href="#" class="icon fa-youtube"><span>YouTube</span></a></li>
            <li><a href="#" class="icon fa-blogger"><span>Blogger</span></a></li>
            <li><a href="#" class="icon fa-flickr"><span>Flickr</span></a></li>
            <li><a href="#" class="icon fa-vimeo"><span>Vimeo</span></a></li>
            -->
          </ul>
          <hr/>
        </div>
      </div>
    </div>
    <footer>
      <ul id="copyright">
        <li>&copy; ParallelCoin - DUO. No rights reserved.</li>
      </ul>
      <ul id="copyright">
        <li><a href="http://marcetin.com/">marcetin</a></li>
        <li><a href="https://bitstickers.net/">BitStickers</a></li>
        <li><a href="http://com-http.us/">Crypto Currencies World</a></li>
        <li><a href="http://com-http.org/">Webmaster Resource</a></li>
      </ul>
    </footer>
  </article>
  <a href="#top" class="button big scrolly">Top</a>
</div>

</div>
