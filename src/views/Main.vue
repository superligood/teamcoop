<template>
    <div class="common-layout">
    <el-container>
    <el-aside :width="state.isWidth">
     <el-scrollbar class="el-scrollbar-left">  
        <el-menu :collapse="state.isCollapse" active-text-color="#fff" background-color="#333C4C" text-color="#fff" :default-openeds="['1']" :default-active="onRoutes" @select="handleSelect" @open="handleOpen" @close="handleClose" router>
                <el-menu-item index="0" route="/Dashboard/Workplace"><el-icon><Compass /></el-icon><span>工作台</span></el-menu-item>
                <el-sub-menu index="1" route="/Dictionary">
                  <template #title><el-icon><Setting /></el-icon><span>字典管理</span> </template>
                  <el-menu-item index="1-1" route="/Dictionary/Index">字典列表</el-menu-item>
                </el-sub-menu>
                <el-sub-menu index="2" route="/QuestionManage">
                    <template #title><el-icon><document /></el-icon><span>问题管理</span> </template>
                    <el-menu-item index="2-1" route="/QuestionManage/TaskList">任务列表</el-menu-item>
                    <el-menu-item index="2-2" route="/QuestionManage/TaskKanban">任务看板</el-menu-item>
                    <el-menu-item index="2-3" route="/QuestionManage/PersonalTask">个人待办任务</el-menu-item>
                    <el-menu-item index="2-4" route="/QuestionManage/MeComment">@MeComment</el-menu-item>
                    <el-menu-item index="2-5" route="/QuestionManage/AllComment">所有任务事件描述</el-menu-item>
                    <el-menu-item index="2-6" route="/QuestionManage/TaskReport">统计报表</el-menu-item>
                </el-sub-menu>
        </el-menu>
</el-scrollbar>
    </el-aside>
      <el-container>
        <el-header>
  <el-row>
    <el-col :span="16">
      <div class="Expand" style="float:left;" @click="toggleCollapse"><el-icon :size="18" v-if="state.isCollapse==false"><Expand /></el-icon><el-icon :size="18" v-else><Fold /></el-icon></div>
    
      <el-breadcrumb :separator-icon="ArrowRight" style="float:left;">
        <el-breadcrumb-item v-for="(item,index) in menuStore.breadcrumbItems" :to="{ path: item.path }" :key="index">{{item.name}}</el-breadcrumb-item>
        </el-breadcrumb>
    </el-col>
    <el-col :span="8">
      <div class="toolbar">
        <el-tooltip effect="dark" :content="isFullscreen ? '退出全屏' : '全屏'">
          <span @click="toggle" style="margin-right: 12px; margin-top: 4px; float: left; cursor: pointer;"><el-icon :size="16" v-if="state.isCollapse==false"><FullScreen /></el-icon><el-icon :size="16" v-else><FullScreen /></el-icon></span>
        </el-tooltip>
        
          <el-dropdown>
            <span class="el-dropdown-link" style="margin-right: 8px; margin-top: 18px;float: left;"><el-icon class="el-icon--right" :size="16" style="float:left;"><User /></el-icon> <span style="font-size: 12px; display: inline-block;float:left; line-height: 20px; padding-left: 5px;">Tom</span></span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>布局设置</el-dropdown-item>
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
    </el-col>
  </el-row>
      </el-header>
          <router-view>
            <el-tabs v-model="editableTabsValue" type="border-card" class="demo-tabs tabs" @tab-click="handleTabsClick" @tab-remove="handleTabRemove">
                <el-tab-pane class="tabs" v-for="(item,index) in editableTabs" :key="index" :label="item.name" :name="item.path"  :closable='item.closable'>
                  <el-scrollbar class="el-scrollbar-component">
                   <div style="padding: 10px;">
                   <component :is="item.component"></component>
                  </div>
                 </el-scrollbar>
                </el-tab-pane>
            </el-tabs>
          </router-view>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
    import { ref, reactive,watch,shallowRef,defineAsyncComponent,computed } from "vue";
    import { useRoute,useRouter} from 'vue-router'
    import { useMenuStore } from '@/pinia/modules/menu'
    import { ArrowRight, User } from '@element-plus/icons-vue'
    import { isEmpty } from '@/util'
    import { useFullscreen } from "@vueuse/core";


    const router = useRouter()
    const route = useRoute()

    console.log("router",router)


    const { isFullscreen, enter, exit, toggle } = useFullscreen();
    const editableTabsValue = ref('');
    const menuStore = useMenuStore()
    const editableTabs = menuStore.menuItems

    const handleTabsClick = (pane) => {
      console.log("props",pane.props.name)
      router.push({path:pane.props.name})
    }
    const handleTabRemove = pane => menuStore.removeMenuItem(pane)

    //路径转为components组件
    const  loadComponentsView = (routrUrl) => {
      return shallowRef(defineAsyncComponent(() => import(`@/views${routrUrl}`)))
    }

    const state=reactive({
      isCollapse:false,
      isWidth:'200px',
    })

    
    const handleSelect = (key, keyPath) => {

         
        console.log("handleSelect:"+key, keyPath)
      }
      //菜单展开触发事件
      const handleOpen = (key, keyPath) => {
        console.log("handleOpen:"+key, keyPath)
      }
      //菜单折叠触发事件
      const handleClose = (key, keyPath) => {
        console.log("handleClose:"+key, keyPath)
      }

      // 点击图标，切换菜单的折叠与展开
      const toggleCollapse = () => {
          if (state.isCollapse){
              state.isWidth='200px'
          }else{
            setTimeout(()=>{
              state.isWidth='60px'
            },300)
          }
        state.isCollapse = !state.isCollapse
    }
   
    //左侧菜单激活选中
    const onRoutes = computed(() => {
        if(route.meta.activeMenu) return route.meta.activeMenu
        return route.path;
    })

    

    watch(() => route.path,() => {
      console.log("route",route.query)
      editableTabsValue.value = route.path
      var isMenuBool=menuStore.menuItems.every(v=>v.path !== route.path)
      //var isMenuQueryBools=menuStore.menuItems.every(v=>v.path === route.path && !isEmpty(v.query) && v.query !== route.query)
      //console.log("isMenuBool",isMenuBool+"|"+isMenuQueryBools)
      if (isMenuBool){
        console.log(1)
           menuStore.menuItems.push({
            path:route.path,
            name:(isEmpty(route.query?.MetaTitle)?route.meta.title:route.query.MetaTitle),
            query:route.query,
            closable:route.meta.closable,
            component:loadComponentsView(route.meta?.path?route.meta.path:route.path)
          })
        }else{
          menuStore.menuItems.forEach((o,index)=>{
            if (o.path === route.path && !isEmpty(o.query) && o.query !== route.query){
              menuStore.menuItems[index].name=(isEmpty(route.query?.MetaTitle)?route.meta.title:route.query?.MetaTitle)
              menuStore.menuItems[index].query=route.query
            }
          })
        }
    },{ immediate:true })

