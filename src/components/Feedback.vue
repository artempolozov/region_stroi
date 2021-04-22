<template>
    <div id="feedback" style="display: none;">
        <div class="overlay">

            <div class="button-close">
                <span class="closebtn" @click="toggleForm">&times;</span>
            </div>

            <div class="content-wrapper">
                <span>Расчет стоимости и замер</span>
            </div>

                <form id="feedback-form" action="https://formspree.io/xgelwgrd" method="POST" class="form-wrapper">

                    <div class="form-group">
                        <label class="form-label">Ваше имя:</label>
                        <input name="Имя" type="text" class="form-input" placeholder="Введите имя" required>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Ваш телефон:</label>
                        <input name="Номер телефона" type="text" class="form-input" placeholder="Введите телефон" required>
                    </div>

                    <div class="form-group">
                        <label for="services" class="form-label">Выберите услугу: </label>
                        <select name="Услуга" class="form-input">
                            <option value="Профлист">Забор из профлиста</option>
                            <option value="Евроштакетник">Забор из евроштакетника</option>
                            <option value="Сетка-рабица">Забор из сетки-рабица</option>
                            <option value="3D-сетка">Забор из 3D-сетки</option>
                            <option value="Ворота">Установка ворот</option>
                            <option value="Калитки">Установка калитки</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label class="form-label">Сообщение:</label>
                        <textarea name="Сообщение" class="form-message" placeholder="Введите дополнительную информацию"></textarea>
                    </div>

                    <input type="submit" id="my-form-button" class="form-submit" value="Отправить заявку">
                    <span class="form-status" id="my-form-status"></span>
                </form>
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
        toggleForm(){
            var form = document.getElementById("feedback");
            form.style.display = (form.style.display == 'none') ? 'block' : 'none'
        }
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

<style>
    *{
        box-sizing: border-box;
    }
    .button-close {
        height: 25px;
        text-align: right;
        transition: 0.3s;
        position: absolute;
        z-index: 100;
        right: 6px;
        top: 6px;
    }
    .closebtn {
        color: rgba(255, 255, 255, 0.8);
        font-weight: bold;
        font-size: 40px;
        line-height: 24px;
        cursor: pointer;
        transition: 0.3s;
    }
    .closebtn:hover {
        color: #ffffff;
    }
    #feedback {
        height: 100%;
        width: 100%;
        position: fixed;
        background-color: rgba(0, 0, 0, 0.6);
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 100;
    }
    .overlay {
        height: 100%;
        width: 530px;
        top: 20px;
        right: 0;
        bottom: 0;
        left: 0;
        margin: auto;
        overflow: auto;
        z-index: 100;
        position: fixed;
    }
    .content-wrapper {
        font-family: HelveticaNeueCyr;
        font-weight: bold;
        font-size: 25px;
        color: #fff;
        height: 128px;
        position: relative;
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        background-size: cover;
        background-position: center;
        background-image: url(~@/assets/images/bg-contact.webp);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .content-wrapper::before {
        content: "";
        display: block;
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color: rgba(0,0,0,0.3);
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
    }
    .form-wrapper {
        display: flex;
        flex-direction: column;
        background-color: white;
        padding: 40px 49px 40px 49px;
        border-bottom-left-radius: 3px;
        border-bottom-right-radius: 3px;
    }
    .form-group {
        margin-bottom: 25px;
        display: flex;
        flex-direction: column;
    }
    .form-label {
        font-weight: bold;
        font-size: 16px;
        color: black;
        margin-bottom: 10px;
    }
    .form-input {
        padding: 0 15px;
        height: 45px;
        background-color: #f3f3f3;
        border-radius: 8px;
        border: none;
        font-size: 15px;
        font-family: HelveticaNeueCyr;
        transition: background-color 0.2s ease-in;
    }
    .form-input:focus, .form-message:focus {
        outline: none;
        background-color: #e8e8e8;
    }
    .form-message {
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
    .form-submit {
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
        transition: background-color 0.2s ease-in;
    }
    .form-submit:hover {
        background-color: rgb(208, 25, 30);
        cursor: pointer;
        outline: none;
        transition: background-color 0.2s ease-in;
    }
    .form-submit::selection {
        background: transparent;
    }
    .form-status{
        font-size: 17px;
        font-family: HelveticaNeueCyr;
        color: green;
        text-align: center;
    }
    .overlay::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
    }
    @media screen and (max-width: 690px) {

    }
    @media screen and (max-width: 520px) {
        div .overlay {
            width: 100%;
            top: 0px;
        }
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
        }
        div .form-label {
            font-size: 12px;
        }
        div .form-input {
            font-size: 11px;
            height: 40px;
        }
        div .form-message {
            font-size: 11px;
            height: 100px;
        }
        div .form-submit {
            font-size: 11px;
        }
        div .form-status {
            font-size: 11px;
        }
    }
    @media screen and (max-width: 416px) {
        div .content-wrapper {
            font-size: 20px;
        }
        div .form-wrapper {
            padding: 30px 35px 30px 35px;
        }
        div .form-label {
            font-size: 12px;
        }
        div .form-input {
            font-size: 11px;
            height: 40px;
        }
        div .form-message {
            font-size: 11px;
            height: 100px;
        }
        div .form-submit {
            font-size: 11px;
        }
        div .form-status {
            font-size: 11px;
        }
    }
    @media screen and (max-width: 375px) {

    }
</style>