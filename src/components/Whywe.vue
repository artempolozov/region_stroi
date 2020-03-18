<template>
    <div>
    <div>
        <div class="page-description">
            <span>Почему люди выбирают нас?</span>
        </div>
    </div>

    <div class="block">
        <div class="block1">
            <div class="text1">8</div>
            <div class="text2">ЛЕТ</div>
                <div class="b1">
                <div>Более 8 лет опыта на рынке<br>строительных услуг!</div>
                </div>
        </div>

        <div class="block2">
            <div class="text1">400</div>
            <div class="text2">КЛИЕНТОВ</div>
                <div class="b1">
                <div>Более четырехсот<br>довольных клиентов!</div>
                </div>
        </div>

        <div class="block3">
            <div class="text1">50000</div>
                <div class="text2">МЕТРОВ</div>
                <div class="b1">
                <div>Более 50000 м/п<br>установленных ограждений!</div>
            </div>
        </div>
    </div>
        <div class="page-description2">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Whywe"
    }
</script>

<style scoped>
    .page-description > span {
        font-weight: bolder;
        font-size: 20px;
        text-transform: uppercase;
    }
    .page-description2 {
        height: 20px;
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
    .block {
        width: 900px;
        height: 200px;
        margin:auto;
    }
    .block1 {
        width: 300px;
        height: 200px;
        float: left;
    }
    .block2 {
        width: 300px;
        height: 200px;
        float: left;
    }
    .block3 {
        width: 300px;
        height: 200px;
        float: left;
    }
    .b1 {
        height: 100px;
        float: left;
        font-size: 16px;
        text-align: center;
        display: table;
        width: 100%;
        font-weight: normal;
        position: relative;
        top: 6px;
    }
    .text1 {
         white-space: pre-line;
         font-weight: bold;
         color: rgb(226, 28, 33);
         font-size: 75px;
         text-align: center;
         display: table;
         width: 100%;
         position: relative;
         top: 12px;
         }
    .text2 {
        white-space: pre-line;
        font-weight: bold;
        color: rgb(226, 28, 33);
        font-size: 30px;
        text-align: center;
        display: table;
        width: 100%;
    }
</style>