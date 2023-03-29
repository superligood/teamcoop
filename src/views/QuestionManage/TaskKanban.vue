<template>

<el-form :model="ruleForm" :rules="rules" label-width="120px" label-position="right" class="demo-ruleForm" :size="formSize" ref="ruleFormRef">
          <el-form-item label="标题" prop="title">
            <el-input v-model="ruleForm.title" placeholder="请输入80个字符以内标题" :clearable="true" label-width="100%"  maxlength="80"  autocomplete="off" />
          </el-form-item> 
          <el-form-item>
            <el-button class="bai" @click="dataCancel" >取消</el-button>
             <el-button type="primary" @click="dataConfirm(1)" v-loading.fullscreen.lock="fromloading">发布</el-button>
          </el-form-item>
</el-form>
</template>

<script>
import { useRoute } from 'vue-router'
import { toRefs, reactive, ref, unref} from 'vue'

import {ElMessage} from 'element-plus';

export default {
 setup() {
 const route = useRoute();
const ruleFormRef = ref(null); //表单
let formSize = 'default';
let ruleForm = reactive({title:''});
 //表单校验
const rules = reactive({
   title: {required: true, message: '请输入标题', trigger: 'blur'},
})
const data = reactive({ 
    infoData:[],
    fileList:[],
    loading: false,
    dialogtitle:'',//弹窗标题
    fullscreen:false,
    fromloading:false,
})

async function dataConfirm(){ 
    //state.fromloading = true; 
    const form = unref(ruleFormRef);
    if (!form) return;
        try {
            await ruleFormRef.value.validate((valid) => {
                // 验证通过 请求接口
                if (valid) {

                console.log(121);

                } else {
                // 验证失败 取消loading，
                //data.fromloading = false;
                return;
                }
            }) 
        } catch (error){
        //data.fromloading = false;
        } 
    }

    function dataCancel(){

    }

 return {
 ...toRefs(data),
dataConfirm,
dataCancel,
ruleForm,
formSize,
rules, 
ruleFormRef,

 }
 },
}
</script>