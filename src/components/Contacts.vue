<template>
    <div class="contacts">
        <div class="icon">
            <a href="tel:+79205352806"><img src="@/assets/phone.png"></a>
        </div>
        <div class="info">
            <div class="call-number"><a href="tel:+79205352806">+7 920 535-28-06</a></div>
            <div>Без выходных с 9:00 до 21:00</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
    img {
        border-radius: 30px;
    }
    .contacts {
        display: flex;
        align-items: center;
        margin: 0px 20px;
    }
    .icon {
        float: left;
        margin-right: 5px;
    }
    .icon > a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .icon img {
        width: 40px;
        margin-right: 5px;
    }
    .info {
        text-align: left;
        white-space: nowrap;
        display: inline-block;
        font-weight: bold;
    }
    .info > div:nth-of-type(2) {
        color: grey;
        font-size: 10.5px;
        margin-top: 3px;
        font-weight: normal;
    }
    .call-number > a {
        text-decoration: none;
        color: black;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .footer-content .info > div {
        color: #ffffff;
    }
    .footer-content .call-number> a {
        color: #ffffff;
        text-decoration: none;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    @media screen and (max-width: 690px) {
        div.info {
            font-size: 13px;
        }
        div.info > div:nth-of-type(3) {
            font-size: 9px;
        }
        div.icon img {
            width: 38px;
        }
    }
    @media screen and (max-width: 520px) {

    }
    @media screen and (max-width: 416px) {
        .footer-content .info > div {
            display: none;
        }
        .footer-content .icon img {
            display: none;
        }
    }
</style>