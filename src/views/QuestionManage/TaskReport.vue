<script setup>
import {reactive, toRefs, onMounted} from 'vue';
// 变量
const msg = 'Hello!'

// 函数
function log() {
    console.log(msg)
}
const state = reactive({
      CurrentPage: 1,
      PageSize: 20,
      Total: 0,
      TotalList: [],
      tableData:[]
    });
</script>

<template>
    <div @click="log">{{ msg }}</div>
    <div>{{ state.CurrentPage }}</div>
</template>