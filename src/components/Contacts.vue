<template>
    <div class="contacts">
        <div class="icon">
            <img src="@/assets/phone.png">
        </div>
        <div class="info">
            <div>+7 (920) 535-28-06</div>
            <div>+7 (952) 591-33-70</div>
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
        margin: 0 20px;
    }
    .icon {
        float: left;
        margin-right: 5px;
    }
    .icon img {
        width: 40px;
    }
    .info {
        text-align: left;
        white-space: nowrap;
        display: inline-block;
    }
    .info > div:nth-of-type(3) {
        color: grey;
        font-size: 10px;
        margin-top: 3px;
    }


    .footer-content .info > div {
        color: #c1c1c1;
    }

</style>