<template>
    <div class="order">
        <div class="order-button">Отправить запрос</div>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    </div>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style scoped>
    .order {
        padding: 5px 15px;
        margin: 10px 0;
    }
    .header-content .order {
        border-left: 1px solid rgba(66, 66, 66, 0.21);
    }
    .order-button {
        color: white;
        background-color: rgb(226, 28, 33);
        height: 45px;
        width: 165px;
        border-radius: 15px;
        font-weight: bold;
        font-size: 12px;
        justify-content: center;
        display: flex;
        align-items: center;
        text-transform: uppercase;
    }
    .order-button:hover {
        background-color: rgb(208, 25, 30);
        cursor: pointer;
    }
</style>