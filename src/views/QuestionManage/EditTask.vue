<template>
    <!-- <el-page-header @back="goBack" style="background:#fff; padding:10px; border-radius:3px; margin-bottom: 10px;">
      <template #content>
        <span class="text-large font-600 mr-3" v-if="isEmpty(ruleForm.ID)"> 新建 </span>
        <span class="text-large font-600 mr-3" v-if="!isEmpty(ruleForm.ID)"> 编辑 </span>
      </template>
    </el-page-header> -->
  
  <el-form :inline="true" :model="ruleForm" :rules="rules" label-position="top" :size="formSize" ref="ruleFormRef">
      <el-col :span="12">
                  <el-form-item label="Task Name 任务名称" prop="TaskName">
                  <el-input v-model="ruleForm.TaskName"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="12">
              <el-form-item label="Task Title 任务标题" prop="TaskTitle">
                  <el-input v-model="ruleForm.TaskTitle"></el-input>
              </el-form-item>
          </el-col>
          
          <el-col :span="12">
                 <el-form-item label="Task Source 任务源" prop="TaskSource">
                  <el-select v-model="ruleForm.TaskSource" placeholder="请选择任务源" style="width:100%">
                              <el-option v-for="item in TaskSourceOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                      </el-select>
                 </el-form-item>
          </el-col>
              <el-col :span="12">
                      <el-form-item label="CSR Number CSR编号" prop="CSRNumber">
                      <el-input v-model="ruleForm.CSRNumber"></el-input>
                  </el-form-item>
              </el-col>
   <el-col :span="12">
              <el-form-item label="Task Type 任务类型" prop="TaskType">
                      <el-select v-model="ruleForm.TaskType" placeholder="请选择任务类型" style="width:100%">
                      <el-option v-for="item in TaskTypeOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
          <el-col :span="12">
              <el-form-item label="Project Name 项目名称" prop="ProjectID">
                      <el-select v-model="ruleForm.ProjectID" filterable placeholder="请选择项目名称" style="width:100%">
                       <el-option v-for="item in ProjectOptions" :key="item.ID" :label="item.ProjectName" :value="item.ID"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
   
         <el-col :span="24">
        <el-form-item label="Task Comments 任务备注" prop="TaskComments"><el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="ruleForm.TaskComments"></el-input></el-form-item>
      </el-col>
  
        <el-col :span="12">
               <el-form-item label="Revert 归属" prop="Revert">
                           <el-input v-model="ruleForm.Revert"></el-input>
                      </el-form-item>
          </el-col>
    
          <el-col :span="12">
              <el-form-item label="Workload 工作量">
                      <el-input v-model="ruleForm.Workload"></el-input>
              </el-form-item>
          </el-col>
          <el-col :span="12">
                      <el-form-item label="Priority 优先级" prop="Priority">
                  <el-select v-model="ruleForm.Priority" placeholder="请选择优先级" style="width:100%">
                      <el-option v-for="item in PriorityOptions" :key="item.Value" :label="item.Item" :value="item.Value"></el-option>
                  </el-select>
              </el-form-item>
          </el-col>
      <el-col :span="12"></el-col>
      <el-col :span="12">
          <el-form-item label="Begin Time 开始时间" prop="BeginTime">
                  <el-date-picker type="date" placeholder="选择开始时间" v-model="ruleForm.BeginTime"></el-date-picker>
          </el-form-item>
      </el-col>
      <el-col :span="12">
              <el-form-item label="End Time 结束时间" prop="EndTime">
                  <el-date-picker type="date" placeholder="选择结束时间" v-model="ruleForm.EndTime"></el-date-picker>
          </el-form-item>
      </el-col>
  
      <el-col :span="24">
       <el-form-item label="Describe 描述" prop="Describe"><el-input type="textarea" :autosize="{ minRows: 3, maxRows: 6}" v-model="ruleForm.Describe"></el-input></el-form-item>
       </el-col>
    
  </el-form>
  
  <el-footer>
      <el-button type="primary" @click="submitForm()">Submit</el-button> <el-button @click="resetForm()">Reset</el-button>
        </el-footer>
  </template>
  
  <script>
  import {toRefs, reactive, ref, unref, onMounted,watch,onBeforeUpdate} from 'vue';
  import { useRoute,useRouter,onBeforeRouteUpdate} from 'vue-router';
  import { ElLoading} from 'element-plus';
  import http from "@/api/http";
  import { isEmpty,formatDate,formatOptions } from '@/util';
  import apiUrl from "@/../public/config";
  
   export default {
    setup(){
      const route=useRoute()
      const router=useRouter()
      
      const goBack = () => {
        router.push({path: '/QuestionManage/Index'})
      }
      const ruleFormRef = ref(null); //表单
      let formSize = 'default';
      const state = reactive({
              ruleForm: {
                          ID:'',
                          TaskSource: '',
                          CSRNumber: '',
                          ProjectID: '',
                          TaskName: '',
                          TaskTitle: '',
                          TaskComments: '',
                          Revert: '',
                          TaskType: '',
                          Priority: '',
                          Executor: '',
                          Workload: '',
                          BeginTime: '',
                          EndTime: '',
                          Describe: ''
                      },
              ProjectOptions: [],
              TaskStepOptions: [],
              TaskTypeOptions: [],
              TaskStatusOptions: [],
              PriorityOptions: [],
              TaskSourceOptions: [],
              ExecutorOption: [],
              loading:false,
          });
      
      // 参数接收
      state.ruleForm.ID=route.query.ID
      state.ruleForm.TaskType=route.query.TaskType
      state.ruleForm.ProjectID=route.query.ProjectID
  
                      //自定义校验规则
      const validateCSRNumber = (rule, value, callback) => {
                      if (state.ruleForm.TaskSource === "1" &&  isEmpty(value)) {
                      callback(new Error("请输入CSR编号"));
                      } else {
                          callback();
                      }
      };
  
      const validateProjectID = (rule, value, callback) => {
                      if (state.ruleForm.TaskSource === "3" && isEmpty(value)) {
                          callback(new Error('请选择项目名称'));
                      } else {
                          callback();
                      }
      };
  
   //表单校验
    const rules = reactive({
                  TaskName: [
                      { required: true, message: '请输入任务名称', trigger: 'blur' }
                  ],
                  TaskTitle: [
                      { required: true, message: '请输入任务标题', trigger: 'blur' }
                  ],
                  TaskSource: [
                          { required: true, message: '请选择任务源', trigger: 'change' }
                  ],
                  CSRNumber: [
                      { required: true,validator: validateCSRNumber, trigger: 'blur' }
                  ],
                  ProjectID: [
                      { required: true,validator: validateProjectID, trigger: 'change' }
                  ],
                  Revert: [
                      { required: true, message: '请输入归属', trigger: 'blur' }
                  ],
                  TaskType: [
                      { required: true, message: '请选择任务类型', trigger: 'change' }
                  ],
                  Priority: [
                      { required: true, message: '请选择优先级', trigger: 'change' }
                  ],
                  Executor: [
                      { required: true, message: '请选择执行人', trigger: 'change' }
                  ],
                  BeginTime: [
                      { required: true, message: '请选择日期', trigger: 'change' }
                  ],
                  EndTime: [
                      { required: true, message: '请选择时间', trigger: 'change' }
                  ]
              })
  
   
      const getData = () => {
                  const loading = ElLoading.service({lock: true,text: 'Loading',background: 'rgba(0, 0, 0, 0.7)'});
                  getTaskQuery();
                  getProjectOptions();
                  getTaskDictionary();
                  getExecutorOption();
                  loading.close();
         }
  
      const getTaskQuery = () => {
                  if (!isEmpty(state.ruleForm.ID)) {
                      http.post(apiUrl.TaskQueryUrl, { ID:state.ruleForm.ID }).then(response => {
                          if (!isEmpty(response)&&response.length>0) {
                          state.ruleForm = response[0]
                          }
                      });
                  } 
              }
      const getProjectOptions = () => {
                  http.post(apiUrl.ProjectsQueryUrl, {}).then(response => {
                      state.ProjectOptions = response
                  }, response => {
                      state.ProjectOptions = []
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
                    state.TaskStepOptions = []
                    state.TaskTypeOptions = []
                    state.TaskStepOptions = []
                    state.TaskSourceOptions = []
                    state.TaskStatusOptions = []
                    state.PriorityOptions = []
                  });
              }
      const getExecutorOption = () => {
                  http.post(apiUrl.UserQueryUrl, { EmpStatus: '正常,试用,登记', __PageSize: 10, __PageNum: 1 }).then(response => {
                      state.ExecutorOption = response
                  }, response => {
                      state.ExecutorOption = []
                  });
              }
      const remoteMethod = (query) => {
                  if (!isEmpty(query)) {
                      //state.loading = true;
                      http.post(apiUrl.UserQueryUrl, { EmpStatus: '正常,试用,登记', AD: query, __PageSize: 10, __PageNum: 1 }).then(response => {
                          state.ExecutorOption = response
                      }, response => {
                          state.ExecutorOption = []
                      });
                  } else {
                      getExecutorOption();
                  }
              }
  
   
      async function submitForm(){ 
      state.loading = true; 
      const form = unref(ruleFormRef);
      if (!form) return;
          try {
              await ruleFormRef.value.validate((valid) => {
                  // 验证通过 请求接口
                  if (valid) {
                          var ADID = sessionStorage.getItem("ADID");
                          if (isEmpty(state.ruleForm.ID)) {
                              http.post(apiUrl.TaskCreateUrl, {
                                  ProjectID: state.ruleForm.ProjectID,
                                  TaskName: state.ruleForm.TaskName,
                                  TaskSource: state.ruleForm.TaskSource,
                                  TaskTitle: state.ruleForm.TaskTitle,
                                  TaskStep: "1",
                                  TaskType: state.ruleForm.TaskType,
                                  TaskStatus: "1",
                                  TaskComments: state.ruleForm.TaskComments,
                                  CSRNumber: state.ruleForm.CSRNumber,
                                  Revert: state.ruleForm.Revert,
                                  Priority: state.ruleForm.Priority,
                                  Workload: state.ruleForm.Workload,
                                  BeginTime: state.ruleForm.BeginTime,
                                  EndTime: state.ruleForm.EndTime,
                                  Describe: state.ruleForm.Describe,
                                  CreateADID: ADID
                              }).then(response => {
                                  if (response > 0) {
                                      history.back()
                                  } else {
                                      console.log(response);
                                  }
                                  console.log(response);
                              }, response => {
                                  console.log(response);
                              });
                          } else {
                              http.post(apiUrl.TaskUpdateUrl, {
                                  ID: state.ruleForm.ID,
                                  ProjectID: state.ruleForm.ProjectID,
                                  TaskName: state.ruleForm.TaskName,
                                  TaskSource: state.ruleForm.TaskSource,
                                  TaskTitle: state.ruleForm.TaskTitle,
                                  TaskType: state.ruleForm.TaskType,
                                  TaskComments: state.ruleForm.TaskComments,
                                  CSRNumber: state.ruleForm.CSRNumber,
                                  Revert: state.ruleForm.Revert,
                                  Priority: state.ruleForm.Priority,
                                  Workload: state.ruleForm.Workload,
                                  BeginTime: state.ruleForm.BeginTime,
                                  EndTime: state.ruleForm.EndTime,
                                  Describe: state.ruleForm.Describe
                              }).then(response => {
                                  if (response > 0) {
                                      history.back()
                                  } else {
                                      console.log(response);
                                  }
                                  console.log(response);
                              }, response => {
                                  console.log(response);
                              });
                          }
  
                  } else {
                  // 验证失败 取消loading，
                  state.loading = false;
                  return;
                  }
              }) 
          } catch (error){
            state.loading = false;
          } 
      }
      const resetForm = () => {
        const form = unref(ruleFormRef);
        form.resetFields();
      };
      // 页面加载时候执行
      onMounted(() => {
         getData();
       });
  
      //   // 切换的时候获取
      //   onBeforeRouteUpdate((to, from) => {
      //     console.log('to:', to.query);
      //     console.log('from:', from.query);
      //   });
  
      return {
          ...toRefs(state),
          getProjectOptions,
          // getExecutorOption,
          remoteMethod,
          getTaskDictionary,
          getData,
          isEmpty,
          formatDate,
          formatOptions,
          goBack,
          formSize,
          rules, 
          ruleFormRef,
          submitForm,
          resetForm,
          
      }
    }
  }
  </script>
  
  <style scoped>
  .el-form{ margin: 0; padding: 10px 10px 50px 10px;}
  .el-footer{position:absolute;left:0;right:0;bottom:0; margin: 0; padding: 10px 0;background: #fff;height: auto; text-align: center; border-top:1px solid #eee;}
  </style>
  
  