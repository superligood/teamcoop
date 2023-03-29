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
        <el-icon><Edit /></el-icon>
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
        <div>
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
  </div>
      </el-descriptions-item>
    </el-descriptions>


    <div style="background:#fff; padding:10px; border-radius:3px; margin-top:10px;">
     <el-row v-for="item in list" :key="item.ID">
        <el-col :span="24">
            <i class="el-icon-user" style="border:1px solid #5C5A55;padding:5px; border-radius:50%;width:16px;height:16px; display:inline-block; text-align:center;" v-if="item.CreateADID==null||item.CreateADID==''"></i><i style="border:1px solid #5C5A55;padding:5px; border-radius:50%; font-style:normal;width:16px;height:16px; display:inline-block; text-align:center;" v-else-if="item.CreateADID!=null||item.CreateADID!=''">{{item.CreateADID|formatFirstLetter}}</i> <span>{{item.CreateADID}}</span>
            <el-button @click="deleteTaskComments(item)" type="danger" icon="el-icon-delete" size="mini" style="float:right; margin-left:5px;" v-if="item.CreateADID==formInline.CreateADID">Delete</el-button> <el-button @click="attachmentsDownload(item)" type="primary" icon="el-icon-download" size="mini" style="float:right;" v-if="item.Ext01!=''">Download</el-button> 
        </el-col>
          <el-col :span="24" style="line-height:15px; padding:5px 5px 5px 25px;"><i class="el-icon-time"></i>  <time style="color:#999;">时间 {{item.RBTime}}</time> <span style="color:#999;"></span></el-col>
         <el-col :span="24" style="line-height:15px; padding:5px 5px 5px 25px;" v-if="item.HandlerAdID!=null && item.HandlerAdID!=''"><i class="el-icon-user-solid"></i> <span style="color:#999;">{{item.HandlerAdID|formatExecutor}}</span></el-col>
         <el-col :span="24" style="line-height:25px;  padding:5px 5px 5px 25px;">{{item.Comments}}</el-col>
    </el-row>
 </div>


<div style="background:#fff; padding:10px; border-radius:3px; margin-top:10px;">
        <el-form :model="formInline" ref="formInline" label-width="80px" size="mini">
        <el-form-item label="@">
                <el-select v-model="formInline.HandlerAdID" multiple filterable clearable allow-create remote placeholder="@：输入搜索选择" style="width:100%;" :remote-method="remoteMethod">
                    <el-option v-for="item in ExecutorOption" :key="item.AD" :label="item.AD" :value="item.AD">
                      <span style="float: left;width:150px;">{{ item.AD }}</span><span style="float: left;color: #8492a6; padding-left:10px; font-size: 13px">{{ item.ename }}</span>
                    </el-option>
                  </el-select>
             </el-form-item>
         <el-form-item label="Comments 备注"><el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="formInline.Comments"></el-input></el-form-item>
         
              <el-form-item size="large">
    <el-button type="primary" @click="Submit">Submit</el-button> 
  </el-form-item>
    </el-form>
