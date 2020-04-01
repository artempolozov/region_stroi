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

export default new Router({
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
                title: 'Главная',
                description: '',
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
                title: 'Штакетник',
                description: '',
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
                title: 'Рабица',
                description: '',
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
                title: 'Профлист',
                description: '',
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
                title: '3D',
                description: '',
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
                title: 'Калитки',
                description: '',
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
                title: 'Ворота',
                description: '',
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
                title: 'Откатные',
                description: '',
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
                title: 'Откатные',
                description: '',
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
                description: '',
            },
            children: [],
        },
        {
            path: '/Zapros',
            name: 'Zapros',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Zapros.vue')
            },
            meta: {
                title: 'Запрос',
                description: '',
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
                description: '',
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
                description: '',
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
                description: '',
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
                description: '',
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
                description: '',
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
                title: 'Евроштакетник',
                description: '',
            },
            children: [],
        },
        {
            path: '/test',
            name: 'test',
            components: {
                header: Header,
                footer: Footer,
                //aside: Aside,
                default: () => import('@/views/Test.vue')
            },
            meta: {
                title: 'Test',
                description: '',
            },
            children: [],
        }

    ]
})
