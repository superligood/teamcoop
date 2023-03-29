// 2、定义一些路由  
// 每个路由都需要映射到一个组件
const routes = [
  {
    path:'/',
    redirect: '/Login',
    meta: {title: "工作区",icon: "",closable:false,noCache: false},
 },
 {
  path:'/Login',
  name: 'Login',
  meta: { title: "登录",icon: "",closable:false,noCache: false},
  component:()=>import('@/views/Login/Index.vue')
 },
 {
    path:'/Main',
    name: 'Main',
    component:()=>import('@/views/Main.vue'),
    redirect: '/Dashboard/Workplace',
    children: [
      {
        path: '/Dashboard/Workplace',
        name: 'Workplace',
        component: () => import('@/views/Dashboard/Workplace.vue'),
        meta: {title: "工作区",icon: "Compass",closable:false,noCache: false},
      },
      {
        path:'/Dictionary',
        name: 'Dictionary',
        meta: { title: "字典管理",icon: "Setting",closable: false,noCache: false},
        redirect: '/Dictionary/Index',
        children: [
          {
            path: '/Dictionary/Index',
            name: 'Index',
            component: () => import('@/views/Dictionary/Index.vue'),
            meta: {title: "字典列表",icon: "",closable:true,noCache: false},
        },
        ]
      },
      {
        path:'/QuestionManage',
        name: 'QuestionManage',
        meta: {title: "问题管理",icon: "document",closable: false,noCache: false},
        redirect: '/QuestionManage/TaskList',
        children: [
          {
            path:'/QuestionManage/AllComment',
            name: 'AllComment',
            component:()=>import('@/views/QuestionManage/AllComment.vue'),
            meta: {title: "所有任务事件描述",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/TaskList',
            name: 'TaskList',
            component:()=>import('@/views/QuestionManage/TaskList.vue'),
            meta: {title: "任务列表",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/AddTask',
            name: 'AddTask',
            component:()=>import('@/views/QuestionManage/AddTask.vue'),
            meta: {title: "新建任务",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/EditTask',
            name: 'EditTask',
            component:()=>import('@/views/QuestionManage/EditTask.vue'),
            meta: {title: "编辑任务",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/TaskDetails',
            name: 'TaskDetails',
            component:()=>import('@/views/QuestionManage/TaskDetails.vue'),
            meta: {title: "任务详情",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/TaskTracking',
            name: 'TaskTracking',
            component:()=>import('@/views/QuestionManage/TaskTracking.vue'),
            meta: {title: "任务追踪",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/TaskKanban',
            name: 'TaskKanban',
            component:()=>import('@/views/QuestionManage/TaskKanban.vue'),
            meta: { title: "任务看板",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/MeComment',
            name: 'MeComment',
            component:()=>import('@/views/QuestionManage/MeComment.vue'),
            meta: {title: "@MeComment",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/TaskReport',
            name: 'TaskReport',
            component:()=>import('@/views/QuestionManage/TaskReport.vue'),
            meta: {title: "统计任务",icon: "",closable:true,noCache: false},
          },
          {
            path:'/QuestionManage/PersonalTask',
            name: 'PersonalTask',
            component:()=>import('@/views/QuestionManage/PersonalTask.vue'),
            meta: {title: "个人待办任务",icon: "",closable:true,noCache: false},
          },
        ]
      }]
    },
]
  
  export default routes