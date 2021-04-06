<template>
<div>
    <div class="views--home">
        <div class="cover">
            <div class="text-cover">Контакты</div>
        </div>

        <div class="content">
            <div class="consultation"> Консультация и продажи: </div>

        <div class="phone">
            <div class="block-left">
                <div class="icon-left">
                    <img src="@/assets/phone.png">
                </div>
                <span class="text-left">Проконсультироваться и вызвать замерщика, Вы можете по нашему телефону:</span>
            </div>

            <div class="block-right">
                <div class="number">+7 920 535-28-06</div>
                <div class="number">+7 952 591-33-70</div>
                <div class="time-work">Без выходных с 9:00 до 21:00</div>
            </div>
        </div>

        <div class="email">
            <div class="block-left">
                <div class="icon-left">
                    <img src="@/assets/email.png">
                </div>
                <span class="text-left">Вы можете отправить свое сообщение на нашу электронную почту:</span>
            </div>

            <div class="block-right">
                <div class="address">zabor-region@mail.ru</div>
            </div>
        </div>

            <div class="email">
                <div class="block-left">
                    <div class="icon-left">
                        <img src="@/assets/whatsapp.png">
                    </div>
                    <span class="text-left">Используйте популярные мессенджеры WhatsApp и Viber, чтобы быстро связаться с нами:</span>
                </div>

                <div class="block-right">
                    <div class="address">+7 920 535-28-06</div>
                </div>
            </div>

            <div class="consultation"> Оформить заявку на сайте: </div>
            <form id="feedback-form" action="https://formspree.io/xgelwgrd" method="POST" class="form-contact">

                <div class="form-group">
                    <label class="form-label-contact">Ваше имя:</label>
                    <input name="name" type="text" class="form-input-contact" placeholder="Введите имя" required>
                </div>

                <div class="form-group">
                    <label class="form-label-contact">Ваш телефон:</label>
                    <input name="number" type="text" class="form-input-contact" placeholder="Введите телефон" required>
                </div>

                <div class="form-group">
                    <label for="services" class="form-label-contact">Выберите услугу: </label>
                    <select name="services" class="form-input-contact">
                        <option value="Профлист">Забор из профлиста</option>
                        <option value="Евроштакетник">Забор из евроштакетника</option>
                        <option value="Сетка-рабица">Забор из сетки-рабица</option>
                        <option value="3D-сетка">Забор из 3D-сетки</option>
                        <option value="Ворота">Установка ворот</option>
                        <option value="Калитки">Установка калитки</option>
                    </select>
                </div>

                <div class="form-group">
                    <label class="form-label-contact">Сообщение:</label>
                    <textarea name="message" class="form-message-contact" placeholder="Введите дополнительную информацию"></textarea>
                </div>

                <input type="submit" id="my-form-button" class="form-submit-contact" value="Отправить заявку">
                <span class="form-status-contact" id="my-form-status"></span>
            </form>

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

    },

    mounted() {
        // get the form elements defined in your form HTML above

        var form = document.getElementById("feedback-form");
        var button = document.getElementById("my-form-button");
        var status = document.getElementById("my-form-status");

        // Success and Error functions for after the form is submitted

        function success() {
            form.reset();
            button.style = "display: none ";
            status.innerHTML = "Спасибо, мы скоро Вам перезвоним!";
        }

        function error() {
            status.innerHTML = "Произошла ошибка при отправке!";
        }

        // handle the form submission event
        console.log(form)
        form.addEventListener("submit", function(ev) {
            ev.preventDefault();
            var data = new FormData(form);
            ajax(form.method, form.action, data, success, error);
        });


        // helper function for sending an AJAX request

        function ajax(method, url, data, success, error) {
            var xhr = new XMLHttpRequest();
            xhr.open(method, url);
            xhr.setRequestHeader("Accept", "application/json");
            xhr.onreadystatechange = function() {
                if (xhr.readyState !== XMLHttpRequest.DONE) return;
                if (xhr.status === 200) {
                    success(xhr.response, xhr.responseType);
                } else {
                    error(xhr.status, xhr.response, xhr.responseType);
                }
            };
            xhr.send(data);
        }
    }
};
</script>
<style scoped>
    .cover {
        height: 180px;
        background-color: black;
        background: linear-gradient(to right, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(~@/assets/images/contacttop.jpg);
        background-size: cover;
        background-position: center;
        text-align: center;
        display: flex;
        flex-flow: column;
        justify-content: center;
    }
    .text-cover {
        color: white;
        font-size: 33px;
        font-weight: bold;
    }
    .content{
        flex-direction: column;
        padding: 40px 250px 40px 250px;
        display: inline-block;
        width: 100%;
    }
    .consultation {
        font-weight: bold;
        font-size: 21px;
        color: black;
        margin-bottom: 25px;
    }
    .block-left {
        padding: 5px; /* Поля вокруг текста */
        float: left; /* Обтекание по правому краю */
        width: 70%; /* Ширина слоя */
        height: 60px;
        text-align: left;
        align-items: center;
        display: flex;
    }
    .icon-left {
        float: left;
        margin-right: 5px;
    }
    .icon-left img {
        width: 60px;
        margin-right: 10px;
    }
    .text-left {
        font-weight: 500;
        color: rgb(78, 78, 78);
        font-size: 17px;
    }
    .block-right {
        padding: 5px; /* Поля вокруг текста */
        width: 30%; /* Ширина слоя */
        float: left; /* Обтекание по правому краю */
        height: 60px;
        text-align: end;
        white-space: nowrap;
        display: inline-block;
        font-weight: bold;
    }
    .number {
        font-weight: bold;
        font-size: 17px;
    }
    .time-work {
        font-weight: 500;
        color: rgb(78, 78, 78);
        font-size: 14px;
        margin-top: 4px;
    }
    .box-right > div:nth-of-type(3) {
        color: #7a7a7a;
        font-size: 11px;
        margin-top: 3px;
        font-weight: normal;
    }
    .phone {
        width: 100%;
        height: 60px;
        margin-bottom: 60px;
    }
    .email {
        width: 100%;
        height: 60px;
        margin-bottom: 45px;
    }
    .address {
        position: relative;
        font-size: 17px;
    }
    .form-contact {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 40px 49px 40px 49px;
        width: 600px;
        margin: auto;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    .form-group {
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
    }
    .form-label-contact {
        font-weight: bold;
        font-size: 16px;
        color: black;
        margin-bottom: 10px;
    }
    .form-input-contact {
        padding: 0 15px;
        height: 45px;
        background-color: #f3f3f3;
        border-radius: 8px;
        border: none;
        font-size: 15px;
        font-family: HelveticaNeueCyr;
        transition: background-color 0.2s ease-in;
    }
    .form-input-contact:focus, .form-message-contact:focus {
        outline: none;
        background-color: #e8e8e8;
    }
    .form-message-contact {
        width: 100%;
        height: 150px;
        background-color: #f3f3f3;
        border-radius: 8px;
        padding: 15px 15px;
        font-size: 15px;
        font-family: HelveticaNeueCyr;
        border: none;
        resize: vertical;
        transition: background-color 0.2s ease-in;
    }
    .form-submit-contact {
        width: 100%;
        height: 45px;
        border-radius: 8px;
        text-align: center;
        color: white;
        font-size: 15px;
        font-family: HelveticaNeueCyr;
        font-weight: bold;
        text-transform: uppercase;
        background-color: rgb(226, 28, 33);
        border: none;
    }
    .form-submit-contact:hover {
        background-color: rgb(208, 25, 30);
        cursor: pointer;
        outline: none;
        transition: background-color 0.2s ease-in;
    }
    .form-submit-contact::selection {
        background: transparent;
    }
    .form-status-contact{
        font-size: 15px;
        font-family: HelveticaNeueCyr;
        color: rgb(78, 78, 78);
    }
    @media screen and (max-width: 1124px) {
        div .content {
            padding: 40px 130px 40px 130px;
        }
        div .form-contact {
            margin: 0px;
        }
    }
    @media screen and (max-width: 960px) {
        div .content {
            padding: 40px 130px 40px 130px;
        }
    }
    @media screen and (max-width: 870px) {
        div .content {
            padding: 40px 130px 40px 130px;
        }
        div .consultation {
            text-align: center;
        }
        div .phone {
            display: inline-grid;
            margin-bottom: 100px;
        }
        div .block-right {
            margin-top: 10px;
            text-align: left;
        }
        div .block-left {
            width: 100%;
        }
        div .email {
            display: inline-grid;
            margin-bottom: 70px;
        }
        div .address {
            position: static;
        }
    }
    @media screen and (max-width: 770px) {
        div .content {
            padding: 40px 100px 40px 100px;
        }
    }
    @media screen and (max-width: 690px) {
        div .content {
            padding: 40px 80px 40px 80px;
        }
        div .cover {
            margin-top: 23px;
            height: 160px;
        }
        div .text-cover {
            font-size: 27px;
        }
        div .consultation {
            font-size: 17px;
        }
        div .text-left {
            font-size: 14px;
        }
        div .icon-left img {
            width: 45px;
            margin-right: 7px;
        }
        div .phone {
            margin-bottom: 70px;
        }
        div .email {
            margin-bottom: 50px;
        }
        div .block-right {
            margin-top: 0px;
        }
        div .number {
            font-size: 14px;
        }
        div .time-work {
            font-size: 11px;
        }
        div .address {
            font-size: 14px;
        }
        div .form-contact {
            height: 100%;
            width: 100%;
            padding: 30px 40px 30px 40px;
        }
        div .form-label-contact {
            font-size: 14px;
        }
        div .form-input-contact {
            font-size: 12px;
        }
        div .form-message-contact {
            font-size: 12px;
        }
        div .form-submit-contact {
            font-size: 12px;
        }
        div .form-status-contact {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 520px) {
        div .content {
            padding: 30px 40px 30px 40px;
        }
        div .cover {
            height: 150px;
        }
        div .text-cover {
            font-size: 25px;
        }
        div .consultation {
            font-size: 17px;
            margin-bottom: 15px;
        }
        div .text-left {
            font-size: 14px;
        }
        div .icon-left img {
            width: 40px;
            margin-right: 7px;
        }
        div .form-contact {
            height: 100%;
            width: 100%;
            padding: 30px 35px 30px 35px;
        }
        div .form-message-contact {
            height: 130px;
        }
    }
    @media screen and (max-width: 416px) {
        div .content {
            padding: 25px 20px 25px 20px;
        }
        div .cover {
            height: 130px;
        }
        div .text-cover {
            font-size: 18px;
        }
        div .consultation {
            font-size: 14px;
            margin-bottom: 10px;
        }
        div .phone {
            margin-bottom: 60px;
        }
        div .email {
            margin-bottom: 45px;
        }
        div .text-left {
            font-size: 12px;
        }
        div .icon-left img {
            width: 35px;
            margin-right: 7px;
        }
        div .number {
            font-size: 12px;
        }
        div .time-work {
            font-size: 10px;
        }
        div .address {
            font-size: 12px;
        }
        div .form-contact {
            height: 100%;
            width: 100%;
            padding: 25px 30px 25px 30px;
        }
        div .form-label-contact {
            font-size: 12px;
        }
        div .form-input-contact {
            font-size: 11px;
            height: 40px;
        }
        div .form-message-contact {
            font-size: 11px;
            height: 100px;
        }
        div .form-submit-contact {
            font-size: 11px;
        }
        div .form-status-contact {
            font-size: 11px;
        }
    }
    @media screen and (max-width: 375px) {

    }
</style>