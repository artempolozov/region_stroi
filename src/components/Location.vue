<template>
    <div class="location">
        <div class="icon">
            <img src="@/assets/geo.png">
        </div>
        <div class="info">
            <div>Черноземье</div>
            <div>Липецкая область</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
    .location {
        text-transform: uppercase;
        margin: 18px;
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
        display: flex;
        flex-flow: column;
        margin: 2px auto;
        font-weight: bold;
        font-size: 16px;
    }

    .footer-content .info > div {
        color: #ffffff;
    }
    @media screen and (max-width: 690px) {
        div.info {
            font-size: 12px;
        }
        div.info > div:nth-of-type(3) {
            font-size: 8px;
        }
        div.icon img {
            width: 38px;
        }
    }
</style>