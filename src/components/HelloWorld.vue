<template>
    <div>
      <h1>这是子组件</h1>
      <h3>{{ p1.name }}</h3>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue'

  export default {
    setup() {
    //const p1=inject('name') //provide传  inject 收 
     const p1=reactive({})
    //被父组件调用方法
    function recaive(val){
      console.log('5555')
      p1.name=val.name
      p1.age=val.age
    }

    return { recaive,p1 }
   }
  }
  </script>
  
  
  