</script>

<style>
.Expand{ cursor: pointer; text-align: center;width:50px; padding: 5px 0 0 0; height: 45px; line-height: 40px;}
.Expand:hover{ background: #F0F2F5;}
.toolbar{height: 50px; line-height: 50px;padding: 0 10px; float:right; }
.el-header{margin: 0; padding: 0;border:0;height: 50px;background:#fff;box-shadow: 2px 2px 2px #ddd;}

.el-main{margin:0; padding:0;}

.el-container{margin:0; padding:0;border:0;}
.el-aside{margin:0; padding:0;border:0;}
.el-scrollbar-left{width:100%;height: 100vh;border:0;margin:0;padding: 0;background:#333C4C;}

.el-breadcrumb{height: 40px; line-height: 43px; padding-left: 20px;}

.demo-tabs {border-width:1px 0 0 0;}
.demo-tabs .el-tabs__header .el-tabs__nav-wrap{border:0;}
.el-tabs--border-card>.el-tabs__content {padding: 0px;}
.demo-tabs .el-tabs__content .el-tab-pane{padding: 0; margin: 0;height: calc(100vh - 90px); overflow: hidden;}
.el-scrollbar-component{background-color: #fff; margin: 0; padding: 0;}

/* .demo-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll{ padding: 0;}
.demo-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav{margin:0px 0px; }
.demo-tabs .el-tabs__header .el-tabs__nav-wrap .el-tabs__nav-scroll .el-tabs__nav .el-tabs__item{padding: 0px 0px;} */

.el-menu{margin:0; padding:0;border-right:none}
/*  .el-submenu__title{color:#fff;} */
.el-menu-item.is-active,.el-submenu__title:hover,.el-menu-item:hover{
  background-color: #409EFF !important;
}
.el-submenu .el-menu-item{text-indent: 20px;}
</style>