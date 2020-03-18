<template>
    <div class="views--home" style="height: 800px">
        <div class="page-description1">
            <pre class="order-text1">
        Забор из профлиста является хорошим решением,
        когда необходимо быстро построить качественное сплошное ограждение.
        При установке таких ограждений на первый план выходят такие характеристики,
        как качество, долговечность и конечно экономичность
            </pre>
        </div>
        <div class="page-description2"></div>
        <div class="main-block">
            <div class="pic-block">
            </div>
        <span class="block-text">текс забора</span>
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

    }
};
</script>
<style>
    .main-block {
        height: 130px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        place-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        justify-content: center;
        background-color: red;
    }
    .main-block > span {
        font-weight: bolder;
        font-size: 20px;
        text-transform: uppercase;
    }
    .pic-block {
        height: 130px;
        width: 216px;
        position: relative;
        background: #090;
        right: 309px;
    }
    .block-text {
        position: relative;
        right: 298px;
        text-align: center;
        bottom: 42px
    }
    .page-description2 {
        height: 30px;
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
</style>