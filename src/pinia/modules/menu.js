import { defineStore } from 'pinia'
import { defineAsyncComponent,shallowRef } from 'vue'
import { useRouter } from 'vue-router'
export const useMenuStore = defineStore('menu', {
    state: () => {
        //const router = useRouter()
        return {
            breadcrumbItems:[{path: '/Dashboard/Workplace', name: '工作区'},{path: '/Dictionary', name: '字典管理'},{path: '/Dictionary/Index', name: '字典列表'}],
            menuItems: [{ path: '/Dashboard/Workplace', name: '工作区',query:{},component:shallowRef(defineAsyncComponent(() => import(`@/views/Dashboard/Workplace.vue`))),closable:false }],
            router:useRouter(),
        }
    },
    actions: {
        async removeMenuItem(val) {   
            //const router = useRouter()
            for (let i = 0; i < this.menuItems.length; i++){
                if (val === this.menuItems[i].path && this.menuItems.length>1) {
                    try {
                        this.menuItems.splice(i, 1) 
                        this.router.push({
                            path:this.menuItems[i-1]?this.menuItems[i-1].path:this.menuItems[i].path 
                        })
                     
                    } catch (error) {
                        console.log(error);
                    }
                }
            }
        }
    },
}) 
