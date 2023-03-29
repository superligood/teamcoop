<template>
        <div>
          <el-radio-group v-model="isCollapse" style="margin-left: 320px;">
            <el-radio-button :label="false">展开</el-radio-button>
            <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>
          <Sidebar :menuList="menuList" :collapse="isCollapse"/>
        </div>
</template>
<script>
      import Sidebar from './components/SideBar.vue'
      export default {
        name:'Layout',
        components:{
          Sidebar
        },
        data(){
          return{
            isCollapse: false,
             "menuList" : [
                  {
                    "path": "1",     //菜单项所对应的路由路径
                    "title": "功能1",     //菜单项名称
                    "children":[]        //是否有子菜单，若没有，则为[]
                  },
                  {
                  "path": "2",
                   "title": "功能2",
                   "children":[]
                 },
                 {
                   "path": "3",
                   "title": "功能3",
                   "children": [
                     {
                       "path": "3-1",
                       "title": "功能3-1",
                       "children":[]
                     },
                     {
                       "path": "3-2",
                       "title": "功能3-2",
                       "children":[
                          {
                            "path":"3-2-1",
                            "title":"功能3-2-1",
                            "children":[]
                          }
                       ]
                     },
                     {
                       "path": "3-3",
                       "title": "功能3-3",
                       "children":[]
                     },
                   ]
                 },
                 {
                   "path":"4",
                   "title":"功能4",
                   "children":[
                      {
                        "path":"4-1",
                        "title":"功能4-1"
                      }
                   ]
                 }
           ]
          }
        },
        methods: {
          handleOpen(key, keyPath) {
            console.log(key, keyPath);
          },
          handleClose(key, keyPath) {
            console.log(key, keyPath);
          }
        }
      }
</script>
<style lang="stylus" scroped>
</style>
  
  