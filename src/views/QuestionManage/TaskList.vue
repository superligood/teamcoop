<template>
  <el-dialog v-model="dialogFormVisible" :close-on-click-modal="false" top="5vh" draggable>
    <el-form inline="true" :model="formInline" label-position="top">
            <el-col :span="12">
                  <el-form-item label="Task Name 任务名称">
                  <el-input v-model="formInline.TaskName"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="12">
              <el-form-item label="Task Title 任务标题">
                  <el-input v-model="formInline.TaskTitle"></el-input>
              </el-form-item>
          </el-col>
  
          <el-col :span="12">
              <el-form-item label="Task Source 任务源" prop="TaskSource">
              <el-select v-model="formInline.TaskSource" clearable placeholder="请选择任务源" style="width:100%">
                          <el-option v-for="item in TaskSourceOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
  
          <el-col :span="12">
                  <el-form-item label="CSR Number CSR编号">
                  <el-input v-model="formInline.CSRNumber"></el-input>
              </el-form-item>
          </el-col>
  
          <el-col :span="12">
              <el-form-item label="Task Type 任务类型">
                      <el-select v-model="formInline.TaskType" clearable placeholder="请选择任务类型" style="width:100%">
                      <el-option v-for="item in TaskTypeOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
  
          <el-col :span="12">
              <el-form-item  label="Project Name 项目名称">
                  <el-select v-model="formInline.ProjectID" clearable placeholder="请选择项目名称" style="width:100%">
                       <el-option v-for="item in ProjectOptions" :key="item.ID" :label="item.ProjectName" :value="item.ID"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
          
          <el-col :span="12">
              <el-form-item label="Task Step 任务进度">
                    <el-select v-model="formInline.TaskStep" clearable placeholder="请选择任务进度" style="width:100%">
                        <el-option v-for="item in TaskStepOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                     </el-select>
              </el-form-item>
          </el-col>
  
          <el-col :span="12">
              <el-form-item label="Task Status 任务状态">
                  <el-select v-model="formInline.TaskStatus" clearable placeholder="请选择任务状态" style="width:100%">
                      <el-option v-for="item in TaskStatusOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
  
          <el-col :span="12">
              <el-form-item label="Revert 归属">
                  <el-input v-model="formInline.Revert"></el-input>
              </el-form-item>
          </el-col>
      
          <el-col :span="12">
              <el-form-item label="Workload 工作量">
                      <el-input v-model="formInline.Workload"></el-input>
              </el-form-item>
          </el-col>
  
          <el-col :span="12">
              <el-form-item label="Priority 优先级">
                  <el-select v-model="formInline.Priority" clearable placeholder="请选择优先级" style="width:100%">
                      <el-option v-for="item in PriorityOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
          <el-col :span="12"></el-col>
      
         <el-col :span="12">
          <el-form-item label="Begin Time 开始时间">
           <el-date-picker type="date" placeholder="选择开始时间" v-model="formInline.BeginTime" style="width:100%"></el-date-picker>
          </el-form-item>
      </el-col>
  
      <el-col :span="12">
           <el-form-item label="End Time 结束时间">
             <el-date-picker type="date" placeholder="选择结束时间" v-model="formInline.EndTime" style="width:100%"></el-date-picker>
          </el-form-item>
     </el-col>
  </el-form>
  <template #footer>
    <div class="dialog-footer">
      <el-button type="primary" @click="onSearch">搜 索</el-button>
      <el-button @click="onExport">导 出</el-button>
    </div>
  </template>
  </el-dialog>
  
  <div style="margin-bottom:10px; background-color: #eee;">
      <el-row Type="flex" justify="end" align="bottom">
      <el-col :span="16">
        <el-button @click="addTask(1)" icon="Plus">新建任务</el-button> 
       </el-col>
      <el-col :span="8" align="right">
        <el-button type="primary" icon="Search" @click="dialogFormVisible = true">搜索</el-button> <el-button icon="Download" @click="onExport">导出</el-button> 
      </el-col>
      </el-row>
  </div>
  <el-table :loading="tableLoading" :data="tableData" element-loading-background="rgba(0, 0, 0, 0.8)" @selection-change="handleSelectionChange" height="calc(100vh - 200px)" style="background-color: blueviolet;">
      <el-table-column type="selection" width="55" />
      <el-table-column fixed prop="CSRNumber" label="CSRNumber" width="120">
        <template #header>
               <span class="caret-text"><i>CSR Number</i><i>CSR编号</i></span>
        </template>
        <template #default="scope">
          <el-link type="primary" @click="handleDetails(scope.row)">{{scope.row.CSRNumber}}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="TaskName" label="Task Name" width="150" show-overflow-tooltip>
        <template #header>
               <span class="caret-text"><i>Task Name</i><i>任务名称</i></span>
          </template>
          <template #default="scope">
          <el-link type="primary" @click="handleDetails(scope.row)">{{scope.row.TaskName}}</el-link>
        </template>
      </el-table-column>
      <el-table-column prop="TaskTitle" label="Task Title" width="150" show-overflow-tooltip>
        <template #header>
               <span class="caret-text"><i>Task Title</i><i>任务标题</i></span>
          </template>
      </el-table-column>
      <el-table-column prop="TaskComments" label="CSR Number" width="150" show-overflow-tooltip>
        <template #header>
               <span class="caret-text"><i>Task Comments</i><i>任务备注</i></span>
          </template>
      </el-table-column>
      <el-table-column prop="Revert" width="80">
          <template #header>
               <span class="caret-text"><i>Revert</i><i>归属</i></span>
          </template>
      </el-table-column>
      <el-table-column width="150">
          <template #header>
               <span class="caret-text"><i>Task Source</i><i>任务来源</i></span>
          </template>
          <template #default="scope">
            <span>{{ formatOptions(scope.row.TaskSource,TaskSourceOptions) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="TaskType" width="100">
          <template #header>
               <span class="caret-text"><i>Task Type</i><i>任务类型</i></span>
          </template>
           <template #default="scope">
            <span>{{ formatOptions(scope.row.TaskType,TaskTypeOptions) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="TaskStatus" width="120">
          <template #header>
               <span class="caret-text"><i>Task Status</i><i>任务状态</i></span>
          </template>
           <template #default="scope">
            <span>{{ formatOptions(scope.row.TaskStatus,TaskStatusOptions) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Priority" width="100">
          <template #header>
               <span class="caret-text"><i>Priority</i><i>优先级</i></span>
          </template>
           <template #default="scope">
            <span>{{ formatOptions(scope.row.Priority,PriorityOptions) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="TaskStep" width="100">
          <template #header>
               <span class="caret-text"><i>Task Step</i><i>任务进度</i></span>
          </template>
          <template #default="scope">
            <span>{{ formatOptions(scope.row.TaskStep,TaskStepOptions) }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Workload" width="100">
          <template #header>
               <span class="caret-text"><i>Workload</i><i>工作量</i></span>
          </template>
      </el-table-column>
      <el-table-column prop="Executor" width="130">
          <template #header>
               <span class="caret-text"><i>Executor</i><i>执行人</i></span>
          </template>
      </el-table-column>
      <el-table-column prop="BeginTime" width="120">
          <template #header>
               <span class="caret-text"><i>Begin Time</i><i>开始时间</i></span>
          </template>
          <template #default="scope">
          <span>{{ formatDate(scope.row.BeginTime,'yyyy-MM-dd') }}</span>
        </template> 
      </el-table-column>
      <el-table-column prop="EndTime" width="120">
          <template #header>
               <span class="caret-text"><i>End Time</i><i>结束时间</i></span>
          </template>
          <template #default="scope">
          <span>{{ formatDate(scope.row.EndTime,'yyyy-MM-dd') }}</span>
        </template>
      </el-table-column>
      <el-table-column prop="Describe" width="150" show-overflow-tooltip>
          <template #header>
               <span class="caret-text"><i>Describe</i><i>描述</i></span>
          </template>
      </el-table-column>
      <el-table-column fixed="right" width="202" style=" margin: 0; padding: 0;">
        <template #header>
               <span class="caret-text"><i>Operation</i><i>操作</i></span>
        </template>
        <template #default="scope">
          <el-button size="small" @click="assignTasks(scope.row)" type="info" class="el-button-operation" v-if="taskADIDIF(scope.row)">分配任务</el-button>
          <el-button size="small" @click="taskTracking(scope.row)" class="el-button-operation" type="danger">任务追踪</el-button>
          <el-button size="small" @click="taskStepBind(scope.row)" class="el-button-operation" type="primary" v-if="taskStepIF(1,scope.row)">开发中</el-button>
          <el-button size="small" @click="taskStepBind(scope.row)" class="el-button-operation" type="danger" v-if="taskStepIF(2,scope.row)">UAT</el-button>
          <el-button size="small" @click="taskStepBind(scope.row)" class="el-button-operation" type="success" v-if="taskStepIF(3,scope.row)">已上线</el-button>
          <el-button size="small" @click="taskStatusBind(scope.row)" class="el-button-operation" type="primary" v-if="taskStatusIF(1,scope.row)">进行中</el-button>
          <el-button size="small" @click="taskStatusBind(scope.row)" class="el-button-operation" type="success" v-if="taskStatusIF(2,scope.row)">已完成</el-button>
          <el-button size="small" @click="cancelBind(scope.row)" class="el-button-operation" type="warning" v-if="taskStatusIF(1,scope.row)">取消</el-button>
        </template>
      </el-table-column>
    </el-table>
   
   <div class="el-footer">
        <el-row Type="flex" justify="end">
             <el-col :span="8"><el-button @click="handleDelete" type="danger" icon="Delete">删除所选 Delete</el-button></el-col>
             <el-col :span="16">
                 <el-pagination background layout="->,prev, pager, next" :total="Total" @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="CurrentPage" :page-sizes="[20, 40, 60, 80, 100]" :page-size="PageSize" style="text-align: center"></el-pagination>
             </el-col>
        </el-row>
    </div>
  </template>
  
  <script>
  //import {getCurrentInstance,inject} from 'vue';
  import {defineComponent, reactive, toRefs, onMounted} from 'vue';
  import { useRouter } from 'vue-router';
  import { ElMessageBox } from 'element-plus'
  import http from "@/api/http";
  import apiUrl from "@/../public/config";
  import { isEmpty,formatDate,formatOptions,formatMemberStep,formatMemberObject } from '@/util'
  
  export default defineComponent({
    setup() {
      const router=useRouter()
      //const $axios = inject('$axios')
      //const { proxy } = getCurrentInstance();
      //const id =ref(route.query.id)
  
      const state = reactive({
        tableLoading: false,
        dialogFormVisible:false,
        CurrentPage: 1,
        PageSize: 20,
        Total: 0,
        TotalList: [],
        tableData:[],
        multipleSelection:[],
        ProjectOptions:[],
        TaskTypeOptions:[],
        TaskStepOptions:[],
        TaskSourceOptions:[],
        TaskStatusOptions:[],
        PriorityOptions:[],
        ExecutorOption: [],
        formInline: {
                  ProjectID: '',
                  TaskName: '',
                  TaskSource: '',
                  TaskTitle: '',
                  TaskStep: '',
                  Revert: '',
                  TaskType: '',
                  TaskStatus: '',
                  CSRNumber: '',
                  Priority: '',
                  Executor: '',
                  Workload: '',
                  BeginTime: '',
                  EndTime: ''
              },
      });
      const getProjectOptions = () => {
                  http.post(apiUrl.ProjectsQueryUrl, {}).then(response => {
                     state.ProjectOptions = response
                  }, response => {
                     state.ProjectOptions = []
                     console.log(response)
                  });
      }
  
      const getTaskDictionary = () => {
                 http.post(apiUrl.DictionaryQueryUrl, { Class: "Task" }).then(response => {
                           for (let o of response) {
                              if (o.Section == "TaskType") {
                                state.TaskTypeOptions.push(o);
                              } else if (o.Section == "TaskStep") {
                                state.TaskStepOptions.push(o);
                              } else if (o.Section == "TaskSource") {
                                state.TaskSourceOptions.push(o);
                              } else if (o.Section == "TaskStatus") {
                                state.TaskStatusOptions.push(o);
                              } else if (o.Section == "Priority") {
                                state.PriorityOptions.push(o);
                              }
                          }
                  }, response => {
                    state.TaskTypeOptions = []
                    state.TaskStepOptions = []
                    state.TaskSourceOptions = []
                    state.TaskStatusOptions = []
                    state.PriorityOptions = []
                  });
      }
  
      const getExecutorOption = () => {
        http.post(apiUrl.UserQueryUrl, { EmpStatus: '正常,试用,登记',__PageSize: 10,__PageNum: 1}).then(response => {
             state.ExecutorOption = response
          }, response => {
            state.ExecutorOption = []
            console.log(response)
          });
      }
      const remoteMethod = (query) => {
                  if (!isEmpty(query)) {
                          http.post(apiUrl.UserQueryUrl, { EmpStatus: '正常,试用,登记', AD: query, __PageSize: 10, __PageNum: 1 }).then(response => {
                               state.ExecutorOption = response
                          }, response => {
                               state.ExecutorOption = []
                               console.log(response)
                          });
                      } else {
                        getExecutorOption();
                      }
       }
      const addTask=(e)=>{
              //let result=e==1 ? "/QuestionManage/addTask?TaskType=1":e==2 ? "/father":"/teleport"
              router.push({path: '/QuestionManage/AddTask',query: {TaskType: e}})
      }
  
      const queryTableData = () => {
                  state.tableLoading=true;
                  let ADID = sessionStorage.getItem("ADID"); //, { TaskAD1: ADID }
                  http.post(apiUrl.TaskQueryUrl,{__PageSize:state.pageSize,__PageNum:state.CurrentPage}).then(function (res) {
                    state.TotalList = res;
                    state.Total = res.length;
                    state.CurrentPage = 1;
                    if (res.length > state.PageSize) {
                      state.tableData =  state.TotalList.slice(0,state.PageSize);
                    } else {
                      state.tableData = res;
                    }
                   }).catch((err) => {
                      console.log(err)
                  });
      }
      // 分页
      const handleSizeChange = (val) => {
        state.PageSize = val;
        state.CurrentPage = 1;
        const end = state.CurrentPage * val;
        const data = state.TotalList.slice(state.TotalList.length > val ? end - val : 0,end);
        state.tableData = data;
      }
      const handleCurrentChange = (val) => {
        state.CurrentPage = val;
        state.CurrentPage = Math.ceil(val);
        const end = Math.ceil(val) * state.PageSize;
        const data = state.TotalList.slice(end - state.PageSize, end);
        state.tableData = data;
      }
      const handleSelectionChange = (val) => {
         state.multipleSelection = val
      }
      const handleDelete = () => {
                    // this.multipleSelection.splice(0, 1);
                     let rows = state.multipleSelection;
                     let ID=[]
  
                     rows.forEach(row => {
                         ID.push(row.ID)
                     });
                     if (ID.length <= 0) {
                         ElMessageBox.alert('请勾选复选框.')
                         return;
                     }
                     //console.log(ID.join(','));
                     http.post(apiUrl.TaskDeleteUrl,{DirectDelete:true,DeleteIDList: ID.join(',').toString()}).then(function (response) {
                        if (response.status == 200) {
                             if (response.data.length > 0) {
                                state.TotalList = response.data;
                                state.Total = response.data.length;
                                state.CurrentPage = 1;
                                if (response.data.length > state.PageSize) {
                                  state.tableData =  state.TotalList.slice(0,state.PageSize);
                                } else {
                                  state.tableData = response.data;
                                }
                             } else {
                                state.tableData = []
                             }
                         } else {
                                state.tableData = []
                         }
  
                   }).catch((err) => {
                      console.log(err)
                  });
      }
      const onSubmit = () => {
                      if (isEmpty(state.formInline.Executor)) {
                          this.$message('请选择执行人');
                          return false;
                      }
  
                      if (!isEmpty(state.formInline.Executor)) {
                        state.formInline.Executor = state.formInline.Executor.join(',');
                      }
                      http.post(apiUrl.TaskUpdateUrl, { ID: state.formInline.ID, Executor: state.formInline.Executor}).then(response => {
                          location.reload();
                      }, response => {
                          console.log(response);
                      });
       }
      const onSearch = () => {
          var obj = new Object();
          if (!isEmpty(state.formInline.ProjectID)) {
              obj.ProjectID = state.formInline.ProjectID;
          }
          if (!isEmpty(state.formInline.TaskName)) {
              obj.TaskName = state.formInline.TaskName;
          }
          if (!isEmpty(state.formInline.TaskSource)) {
              obj.TaskSource = state.formInline.TaskSource;
          }
          if (!isEmpty(state.formInline.TaskTitle)) {
              obj.TaskTitle = state.formInline.TaskTitle;
          }
          if (!isEmpty(state.formInline.TaskStep)) {
              obj.TaskStep = state.formInline.TaskStep;
          }
          if (!isEmpty(state.formInline.Revert)) {
              obj.Revert = state.formInline.Revert;
          }
          if (!isEmpty(state.formInline.TaskType)) {
              obj.TaskType = state.formInline.TaskType;
          }
          if (!isEmpty(state.formInline.TaskStatus)) {
              obj.TaskStatus = state.formInline.TaskStatus;
          }
          if (!isEmpty(state.formInline.CSRNumber)) {
              obj.CSRNumber = state.formInline.CSRNumber;
          }
          if (!isEmpty(state.formInline.Priority)) {
              obj.Priority = state.formInline.Priority;
          }
          if (!isEmpty(state.formInline.Executor)) {
              obj.Executor = state.formInline.Executor;
          }
          if (!isEmpty(state.formInline.Workload)) {
              obj.Workload = state.formInline.Workload;
          }
          if (!isEmpty(state.formInline.BeginTime)) {
              obj.BeginTime = state.formInline.BeginTime;
          }
          if (!isEmpty(state.formInline.EndTime)) {
              obj.EndTime = state.formInline.EndTime;
          }
          //console.log(obj);
          state.tableLoading = true;
          http.post(apiUrl.TaskQueryUrl, obj).then(response => {
                  state.list = response;
                  state.dialogFormVisible = false;
                  state.tableLoading = false;
          }, response => {
              console.log(response);
              state.tableLoading = false;
          });
      }
  
      const onExport = () => {
                  var obj = new Object();
                  if (!isEmpty(state.formInline.ProjectID)) {
                      obj.ProjectID = state.formInline.ProjectID;
                  }
                  if (!isEmpty(state.formInline.TaskName)) {
                      obj.TaskName = this.formInline.TaskName;
                  }
                  if (!isEmpty(state.formInline.TaskSource)) {
                      obj.TaskSource = state.formInline.TaskSource;
                  }
                  if (!isEmpty(state.formInline.TaskTitle)) {
                      obj.TaskTitle = state.formInline.TaskTitle;
                  }
                  if (!isEmpty(state.formInline.TaskStep)) {
                      obj.TaskStep = state.formInline.TaskStep;
                  }
                  if (!isEmpty(state.formInline.Revert)) {
                      obj.Revert = state.formInline.Revert;
                  }
                  if (!isEmpty(state.formInline.TaskType)) {
                      obj.TaskType = state.formInline.TaskType;
                  }
                  if (!isEmpty(state.formInline.TaskStatus)) {
                      obj.TaskStatus = state.formInline.TaskStatus;
                  }
                  if (!isEmpty(state.formInline.CSRNumber)) {
                      obj.CSRNumber = state.formInline.CSRNumber;
                  }
                  if (!isEmpty(state.formInline.Priority)) {
                      obj.Priority = state.formInline.Priority;
                  }
                  if (!isEmpty(state.formInline.Executor)) {
                      obj.Executor = state.formInline.Executor;
                  }
                  if (!isEmpty(state.formInline.Workload)) {
                      obj.Workload = state.formInline.Workload;
                  }
                  if (!isEmpty(state.formInline.BeginTime)) {
                      obj.BeginTime = state.formInline.BeginTime;
                  }
                  if (!isEmpty(state.formInline.EndTime)) {
                      obj.EndTime = state.formInline.EndTime;
                  }
                  state.loading = true;
                  http.post(apiUrl.TaskQueryUrl, obj).then(response => {
                          var resData = [];
                          for (let o of response) {
                              var objs = new Object();
                              objs.CSRNumber = o.CSRNumber;
                              objs.TaskName = o.TaskName;
                              objs.TaskTitle = o.TaskTitle;
                              objs.TaskComments = o.TaskComments;
                              objs.Revert = o.Revert;
                              objs.TaskSource = formatItem(o.TaskSource, state.TaskSourceOptions);
                              objs.TaskType = formatItem(o.TaskType, state.TaskTypeOptions);
                              objs.TaskStatus = formatItem(o.TaskStatus, state.TaskStatusOptions);
                              objs.Priority = formatItem(o.Priority, state.PriorityOptions);
                              objs.TaskStep = formatItem(o.TaskStep, state.TaskStepOptions);
                              objs.Workload = o.Workload;
                              objs.BeginTime = o.BeginTime;
                              objs.EndTime = o.EndTime;
                              objs.Describe = o.Describe;
                              resData.push(objs);
                          }
                        //  var ws = XLSX.utils.json_to_sheet(resData, { header: ["CSRNumber", "TaskName", "TaskTitle", "TaskComments", "Revert", "TaskSource", "TaskType", "TaskStatus", "Priority", "TaskStep", "Workload", "BeginTime", "EndTime", "Describe"], skipHeader: false });
                        //   var objDate = new Date();
                        //   var wb = XLSX.utils.book_new();
                        //   XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
                        //   XLSX.writeFile(wb, objDate.getTime() + "_Task.xlsx");
                     
                     // this.loading = false;
                  }, response => {
                      console.log(response);
                      //this.loading = false;
                  });
      }
      const handleDetails = (row) => {
          //router.push({path: '/QuestionManage/TaskDetails/'+row.ID})
          router.push({path: '/QuestionManage/TaskDetails',query: {ID: row.ID}})
      }
      const assignTasks = (row) => {
          state.formInline.ID = row.ID;
          state.dialogAssignTasks = true;
      }
      const taskStepBind = (rows) => {
                  var ADID = sessionStorage.getItem("ADID");
                  if (rows.CreateADID != ADID) {
                      var row = formatMemberObject(ADID, rows?.List_ProjectMembers);
                      var Ext01 = (parseInt(row.Ext01) + 1).toString();
                      var paramPost = {}
                      paramPost["ID"] = row.ID;
                      if (!isEmpty(Ext01)) {
                          paramPost["Ext01"] = Ext01;
                      }
                      if (Ext01 == "4") {
                          paramPost["Ext02"] = "3";
                      }
                      var ConfirmTitle = formatItem(Ext01, state.TaskStepOptions)
                      this.$confirm('确认' + ConfirmTitle + '?', '任务进度', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                      }).then(() => {
                          var token = sessionStorage.getItem("token");
                          state.loading = true;
                          http.post(ProjectMembersUpdateUrl, paramPost).then(response => {
                              if (response.status == 200) {
                                  //循环获取执行人任务进度（最少值）
                                  let obj = []
                                  for (i = 0; i < rows?.List_ProjectMembers.length; i++) {
                                      if (rows["List_ProjectMembers"][i]["ID"] == row.ID) {
                                          rows["List_ProjectMembers"][i]["Ext01"] = Ext01;
                                      }
                                      obj.push(parseInt(rows["List_ProjectMembers"][i]["Ext01"]));
                                  }
                                  let minTaskStep = obj.reduce((a, b) => a > b ? b : a);
                                  console.log(minTaskStep)
                                  //多个执行人任务进度（最少值），更新任务主表
                                  updateTaskStep(row.FromID, minTaskStep.toString());
                              } else {
                                  console.log(response);
                              }
                              state.loading = false;
                          }, response => {
                              console.log(response);
                              state.loading = false;
                          });
                          this.$message({
                              type: 'success',
                              message: '成功!'
                          });
                      }).catch(() => { });
                  }
      }
      const taskStepIF = (val,rows) => {
                  var result = false;
                  var ADID = sessionStorage.getItem("ADID");
                  if (rows.CreateADID != ADID) {
                      var row = formatMemberStep(ADID, rows?.List_ProjectMembers);
                      if (row == val) {
                          result = true;
                      }
                  }
                  return result;
      }
  
      const taskStatusIF = (val,rows) => {
          var result = false;
          var ADID = sessionStorage.getItem("ADID");
          if (rows.CreateADID == ADID && rows.TaskStatus == val) {
              result = true;
          }
          return result;
      }
  
      const taskADIDIF = (row) => {
                  var result = false;
                  var ADID = sessionStorage.getItem("ADID");
                  if (row.CreateADID == ADID) {
                      result = true;
                  }
                  return result;
              }
  
      const updateTaskStep = (ID, TaskStep) => {
                  var token = sessionStorage.getItem("token");
                  state.loading = true;
                  var paramPost = {}
                  if (!isEmpty(ID)) {
                      paramPost["ID"] = ID;
                  }
                  if (!isEmpty(TaskStep)) {
                      paramPost["TaskStep"] = TaskStep;
                  }
                  //如果任务进度（已上线），则任务状态（已完成）
                  if (TaskStep=="4") {
                      paramPost["TaskStatus"] = "3";
                  }
  
                  http.post(TaskUpdateUrl, paramPost).then(response => {
                      if (response.status == 200) {
                          getTaskQuery(token);
                      } else {
                          console.log(response);
                      }
                      state.loading = false;
                  }, response => {
                      console.log(response);
                      state.loading = false;
                  });
      }
  
      const taskStatusBind = (row) => {
                  var TaskStatus = (parseInt(row.TaskStatus) + 1).toString();
                  var TaskStep = row.TaskStep;
                  var TaskStepTitle = formatItem("4", state.TaskStepOptions);
                  var TaskStatusTitle = formatItem("3", state.TaskStatusOptions);
                  if (TaskStatus == "3" && TaskStep != "4") {
                      this.$message({ type: 'warning', message: '所有执行人任务进度推' + TaskStepTitle + ',才可将任务状态推' + TaskStatusTitle+'!'});
                  } else {
                      var ConfirmTitle = formatItem(TaskStatus, state.TaskStatusOptions)
                      this.$confirm('确认' + ConfirmTitle + '?', '任务状态', {
                          confirmButtonText: '确定',
                          cancelButtonText: '取消',
                          type: 'warning'
                      }).then(() => {
                          var ID = row.ID;
                          var token = sessionStorage.getItem("token");
                          state.loading = true;
                          http.post(TaskUpdateUrl, { ID: ID, TaskStatus: TaskStatus }).then(response => {
                              console.log(response);
                              if (response.status == 200) {
                                  getTaskQuery(token);
                              } else {
                                  console.log(response);
                              }
                              state.loading = false;
                          }, response => {
                              console.log(response);
                              state.loading = false;
                          });
                          this.$message({ type: 'success', message: '成功!' });
                      }).catch(() => { });
                  }
      }
  
      const cancelBind = (row) => {
                  var TaskStatus = (parseInt(row.TaskStatus) + 3).toString();
                  var ConfirmTitle = formatItem(TaskStatus, state.TaskStatusOptions)
                  this.$confirm('确认' + ConfirmTitle + '?', '任务状态', {
                      confirmButtonText: '确定',
                      cancelButtonText: '取消',
                      type: 'warning'
                  }).then(() => {
                      var ID = row.ID;
                      var token = sessionStorage.getItem("token");
                      state.loading = true;
                      http.post(TaskUpdateUrl, { ID: ID, TaskStatus: TaskStatus }, {
                          headers: {
                              Authorization: token
                          }
                      }).then(response => {
                          console.log(response);
                          if (response.status == 200) {
                              getTaskQuery(token);
                          } else {
                              console.log(response);
                          }
                          state.loading = false;
                      }, response => {
                          console.log(response);
                          state.loading = false;
                      });
                      this.$message({
                          type: 'success',
                          message: '成功!'
                      });
                  }).catch(() => { });
      }
  
      const taskTracking = (row) => {
        router.push({path: '/QuestionManage/TaskTracking',query: {ID: row.ID}})
      }
   
      // 页面加载时候执行
      onMounted(() => {
          var ADID = sessionStorage.getItem("ADID");
          if (isEmpty(ADID)) {
              window.location = "/Login";
          }
         getProjectOptions();
         getExecutorOption();
         getTaskDictionary();
         queryTableData();
     });
  
    return {
          ...toRefs(state),
          handleSizeChange,
          handleCurrentChange,
          handleSelectionChange,
          handleDelete,
          getProjectOptions,
          getExecutorOption,
          remoteMethod,
          getTaskDictionary,
          queryTableData,
          addTask,
          formatDate,
          formatOptions,
          onSubmit,
          onSearch,
          onExport,
          handleDetails,
          assignTasks,
          taskTracking,
          taskStepBind,
          taskStepIF,
          updateTaskStep,
          taskStatusBind,
          cancelBind,
          taskADIDIF,
          taskStatusIF,
      }
    }
  })
  </script>
  
  <style scoped>
  .el-table .caret-text{float: left;height:30px;}
  .el-table .caret-text i{ display:block; font-style:normal;height: 15px;line-height:15px;}
  .el-table .caret-wrapper{float: left;top:10px}
  .el-table .caret-wrapper i{display:block; font-style:normal;}
  
  .el-button+.el-button{margin-left:4px;}
  .el-button-operation{float:left;margin:2px 4px;}

  .el-footer{position:absolute;left:10px;right:10px;bottom:10px; margin: 0; padding: 0;border-radius: 2px; height: auto; z-index:0 ;}
  </style>
  