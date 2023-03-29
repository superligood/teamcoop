<template>
    <div style="position:relative;left:0;right:0;bottom:0;height: 90vh; ">
    <div style="background:#fff; padding:10px; border-radius:3px; margin-top:10px;">
       <el-row>
           <el-col :span="20">
                <el-col :span="24">
                  <i class="el-icon-user" style="border:1px solid #eee;padding:5px; border-radius:50%;"></i> <span>23423</span>  <i class="el-icon-tickets"></i> <a :href="'/QuestionManage/TaskTracking.aspx?ID=1'">234234234234</a>
                </el-col>
                <el-col :span="24" style="line-height:15px; padding:5px 5px 5px 25px;"><i class="el-icon-time"></i>  <time style="color:#999;">时间 </time> <span style="color:#999;">项目管理</span></el-col>
                <el-col :span="24" style="line-height:15px; padding:5px 5px 5px 25px;"><i class="el-icon-user-solid"></i> <span style="color:#999;">执行人 </span></el-col>
               <el-col :span="24" style="line-height:22px; padding:5px 5px 5px 25px;"> 123132 </el-col>
         </el-col>
        <el-col :span="4" align="right"><el-button  type="danger" size="mini">Delete</el-button></el-col>
      </el-row>
   </div>
   
    <div style="position:absolute;left:8px;right:8px;bottom:10px; padding:10px;background:#fff; ">
        <el-row Type="flex" justify="end" align="bottom">
             <el-col :span="8"></el-col>
             <el-col :span="16">
                 <el-pagination background layout="->,prev, pager, next" :total="1" style="text-align: center"></el-pagination>
             </el-col>
        </el-row>
    </div>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style scoped>
  
  </style>