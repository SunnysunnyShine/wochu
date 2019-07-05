import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from '../pages/index'
import Home from '../pages/home/Homemain'
import Select from '../pages/select/Proselect'
import Cart from '../pages/cart/Cart'
import User from '../pages/user/Usermsg' 
import Detail from '../pages/detail/detail'

//使用注册
Vue.use(VueRouter)

// 配置路由表

let routes = [
    {
        path : '/',
        component :Index,
        redirect : '/home',
        children :[
            {
                path : '/home',
                name : 'home',
                component : Home
            },
            {
                path : '/select',
                name : 'select',
                component : Select
            },
            {
                path : '/cart',
                name : 'cart',
                component : Cart
            },
            {
                path : '/user',
                name : 'user',
                component : User
            }
        ]

    },
    {
        path : '/detail',
        namr : 'detail',
        component : Detail
    }

]

export default new VueRouter({
    routes
})
