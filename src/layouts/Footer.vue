<template>    
    <div class="layouts--footer">
        <div class="footer-content">
            <div class="row">
                <img class="logo" src="@/assets/images/logo_white.png">
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
                <location></location>
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
            goToHome() {
                window.location.href = '/';
            }
        }
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
    }
    .row:nth-of-type(1) .desc {
        color: #6d6d6d;
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
        color: #6d6d6d;
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
        margin-bottom: 10px;
    }
    .row:nth-of-type(3) > div {
        display: flex;
        vertical-align: middle;
        margin: auto;
        position: relative;
        top: 6px;
    }

</style>