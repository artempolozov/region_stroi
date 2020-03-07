<template>
    <div class="views--home">
        <div class="row">
            <div class="page-description">
               <span>Наши услуги</span>
            </div>
        </div>
        <div class="row">
            <div class="tile">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
            <div class="tile">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
            <div class="tile">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
        </div>
        <div class="row">
            <div class="tile">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
            <div class="tile">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
            <div class="tile">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
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
<style>
    .views--home {
        width: 100%;
    }
    .page-description {
        height: 100px;
        width: 100%;
        background-color: white;
        border-left: 3px solid rgb(226, 28, 33);
        margin: 15px 0px;
        padding-left: 20px;
        display: flex;
        place-items: center;
        box-sizing: border-box;
    }
    .page-description > span {
        font-weight: 600;
        font-size: 24px;
        text-transform: uppercase;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }
    .tile {
        width: 250px;
        height: 220px;
        border-top: 3px solid rgb(226, 28, 33);
        background-color: white;
        margin: 5px;
        padding: 20px;
        display: inline-block;
    }
    .tile img {
        width: 100%;
    }
    .title {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
    }
    .description {
        display: block;
    }
</style>