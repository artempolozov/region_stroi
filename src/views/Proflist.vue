<template>
<div>
    <div class="another-block1">
        <div class="text-right3">Забор из профлиста</div>
        <div class="text-right4">Забор из профлиста является хорошим решением,</div>
        <div class="text-right4">когда необходимо быстро построить качественное сплошное ограждение!</div>
    </div>
        <div class="views--home">
        <span class="down-text">ВЫБЕРИТЕ ТИП ПОКРЫТИЯ:</span>
        <div class="row1">
            <div class="tile1 common1" v-on:click="goToPage('ocinkovanny')">
                <img src="@/assets/images/ocink.webp">
                <span class="title1">Оцинкованный профлист</span>
            </div>
            <div class="tile1 common1" v-on:click="goToPage('polimer')">
                <img src="@/assets/images/polimer.webp">
                <span class="title1">Полимерный профлист</span>
            </div>
        </div>

        <div class="row2">
            <div class="tile1 common1" v-on:click="goToPage('dvuhstoronny')">
                <img src="@/assets/images/polimer2.webp">
                <span class="title1">Двухсторонний полимер</span>
            </div>
            <div class="tile1 common1" v-on:click="goToPage('dekorativny')">
                <img src="@/assets/images/dekor.webp">
                <span class="title1">Декоративный профлист</span>
            </div>
        </div>
    </div>

    <div>
        <div class="page-description">
            <span>Фотографии ограждений:</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
    components: {       
    },
    data() {
        return {};
    },
    computed: {

    },
    methods: {
        goToPage(page) {
            this.$router.push(page);
            window.scrollTo(0,0);
        }
    }
};
</script>
<style scoped>
    .page-description >span {
        height: 80px;
        width: 100%;
        display: flex;
        place-items: center;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
    }
    .page-description > span {
        font-weight: bolder;
        font-size: 18px;
        text-transform: uppercase;
    }
    .down-text {
        color: rgb(0, 0, 0);
        display: flex;
        justify-content: space-around;
        font-weight: bolder;
        font-size: 18px;
        text-transform: uppercase;
    }
    .tile1.common1 img {
        width: 100%;
    }
    .row1 {
        display: flex;
        justify-content: center;
    }
    .row2 {
        display: flex;
        justify-content: center;
    }
    .title1 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 14px;
        text-align: center;
        display: block;
        margin-top: 8px;
        color: rgb(78, 78, 78);
    }
    .tile1 {
        width: 306px;
        margin: 25px 25px 0px 25px;
        padding: 10px;
        display: inline-block;
        box-sizing: border-box;
        text-align: center;
    }
    .tile1 img:hover {
        transform: scale(1.01);
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(130, 128, 128, 0.15), 0 4px 22px rgba(130, 130, 130, 0.12);
    }
    .another-block1 {
        height: 180px;
        background-color: black;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(~@/assets/images/proftop.webp);
        background-size: cover;
        background-position: center;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin-bottom: 30px;
    }
    .text-right4 {
        color: #eaeaea;
        font-size: 16px;
        font-weight: normal;
    }
    .text-right3 {
        color: white;
        font-size: 33px;
        font-weight: bold;
        margin-bottom: 8px;
    }

    @media screen and (max-width: 690px) {
        div .page-description > span {
            font-size: 17px;
        }
        div .another-block1 {
            margin-top: 23px;
            height: 160px;
        }
        div .text-right3 {
            font-size: 27px;
        }
        div .text-right4 {
            font-size: 14px;
        }
        div .down-text {
            font-size: 15px;
        }
        div .title1 {
            font-size: 13px;
        }
        div .tile1.common1 {
            margin: 25px 20px 0px 20px;
        }
    }
    @media screen and (max-width: 520px) {
        div .page-description > span {
            font-size: 15px;
        }
        div .another-block1 {
            height: 150px;
        }
        div .text-right3 {
            font-size: 25px;
        }
        div .text-right4 {
            font-size: 12px;
            display: none;
        }
        div .tile1.common1 {
            padding: 0px;
            margin: 25px 20px 0px 20px;
        }
        div .down-text {
            font-size: 14px;
        }
        div .title1 {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 416px) {
        div .another-block1 {
            height: 120px;
        }
        div .text-right3 {
            font-size: 18px;
        }
        div .text-right4 {
            font-size: 9px;
            margin-top: 4px;
        }
        div .down-text {
            font-size: 13px;
        }
        div .title1 {
            font-size: 10px;
        }
    }
    @media screen and (max-width: 375px) {
        div .another-block1 {
            height: 120px;
        }
        div .text-right3 {
            font-size: 18px;
        }
        div .text-right4 {
            font-size: 9px;
            margin-top: 4px;
        }
        div .down-text {
            font-size: 13px;
        }
        div .title1 {
            font-size: 10px;
        }
    }
</style>



