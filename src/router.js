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
            path: '/88',
            name: 'zalupka',
            components: { 
                header: Header,
                footer: Footer,
                slider: Slider,
                //aside: Aside,
                default: () => import('@/views/88.vue')
            },
            meta: {
                title: 'Главная',
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
