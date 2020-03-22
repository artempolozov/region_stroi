<template>    
    <div class="layouts--header">
        <div class="header-content">
            <div class="row">
                <div class="logo"  v-on:click="goToPage('/')">
                    <img src="@/assets/images/logo_black.png">
                </div>
                <div class="desc">Монтаж и производство заборов "под ключ"</div>
                <contacts></contacts>
                <location></location>
                <order-button></order-button>
            </div>
            <navigation-menu></navigation-menu>
        </div>
    </div>
</template>
<script>
    import NavigationMenu from '@/components/NavigationMenu';
    import Contacts from '@/components/Contacts';
    import Location from '@/components/Location';
    import OrderButton from '@/components/OrderButton';

    import Headroom from "headroom.js";

    export default {
        components: {
            NavigationMenu, Contacts, Location, OrderButton
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
        background: rgba(255, 255, 255, 0.76);
        text-align: center;
        position: fixed;
        width: 100%;
        z-index: 99;
    }
    .header-content {
        display: inline-block;
    }

    .logo img {
        height: 70px;
    }
    .logo {
        padding: 0 15px;
        margin: 10px 0;
        border-right: 1px solid rgba(66, 66, 66, 0.21);
        cursor: pointer;
    }
    .desc {
        color: rgb(109, 109, 109);
        font-size: 13px;
        padding: 20px;
        width: 160px;
        text-align: left;
    }

    .headroom--pinned {
        top: 0px;
    }
    .headroom--unpinned {
        top: -150px;
    }

</style>