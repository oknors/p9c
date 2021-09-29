    <a href="https://where.parallelcoin.info/" class="absolute left-0 top-2 ufospace">
        <amp-img
                alt="ParallelCoin - Plan 9 from Crypt-Space - Ufo"
                src="https://s.okno.rs/parallelcoin/img/ufo.webp"
                width="300"
                height="83"
                layout="responsive"
        >
        </amp-img>
    </a>

<style>
    .ufospace{
        width: 128px;
        height: auto;
        cursor: pointer;
        opacity: 0.62;
        transform: scale(0.62);
        animation: move-ufo 10s linear infinite;
        z-index: 999999;
    }

    .ufospace img{
        width: 88%;
    }

    @keyframes move-ufo {
        0% {
            transform: scale(0.62);
        }
        20% {
            transform: scale(0.72);
        }
        50% {
            transform: scale(0.38);
        }
        80% {
            transform: scale(0.92);
        }
        100% {
            transform: scale(0.62);
        }
    }
</style>
