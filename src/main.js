import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from "./store/index"
import mitt from 'mitt'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import 'element-plus/es/components/button/style/css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import '@/assets/basic.css'
// import http from "@/api/http"
// import permission from '@/api/permission'


//  const init = async () => {
//        const { data: result } = await axios.get("/ProjectManager/api/Token?client_id=api&client_secret=95f72107b8298d3592413c22e2d58282");
//        console.log(result)
//        localStorage.setItem('auth_time',result.profile.auth_time);
//        localStorage.setItem('expires_at',result.profile.expires_at);
//        localStorage.setItem('token',result.token_type+" "+result.access_token);
// }

const pinia = createPinia()
const  app=createApp(App);
//app.provide('$axios', axios)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
  }
// const components={ ElForm,ElButton,ElFormItem,ElInput,ElRadio }
// for (const component of components){
// app.component(component.name,component)
// }
app.use(pinia);
app.use(router);
app.use(store);
app.use(ElementPlus, {locale});
app.config.globalProperties.$mitt=mitt();
//app.config.globalProperties.$axios = axios;
//app.config.globalProperties.$api = api;
//app.config.globalProperties.http = http;
//app.config.globalProperties.$tabs = {};
//app.config.globalProperties.permission = permission;
app.mount('#app')