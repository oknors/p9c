<script>
      import HeadTitle from '$lib/components/HeadTitle.svelte';
      import Socials from '$lib/components/Socials.svelte';
      import ButtonZoom from '$lib/components/Socials.svelte';
</script>
<div class="flex flex-col text-center parallelcoin">rrrrr

            <amp-list layout="responsive" width="600" height="300" src="https://api.parallelcoin.io/downloads" reset-on-refresh single-item items="."
                  binding="no">
                  {`{{ . }}`}
            <template type="amp-mustache">
  <a class="flex flex-row justify-center my-4 text-2xl no-underline text-text-primary" href="{`'https://'{{ slug }}'.parallelcoin.info'`}">
            <div class="character">{`{{ title }}`}</div>
            <div class="flex-grow hidden mx-1 mb-2 border-b-2 border-dotted md:flex"></div>
            <div class="hidden md:flex">{`{{ slug }}`}.parallelcoin.info</div>
          </a>
        </template>
        </amp-list>




    <main class="flex flex-col items-center text-text-primary">
          <h2 class="text-3xl text-center">ParallelCoin wallet application</h2>
            <p class="flex flex-wrap justify-center">
                <ButtonZoom icon=release.CustomFields.Icon :title=release.Title :desc=release.Content :url="release.CustomFields.URL" :key="release.Slug"></ButtonZoom>
            </p>
            <p class="flex flex-wrap justify-center">
                <ButtonZoom icon=release.CustomFields.Icon :title=release.Title :desc=release.Content :url="release.CustomFields.URL" :key="release.Slug"></ButtonZoom>
            </p>
            <br />
            <h3 class="text-2xl text-center">ParallelCoin legacy wallet application</h3>
            <p class="flex flex-wrap justify-center">
                <ButtonZoom icon=legacy.CustomFields.Icon :title=legacy.Title :desc=legacy.Content :url="legacy.CustomFields.URL" :key="legacy.Slug"></ButtonZoom>
            </p>
            <p class="flex flex-wrap justify-center">
                <ButtonZoom icon=legacy.CustomFields.Icon :title=legacy.Title :desc=legacy.Content :url="legacy.CustomFields.URL" :key="legacy.Slug"></ButtonZoom>
            </p>
    </main>
</div>


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