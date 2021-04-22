<template>
<div>
    <div class="another-block1">
        <div class="text-right3">Евроштакетник</div>
        <div class="text-right4">Плюс такого забора в том, что участок не просто защищен,</div>
        <div class="text-right4">а еще хорошо освещается и проветривается</div>
    </div>

    <div class="views--home">
        <div class="box-price" id="box-1">
            <div class="box-left">
                <div class="caption">
                    <pre class="text-left">Высота забора: 1.5м
(столб: 40х40 / 50х50 / 60х60, лаги: 40х20мм)</pre>
                    <div class="text-attention">Комплектация и цвет  забора оговаривается</div>
                    <div class="text-attention"> индивидуально с заказчиком! </div>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 1790 руб.</div>
            </div>
        </div>

        <div class="box-price" id="box-2">
            <div class="box-left">
                <div class="caption">
                    <pre class="text-left">Высота забора: 1.8м
(столб: 40х40 / 50х50 / 60х60, лаги: 40х20мм)</pre>
                    <div class="text-attention">Комплектация и цвет  забора оговаривается</div>
                    <div class="text-attention"> индивидуально с заказчиком! </div>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 1940 руб.</div>
                <strike class="text-down">м/п от 1990 руб.</strike>
            </div>
        </div>

        <div class="box-price" id="box-3">
            <div class="box-left">
                <div class="caption">
                    <pre class="text-left">Высота забора: 2.0м
(столб: 40х40 / 50х50 / 60х60, лаги: 40х20мм)</pre>
                    <div class="text-attention">Комплектация и цвет  забора оговаривается</div>
                    <div class="text-attention"> индивидуально с заказчиком! </div>
                </div>
            </div>
            <div class="box-right">
                <div class="text-right2">Цена: </div>
                <div class="text-right">м/п от 2190 руб.</div>
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
        margin-bottom: 40px;
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
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/evroshtak3.webp);
    }
    #box-2 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/evroshtak2.webp);
    }
    #box-3 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/evroshtak1.webp);
    }
    .caption {
        width: 100%;
        text-align: center;
        top: 75px;
        position: relative;
    }
    .text-left {
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: white;
        font-size: 19px;
        text-align: center;
    }
    .text-attention {
        color: #ffffffe0;
        font-size: 13px;
        text-align: center;
    }
    .text-right {
        color: white;
        font-size: 19px;
        margin-top: 5px;
    }
    .text-right2 {
        display: inline-block;
        color: rgb(226, 28, 33);
        font-size: 19px;
        text-align: center;
    }
    .text-down{
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: #ffffff73;
        text-align: center;
    }
    .another-block1 {
        height: 180px;
        background-color: black;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/shtakettop.webp);
        background-size: cover;
        background-position: center;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin-bottom: 40px;
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
        div .another-block1 {
            margin-top: 30px;
            height: 160px;
        }
        div .text-right3 {
            font-size: 27px;
        }
        div .text-right4 {
            font-size: 14px;
        }
        div .box-price {
            display: block;
        }
        div .box-left {
            width: 100%;
            height: 65%;
        }
        div .caption {
            top: 30px;
        }
        div .box-right {
            width: 100%;
            height: 35%;
        }
        div .text-left {
            font-size: 17px;
        }
        div .text-attention {
            font-size: 12px;
        }
        div .text-right2 {
            font-size: 17px;
        }
        div .text-right {
            font-size: 16px;
        }
        div .text-down {
            font-size: 15px;
        }
    }
    @media screen and (max-width: 520px) {
        div .another-block1 {
            margin-top: 23px;
            height: 150px;
        }

        div .text-right3 {
            font-size: 25px;
        }

        div .text-right4 {
            font-size: 12px;
            display: none;
        }

        div .caption {
            top: 40px;
        }

        div .text-left {
            font-size: 15px;
        }

        div .text-attention {
            font-size: 11px;
        }

        div .text-right2 {
            font-size: 16px;
        }

        div .text-right {
            font-size: 15px;
        }

        div .text-down {
            font-size: 14px;
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
        div .text-left {
            font-size: 14px;
        }
        div .text-attention {
            font-size: 10px;
        }
        div .text-right2 {
            font-size: 15px;
        }
        div .text-right {
            font-size: 14px;
        }
        div .text-down {
            font-size: 13px;
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
        }
    }

</style>