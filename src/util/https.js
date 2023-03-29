import axios from 'axios'
import { ElMessage } from 'element-plus'
import { getToken } from '@/utils/auth'
//import Cookies from 'js-cookie'
import { useRouter } from 'vue-router';

const router=useRouter()
//创建新的 axios 实例
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    withCredentials: true, // send cookies when cross-domain requests
    timeout: 15000 // request timeout
})
//请求拦截
service.interceptors.request.use(
    config => {
        config.headers['X-Token'] = getToken(); //设置请求头
        return config
    },
    error => {
        return Promise.reject(error)
    }
)//响应 response 拦截器
service.interceptors.response.use(response => {
    if (response.status === 200) {
        const data = response.data;
        return data;
    } else if (response.code === 302) {//响应超时，跳转到登录页
        router.replace({
            path: '/login',
            query: {}
        })
        ElMessage.error({
            message: '请求异常!',
            type: 'error',
            duration: 5 * 1000,
        });
    }
    return response;
});
export default service