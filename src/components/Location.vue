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
        /* align-content: end; */
        flex-flow: column;
        margin: 2px auto;
        font-weight: bold;
        font-size: 16px;
    }

    .footer-content .info > div {
        color: #c1c1c1;
    }
</style>