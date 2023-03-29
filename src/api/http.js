import axios from 'axios'
import store from "../store/index"
// import {getCurrentInstance} from 'vue'
// import { useRouter } from 'vue-router'
// const router = useRouter();
import { isEmpty } from '@/util'
import $ from 'jquery'
import { ElLoading as Loading, ElMessage as Message } from 'element-plus';
import apiUrl from "../../public/config";

axios.defaults.timeout = 50000;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

let loadingInstance;
let loadingStatus = false;
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = apiUrl.WebApiUrl;
}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = apiUrl.WebApiUrl;
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = apiUrl.WebApiUrl;
}
if (!axios.defaults.baseURL.endsWith('/')) {
    axios.defaults.baseURL+="/";
}
axios.defaults.withCredentials = false;  //axios请求携带cookie等凭证
let ipAddress = axios.defaults.baseURL;
axios.interceptors.request.use((config) => {
    //每次请求,先判断Token是否过期，并重新获取
    refreshToken(config)
    return config
},(err) => {
    return Promise.reject(err);
})

axios.interceptors.response.use((res) => {
    closeLoading();
    console.log("response1:")
    console.log(res)
    checkResponse(res);
    return Promise.resolve(res);
}, (error) => {
    console.log("response2:")
    console.log(error)
    // if (error.config.headers) {
    //     if (error.config.headers.Authorization){
    //         checkResponse(error.config);
    //     }
    // }
    //console.log(error.code)
    //console.log(error.message)
    //console.log(error.config.headers.Authorization)
    closeLoading();
    let httpMessage = '';
    if (error.response) {
        if (error.response.status == '401') {
            if (error.response.data && error.response.data.code == 401) {
                if (!localStorage.getItem(store.state.keyUser)) {
                    Message.error({showClose: true,message: '登陆已过期',type: 'error'});
                }
                toLogin();
                return;
            }else{
                httpMessage = "请求错误";
            }
        }else if (error.response.status == '404') {
            httpMessage = "未找到请求地址";
        }
        else if (error.response.data && error.response.data.message) {
            httpMessage = error.response.data.message;
        }
    }
    else {
        httpMessage = '服务器处理异常'
    }
    //redirect(httpMessage);
    return Promise.reject(error.response || {}, httpMessage);
});

//动态刷新token
function refreshToken(config){
    let token=localStorage.getItem('token');
    let authtime=localStorage.getItem('auth_time');
    let expiresat=localStorage.getItem('expires_at');
    let timestamp = parseInt((new Date()).getTime() / 1000);
    if (isEmpty(token) || isEmpty(expiresat) || timestamp > expiresat) {
         $.ajax({
               type: "get",
               url: axios.defaults.baseURL+apiUrl.TokenUrl,
               async: false,
               success: function (result) {
                console.log("TokenSuccess:");
                console.log(result)
                config.headers.Authorization=result.token_type + " " + result.access_token;
                localStorage.setItem('auth_time',result.profile.auth_time);
                localStorage.setItem('expires_at',result.profile.expires_at);
                //localStorage.setItem('expires_at',(timestamp+5));
                localStorage.setItem('token',result.token_type+" "+result.access_token);
               },
               error: function (data) {
                   console.log("TokenError:");
                   console.log(data);
                   config.headers.Authorization="";
                   localStorage.setItem('auth_time',0);
                   localStorage.setItem('expires_at',0);
                   localStorage.setItem('token',"");
               }
           });
    }
}
//获取token
function getToken () {
    //return store.getters.getToken();  
    return localStorage.getItem('token');
}

function checkResponse (res) {
    //刷新token
    if (!res.headers) {
        if (isEmpty(res.config.headers.Authorization)) {
           refreshToken(res.config);
        }
    }
}


function closeLoading () {
    if (loadingInstance) {
        loadingInstance.close();
    }
    if (loadingStatus) {
        loadingStatus = false;
        if (loadingInstance) {
            loadingInstance.close();
        }
    }
}
function showLoading (loading) {
    if (!loading || loadingStatus) {
        return;
    }
    loadingInstance = Loading.service({
        lock: true,
        text: 'Loading',
        customClass:"http-loading",
        background: typeof loading == "string" ? loading : '正在处理.....',
        background: 'rgba(58, 61, 63, 0.32)'
    });
}



/*
  url
  params请求后台的参数,如：{name:123,values:['a','b','c']}
  loading是否显示遮罩层,可以传入true.false.及提示文本
  config配置信息,如{timeout:3000,headers:{token:123}}
*/
function post (url, params, loading, config) {
    showLoading(loading);
    if (params==null) params={}
    axios.defaults.headers[apiUrl.Authorization] = getToken();
    return new Promise((resolve, reject) => {
        axios.post(url, params, config)
            .then(response => {
                resolve(response.data);
            }, err => {
                reject(err && err.data && err.data.message ? err.data.message : '服务器处理异常');
            })
            .catch((error) => {
                reject(error)
            })
    })
}

//=true异步请求时会显示遮罩层,=字符串，异步请求时遮罩层显示当前字符串
function get (url, param, loading, config) {
    showLoading(loading);
    axios.defaults.headers[apiUrl.Authorization] = getToken();
    return new Promise((resolve, reject) => {
        axios.get(url, config)
            .then(response => {
                resolve(response.data)
            }, err => {
                reject(err)
            })
            .catch((error) => {
                reject(error)
            })
    })
}

//url:url地址
//params:请求参数
//fileName:下载的文件名
//loading:是否显示加载状态
function download (url, params, fileName, loading,callback) {
    fileName = fileName.replace(">", "＞").replace("<", "＜");
    post(url, params, loading, { responseType: 'blob' }).then(content => {
        const blob = new Blob([content])
        if ('download' in document.createElement('a')) { // 非IE下载
            const elink = document.createElement('a')
            elink.download = fileName
            elink.style.display = 'none'
            elink.href = URL.createObjectURL(blob)
            document.body.appendChild(elink)
            elink.click()
            URL.revokeObjectURL(elink.href) // 释放URL 对象
            document.body.removeChild(elink)
        } else { // IE10+下载
            navigator.msSaveBlob(blob, fileName)
        }
        callback&&callback();

    })
}



//弹出错误信息
function redirect (responseText, message) {
    try {
        let responseData = typeof responseText == 'string' ? JSON.parse(responseText) : responseText;
        if ((responseData.hasOwnProperty('code') && responseData.code == 401)
            || (responseData.data && responseData.data.code == 401)) {
            closeLoading();
            toLogin();
        } else {
            console.log(message);
        }
    } catch (error) {
        console.log(error);
    }
}

//跳转登录页
function toLogin () {
    //  const vueinstance=  getCurrentInstance();
    if (window.location.hash) {
        window.location.href = window.location.origin + '/#/login'
        return
    }
    window.location.href = window.location.origin + '/login'
    //  router.push({ path: '/login', params: { r: Math.random() } });
}


export default { post, get,download, ipAddress }
