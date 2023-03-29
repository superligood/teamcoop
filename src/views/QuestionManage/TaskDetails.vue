<template>
  <el-descriptions :column="2" border>
    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Task Name</div>
        <div class="cell-item">任务名称</div>
      </template>
      {{  ruleForm.TaskName }}
    </el-descriptions-item>
    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Task Title</div>
        <div class="cell-item">任务标题</div>
      </template>
      {{  ruleForm.TaskTitle }}
    </el-descriptions-item>
    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Task Source</div>
        <div class="cell-item">任务源</div>
      </template>
      <div v-for="item in TaskSourceOptions" :key="item.Value"><span v-if="item.Value == ruleForm.TaskSource">{{ item.Item }}</span></div>
    </el-descriptions-item>
    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">CSR Number</div>
        <div class="cell-item">CSR编号</div>
      </template>
     {{  ruleForm.CSRNumber }}
    </el-descriptions-item>

    
    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Task Type</div>
        <div class="cell-item">任务类型</div>
      </template>
      <div v-for="item in TaskTypeOptions" :key="item.Value"><span v-if="item.Value == ruleForm.TaskType">{{ item.Item }}</span></div>
    </el-descriptions-item>
    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Project Name</div>
        <div class="cell-item">项目名称</div>
      </template>
      <div v-for="item in ProjectOptions" :key="item.ID"><span v-if="item.ID == ruleForm.ProjectID">{{ item.ProjectName }}</span></div>
    </el-descriptions-item>

    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Task Status</div>
        <div class="cell-item">任务状态</div>
      </template>
      <div v-for="item in TaskStatusOptions" :key="item.Value"><span v-if="item.Value == ruleForm.TaskType">{{ item.Item }}</span></div>
    </el-descriptions-item>
    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Task Step</div>
        <div class="cell-item">任务进度</div>
      </template>
      <div v-for="item in TaskStepOptions" :key="item.Value"><span v-if="item.Value == ruleForm.TaskType">{{ item.Item }}</span></div>
    </el-descriptions-item>

    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Task Comments</div>
        <div class="cell-item">任务备注</div>
      </template>
      {{  ruleForm.TaskComments }}
    </el-descriptions-item>

    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Priority</div>
        <div class="cell-item">优先级</div>
      </template>
      <div v-for="item in PriorityOptions" :key="item.Value"><span v-if="item.Value == ruleForm.Priority">{{ item.Item }}</span></div>
    </el-descriptions-item>

    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Workload</div>
        <div class="cell-item">工作量</div>
      </template>
      {{  ruleForm.Workload }}
    </el-descriptions-item>

    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Revert</div>
        <div class="cell-item">归属</div>
      </template>
      {{  ruleForm.Revert }}
    </el-descriptions-item>

    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Begin Time</div>
        <div class="cell-item">开始时间</div>
      </template>
      {{ formatDate(ruleForm.BeginTime,'yyyy-MM-dd') }}
    </el-descriptions-item>

    <el-descriptions-item label-align="right" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">End Time</div>
        <div class="cell-item">结束时间</div>
      </template>
      {{ formatDate(ruleForm.EndTime,'yyyy-MM-dd') }}
    </el-descriptions-item>

    <el-descriptions-item label-align="right" :span="2" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Content</div>
        <div class="cell-item">内容</div>
      </template>
      {{  ruleForm.Describe }}
    </el-descriptions-item>
    <el-descriptions-item label-align="right" :span="2" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Executor</div>
        <div class="cell-item">执行人</div>
      </template>
     
      <el-table :data="MembersList" size="small" border style="max-width: 90%;">
     <el-table-column prop="__RowNum" width="60">
        <template #header>
             <span class="caret-text"><i>NO.</i><i>行号</i></span>
        </template>
    </el-table-column>
    <el-table-column prop="ADID" width="120">
        <template #header>
             <span class="caret-text"><i>Name</i><i>姓名</i></span>
        </template>
    </el-table-column>
    <el-table-column prop="CompanyCode" width="120">
        <template #header>
             <span class="caret-text"><i>Company</i><i>公司</i></span>
        </template>
    </el-table-column>
    <el-table-column prop="MembersType" width="120">
        <template #header>
             <span class="caret-text"><i>Type</i><i>类型</i></span>
        </template>
         <template #default="scope">
          <span>{{ formatOptions(scope.row.MembersType,MembersTypeOptions) }}</span>
      </template>
    </el-table-column>
    <el-table-column prop="TaskStep" width="120">
        <template #header>
             <span class="caret-text"><i>Task Step</i><i>任务进度</i></span>
        </template>
         <template #default="scope">
          <span>{{ formatOptions(scope.row.TaskStep,TaskStepOptions) }}</span>
      </template>
    </el-table-column>

    <el-table-column prop="Comment" show-overflow-tooltip>
      <template #header>
             <span class="caret-text"><i>Comment</i><i>任务描述</i></span>
        </template>
    </el-table-column>
      </el-table>
    </el-descriptions-item>
    <el-descriptions-item label-align="right" :span="2" label-class-name="dpLabel" class-name="dpContent">
      <template #label>
        <div class="cell-item">Content</div>
        <div class="cell-item">内容</div>
      </template>
      {{  ruleForm.Describe }}
    </el-descriptions-item>
  </el-descriptions>
