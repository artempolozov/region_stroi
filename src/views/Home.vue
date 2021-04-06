<template>
    <div class="views--home">
        <div class="card-list">
            <div class="tile common" v-on:click="goToPage('proflist')">
                <img src="@/assets/images/proflist.jpg">
                <span class="title">Забор из профлиста</span>
                <span class="description">Цинк / полимерный односторонний / Полимерный двухсторонний
                </span>
            </div>
            <div class="tile common" v-on:click="goToPage('shtaketnik')">
                <img src="@/assets/images/shtaket.jpg">
                <span class="title">Забор из ЕВРОШТАКЕТНИКА</span>
                <span class="description">Евроштакетник / Евроштакетник-шахматка</span>
            </div>
            <div class="tile common" v-on:click="goToPage('rabica')">
                <img src="@/assets/images/rabica.jpg">
                <span class="title">Забор из Сетки рабица</span>
                <span class="description">Цвет: Цинк / зеленый</span>
            </div>

            <div class="tile common" v-on:click="goToPage('3D')">
                <img src="@/assets/images/3D.jpg">
                <span class="title">Забор из 3D-сетки</span>
                <span class="description">Цвет: Зеленый</span>
            </div>
            <div class="tile common" v-on:click="goToPage('vorota')">
                <img src="@/assets/images/vorota.jpg">
                <span class="title">Установка ворот</span>
                <span class="description">Откатные / распашные / механические / Автоматические
                </span>
            </div>
            <div class="tile common" v-on:click="goToPage('kalitka')">
                <img src="@/assets/images/kalitka.jpg">
                <span class="title">Установка калитки</span>
                <span class="description">Калитка с врезным замком</span>
            </div>
        </div>
        <about></about>
        <work></work>
        <whywe></whywe>
    </div>
</template>

<script>
import About from "../components/About";
import Work from "../components/Work";
import Whywe from "../components/Whywe";

export default {
    components: { About, Work, Whywe
    },
    data() {
        return {};
    },
    computed: {

    },
    methods: {
        goToPage(page) {
            this.$router.push(page);
            window.scrollTo(0,0);
        }
    }
};
</script>
<style scoped>
    .views--home {
        max-width: 980px;
        margin: auto;
    }
    .page-description > span {
		font-weight: bolder;
        font-size: 20px;
        text-transform: uppercase;
    }

    .card-list {
        justify-content: space-between;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(315px, 1fr));
    }
    .tile {
        margin: 11px;
        padding: 20px;
		box-sizing: border-box;
        font-family: HelveticaNeueCyr;
    }
	.tile:hover {
		webkit-transform: scale(1.01);
		ms-transform: scale(1.01);
		transform: scale(1.01);
		cursor: pointer;
        box-shadow: 0 2px 8px rgba(175, 173, 173, 0.15), 0 4px 22px rgba(165, 165, 165, 0.12);
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
        font-family: HelveticaNeueCyr;
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
    .description {
        font-size: 13px;
        color: rgb(78, 78, 78);
    }
    @media screen and (max-width: 690px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(299px, 1fr));
            margin: 20px 0px 0px 0px;
        }
    }
    @media screen and (max-width: 640px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(299px, 1fr));
        }
    }
    @media screen and (max-width: 614px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(201px, 1fr));
        }
    }
    @media screen and (max-width: 615px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        span.title {
            font-size: 11px;
        }
        span.description {
            font-size: 10px;
        }
        div .tile {
            padding: 15px;
        }
    }
    @media screen and (max-width: 520px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        }
        span.title {
            font-size: 11px;
        }
        span.description {
            font-size: 10px;
        }
        div .tile {
            padding: 12px;
        }
    }
    @media screen and (max-width: 416px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(199px, 1fr));
        }
        span.title {
            font-size: 10px;
        }
        span.description {
            font-size: 9px;
        }
        div .tile {
            padding: 10px;
        }
    }
    @media screen and (max-width: 414px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        }
        span.title {
            font-size: 10px;
        }
        span.description {
            font-size: 9px;
        }
        div .tile {
            padding: 10px;
        }
    }
    @media screen and (max-width: 375px) {
        div.card-list {
            grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
        }
        span.title {
            font-size: 10px;
        }
        span.description {
            font-size: 9px;
        }
        div .tile {
            padding: 10px;
        }
    }
</style>