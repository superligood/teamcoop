//公用方法
import { reactive } from 'vue';

const plblic = ()=>{
    const res_a=reactive({
        name:'马云',
        age:50,
        company:'阿里巴巴'
    })
    return res_a
}

export default plblic