</div>
</template>
  
  <script>
  import {toRefs, reactive, ref, unref, onMounted} from 'vue';
  import { useRoute,useRouter} from 'vue-router';
  import { ElMessage,ElMessageBox} from 'element-plus';
  import http from "@/api/http";
  import { isEmpty,formatDate,formatOptions } from '@/util'
  import apiUrl from "@/../public/config";
  
   export default {
    setup(){
      const route=useRoute()
      const router=useRouter()
  
      let state=reactive({ 
        formInline: {
                ProjectID: '',
                TaskID: '',
                HandlerAdID: '',
                CreateADID: '',
                TaskCommentsName:'',
                Comments: '',
                Ext01:''
            },  
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
                list:[],
                ProjectOptions: [],
                TaskStepOptions: [],
                TaskTypeOptions: [],
                TaskStatusOptions: [],
                PriorityOptions: [],
                TaskSourceOptions: [],
                ExecutorOption: [],
                MembersOptions: [],
                MembersTypeOptions: [],
                RoleNameOptions: [],
                MembersList: [],
              loading:false,
      })
      
      // 参数接收
      state.ruleForm.ID=route.query.ID
      const goBack = () => {
        router.push({path: '/QuestionManage/Index'})
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
        const getTaskCommentsQuery = () => {
                http.post(apiUrl.TaskCommentsQueryUrl, { TaskID: state.ruleForm.ID }).then(response => {
                    if (!isEmpty(response)&&response?.length>0){
                        state.list = response
                    } else {
                        console.log(response);
                    }
                }, response => {
                    console.log(response);
                });
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
                  http.post(apiUrl.DictionaryQueryUrl, { }).then(response => {
                      if (!isEmpty(response)&&response?.length>0){
                          for (let o of response) {
                              if (o.Class = "Task" && o.Section == "TaskType") {
                                state.TaskTypeOptions.push(o);
                              } else if (o.Class = "Task" && o.Section == "TaskStep") {
                                state.TaskStepOptions.push(o);
                              } else if (o.Class = "Task" && o.Section == "TaskSource") {
                                state.TaskSourceOptions.push(o);
                              } else if (o.Class = "Task" && o.Section == "TaskStatus") {
                                state.TaskStatusOptions.push(o);
                              } else if (o.Class = "Task" && o.Section == "Priority") {
                                state.PriorityOptions.push(o);
                              } else if (o.Class = "Project" && o.Section == "MembersType") {
                                state.MembersTypeOptions.push(o);
                              } else if (o.Class = "Project" && o.Section == "RoleName") {
                                state.RoleNameOptions.push(o);
                              }
                          }
                      }else{
                        state.TaskTypeOptions = []
                        state.TaskStepOptions = []
                        state.TaskSourceOptions = []
                        state.TaskStatusOptions = []
                        state.PriorityOptions = []
                        state.MembersTypeOptions = []
                        state.RoleNameOptions = []
                      }
                  }, response => {
                    state.TaskTypeOptions = []
                    state.TaskStepOptions = []
                    state.TaskSourceOptions = []
                    state.TaskStatusOptions = []
                    state.PriorityOptions = []
                    state.MembersTypeOptions = []
                    state.RoleNameOptions = []
                      console.log(response)
                  });
              }

    const getExecutorOption = () => {
                http.post(apiUrl.UserQueryUrl, { EmpStatus: '正常,试用,登记', __PageSize: 10, __PageNum: 1 }).then(response => {
                    if (!isEmpty(response)&&response?.length>0){
                        state.MembersOptions = response
                        state.ExecutorOption = response
                    } else {
                        state.MembersOptions = []
                        state.ExecutorOption = []
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
                  location.href = '/QuestionManage/TaskTracking?ID=' + row.ID;
              }
        const editTasks = (row) => {
                  location.href = '/QuestionManage/AddTask?ID=' + row.ID;
              }  
        const showEdit = (row) => {
                var result = false;
                  var ADID = sessionStorage.getItem("ADID");
                  if (row.CreateADID == ADID) {
                     result = true;
                  }
                  return result;
                }
                
           const deleteTaskComments = (row) => {  
                this.$confirm('确认删除?', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var token = sessionStorage.getItem("token");
                    state.loading = true;
                    http.post(apiUrl.TaskCommentsDeleteUrl, { DirectDelete: true, ID: row.ID.toString() }).then(response => {
                        if (!isEmpty(response)&&response?.length>0){
                            location.reload();
                        }
                        state.loading = false;
                    }, response => {
                        console.log(response);
                        state.loading = false;
                    });
              }).catch(() => { });
            }

            const Submit = () => {
                state.formInline.ProjectID = state.ruleForm.ProjectID;
                state.formInline.TaskID = state.ruleForm.ID;
                if (isEmpty(state.formInline.Comments)) {
                    ElMessage('请输入备注');
                    return false;
                }

                if (!isEmpty(state.formInline.HandlerAdID)) {
                    state.formInline.HandlerAdID = state.formInline.HandlerAdID.join(',');
                } else {
                    state.formInline.HandlerAdID = '';
                }

                http.get("TaskTracking.aspx?Method=getDownloadCount&ProcessName=TeamCoop&IncidentId=" + this.ruleForm.ID+"&Ext01=" + state.formInline.Ext01).then(response => {
                    if (!isEmpty(response)){
                        if (response?.length <= 0) {
                            state.formInline.Ext01 = "";
                        }
                        http.post(apiUrl.TaskCommentsCreateUrl, state.formInline).then(response => {
                            if (!isEmpty(response)&&response?.length>0){
                                state.formInline.Ext01 = new Date().valueOf();
                                location.reload();
                            } else {
                                console.log(response);
                            }
                        }, response => {
                            console.log(response);
                        });
                    }
                }, response => {
                    console.log(response);
                });
        }
   const getData = () => {
         getProjectOptions();
         getTaskDictionary();
         getExecutorOption();
         getProjectMembersQuery();
         getTaskQuery();
    }
  // 页面加载时候执行
  onMounted(() => {
           getData();
       });
  
     return {
      ...toRefs(state),
      goBack,
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
      padding: 0px 0px 50px 0;
  }
  .el-table{z-index: 0; margin: 0; padding: 0;}
  .el-table .caret-text{float: left;height:30px;}
  .el-table .caret-text i{ display:block; font-style:normal;height: 15px;line-height:15px;}
  .el-table .caret-wrapper{float: left;top:10px}
  .el-table .caret-wrapper i{display:block; font-style:normal;}
  .el-button+.el-button{margin-left:4px;}
  .el-button-operation{float:left;margin:2px 4px;}
  </style>
  