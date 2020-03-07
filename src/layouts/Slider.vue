<template>
    <div class="slider-container">
        <div class="slider">
            <div class="slider__wrapper">
                <div class="slider__item">
                    <img src="@/assets/images/slider_1.jpg">
                </div>
                <div class="slider__item">
                    <img src="@/assets/images/slider_2.jpg">
                </div>
                <div class="slider__item">
                    <img src="@/assets/images/slider_2.jpg">
                </div>
                <div class="slider__item">
                    <img src="@/assets/images/slider_2.jpg">
                </div>
                <div class="slider__item">
                    <img src="@/assets/images/slider_2.jpg">
                </div>
                <div class="slider__item">
                    <div style="height: 250px; background: orchid;">6</div>
                </div>
                <div class="slider__item">
                    <div style="height: 250px; background: aqua;">7</div>
                </div>
            </div>
            <a class="slider__control slider__control_left" href="#" role="button"></a>
            <a class="slider__control slider__control_right slider__control_show" href="#" role="button"></a>
        </div>
    </div>
</template>

<script>

    function slide($dom, offset = 0) {
        let $wrapper = $dom.querySelector('.slider__wrapper');


        $dom.querySelector('.slider__control_left').onclick =() => {
            offset -= 400;
            $wrapper.scrollTo({
                left: offset,
                behavior: "smooth"
            });
        };

        $dom.querySelector('.slider__control_right').onclick = () => {
            offset += 400;
            $wrapper.scrollTo({
                left: offset,
                behavior: "smooth"
            });
        };

        setInterval(() => {
            offset += 400;

            if ($wrapper.clientWidth < offset)
                offset = -400;

            $wrapper.scrollTo({
                left: offset,
                behavior: "smooth"
            });
        }, 3000)
    }

    export default {
        name: "Slider",
        mounted() {
            let $slider = this.$el.querySelector('.slider');

            slide($slider);
        }
    }
</script>

<style scoped>
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