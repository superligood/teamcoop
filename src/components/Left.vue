<template>
   <!-- <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group> -->
<el-scrollbar>
<el-menu style="height: 100vh;border:0;margin:0;padding: 0;" :collapse="isCollapse" active-text-color="#409EFF" background-color="#333C4C" text-color="#fff" :default-openeds="['1','2']" router>
        <el-menu-item index='/Main'><el-icon><HomeFilled /></el-icon><span>首页</span></el-menu-item>
        <el-sub-menu index="1">
          <template #title> <el-icon><location /></el-icon><span>字典管理</span> </template>
          <el-menu-item-group>
            <el-menu-item index='/Dictionary/Index'>字典列表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
        <el-sub-menu index="2">
          <template #title><el-icon><document /></el-icon><span>问题管理</span> </template>
          <el-menu-item-group>
            <el-menu-item index='/QuestionManage/Index'>任务列表</el-menu-item>
            <el-menu-item index='/QuestionManage/TaskKanban'>任务看板</el-menu-item>
            <el-menu-item index='/QuestionManage/PersonalTask'>个人待办任务</el-menu-item>
            <el-menu-item index='/QuestionManage/MeComment'>@MeComment</el-menu-item>
            <el-menu-item index='/QuestionManage/TaskList'>所有任务事件描述</el-menu-item>
            <el-menu-item index='/QuestionManage/TaskReport'>统计报表</el-menu-item>
          </el-menu-item-group>
        </el-sub-menu>
</el-menu>
</el-scrollbar>
</template>
<!-- <el-menu :default-active="activeMenuItemIndex" router>
  <el-menu-item index='/Main'>首页</el-menu-item>
  <el-submenu v-for="(route,idx) in subMenuRoutes" :key="idx" :index="String(idx)">
    <template #title>{{route.meta.title}}</template>
    <el-menu-item v-for="(childRoute,cidx) in route.children" :key="cidx" :index='childRoute.path'>{{childRoute.meta.title}}</el-menu-item>
  </el-submenu>
</el-menu> -->


        <!-- <el-menu active-text-color="#ffd04b" background-color="#545c64" :default-openeds="['0','1']">
          <el-menu-item-group><el-menu-item index="0"><router-link to="/Main">Home</router-link></el-menu-item></el-menu-item-group>
          
          <el-sub-menu index="1">
            <template #title>Option4</template>
            <el-menu-item-group>
              <el-menu-item index="1-1"><router-link to="/Main/QuestionManage/Index">Question List</router-link></el-menu-item>
              <el-menu-item index="1-2"><router-link to="/Main/QuestionManage/TaskList">Task List</router-link></el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="Group 2">
              <el-menu-item index="1-3">Option 3</el-menu-item> 
            </el-menu-item-group>
            <el-sub-menu index="1-4">
              <template #title>Option4</template>
              <el-menu-item index="1-4-1">Option 4-1</el-menu-item>
            </el-sub-menu>
          </el-sub-menu>
        </el-menu> -->


<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  name:'AsideMenu',
  setup() {
    const router=useRouter()
    const isCollapse = ref(true)
    // 获取作为目录的路由信息
    const subMenuRoutes=router.options.routes.filter(r=>r.meta && r.meta.title && r.children)
     return {subMenuRoutes,isCollapse }
  }
}
</script>

<style>

</style>