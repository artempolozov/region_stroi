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
        <span class="down-text">ВЫБЕРИТЕ ТИП ПОКРЫТИЯ:</span>

        <div class="row">
            <div class="tile common">
                <img src="@/assets/images/proflist.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Цинк / полимерный односторонний / Полимерный двухсторонний
                </span>
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

    }
};
</script>
<style>
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
        height: 30px;
    }
    .row {
        display: flex;
        justify-content: space-between;
    }
    .tile.common {
        border-top: 3px solid rgb(226, 28, 33);
        background-color: white;
    }
</style>
