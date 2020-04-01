<template>
    <div class="views--home" style="height: 800px">
        <form class="form" method="post" action="/feedback.php">
            <div class="form-row">
                <div class="form-group col-6">
                    <label for="name">Представьтесь, пожалуйста: <span style="color: red">*</span></label>
                    <input type="text" name="name" id="name" onkeyup="checkParams()" placeholder="Как к вам обращаться?" required />
                </div>
                <div class="form-group col-6">
                    <label for="mail">Укажите ваш email: <span style="color: red">*</span></label>
                    <input type="email" name="mail" id="email" onkeyup="checkParams()" placeholder="Email" required />
                </div>
            </div>
            <div class="form-group">
                <label for="phone">Укажите ваш телефон: <span style="color: red">*</span></label>
                <input type="tel" name="phone" id="phone" onkeyup="checkParams()" placeholder="Номер телефона +7" required />
            </div>
            <div class="form-group">
                <label for="company">Напишите, из какой вы компании: </label>
                <input type="text" name="company" placeholder="Введите название" />
            </div>
            <div class="form-group">
                <label for="website">Укажите ваш сайт: </label>
                <input type="text" name="website" placeholder="Адрес вашего сайта" pattern="(http|https)://.+" />
            </div>
            <div class="form-group">
                <label for="product">Продукт: </label>
                <input type="text" name="product" onkeyup="checkParams()" placeholder="Продукт" />
            </div>
            <div class="form-group">
                <label for="services">Выберите услугу: </label>
                <select name="services">
                    <option value="none">Услуга не выбрана</option>
                    <option value="1">Услуга_</option>
                    <option value="2">Услуга_</option>
                    <option value="3">Услуга_</option>
                    <option value="4">Услуга_</option>
                    <option value="5">Услуга_</option>
                    <option value="6">Услуга_</option>
                    <option value="7">Услуга_</option>
                    <option value="8">Услуга_</option>
                </select>
            </div>
            <div class="form-group">
                <label for="message">Доп. информация:</label>
                <textarea name="message"></textarea>
            </div>
            <div>
                <select name="who">
                    <option value="robot">Я Робот</option>
                    <option value="man">Я человек</option>
                </select>
            </div>
            <div class="pt-3">
                <input type="submit" id="submit" class="btn" value="Отправить" disabled />
                <button type="button" class="btn" onclick="form.reset()">Очистить</button>
            </div>
            <div class="py-3">
                <small>Поля отмеченные звездочкой <span style="color: red">*</span> являются обязательными для заполнения.</small>
            </div>
        </form>
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

    }
};
</script>

<style>

</style>