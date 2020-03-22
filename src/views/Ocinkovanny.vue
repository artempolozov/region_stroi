<template>
    <div class="views--home" style="height: 800px">
        <div class="page-description3">
            <div class="down-text1"> ОЦИНКОВАННЫЙ ПРОФЛИСТ </div>
        </div>
        <div class="box-price">
            <div class="box-left">
                <div class="caption">
                    <pre class="text-left">Высота забора: 1.5м
(столб: 50х50 / 60х60, лаги: 40х20мм)</pre>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 1090р.</div>
            </div>
        </div>

            <div class="page-description2">
                <div class="icon">
                    <img src="@/assets/images/complectred.png">
                    <pre class="description">Комплектация забора оговаривается
индивидуально с заказчиком!</pre>
                </div>
            </div>

        <div class="box-price">
            <div class="box-left2">
                <div class="caption">
                    <pre class="text-left">Высота забора: 1.8м
(столб: 50х50 / 60х60, лаги: 40х20мм)</pre>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 1240р.</div>
            </div>
        </div>

        <div class="page-description2">
            <div class="icon">
                <img src="@/assets/images/buy.png">
                <pre class="description">Вы можете сделать онлайн-заказ
прямо на нашем сайте!</pre>
            </div>
        </div>

        <div class="box-price">
            <div class="box-left3">
                <div class="caption">
                    <pre class="text-left">Высота забора: 2.0м
(столб: 50х50 / 60х60, лаги: 40х20мм)</pre>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 1290р.</div>
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
        display: inline-grid;
    }
    .box-left {
        width: 65%;
        height: 100%;
        background-image: url(~@/assets/images/cink1.jpg);
        background-repeat: round;
    }
    .box-left2 {
        width: 65%;
        height: 100%;
        background-image: url(~@/assets/images/cink2.jpg);
        background-size: cover;
        background-position: center;
    }
    .box-left3 {
        width: 65%;
        height: 100%;
        background-image: url(~@/assets/images/cink3.jpg);
        background-size: cover;
        background-position: center;
    }
    .caption {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.31);
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
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: white;
        font-size: 19px;
        text-align: center;
        position: relative;
    }
    .text-right2 {
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: rgb(226, 28, 33);
        font-size: 19px;
        text-align: center;
        position: relative;
        top: 90px;
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
</style>