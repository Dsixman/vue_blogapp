<template>
  <div id="top" >
    <el-row :gutter="20" class="top"  >
      <el-col :span="4" class="logo">zzh技术博客</el-col>
      <el-col :span="12">
        <el-menu :span="12" class="el-menu-demo nav-menu" mode="horizontal" @select="handleSelect">
          <el-menu-item index="1" class="nav-menu-item">首页</el-menu-item>
          <el-menu-item index="2" class="nav-menu-item">技术博文</el-menu-item>
          <!-- <el-submenu index="2">
            <template slot="title">技术博文</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu> -->
          <el-menu-item index="4" class="nav-menu-item"><a href="https://www.ele.me" target="_blank">资源分享</a></el-menu-item>
          <el-menu-item index="3" class="nav-menu-item">联系我</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="8" class="search-input-wrapper">
        <el-input v-model="search" placeholder="请输入内容" id="search-input" suffix-icon="el-icon-search"></el-input>
        <!-- <i class="el-icon-search pointer"></i> -->
      </el-col>
    </el-row>
  </div>

</template>

<script>
export default {
  data() {
      return {
        search: ''
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>

<style lang="css">
</style>
