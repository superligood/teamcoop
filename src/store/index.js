import { createStore } from "vuex"
function getUserInfo(state) {
  if (state.userInfo) return state.userInfo;
  let userInfo = localStorage.getItem(state.keyUser);
  if (userInfo) {
    state.userInfo = JSON.parse(userInfo);
  }
  return state.userInfo;
}
const store = createStore({
  //创建数据仓库
 state: {
    keyUser:'user',
    data: {},
    permission: [],
    isLoading: false,
    userInfo: null
 },
 //仓库取值
 getters: {
  getKeyUser(state) {
   return state.keyUser
  },
  getPermission: (state) => (path) => {  //调用方式 store.getters.getPermission('sys_User')
    if (!path) return state.permission;
    return state.permission.find(x => x.path == path);
  },
  getUserInfo: (state) => () => {
    getUserInfo(state);
    return state.userInfo;
  }, 
  getUserName: (state) => () => {
    getUserInfo(state);
    if (state.userInfo) {
      return state.userInfo.userName;
    }
    return '未获取到登陆信息';
  },
  getToken: (state) => () => {
    getUserInfo(state);
    if (state.userInfo) {
      return 'Bearer ' + state.userInfo.token;
    }else{
      return '';
    }
  },
  isLogin: (state) => () => {
    if (getUserInfo(state)) {
      return true;
    }
    return false;
  },
  isLoading: (state) => () => {
    return state.isLoading;
  },
  data: (state) => () => {
    return state.data;
  },
  getData: (state) => () => {
    return state.data;
  },
 },
 //同步调用
 mutations: {
  changeName(state,data) {
   state.name = data
  },
  setPermission(state, data) {  //调用方式 this.$store.commit('setPermission', data)
    if (!data || typeof data != 'object') return;
    if (data instanceof Array) {
      state.permission.push(...data);
    } else {
      state.permission = data;
    }
  }, 
  setUserInfo(state, data) {
    state.userInfo = data;
    localStorage.setItem(state.keyUser, JSON.stringify(data));
  },
  clearUserInfo(state) {
    state.permission = [];
    state.userInfo = null;
    localStorage.removeItem(state.keyUser);
  },
  test(state) {
    return 113344;
  },
  updateLoadingState(state, flag) {
    state.isLoading = flag
  }
 },
 //异步调用
 actions: {
  changeVal(state) {
    // 借用setTimeout 模拟异步操作
   //setTimeout(() => {
    state.commit('changeName','我是前端人')
   //},2000)
  },
  setPermission(context, data) {
    context.commit('setPermission', data); //调用方式 store.dispatch('push')
  },
  toDo(context) {
    return context.Store.m;
  },
  onLoading(context, flag) {
    context.commit("updateLoadingState", flag);
  }
 },
 modules:{}
})

export default store