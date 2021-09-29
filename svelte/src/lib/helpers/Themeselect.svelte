<script>
    export let isDarkMode;

    // module.exports = {
    //     data() {
    //         return {
    //             isLoading: true,
    //             isDarkMode:true,
    //         }
    //     },
    //     mounted() {
    //         this.darkmode = this.$cookies.get('darkmode')
    //     },
    //     methods: {
    //         theme : function(){
    //             this.isDarkMode = !this.isDarkMode
    //             this.$cookies.set('darkmode', this.isDarkMode)
    //             this.$emit('darkmode', this.isDarkMode)
    //         },
    //     },
    //     components:{
    //     }
    // }

</script>




<button class="w-8 h-8 focus:outline-none m-2">

    <input id="dark-mode-checkbox" type="checkbox">
    <label id="dark-mode-label" for="dark-mode-checkbox">Turn on dark mode</label>

        <svg class="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
            />
        </svg>
        {#if isDarkMode}
        <svg class="w-8 h-8 md:w-10 md:h-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
            />
        </svg>
        {/if}
    </button>
<style>
    /**
        * If the user states they prefer dark, obey.
        * Don't offer the option to override.
        */
    @media (prefers-color-scheme: dark) {
        .wrapper, .wrapper h1 {
            color: white;
            background-color: black;
        }

        #dark-mode-checkbox,
        #dark-mode-label {
            display: none;
        }
    }

    /**
     * If the checkbox is checked, all adjacent siblings will be in dark mode.
     * This will only be possible if the user doesn't prefer dark,
     * or on browsers that don't understand `prefers-color-scheme`.
     */
    #dark-mode-checkbox:checked ~ * {
        color: white;
        background-color: black;
    }

    /**
     * Position these absolutely so they don't "consume" space.
     */
    #dark-mode-checkbox,
    #dark-mode-label {
        position: absolute;
    }

    /**
     * Don't display the ugly checkbox. On a real site, you could style the label
     * as a button and work with the `:checked ::before` selector of the checkbox
     * to convey the state.
     */
    #dark-mode-checkbox {
        display: none;
    }
</style>
