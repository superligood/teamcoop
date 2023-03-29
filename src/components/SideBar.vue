<!-- 

    <template>
        <el-menu default-active="3-2-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="collapse">
          <sidebar-item v-for="menu in menuList" :key="menu.path" :item="menu" :collapse="collapse"/>
        </el-menu>
        </template>
        <script>
        import SidebarItem from './SidebarItem'
        export default {
          name:'Sidebar',
          components: { SidebarItem },
          props:{
            menuList: {
              type: Array,
              required: true
            },
            collapse:{
              type:Boolean,
              default:false
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
        <style lang="stylus">
          .el-menu-vertical-demo:not(.el-menu--collapse) {
            width: 200px;
            min-height: 400px;
          }
        </style>
    
     -->