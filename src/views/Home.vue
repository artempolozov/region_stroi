<template>
    <div class="views--home">
        <div class="row">
            <div class="page-description">
               <span>Наши услуги</span>
            </div>
        </div>
        <div class="row">
            <div class="tile common" v-on:click="goToPage('proflist')">
                <img src="@/assets/images/proflist.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
            <div class="tile common">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
            <div class="tile common">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
        </div>
        <div class="row">
            <div class="tile special">
                <div class="icon">
                    <img src="@/assets/images/icon_worker.png">
                    <div class="description">Получить Бесплатную Консультацию</div>
                </div>
                <div>Ещё какой-то текст</div>
            </div>
            <div class="tile common">
                <img src="@/assets/images/slider_2.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Наши услуги</span>
            </div>
            <div class="tile common">
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
        goToPage(page) {
            this.$router.push(page);
        }
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
        font-weight: bolder;
        font-size: 24px;
        text-transform: uppercase;
    }

    .row {
        display: flex;
        justify-content: space-between;
    }
    .tile {
        width: 306px;
		height: 280px;
        margin: 11px;
        padding: 20px;
        display: inline-block;
		box-sizing: border-box;
    }
	.tile:hover {
		webkit-transform: scale(1.01);
		ms-transform: scale(1.01);
		transform: scale(1.01);
		cursor: pointer;
	}
	.tile.common {
		border-top: 3px solid rgb(226, 28, 33);
        background-color: white;
	}
    .tile.common img {
        width: 100%;
    }
	.tile.special img {
        width: 70px;
    }
    .title {
        font-weight: bold;
        text-transform: uppercase;
        font-size: 14px;
    }
    .tile.common .description {
        display: block;
    }
	.tile.special .description {
		display: inline-block;
		color: white;
		text-transform: uppercase;
        white-space: normal;
        width: min-content;
    }
    .tile.special .icon {
        white-space: nowrap;
    }

	.tile.special {
		background-color: rgb(226, 28, 33);
		padding: 30px;
	}
</style>