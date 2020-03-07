<template>
    <div class="location">
        <div class="icon">
            <img src="@/assets/geo.png">
        </div>
        <div class="info">
            <div>Липецк</div>
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
        white-space: nowrap;
        display: inline-block;
    }

    .footer-content .info > div {
        color: #c1c1c1;
    }
</style>