<template>
    <div>
        <div class="page-desc">
        </div>
        <div class="wework">
            <div class="item">
                <div class="pictures">
                    <img src="@/assets/images/wework.png">
                    <pre class="desc">
                        Мы работаем в самых
                        труднодоступных районах
                        Липецкой области и Черноземья!</pre>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Work"
    }
</script>

<style scoped>
    .wework {
        display: inline-block;
        margin:auto;
    }
    .wework img {
        width: 500px;
        margin-right: 10px;
        margin-left: 100px;
    }
    .pictures .desc {
        display: inline-block;
        font-weight: normal;
        font-size: 21px;
        color: rgb(78, 78, 78);
        font-family: HelveticaNeueCyr;
    }
    .pictures {
        display: flex;
        align-items: center;
    }
    .page-desc {
        height: 50px;
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
</style>