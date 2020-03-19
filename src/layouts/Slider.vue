<template>
    <div class="slider-container">
        <slick ref="slick" :options="slickOptions">
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
            <a href="http://placehold.it/2000x1000"><img src="http://placehold.it/2000x1000" alt=""></a>
        </slick>
    </div>
</template>

<script>
    import Slick from 'vue-slick';

    export default {
        name: "Slider",
        components: { Slick },
        data() {
            return {
                slickOptions: {
                    slidesToShow: 3,
                    // Any other options that can be got from plugin documentation
                },
            };
        },
        mounted() {
            // let $slider = this.$el.querySelector('.slider');
        },
        methods: {

        },
    }
</script>

<style scoped>
    @import "/node_modules/slick-carousel/slick/slick.css";
    .slider-container {
        width: 100%;
        flex: 0 0 auto;
    }
    .slider {
        position: relative;
        overflow: hidden;
        height: 464px;
    }

    .slider__wrapper {
        height: 100%;
        display: flex;
        transition: transform 0.6s ease;
        overflow: hidden;
    }

    .slider__item {
        /*flex: 0 0 33.333333%;
        max-width: 33.333333%;*/
        height: 100%;
        max-width: 610px;
    }
    .slider__item img {
        height: 100%;
    }

    .slider__control {
        position: absolute;
        top: 50%;
        align-items: center;
        justify-content: center;
        width: 40px;
        color: #fff;
        text-align: center;
        opacity: 0.5;
        height: 50px;
        transform: translateY(-50%);
        background: rgba(0, 0, 0, .5);
    }

    .slider__control_show {
        display: flex;
    }

    .slider__control:hover,
    .slider__control:focus {
        color: #fff;
        text-decoration: none;
        outline: 0;
        opacity: .9;
    }

    .slider__control_left {
        left: 0;
    }

    .slider__control_right {
        right: 0;
    }

    .slider__control::before {
        content: '';
        display: inline-block;
        width: 20px;
        height: 20px;
        background: transparent no-repeat center center;
        background-size: 100% 100%;
    }

    .slider__control_left::before {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
    }

    .slider__control_right::before {
        background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='%23fff' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
    }

    .slider__item>div {
        line-height: 250px;
        font-size: 100px;
        text-align: center;
    }
</style>