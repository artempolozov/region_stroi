<template>
    <div class="views--home" style="height: 800px">

        <div class="page-description1">
            <div class="page-description2">
                <div class="icon">
                    <img src="@/assets/images/inf.png">
                    <pre class="description">Забор из профлиста является хорошим решением,
        когда необходимо быстро построить качественное сплошное ограждение.
        При установке таких ограждений на первый план выходят такие характеристики,
        как качество, долговечность и конечно экономичность
                </pre>
                </div>
            </div>
        </div>
        <span class="down-text">ВЫБЕРИТЕ ТИП ПОКРЫТИЯ:</span>

        <div class="row1">
            <div class="tile1 common1" v-on:click="goToPage('ocinkovanny')">
                <img src="@/assets/images/ocink.jpg">
                <span class="title1">Оцинкованный профлист</span>
            </div>
            <div class="tile1 common1" v-on:click="goToPage('polimer')">
                <img src="@/assets/images/polimer.jpg">
                <span class="title1">Полимерный профлист</span>
            </div>
        </div>

        <div class="row2">
            <div class="tile1 common1">
                <img src="@/assets/images/polimer2.jpg">
                <span class="title1">Двухсторонний полимер</span>
            </div>
            <div class="tile1 common1">
                <img src="@/assets/images/dekor.jpg">
                <span class="title1">Декоративный профлист</span>
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
    .page-description1 {
        height: 110px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        place-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
    }
    pre.order-text1 {
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: rgb(78, 78, 78);
        font-size: 16px;
        border-bottom: 1px solid rgba(66, 66, 66, 0.21);
    }
    .down-text {
        font-family: HelveticaNeueCyr;
        color: rgb(78, 78, 78);
        display: flex;
        justify-content: space-around;
        height: 10px;
    }
    .tile1.common1 img {
        width: 100%;
    }
    .tile1.common1 .description {
        display: block;
        text-align: center;
    }
    .row1 {
        display: flex;
        justify-content: center;
    }
    .row2 {
        display: flex;
        justify-content: center;
        position: relative;
        bottom: 40px;
    }
    .title1 {
        font-weight: normal;
        text-transform: uppercase;
        font-size: 14px;
        font-family: HelveticaNeueCyr;
        text-align: center;
        position: relative;
        top: 7px;
    }
    .description {
        font-size: 13px;
        color: rgb(78, 78, 78);
        border-bottom: 1px solid rgba(66, 66, 66, 0.21);
    }
    .tile1 {
        width: 306px;
        height: 280px;
        margin: 25px;
        padding: 10px;
        display: inline-block;
        box-sizing: border-box;
        font-family: HelveticaNeueCyr;
        text-align: center;
    }
    .tile1 img:hover {
        webkit-transform: scale(1.01);
        ms-transform: scale(1.01);
        transform: scale(1.01);
        cursor: pointer;
        box-shadow: 0 2px 8px rgba(130, 128, 128, 0.15), 0 4px 22px rgba(130, 130, 130, 0.12);
    }
    .page-description2 {
        height: 100px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        place-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
    }
    .icon .description {
        display: inline-block;
        font-size: 16px;
        color: rgb(78, 78, 78);
        font-family: HelveticaNeueCyr;
    }
    .icon {
        display: flex;
        align-items: center;
    }
    .icon img {
        width: 60px;
        position: relative;
        bottom: 10px;
    }
</style>