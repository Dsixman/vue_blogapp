<template lang="html">
  <div class="left" >
    <div class="personal-files">
      个人简介
    </div>
    <div class="blog-login">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名" for="user">
          <el-input v-model="form.user" placeholder="请输入用户名" id="user"></el-input>
        </el-form-item>
        <el-form-item label="密码" for="password">
          <el-input v-model="form.password" placeholder="请输入密码" type="password" id="password"></el-input>
        </el-form-item>
        <div class="">
          <el-button type="info" @click="onSubmit">登陆</el-button>
        </div>
      </el-form>
    </div>
    <div class="blog-date">
      <el-calendar v-model="date">
      </el-calendar>

    </div>
    <div class="blog-tags">
      博文标签
    </div>
    <div class="blog-sorts">
      博文排序
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  data(){
    return {
      form:{
        user:"",
        password:"",
      },
      date:new Date(),
      userinfo:null,
    }
  },
  methods:{
    onSubmit:function(){
      let username=this.form.user
      let pwd=this.form.password
      console.log(username)
      console.log(pwd)
      Vue.axios.post('/api/v1/auth',{user:username,password:pwd}).then(data=>{
        let res_data=data.data
        this.$router.push("/admin")
        console.log(res_data)
      }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style lang="css">
</style>
