<template>    
    <div class="layouts--footer">
        <div class="footer-content">
            <div class="row">
                <div id="top" v-on:click="goToPage('/')">
                    <img title="Главная страница" class="logo" src="@/assets/images/logo_white.png">
                </div>
                <div class="desc">
                    ЗАБОР-РЕГИОН - это строительная организация, выполняющая один или несколько видов строительных работ (услуг),
                    способная под свою ответственность выполнить строительные работы (услуги) по заданию заказчика (другой стороны) за определенную плату
                    с использованием собственных материалов или материалов заказчика.
                </div>
            </div>
            <div class="row">
                <div>
                    <div class="address">Липецк. Липецкая область 2013-2020г.</div>
                    <div class="contact">Вы можете связаться с нами и оформить заказ на нашу почту: zabor-region@mail.ru</div>
                </div>
            </div>
            <div class="row">
                <contacts></contacts>

                <div class="location">
                    <location></location>
                </div>

                <order-button></order-button>
            </div>
        </div>
    </div>
</template>
<script>
    import Contacts from '@/components/Contacts';
    import Location from '@/components/Location';
    import OrderButton from '@/components/OrderButton';

    export default {
        components: {
            Contacts, Location, OrderButton
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
    };
</script>
<style scoped>
    .layouts--footer {
        width: 100%;
        background-color: #212121;
        flex: 0 0 auto;
    }
    .footer-content {
        max-width: 1100px;
        margin: auto;
    }
    .row:nth-of-type(1) {
        width: 85%;
        display: flex;
        margin: 20px auto;
    }
    .row:nth-of-type(1) .logo {
        width: 200px;
        margin-right: 20px;
        height: 100%;
        cursor: pointer;
    }
    .row:nth-of-type(1) .desc {
        color: #ffffff;
        font-size: 12px;
        align-self: center;
		padding-top: 10px;
    }

    .row:nth-of-type(2) {
        border-bottom: 1px solid #3C3C3C;
    }
    .row:nth-of-type(2) > div {
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        width: 85%;
        margin: 10px auto;
        font-size: 13px;
    }
    .row:nth-of-type(2) .address {
        display: inline-block;
    }
    .row:nth-of-type(2) .contact {
        text-align: right;
        display: inline-block;
    }

    .row:nth-of-type(3) {
        display: flex;
        margin-bottom: 25px;
        margin-top:7px;
    }
    .row:nth-of-type(3) > div {
        display: flex;
        vertical-align: middle;
        margin: auto;
        position: relative;
        top: 6px;
    }
    @media screen and (max-width: 690px) {
        .row:nth-of-type(1) .desc {
            font-size: 11px;
        }
        .row:nth-of-type(2) .contact {
            font-size: 11px;
        }
        .row:nth-of-type(2) .address {
            font-size: 11px;
        }
    }
    @media screen and (max-width: 570px) {
        div.location {
            display: none;
        }
    }
    @media screen and (max-width: 520px) {
        div .row {
            justify-content: center;
        }
        .row:nth-of-type(1) .logo {
            width: 170px;
            height: 100%;
            margin-right: 0px;
         }
        .row:nth-of-type(1) .desc {
            display: none;
        }
        .row:nth-of-type(2) .contact {
            font-size: 11px;
            text-align: center;
        }
        .row:nth-of-type(2) .address {
            display: none;
        }
        .row:nth-of-type(3) > div {
            margin: 0;
        }
    }
    @media screen and (max-width: 416px) {
        .row:nth-of-type(1) .logo {
            width: 150px;
            height: 100%;
            margin-right: 0px;
        }
    }
    @media screen and (max-width: 375px) {

    }
</style>