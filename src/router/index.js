// import Vue from 'vue'
// import Router from 'vue-router'
// 1、按需引入方法  createWebHashHistory,createWebHistory
import { createRouter, createWebHistory } from 'vue-router'
import routes from '@/router/tabs'


//3、创建路由实例
const router = createRouter({
  history: createWebHistory(), //去除#
  //history:createWebHashHistory('/'),
  //   // base: process.env.BASE_URL + "vue/",
  //base: process.env.NODE_ENV === "production" ? domain : "/",
  //base: "/",
  routes
})

export default router