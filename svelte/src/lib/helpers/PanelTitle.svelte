<script>
    export let name;
    export let title;
    export let icon;
</script>

<h3 class="pnlhd pnlh text-xl py-4 rounded-t" title="{ name } { title }"><i class="fas fa-{ icon } mr-2 pl-4 text-2xl"></i>{ title }</h3>

<style>
    .pnlhd{
        border-bottom:  1px solid rgba(0,0,0, .24);
        border-bottom:  1px solid var(--trans_dark);
        background: rgba(48,48,48,.48);
        box-shadow: inset 1px 1px 1px rgba(243,243,243,.5);
        justify-content: space-between;
        align-items: center;

        font-family: var(--title);
        color: #404040;
        line-height: 1;
        text-shadow: 0px 1px 0px rgba(243,243,243,.5);
    }
</style>
