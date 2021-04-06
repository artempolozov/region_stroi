<template>
    <div>
        <div class="page-description">
        <span>Об организации:</span>
        </div>
        <div class="desc-column">
            <div class="item">
                <div class="icon">
                    <img src="@/assets/images/garantia.png">
                    <div class="description">Гарантия</div>
                </div>
                <pre class="thesis">
                    Мы даем самый большой на рынке
                    гарантийный срок на все изделия.
                </pre>
            </div>
            <div class="item">
                <div class="icon">
                    <img src="@/assets/images/proizvodstvo.png">
                    <div class="description">Производство</div>
                </div>
                <pre class="thesis">
                    Мы работаем напрямую с заводом производителем,
                    тем самым Вы получаете сталь самого высокого качества.
                </pre>
            </div>
            <div class="item">
                <div class="icon">
                    <img src="@/assets/images/ekonomia.png">
                    <div class="description">Экономия</div>
                </div>
                <pre class="thesis">
                    Мы работаем с имеющимися у Вас материалами,
                    что дает возможность экономить на стоимости забора.
                </pre>
            </div>
        </div>
        <div class="desc-column2">
        <pre class="info">
                    "ЗАБОР-РЕГИОН"- занимается изготовлением
                    и установкой заборов, ворот, калиток и других
                    строительных сооружений предназначенных
                    для Вашего загородного участка.
                    Наши сотрудники –это дружная команда опытных
                    профессионалов, где каждый из нас
                    заинтересован в высоком качестве
                    своей работы!
                    Внимательно относясь к отбору квалифицированного персонала и выгодным предложениям для заказчиков,
                    мы обеспечили прекрасные условия
                    для развития организации!
                    Мы получаем прибыль за счет расширения клиентской базы,
                    а не за счет необоснованного завышения цен на услуги!

                    Просто позвоните по контактному телефону <span class="phone-call">+7 (920) 535-28-06</span>
                    и мы с проконсультируем вас по всем возможным вопросам
                    и предложим лучший вариант исходя из конкретно
                    вашего случая и пожеланий.
        </pre>
        </div>
        <div class="order">
            <div @click="toggleForm" class="order-button">Заказать замер</div>
            <pre class="order-text">
        Закажите бесплатный расчет замера вашего участка
        и узнайте стоимость своего ограждения.
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        methods:{
            toggleForm(){
                var form = document.getElementById("feedback");
                form.style.display = (form.style.display == 'none') ? 'block' : 'none'
            }
        },
        name: "About"
    }
</script>

<style scoped>
    .page-description >span {
        height: 80px;
        width: 100%;
        display: flex;
        place-items: center;
        box-sizing: border-box;
        text-align: center;
        justify-content: center;
    }
    .page-description > span {
        font-weight: bolder;
        font-size: 18px;
        text-transform: uppercase;
    }
    .desc-column {
        display: inline-block;
        width: 50%;
    }
    .desc-column2 {
        display: inline-block;
        width: 50%;
    }
    .desc-column img {
        width: 50px;
        margin-right: 10px;
    }
    .icon .description {
        display: inline-block;
        font-weight: bold;
        font-size: 18px;
        text-transform: uppercase;
        color: #e21c21;
    }
    .icon {
        display: flex;
        align-items: center;
    }
    .thesis {
        white-space: pre-line;
        font-family: inherit;
        color: rgb(78, 78, 78);
        font-size: 14px;
    }
    .info {
        white-space: pre-line;
        font-family: inherit;
        color: rgb(78, 78, 78);

    }
    .order-button {
        color: white;
        background-color: rgb(226, 28, 33);
        height: 45px;
        width: 165px;
        border-radius: 15px;
        font-weight: bold;
        font-size: 14px;
        justify-content: center;
        display: inline-flex;
        align-items: center;
        text-transform: uppercase;
        position: relative;
        bottom: 27px;
        transition: background-color 0.2s ease-in;
    }
    pre.order-text {
        display: inline-block;
        font-family: HelveticaNeueCyr;
        color: rgb(78, 78, 78);
    }
    .order-button:hover {
        background-color: rgb(208, 25, 30);
        cursor: pointer;
        transition: background-color 0.2s ease-in;
    }
    .order-button::selection {
        background: transparent;
    }
    .phone-call {
        background: rgb(226, 28, 33);
        color: white;
        padding: 2px;
    }
    @media screen and (max-width: 1140px) {

    }
    @media screen and (max-width: 960px) {
        div .desc-column2 {
            display: none;
        }
        div .desc-column {
            width: 100%;
            display: inline-grid;
            justify-content: center;
            text-align: center;
        }
        .desc-column img {
            width: 48px;
        }
        div .order-button {
            display: none;
        }
        div .order {
            display: none;
        }
        div .icon {
            justify-content: center;
        }
        div .icon .description {
            font-size: 20px;
        }
        div .thesis {
            font-size: 16px;
        }
    }
    @media screen and (max-width: 690px) {
        div .page-description>span {
            font-size: 17px;
        }
        div .desc-column2 {
            display: none;
        }
        div .desc-column {
            width: 100%;
            display: inline-grid;
            justify-content: center;
            text-align: center;
        }
        .desc-column img {
            width: 38px;
        }
        div .order-button {
            display: none;
        }
        div .order {
            display: none;
        }
        div .icon {
            justify-content: center;
        }
        div .icon .description {
            font-size: 17px;
        }
        div .thesis {
            font-size: 12px;
        }
    }
    @media screen and (max-width: 520px) {
        div .page-description>span {
            font-size: 15px;
        }
        div .desc-column2 {
            display: none;
        }
        div .desc-column {
            width: 100%;
            display: inline-grid;
            justify-content: center;
            text-align: center;
        }
        .desc-column img {
            width: 38px;
        }
        div .order-button {
            display: none;
        }
        div .order {
            display: none;
        }
        div .icon {
            justify-content: center;
        }
        div .icon .description {
            font-size: 15px;
        }
        div .thesis {
            font-size: 12px;
        }
    }
</style>