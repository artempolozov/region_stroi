<template>
    <div class="order">
        <div id="burger-button" @click="toggleMenu" class="burger-button"></div>
    </div>
</template>

<script>
    export default {
        methods:{
            toggleMenu(){
                var form = document.getElementById("nav-menu");
                var burgerButton = document.getElementById("burger-button");
                if (form.style.display == 'none'){
                    form.style.display = "block";
                } else {
                    form.style.display = "none";
                }
                burgerButton.classList.toggle("active");
            }
        },
        name: "BurgerButton"
    }
</script>

<style scoped>
    .order {
        display: flex;
    }
    .header-content .order {
        border-left: 0px solid rgba(66, 66, 66, 0.21);
    }
    .burger-button {
        position: relative;
        width: 24px;
        height: 24px;
        background-size: cover;
        background-position: center;
        /*background-image: url(@/assets/icon/menu.svg);*/
    }
    /*.burger-button.active {
        background-image: url(@/assets/close.svg);
    }*/
</style>