<template>
    <div>
        <div class="page-description">
        <span>Об организации</span>
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
        <div class="desc-column">
        <pre class="info">
                    "РЕГИОН-СТРОЙ" – это дружная команда опытных профессионалов,
                    где каждый из нас заинтересован в высоком качестве своей работы!
                    Внимательно относясь к отбору квалифицированного персонала
                    и выгодным предложениям для заказчиков,
                    мы обеспечили прекрасные условия для развития организации.
                    Мы получаем прибыль за счет расширения клиентской базы,
                    а не за счет необоснованного завышения цен на услуги.

                    Просто позвоните по контактному телефону +7 (920) 535-28-06
                    и мы с удовольствием проконсультируем вас по всем
                    возможным вопросам и предложим лучший вариант
                    исходя из конкретно вашего случая и пожеланий.
        </pre>
        </div>
        <div class="order">
            <div class="order-button">Заказать замер</div>
            <pre class="order-text">
Закажите бесплатный расчет замера вашего участка
и узнайте стоимость своего ограждения.
            </pre>
        </div>
    </div>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style scoped>
    .desc-column {
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
        font-size: 21px;
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
        color: black;
        font-size: 14px;
    }
    .info {
        white-space: pre-line;
        font-family: inherit;
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
    }
    pre.order-text {
        display: inline-block;
    }
</style>