<template>
    <ul class="menu">
        <li class="dropdown">
            <div href="javascript:void(0)" class="dropbtn">Заборы</div>
            <div class="dropdown-content">
                <div class="dropcnt" v-on:click="goToPage('proflist')"> Профлист </div>
                <div class="dropcnt" v-on:click="goToPage('shtaketnik')">Евроштакетник</div>
                <div class="dropcnt" v-on:click="goToPage('rabica')">Сетка-рабица</div>
                <div class="dropcnt" v-on:click="goToPage('3D')">3D-сетка</div>
            </div>
        </li>
        <li class="dropdown">
            <div href="javascript:void(0)" class="dropbtn">Ворота</div>
            <div class="dropdown-content">
                <div class="dropcnt" v-on:click="goToPage('raspashnye')">Распашные</div>
                <div class="dropcnt" v-on:click="goToPage('otkatnye')">Откатные</div>
            </div>
        </li>
        <li><div class="dropbtn" v-on:click="goToPage('kalitka')">Калитки</div></li>
        <li><div class="dropbtn" v-on:click="goToPage('kontakty')">Контакты</div></li>

        <li class="menu-button">
            <burger-button></burger-button>
        </li>
    </ul>
</template>

<script>
    import BurgerButton from "./BurgerButton";
    export default {
        name: "Menu",
        components: {BurgerButton},
        methods:{
            goToPage(page) {
                this.$router.push(page);
                window.scrollTo(0,0);
            }
        }
    };
</script>

<style scoped>
    .menu li {
        font-weight: 700;
        font-size: 18px;
        text-transform: uppercase;
        padding: 15px 15px;
    }
    .menu li:hover {
        cursor: pointer;
        color: rgb(226, 28, 33);
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        overflow: hidden;
        vertical-align: middle;
        display: inline-block;
    }

    li {
        float: left;
    }

    li div, .dropbtn {
        display: inline-block;
        text-align: center;
        text-decoration: none;
        color: inherit;
    }

    li.dropdown {
        display: inline-block;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        background-color: #f9f9f9;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
        z-index: 1;
        transform: translateX(-30%);
        margin-top: 15px;
    }

    .dropdown-content div {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        text-align: center;
    }

    .dropdown-content div:hover {background-color: #f1f1f1;}

    .dropdown:hover .dropdown-content {
        display: block;
    }
    .dropbtn::selection {
        background: transparent;
    }
    .dropcnt::selection {
        background: transparent;
    }
    .menu-button {
        display: none;
        padding: 8px 25px 0px 0px !important;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    @media screen and (max-width: 690px) {
        li:not(.menu-button) {
        display: none;
        }
        li.menu-button {
        display: block;
        }
    }
</style>