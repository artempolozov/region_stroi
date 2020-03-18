import Vue from 'vue'
import Router from 'vue-router'
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Slider from './layouts/Slider';
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
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
                slider: Slider,
                //aside: Aside,
                default: () => import('@/views/Kontakty.vue')
            },
            meta: {
                title: 'Откатные',
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
