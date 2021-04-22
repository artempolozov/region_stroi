import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import SliderGLAVNAYA from './layouts/SliderGLAVNAYA';
import Slider3D from './layouts/Slider3D';
import SliderSHTAKETNIK from './layouts/SliderSHTAKETNIK';
import SliderRABICA from "./layouts/SliderRABICA";
import SliderPROFLIST from "./layouts/SliderPROFLIST";
import SliderKALITKI from "./layouts/SliderKALITKI";
import SliderVOROTA from "./layouts/SliderVOROTA";
/*import Aside from './layouts/Aside';
import AsideBlank from './layouts/AsideBlank';*/

Vue.use(Router);


const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            components: { 
                header: Header,
                footer: Footer,
                slider: SliderGLAVNAYA,
                //aside: Aside,
                default: () => import('@/views/Home.vue')
            },
            meta: {
                title: 'Установка заборов под ключ | ЗАБОР-РЕГИОН Липецк',
                description: 'Установка заборов из профлиста, евроштакетника, сетки-рабица, 3д сетка, калитки, распашные и откатные ворота по оптимальным ценам. Работаем по всей Липецкой области!',
            },
            children: [],
        },
        {
            path: '/shtaketnik',
            name: 'shtaketnik',
            components: {
                header: Header,
                footer: Footer,
                slider: SliderSHTAKETNIK,
                //aside: Aside,
                default: () => import('@/views/Shtaketnik.vue')
            },
            meta: {
                title: 'Забор из Евроштакетника',
                description: 'Забор вокруг собственного участка или дома должен не только\n' +
                    'обозначать границы, но быть долговечным и красивым!' +
                    'Установка забора из евроштакетника, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/rabica',
            name: 'rabica',
            components: {
                header: Header,
                footer: Footer,
                slider: SliderRABICA,
                //aside: Aside,
                default: () => import('@/views/Rabica.vue')
            },
            meta: {
                title: 'Забор из сетки-рабица',
                description: 'Забор из сетки-рабица является самым популярным типом ограждения,\n' +
                    'благодаря своему удобству и практичности.' +
                    'Установка забора из сетки-рабица, высота от 1.5м до 2м.',
            },
            children: [],
        },
		{
            path: '/proflist',
            name: 'proflist',
            components: { 
                header: Header,
                footer: Footer,
                slider: SliderPROFLIST,
                //aside: Aside,
                default: () => import('@/views/Proflist.vue')
            },
            meta: {
                title: 'Забор из профлиста',
                description: 'Забор из профлиста является хорошим решением,\n' +
                    'когда необходимо быстро построить качественное сплошное ограждение!' +
                    'Установка забора из профлиста, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/3D',
            name: '3D',
            components: {
                header: Header,
                footer: Footer,
                slider: Slider3D,
                //aside: Aside,
                default: () => import('@/views/3D.vue')
            },
            meta: {
                title: 'Забор из 3D-сетки',
                description: 'Современный тип заборов с дополнительным изгибом\n' +
                    'для увеличения прочности и надежности.' +
                    'Установка забора из 3D-сетки, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/Kalitka',
            name: 'Kalitka',
            components: {
                header: Header,
                footer: Footer,
                slider: SliderKALITKI,
                //aside: Aside,
                default: () => import('@/views/Kalitka.vue')
            },
            meta: {
                title: 'Установка калитки',
                description: 'Калитка является необходимым элементом для любого огороженного участка.' +
                    'Установка калитки из профлиста, евроштакетника, сетки-рабица, 3D-сетки. С врезным замком',
            },
            children: [],
        },
        {
            path: '/Vorota',
            name: 'Vorota',
            components: {
                header: Header,
                footer: Footer,
                slider: SliderVOROTA,
                //aside: Aside,
                default: () => import('@/views/Vorota.vue')
            },
            meta: {
                title: 'Установка ворот',
                description: 'Обязательным элементом двора являются ворота.\n' +
                    'Они подарят удобства и функционалность вашему загородному участку!' +
                    'Установка ворот из профлиста, евроштакетника, сетки-рабица, 3D-сетки.',
            },
            children: [],
        },
        {
            path: '/Otkatnye',
            name: 'Otkatnye',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Otkatnye.vue')
            },
            meta: {
                title: 'Откатные ворота',
                description: 'Откатные ворота не занимают полезного пространства\n' +
                    'вашего участка, во время их открывания.' +
                    'Установка механических и автоматических ворот.',
            },
            children: [],
        },
        {
            path: '/Raspashnye',
            name: 'Raspashnye',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Raspashnye.vue')
            },
            meta: {
                title: 'Распашные ворота',
                description: 'Самый приемлимый по цене, популярный и классический вид ворот.' +
                    'Установка распашных ворот из профлиста, евроштакетника, сетки-рабица, 3D-сетки.',
            },
            children: [],
        },
        {
            path: '/Kontakty',
            name: 'Kontakty',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Kontakty.vue')
            },
            meta: {
                title: 'Контакты',
                description: 'Мы проконсультируем Вас по всем возможным вопросам и предложим лучший вариант исходя из конкретно вашего случая и пожеланий.',
            },
            children: [],
        },
        {
            path: '/Ocinkovanny',
            name: 'Ocinkovanny',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Ocinkovanny.vue')
            },
            meta: {
                title: 'Оцинкованный профлист',
                description: 'Данный материал популярен своей невысокой стоимостью и широтой применения.' +
                    'Установка забора из оцинкованного профлиста, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/Polimer',
            name: 'Polimer',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Polimer.vue')
            },
            meta: {
                title: 'Полимерный профлист',
                description: 'Лист покрыт цветным полимером с одной стороны. Сниженная цена' +
                    'Установка забора из полимерного профлиста, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/Dvuhstoronny',
            name: 'Dvuhstoronny',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Dvuhstoronny.vue')
            },
            meta: {
                title: 'Двухсторонний полимерный профлист',
                description: 'Лист покрыт цветным полимером с обеих сторон.' +
                    'Установка забора из двухстороннего полимерного профлиста, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/Dekorativny',
            name: 'Dekorativny',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Dekorativny.vue')
            },
            meta: {
                title: 'Декоративный профлист',
                description: 'Данный вид ограждения имеет ряд преимуществ: он не горит и не гниет.' +
                    'Установка забора из декоративного профлиста, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/Evroshtaketnik',
            name: 'Evroshtaketnik',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Evroshtaketnik.vue')
            },
            meta: {
                title: 'Евроштакетник',
                description: 'Плюс такого забора в том, что участок не просто защищен,\n' +
                    'а еще хорошо освещается и проветривается' +
                    'Установка забора из евроштакетника, высота от 1.5м до 2м.',
            },
            children: [],
        },
        {
            path: '/Shahmatka',
            name: 'Shahmatka',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Shahmatka.vue')
            },
            meta: {
                title: 'Евроштакетник-шахматка',
                description: 'Данный вид ограждения выполняется при помощи металлического штакетника,\n' +
                    'расположенного в шахматном порядке.\n' +
                    'Установка забора из евроштакетника-шахматка, высота от 1.5м до 2м.',
            },
            children: [],
        },
    ]
});
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;

    let meta = document.createElement('meta');
    meta.name = "description";
    meta.content = to.meta.description;
    document.getElementsByTagName('head')[0].appendChild(meta);

    next()
});
export default router;
