<script>
</script>
<div class="{$$props.class} flex flex-col pnlbg rounded-md">
    <slot name="footer"></slot>
    <slot></slot>
    <slot name="footer"></slot>
</div>

<style>
    .pnlbg{
        background: #fcfcfc;
        background: linear-gradient(to bottom, rgba(252,252,252,.62) 62%,rgba(257,257,257,.62) 100%);
        border: 1px solid rgba(0,0,0, .38);
        border: 1px solid var(--border_dark);
        box-shadow: inset 1px 0 3px rgba(0,0,0,.9);
        transition: all 55ms ease-in;
        color: #303030;}

    .pnlbg:hover{
        box-shadow: inset 1px 0 1px rgba(0,0,0,.62);
        transition: all 33ms ease-in;}

</style>
