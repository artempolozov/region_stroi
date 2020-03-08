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
                <pre class="full-description">Бесплатно измерим участок.
                    Покажем образцы ограждений.
                    Поможем с выбором забора.
                    Заключим договор на месте. </pre>
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
        <about></about>
    </div>
</template>

<script>
import About from "../components/About";

export default {
    components: { About
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
        height: 80px;
        width: 100%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: flex;
        place-items: center;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
    }
    .page-description > span {
		font-weight: bolder;
        font-size: 20px;
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
        margin-right: 30px;
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
        font-weight: bold;
        font-size: 17px;
    }
    .tile.special .icon {
        white-space: nowrap;
        margin-bottom: 30px
    }

	.tile.special {
		background-color: rgb(226, 28, 33);
		padding: 30px;
	}
    .full-description {
        white-space: pre-line;
        font-family: inherit;
        color: white;
        font-size: 14px;
    }
</style>