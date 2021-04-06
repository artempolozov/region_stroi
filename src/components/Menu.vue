<template>
    <div id="nav-menu" style="display: none;">
        <nav id="menu">
            <li><a href="#" v-on:click="goToPage('/')">Главная</a></li>

                <li><a href="#">Заборы
                    <label class="drop-icon" for="sm1">▾</label>
                    </a>
                    <input type="checkbox" id="sm1">
                    <ul class="sub-menu">
                        <li><a href="#" v-on:click="goToPage('proflist')">Профлист</a></li>
                        <li><a href="#" v-on:click="goToPage('shtaketnik')">Евроштакетник</a></li>
                        <li><a href="#" v-on:click="goToPage('rabica')">Сетка-рабица</a></li>
                        <li><a href="#" v-on:click="goToPage('3D')">3D-сетка</a></li>
                    </ul>
                </li>

                <li><a href="#">Ворота
                    <label class="drop-icon" for="sm2">▾</label>
                    </a>
                    <input type="checkbox" id="sm2">
                    <ul class="sub-menu">
                        <li><a href="#" v-on:click="goToPage('raspashnye')">Распашные</a></li>
                        <li><a href="#" v-on:click="goToPage('otkatnye')">Откатные</a></li>
                    </ul>
                </li>

            <li><a href="#" v-on:click="goToPage('kalitka')">Калитки</a></li>
            <li><a href="#" v-on:click="goToPage('kontakty')">Контакты</a></li>
        </nav>
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
        toggleMenu(){
            var form = document.getElementById("nav-menu");
            var burgerButton = document.getElementById("burger-button");
            if (form.style.display == 'none'){
                form.style.display = "block";
            } else {
                form.style.display = "none";
            }
            burgerButton.classList.toggle("active");
        },
        goToPage(page) {
            this.$router.push(page);
            window.scrollTo(0,0);
            this.toggleMenu()
        }
    },
    mounted() {

    }
};
</script>

<style scoped>
    #nav-menu {
        width: 100%;
        height: 100%;
        background-color: white;
        z-index: 100;
        font-family: HelveticaNeueCyr;
        font-weight: 500;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        background: transparent;
    }
    #menu ul {
        margin: 0;
        padding: 0;
    }

    #menu .main-menu {
        display: none;
    }

    #tm:checked + .main-menu {
        display: block;
    }

    #menu input[type="checkbox"],
    #menu ul span.drop-icon {
        display: none;
    }

    #menu li,
    #toggle-menu,
    #menu .sub-menu {
        border-style: solid;
        border-color: rgba(0, 0, 0, .05);
    }

    #menu li,
    #toggle-menu {
        border-width: 0 0 1px;
    }

    #menu .sub-menu {
        background-color: #f0f0f0;
        border-width: 1px 0px 0;
    }

    #menu .sub-menu li:last-child {
        border-width: 0;
    }

    #menu li,
    #toggle-menu,
    #menu a {
        position: relative;
        display: block;
        color: #212121;
        text-decoration: none;
    }
    #toggle-menu,
    #menu a {
        padding: 1em 1.5em;
    }

    #menu a {

    }

    #menu a:hover {
        background-color: #212121;
        color: white;
    }

    #menu .sub-menu {
        display: none;
    }

    #menu input[type="checkbox"]:checked + .sub-menu {
        display: block;
    }

    #menu .sub-menu a:hover {
        color: white;
    }
    #toggle-menu .drop-icon,
    #menu li label.drop-icon {
        position: absolute;
        right: 35px;
    }
    #menu label.drop-icon, #toggle-menu span.drop-icon {
        width: 100%;
        height: 25px;
        text-align: end;
        color: #212121;
        cursor: pointer;
    }
    #menu .drop-icon:hover {
        color: white;
    }
    #menu .drop-icon {
        line-height: 1;
    }
    @media only screen and (min-width: 690px) {
        #menu li {
            width: 33.333%;
        }
        #menu .sub-menu li {
            width: auto;
        }
        #menu .main-menu {
            display: block;
        }

        #toggle-menu,
        #menu label.drop-icon {
            display: none;
        }

        #menu ul span.drop-icon {
            display: inline-block;
        }

        #menu li {
            float: left;
            border-width: 0 1px 0 0;
        }

        #menu .sub-menu li {
            float: none;
        }

        #menu .sub-menu {
            border-width: 0;
            margin: 0;
            position: absolute;
            top: 100%;
            left: 0;
            width: 12em;
            z-index: 3000;
        }

        #menu .sub-menu,
        #menu input[type="checkbox"]:checked + .sub-menu {
            display: none;
        }

        #menu .sub-menu li {
            border-width: 0 0 1px;
        }

        #menu .sub-menu .sub-menu {
            top: 0;
            left: 100%;
        }

        #menu li:hover > input[type="checkbox"] + .sub-menu {
            display: block;
        }
    }
</style>