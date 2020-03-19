<template>
    <div class="views--home" style="height: 800px">
       Рабица
        <div class="box-price">
            <div class="box-left">
                
                <div class="caption"></div>
            </div>
            <div class="box-right"></div>
        </div>
    </div>
</template>

<script>

export default {
    components: {       
    },
    data() {
        return {};
    },
    computed: {

    },
    methods: {

    }
};
</script>
<style scoped>
    .box-price {
        height: 230px;
        width: 90%;
        display: flex;
        place-items: center;
        box-sizing: border-box;
        justify-content: center;
        margin: auto;
    }
    .box-right {
        width: 35%;
        background-color: black;
        height: 100%;
    }
    .box-left {
        width: 65%;
        height: 100%;
        background-image: url(~@/assets/images/cink1.jpg);
        background-repeat: round;
    }
    .caption {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.31);
    }
</style>