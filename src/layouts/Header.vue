<template>    
    <div class="layouts--header">
        <div class="header-content">
            <div class="row">
                <div class="logo" id="top" v-on:click="goToPage('/')">
                    <img title="Главная страница" src="@/assets/images/logo_black.png">
                </div>
                <pre class="desc">Монтаж и производство
заборов "под ключ"</pre>

                    <div class="contacts-container">
                        <contacts></contacts>
                    </div>

                    <div class="location-container">
                        <location></location>
                    </div>

                    <div class="button-container">
                        <order-button></order-button>
                    </div>
            </div>
                    <div class="navigation-container">
                        <navigation-menu></navigation-menu>
                    </div>
        </div>
        <Menu></Menu>
    </div>
</template>
<script>
    import NavigationMenu from '@/components/NavigationMenu';
    import Contacts from '@/components/Contacts';
    import Location from '@/components/Location';
    import OrderButton from '@/components/OrderButton';
    import Menu from "@/components/Menu";
    import Headroom from "headroom.js";

    export default {
        components: {
            NavigationMenu, Contacts, Location, OrderButton, Menu
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
        },
        mounted() {
            let myElement = this.$el;
            // construct an instance of Headroom, passing the element
            let headroom  = new Headroom(myElement);
            // initialise
            headroom.init();
        }
    };
</script>
<style scoped>
    .row {
        display: flex;
    }
    .row > div {
        align-self: center;
        display: inline-block;
    }

    .row:nth-of-type(1) {
        border-bottom: 1px solid rgba(66, 66, 66, 0.21);
    }

    .layouts--header {
        background: white;
        text-align: center;
        position: fixed;
        width: 100%;
        z-index: 99;
        box-shadow: 0 6px 4px -4px rgba(0, 0, 0, 0.09);
    }
    .header-content {
        display: inline-block;
    }

    .logo img {
        height: 70px;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .logo {
        padding: 0 15px;
        margin: 10px 0;
        border-right: 0px solid rgba(66, 66, 66, 0.21);
        cursor: pointer;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .desc {
        color: rgb(109, 109, 109);
        font-size: 13px;
        padding: 20px;
        text-align: left;
        font-family: HelveticaNeueCyr;
    }
    @media screen and (min-width: 960px) {
        .headroom--unpinned {
            transform: translateY(-100%);
        }
    }
    @media screen and (max-width: 1140px) {
        pre.desc {
            display: none;
        }
    }
    @media screen and (max-width: 960px) {
        div.location-container {
            display: none;
        }
    }
    @media screen and (max-width: 690px) {
        div.row {
            display: inline-grid;
        }
        div.button-container {
            display: none;
        }
        div.row:nth-of-type(1) {
            border-bottom: none;
        }
        div.logo img {
            height: 60px;
        }
        div.header-content {
            width: 100%;
        }
        div.navigation-container {
            width: 100%;
            height: 40px;
            margin-top: 10px;
            text-align: right;
            background: #212121;
        }
    }
    @media screen and (max-width: 520px) {
        div.row {
             display: inline-grid;
         }
        div.row:nth-of-type(1) {
            border-bottom: none;
        }
        div.logo img {
            height: 60px;
        }
    }
    .headroom {
        will-change: transform;
        transition: transform 200ms linear;
    }
    .headroom--pinned {
        transform: translateY(0%);
    }
</style>