<div class="el-footer">
  <el-button @click="taskTracking(ruleForm)" type="danger"> 任务追踪 Task Tracking </el-button><el-button @click="editTasks(ruleForm)" v-if="showEdit(ruleForm)">编辑 Edit</el-button>
</div>
</template>

<script>
import {toRefs, reactive, watch,computed,onBeforeMount,onMounted,onBeforeUpdate,onUpdated,onBeforeUnmount,onUnmounted,onActivated,onDeactivated} from 'vue';
import { useRoute,useRouter} from 'vue-router';
import http from "@/api/http";
import { isEmpty,formatDate,formatOptions } from '@/util'
import apiUrl from "@/../public/config";

 export default {
  setup(){
    const route=useRoute()
    const router=useRouter()

    let state=reactive({   
            ruleForm:{
                ID: '',
                ProjectID: '',
                TaskName: '',
                TaskTitle: '',
                TaskStep: '',
                Workload: '',
                TaskSource:'',
                TaskComments: '',
                Revert: '',
                TaskType: '',
                TaskStatus: '',
                CSRNumber: '',
                Priority: '',
                Counterpart: '',
                Executor: '',
                BeginTime: '',
                EndTime: '',
                Describe: '',
            },     
            ProjectOptions: [],
            TaskStepOptions: [],
            TaskTypeOptions: [],
            TaskStatusOptions: [],
            PriorityOptions: [],
            TaskSourceOptions: [],
            MembersTypeOptions: [],
            RoleNameOptions: [],
            MembersList: [],
            loading:false,
    })
    
    // 参数接收
    if (route.query.ID){
        state.ruleForm.ID=route.query.ID
    }else{
        state.ruleForm.ID=route.params.ID
    }

    const getTaskQuery = () => {
             if (!isEmpty(state.ruleForm.ID)) {
                http.post(apiUrl.TaskQueryUrl, { ID: state.ruleForm.ID }).then(response => {
                    if (!isEmpty(response)&&response?.length>0){
                      state.ruleForm = response[0]
                    }
                }, response => {
                    console.log(response);
                });
            }
      }
      const getProjectOptions = () => {
                http.post(apiUrl.ProjectsQueryUrl, {}).then(response => {
                    if (!isEmpty(response)&&response?.length>0){
                      state.ProjectOptions = response
                    }else{
                      state.ProjectOptions = []
                    }
                }, response => {
                    state.ProjectOptions = []
                    console.log(response)
                });
            }
      const getTaskDictionary = () => {
                state.TaskTypeOptions = []
                state.TaskStepOptions = []
                state.TaskSourceOptions = []
                state.TaskStatusOptions = []
                state.PriorityOptions = []
                state.MembersTypeOptions = []
                state.RoleNameOptions = []
                http.post(apiUrl.DictionaryQueryUrl, { }).then(response => {
                    if (!isEmpty(response)&&response?.length>0){
                        for (let o of response) {
                            if (o.Class == "Task" && o.Section == "TaskType") {
                              state.TaskTypeOptions.push(o);
                            } else if (o.Class == "Task" && o.Section == "TaskStep") {
                              state.TaskStepOptions.push(o);
                            } else if (o.Class == "Task" && o.Section == "TaskSource") {
                              state.TaskSourceOptions.push(o);
                            } else if (o.Class == "Task" && o.Section == "TaskStatus") {
                              state.TaskStatusOptions.push(o);
                            } else if (o.Class == "Task" && o.Section == "Priority") {
                              state.PriorityOptions.push(o);
                            } else if (o.Class == "Project" && o.Section == "MembersType") {
                              state.MembersTypeOptions.push(o);
                            } else if (o.Class == "Project" && o.Section == "RoleName") {
                              state.RoleNameOptions.push(o);
                            }
                        }
                    }
                }, response => {
                    console.log(response)
                });
            }
      const getProjectMembersQuery = () => {
        state.loading = true;
                http.post(apiUrl.ProjectMembersQueryUrl, { FromID: state.ruleForm.ID, Type: "2" }).then(response => {
                    if (!isEmpty(response)&&response?.length>0){
                      state.MembersList = response
                    } else {
                      state.MembersList = []
                    }
                    state.loading = false;
                }, response => {
                  state.MembersList = []
                  state.loading = false;
                });
            }
      const taskTracking = (row) => {
        router.push({path: '/QuestionManage/TaskTracking',query:{ID:row.ID}});
      }
      const editTasks = (row) => {
        router.push({path: '/QuestionManage/EditTask',query:{ID:row.ID}});
      }  
      const showEdit = (row) => {
              var result = false;
                var ADID = sessionStorage.getItem("ADID");
                if (row.CreateADID == ADID) {
                   result = true;
                }
                return result;
              }   
      const getData = () => {
            getProjectOptions();
            getTaskDictionary();
            getProjectMembersQuery();
            getTaskQuery();
        }

     //组件挂载到节点上之前执行的函数
     onBeforeMount(() => {
       console.log('onBeforeMount')
     })
     //组件挂载完成后执行的函数
     onMounted(() => {
      getData();
       console.log("onMounted");
     })
     //组件更新之前执行的函数
     onBeforeUpdate(() => {
       console.log("onBeforeUpdate");
     })
    //组件更新完成之后执行的函数
    onUpdated(() => {
       console.log("onUpdated")
     })
    //组件卸载之前执行的函数
    onBeforeUnmount(() => {
       console.log('onBeforeUnmount')
    })
     //组件卸载完成后执行的函数
     onUnmounted(() => {
       console.log('onUnmounted')
    })
    //被包含在 <keep-alive> 中的组件，会多出两个生命周期钩子函数，被激活时执行
    onActivated(() => {
       console.log('onActivated')
    })
    //被 keep-alive 缓存的组件失活时调用,比如从 A 组件，切换到 B 组件，A 组件消失时执行
    onDeactivated(() => {
       console.log('onDeactivated')
    })
    //计算
    computed(() => {
      console.log("computed")
      return ""
    })
 
    //监听参数ID是否有变化
    watch(() => route.query,() => {
      if (!isEmpty(route.query?.ID)){
        state.ruleForm.ID=route.query?.ID
        getTaskQuery();
      }else if (!isEmpty(route.params?.ID)){
        state.ruleForm.ID=route.params?.ID
        getTaskQuery();
      }
    },{ immediate:true })
    

   return {
    ...toRefs(state),
    getData,
    formatDate,
    formatOptions,
    taskTracking,
    editTasks,
    showEdit,
    }
  }
 }
</script>

<style>
.dpLabel{width:200px;}
.dpContent{width: calc(50vw - 200px);}
</style>

<style scoped>
.el-descriptions {
    --el-descriptions-item-bordered-label-background: var(--el-bg-color-page);
    padding: 0px 0px 50px 0px;
}
.el-table{z-index: 0; margin: 0; padding: 0;}
.el-table .caret-text{float: left;height:30px;}
.el-table .caret-text i{ display:block; font-style:normal;height: 15px;line-height:15px;}
.el-table .caret-wrapper{float: left;top:10px}
.el-table .caret-wrapper i{display:block; font-style:normal;}
.el-button+.el-button{margin-left:4px;}
.el-button-operation{float:left;margin:2px 4px;}

.el-footer{position:absolute;left:0;right:0;bottom:0; margin: 0; padding: 10px 0;background: #fff;height: auto; text-align: center; border-top:1px solid #eee;}
</style>
