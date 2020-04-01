<template>
<div>
        <div class="another-block1">
            <div class="text-right3">ПОЛИМЕРНЫЙ ПРОФЛИСТ</div>
            <div class="text-right4">Лист покрыт цветным полимером с одной стороны.</div>
        </div>
    <div class="views--home">
            <div class="page-description3"></div>
        <div class="box-price" id="box-1">
            <div class="box-left">
                <div class="caption">
                    <pre class="text-left">Высота забора: 1.5м
(столб: 50х50 / 60х60, лаги: 40х20мм)</pre>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right1">м/п от 1140 руб.</div>
                <strike class="text-down">м/п от 1190 руб.</strike>
            </div>
        </div>

        <div class="page-description2">
            <div class="icon">
                <img src="@/assets/images/complectred.png">
                <pre class="description">Комплектация забора оговаривается
индивидуально с заказчиком!</pre>
            </div>
        </div>

        <div class="box-price" id="box-2">
            <div class="box-left">
                <div class="caption">
                    <pre class="text-left">Высота забора: 1.8м
(столб: 50х50 / 60х60, лаги: 40х20мм)</pre>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 1340 руб.</div>
                <strike class="text-down">м/п от 1390 руб.</strike>
            </div>
        </div>

        <div class="page-description2">
            <div class="icon">
                <img src="@/assets/images/buy.png">
                <pre class="description">Вы можете сделать онлайн-заказ
прямо на нашем сайте!</pre>
            </div>
        </div>

        <div class="box-price" id="box-3">
            <div class="box-left">
                <div class="caption">
                    <pre class="text-left">Высота забора: 2.0м
(столб: 50х50 / 60х60, лаги: 40х20мм)</pre>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 1390 руб.</div>
                <strike class="text-down">м/п от 1440 руб.</strike>
            </div>
        </div>
        <div class="page-description3">
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
<style scoped>
    .views--home {
        max-width: 980px;
        margin: auto;
    }
    .box-price {
        height: 230px;
        width: 90%;
        display: flex;
        place-items: center;
        box-sizing: border-box;
        justify-content: center;
        margin: auto;
    }
    .box-right {
        width: 35%;
        background-color: black;
        height: 100%;
        text-align: center;
        display: flex;
        place-items: center;
        flex-flow: column;
        justify-content: center;
    }
    .box-left {
        width: 65%;
        height: 100%;
        background-size: cover !important;
        background-position: center !important;
    }
    #box-1 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(~@/assets/images/prof1.jpg);
    }
    #box-2 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(~@/assets/images/prof2.jpg);
    }
    #box-3 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(~@/assets/images/prof3.png);
    }
    .caption {
        width: 100%;
        height: 75%;
        text-align: center;
    }
    .text-left {
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: white;
        font-size: 19px;
        text-align: center;
        position: relative;
        top: 72px;
    }
    .text-right {
        font-family: HelveticaNeueCyr;
        color: white;
        font-size: 19px;
    }
    .text-right1 {
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: white;
        font-size: 19px;
        text-align: center;
    }
    .text-down{
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: #ffffff73;
        text-align: center;
    }
    .text-right2 {
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: rgb(226, 28, 33);
        font-size: 19px;
        text-align: center;
    }
    .page-description2 {
        height: 100px;
        width: 100%;
        display: flex;
        place-items: center;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
    }
    .page-description3 {
        height: 40px;
        width: 100%;
        display: flex;
        place-items: center;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
        position: relative;
        bottom: 6px;
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
        width: 50px;
        margin-right: 10px;
    }
    .down-text1 {
        font-family: HelveticaNeueCyr;
        color: rgb(78, 78, 78);
        display: flex;
        justify-content: space-around;
        height: 10px;
    }
    .available-colors div {
        height: 15px;
        width: 50px;
        display: inline-block;
        margin: 10px;
    }
    .another-block1 {
        height: 180px;
        background-color: black;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(~@/assets/images/polimertop.jpg);
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
    }
    .text-right3 {
        color: white;
        font-size: 33px;
        font-weight: bold;
    }
</style>