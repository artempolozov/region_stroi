<template>
    <div class="order">
        <div @click="toggleForm" class="order-button">Заявка на замер</div>
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
        name: "Contacts"
    }
</script>

<style scoped>
    .order {
        padding: 5px 15px;
        margin: 10px 0;
    }
    .header-content .order {
        border-left: 0px solid rgba(66, 66, 66, 0.21);
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
        display: flex;
        align-items: center;
        text-transform: uppercase;
        transition: background-color 0.2s ease-in;
    }
    .order-button:hover {
        background-color: rgb(208, 25, 30);
        cursor: pointer;
        transition: background-color 0.2s ease-in;
    }
    .order-button::selection {
        background: transparent;
    }
    @media screen and (max-width: 690px) {
        div .order-button {
            height: 40px;
            width: 150px;
            font-size: 12px;
        }
    }
</style>