<template>
<div>
    <div>
        <div class="page-description">
            <span>Почему люди выбирают нас?</span>
        </div>
    </div>

    <div class="block">
        <div class="block1">
            <span class="text1">7</span>
            <span class="text2">ЛЕТ</span>
            <span class="b1">Более 7 лет опыта<br>в сфере строительных услуг!</span>
        </div>

        <div class="block2">
            <span class="text1">400</span>
            <span class="text2">КЛИЕНТОВ</span>
            <span class="b1">Более четырехсот<br>довольных клиентов!</span>
        </div>

        <div class="block3">
            <span class="text1">50000</span>
            <span class="text2">МЕТРОВ</span>
            <span class="b1">Более 50000 м/п<br>установленных ограждений!</span>
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
        name: "Whywe"
    }
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
    .block {
        width: 900px;
        height: 200px;
        margin: auto;
        display: block;
    }
    .block1 {
        width: 300px;
        float: left;
        display: block;
    }
    .block2 {
        width: 300px;
        float: left;
    }
    .block3 {
        width: 300px;
        float: left;
    }
    .b1 {
        font-size: 16px;
        text-align: center;
        font-weight: normal;
        display: block;
    }
    .text1 {
         font-weight: bold;
         color: rgb(226, 28, 33);
         font-size: 75px;
         text-align: center;
         display: block;
         position: relative;
         top: 6px;
     }
    .text2 {
        font-weight: bold;
        color: rgb(226, 28, 33);
        font-size: 30px;
        text-align: center;
        display: block;
    }
    @media screen and (max-width: 960px) {
        div .page-description > span {
            font-size: 20px;
        }
        div .block {
            display: inline;
            position: relative;
            bottom: 18px;
        }
        div .block1 {
            display: contents;
        }
        div .block2 {
            display: contents;
        }
        div .block3 {
            display: contents;
        }
        div .text1{
            font-size: 55px;
        }
        div .text2 {
            font-size: 25px;
        }
        div .b1 {
            font-size: 16px;
        }
    }

    @media screen and (max-width: 690px) {
        div .page-description > span {
            font-size: 17px;
        }
        div .text1{
            font-size: 45px;
        }
        div .text2 {
            font-size: 20px;
        }
        div .b1 {
            font-size: 12px;
            margin-bottom: 10px;
        }
    }

    @media screen and (max-width: 520px) {
        div .page-description > span {
            font-size: 15px;
        }
        div .text1{
            font-size: 45px;
        }
        div .text2 {
            font-size: 20px;
        }
        div .b1 {
            font-size: 12px;
        }
    }
</style>