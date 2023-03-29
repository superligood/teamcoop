<template>
<router-view />
</template>
 
<script >
//import { reactive } from 'vue'
//import { useRouter } from 'vue-router'
//import { useStore } from 'vuex'
//import { provide } from '@vue/runtime-core'
// import HelloWorld from '@/components/HelloWorld.vue'
// import Header from './components/Header.vue'
// import Footer from './components/Footer.vue'
// import { ElConfigProvider } from 'element-plus'
// import zhCn from 'element-plus/lib/locale/lang/zh-cn';

export default{
  name: 'App',
  //components:{HelloWorld,Header,Footer},
  setup(){
    // const { locale } = reactive({locale: zhCn});
    // return {locale,ElConfigProvider}
  //const router = useRouter()
  //const store = useStore()
  //console.log('store', store.state.name)
  //store.commit('changeName', '我是前端人')
  //console.log('store', store.state.name)
  //store.dispatch('changeVal')


  //父组件向子组件传值
   //const p1=reactive({id:0,name:'马云',age:50});
   /*provide('name',p1)*/  // 自动传参

  //点击传值
//   const val=ref()
//   function btn(){
//     val.value.recaive(p1)
//   }

//   function btns(){
//     //调用导步方法
//     //store.dispatch('changeVal')
//     store.commit('changeName', '我是前端人111')
//   }
//   return{btn,btns,val}

 }
}
</script>


