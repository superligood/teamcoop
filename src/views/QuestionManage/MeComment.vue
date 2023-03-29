<template>
    <div style="margin-bottom: 20px">
      <el-link @click="addTab('Index','Index','QuestionManage/Index')">Index</el-link>
      <el-link @click="addTab('AddTask','AddTask','QuestionManage/AddTask')">AddTask</el-link>
    </div>
    <el-tabs v-model="selectTabsName" type="card" class="demo-tabs" :closable='editableTabs.length>1' @tab-click="handleTabsClick" @tab-remove="handleTabRemove">
      <el-tab-pane v-for="item in editableTabs" :key="item.name" :label="item.title" :name="item.name">
      <component :is="item.component"></component>
      </el-tab-pane>
    </el-tabs>
  </template>

<script>
  import {toRefs,reactive,markRaw,shallowRef,defineAsyncComponent } from 'vue';
  import { useRoute,useRouter} from 'vue-router';
  import { isEmpty,formatDate,formatOptions } from '@/util'

  export default {
  setup(){
    //const route=useRoute()
    const router=useRouter()
    // const Right = () =>import('@/components/Right.vue');
    // const HelloWorld = ()=>import('../components/HelloWorld.vue');
    //console.log(router.options.routes[2].meta.title)
    //console.log(router.options.routes[2].component)


    //字符串路径转为components组件
    const  loadComponentsView = (routrUrl) => {
      //return shallowRef(defineAsyncComponent(() => import(`@/views/QuestionManage/${routrUrl}`)))
      return shallowRef(defineAsyncComponent(() => import(`@/views/${routrUrl}`)))
    }

    const state=reactive({
      selectTabsName:'Home',
      editableTabs:[
        {title: '首页',name: 'Home',component:shallowRef(defineAsyncComponent(() => import(`@/components/Left`)))},
        {title: '公共',name: 'Right',component:shallowRef(defineAsyncComponent(() => import(`@/components/Right`)))}
      ]
    });

    const addTab = (tabsTitle,tabsName,tabsUrl) => {
      const tabs = state.editableTabs
      if (!isEmpty(tabsUrl)){
        tabsUrl=loadComponentsView(tabsUrl)
     }
      let tabRes=false
      for (let o of tabs) {
            if (o.name === tabsName) {
              tabRes=true;
              continue;
            }
        }

        if (!tabRes){
          state.editableTabs.push({title: tabsTitle,name: tabsName,component:tabsUrl})
        }
        state.selectTabsName = tabsName
    }

    const handleTabsClick = tab => {
      router.push({
        path:tab.props.name
      })
    }

    const handleTabRemove = (tabsName) => {
        const tabs = state.editableTabs
        let activeName = state.selectTabsName
        if (activeName === tabsName) {
        tabs.forEach((tab, index) => {
            if (tab.name === tabsName) {
            const nextTab = tabs[index + 1] || tabs[index - 1]
            if (nextTab) {
                activeName = nextTab.name
            }
            }
        })
        }
    
        state.selectTabsName = activeName
        state.editableTabs = tabs.filter((tab) => tab.name !== tabsName)
    }
    return {
      ...toRefs(state),
      addTab,
      handleTabsClick,
      handleTabRemove,
      router,
    }
  }
  }
  </script>
  
  <style scoped>
  .demo-tabs > .el-tabs__content {
    padding: 32px;
    color: #6b778c;
    font-size: 32px;
    font-weight: 600;
  }
  </style>
  