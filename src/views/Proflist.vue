<template>
<div>
    <div class="another-block1">
        <div class="text-right3">ЗАБОР ИЗ ПРОФЛИСТА</div>
        <pre class="text-right4">Забор из профлиста является хорошим решением,
когда необходимо быстро построить качественное сплошное ограждение!</pre>
    </div>
        <div class="views--home" style="height: 650px">
            <div class="page-description3"></div>
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
            <div class="tile1 common1" v-on:click="goToPage('dvuhstoronny')">
                <img src="@/assets/images/polimer2.jpg">
                <span class="title1">Двухсторонний полимер</span>
            </div>
            <div class="tile1 common1" v-on:click="goToPage('dekorativny')">
                <img src="@/assets/images/dekor.jpg">
                <span class="title1">Декоративный профлист</span>
            </div>
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
        text-align: center;
        position: relative;
        top: 7px;
        color: rgb(78, 78, 78);
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
    .page-description3 {
        height: 25px;
        width: 100%;
        display: flex;
        place-items: center;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
        position: relative;
        bottom: 6px;
    }
    .another-block1 {
        height: 180px;
        background-color: black;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(~@/assets/images/proftop.png);
        background-size: cover;
        background-position: center;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    .text-right4 {
        color: #eaeaea;
        font-size: 16px;
        font-weight: normal;
        font-family: HelveticaNeueCyr;
        margin: 1px;
    }
    .text-right3 {
        color: white;
        font-size: 33px;
        font-weight: bold;
    }
</style>




