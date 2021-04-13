<template>
    <div class="slider-container">
        <slick ref="slick" :options="slickOptions">
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya1.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya2.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya3.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya4.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya5.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya6.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya7.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya8.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya9.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya10.webp" alt=""></div>
            <div href="http://placehold.it/2000x1000"><img src="@/assets/images/slider/Glavnaya/glavnaya11.webp" alt=""></div>
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
                    autoplay: true,
                    autoplaySpeed: 3000,
                    centerMode: true,
                    variableWidth: true,
                    infinite: true
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

<style src='../../node_modules/slick-carousel/slick/slick.css'></style>
<style src='../../node_modules/slick-carousel/slick/slick-theme.css'></style>
<style>
    .slider-container img {
        height: 450px;
        width: 600px;
        object-fit: cover;
    }
    .slider-container .slick-prev {
        left: 10px;
        z-index: 1;
    }
    .slider-container .slick-next {
        right: 10px;
        z-index: 1;
    }
    .slick-slide {
        filter: blur(1.5px);
    }
    .slick-center {
        filter: blur(0);
    }
    @media screen and (max-width: 690px) {
        div .slider-container img {
            height: 400px;
        }
    }
    @media screen and (max-width: 520px) {
        div .slider-container img {
            height: 350px;
            width: 500px;
        }
    }
    @media screen and (max-width: 416px) {
        div .slider-container img {
            height: 300px;
            width: 450px;
        }
    }
    @media screen and (max-width: 375px) {
        div .slider-container img {
            height: 250px;
            width: 400px;
        }
    }
</style>