<template>
    <div>
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
        display: flex;
        margin: auto;
        justify-content: center;
        width: 100%;
    }
    .wework img {
        width: 480px;
    }
    .pictures .desc {
        display: inline-block;
        font-weight: normal;
        font-size: 21px;
        color: rgb(78, 78, 78);
        position: relative;
        white-space: pre-line;
        font-family: HelveticaNeueCyr;
    }
    .pictures {
        display: flex;
        align-items: center;
    }
    @media screen and (max-width: 1140px) {

    }
    @media screen and (max-width: 960px) {
        div .wework {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        div .wework img {
            width: 300px;
        }
        div .pictures .desc {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 690px) {
        div .wework {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        div .wework img {
            width: 180px;
        }
        div .pictures .desc {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 520px) {
        div .wework {
            display: flex;
            width: 100%;
            justify-content: center;
        }
        div .wework img {
            width: 180px;
        }
        div .pictures .desc {
            font-size: 14px;
        }
    }
    @media screen and (max-width: 416px) {
        div .pictures {
            display: inline-grid;
        }
        div .pictures .desc {
            font-size: 14px;
            text-align: center;
        }
        div .wework img {
            width: 180px;
            margin-right: 0;
            position: relative;
            left: 20px;
        }
    }
    @media screen and (max-width: 375px) {
        div .pictures {
            display: inline-grid;
        }
        div .pictures .desc {
            font-size: 14px;
            text-align: center;
        }
        div .wework img {
            width: 180px;
            margin-right: 0;
            position: relative;
            left: 20px;
        }
    }
</style>