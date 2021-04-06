<template>
    <div>
        <div class="another-block1">
            <div class="text-right3">Калитки</div>
            <div class="text-right4">Калитка является необходимым элементом для любого</div>
            <div class="text-right4">огороженного участка.</div>
        </div>

        <div class="views--home">
            <div class="box-price" id="box-1">
                <div class="box-left">
                    <div class="caption">
                    <pre class="text-left">Калитка из сетки-рабица:
(Ширина 0.8-1.2м, ячейка: 50х50мм)</pre>
                        <div class="text-attention">Комплектация и цвет  калитки оговаривается</div>
                        <div class="text-attention"> индивидуально с заказчиком! </div>
                    </div>
                </div>
                <div class="box-right">
                    <div class="text-right2">Цена: </div>
                    <div class="text-right">от 3490 руб.</div>
                    <strike class="text-down">от 3990 руб.</strike>
                </div>
            </div>

            <div class="box-price" id="box-2">
                <div class="box-left">
                    <div class="caption">
                    <pre class="text-left">Калитка из профлиста:
(Ширина 0.8-1.2м)</pre>
                    <div class="text-attention">Комплектация и цвет  калитки оговаривается</div>
                    <div class="text-attention"> индивидуально с заказчиком! </div>
                    </div>
                </div>
                <div class="box-right">
                    <div class="text-right2">Цена: </div>
                    <div class="text-right">от 4990 руб.</div>
                </div>
            </div>

            <div class="box-price" id="box-3">
                <div class="box-left">
                    <div class="caption">
                    <pre class="text-left">Калитка из 3D-сетки:
(Ширина 0.8-1.2м, ячейка: 50х200мм)</pre>
                    <div class="text-attention">Комплектация и цвет  калитки оговаривается</div>
                    <div class="text-attention"> индивидуально с заказчиком! </div>
                    </div>
                </div>
                <div class="box-right">
                    <div class="text-right2">Цена: </div>
                    <div class="text-right">от 4990 руб.</div>
                </div>
            </div>

            <div class="box-price-down" id="box-4">
                <div class="box-left">
                    <div class="caption">
                    <pre class="text-left">Калитка из евроштакетника:
(Ширина 0.8-1.2м)</pre>
                    <div class="text-attention">Комплектация и цвет калитки оговаривается</div>
                    <div class="text-attention"> индивидуально с заказчиком! </div>
                    </div>
                </div>
                <div class="box-right">
                    <div class="text-right2">Цена: </div>
                    <div class="text-right">от 5490 руб.</div>
                </div>
            </div>
        </div>

        <div>
            <div class="page-description">
                <span>Фотографии калиток:</span>
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
    .box-price-down {
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
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/kalitkarabica.jpg);
    }
    #box-2 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/kalitkaproflist.jpg);
    }
    #box-3 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/kalitka3d.jpg);
    }
    #box-4 .box-left {
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/kalitkashtak.jpg);
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
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/kalitkatop.jpg);
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
        div .box-price {
            display: block;
        }
        div .box-price-down {
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