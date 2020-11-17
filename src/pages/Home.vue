<template>
  <div class="">
    <header style="height:60px;  overflow:hidden">
      <Nav></Nav>
    </header>
    <el-col style="background:grey">
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <Left />
          </div>
        </el-col>
        <el-col :span="18">
          <div class="grid-content bg-purple">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </el-col>
  </div>

</template>

<script>
import Nav from '../components/Nav.vue'
import Left from '../components/Left.vue'
export default {
  data(){
    return {

    }
  },
  components:{
    Nav,
    Left
  },
  mounted(){

  },
  methods:{

  }
}
</script>

<style lang="css">
.el-row {
    &:last-child {
      margin-bottom: 0;
    }
  }
  .bg-purple-dark {
      background: #99a9bf;
    }
</style>
