<script>
</script>
<a class="{'{{css}}'} btn btn--{'{{slug}}'}" href="{'{{url}}'}">
    <i class="btn__icon {'{{icon}}'}"></i>
    <span class="btn__title">{'{{title}}'}</span>
    <span class="btn__desc">{'{{desc}}'}</span>
  </a>
<style>
 
 

 .btn {
  box-sizing: border-box;
  display: inline-block;
  text-align: left;
  white-space: nowrap;
  text-decoration: none;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid #888;
  padding: 4px 8px;
  margin: 1rem;
  border-radius: 4px;
  color: #cfcfcf;
  fill: #cfcfcf;
  background: #303030;
  line-height: 1em;
  min-width: 190px;
  height: 45px;
  transition: 0.2s ease-out;
  box-shadow: 0 1px 2px rgba(0,0,0,0.2);
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  font-family: 'bariolregular';
  font-weight: 500;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -moz-font-feature-settings: 'liga', 'kern';
}
.btn:hover,
.btn:focus {
  background: #303030;
  color: #cfcfcf;
  fill: #cfcfcf;
  border-color: #cfcfcf;
  transform: scale(1.01) translate3d(0, -1px, 0);
  box-shadow: 0 4px 8px rgba(30,30,30,30.2);
}
.btn:active {
  outline: 0;
  background: #303030;
  transition: none;
}
.btn__icon,
.btn__title,
.btn__desc {
  display: inline-block;
  vertical-align: top;
}
.btn__icon {
  font-size: 30px;
  width: 30px;
  height: 30px;
  margin-right: 5px;
  margin-top: 2px;
}
.btn__title {
  letter-spacing: 0.08em;
  margin-top: -0.1em;
  font-size: 10px;
}
.btn__desc {
  display: block;
  margin-left: 38px;
  margin-top: -17px;
  font-size: 22px;
  letter-spacing: -0.03em;
}

</style>
