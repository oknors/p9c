  <div class="relative flex flex-col justify-center">
    <div class="relative flex flex-col justify-center">
      <div class="absolute top-0 left-0 inline-block intro">
        <span class="intro intro--the">Plan 9</span>
        <span class="intro intro--num">from</span>
        <span class="intro">Crypto Space</span>
      </div>
      <h1 class="text-9xl	font-title"><slot></slot></h1>
      </div>
    </div>


<style>
.intro {
  color: rgb(207,207,207);
  display: block;
  font-family: 'plan9regular', cursive;
  
  text-shadow: 1px 1px black;
  transform: rotate(-10deg);
}

.intro--the {
  transform: rotate(-10deg) translate(13px, -9px);
}

.intro--num {
  background: rgb(207,207,207);
  border: 1px dotted rgb(40,40,40);
  color: rgb(20, 60, 80);
  display: inline-block;
  font-family: sans-serif;
  font-size: 6px;
  font-weight: bolder;
  padding: 4px 6px 2px;
  position: absolute;
  text-shadow: none;
  transform: rotate(-10deg) translate(25px, -9px);
}

</style>



