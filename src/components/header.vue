<template>
  <el-row class="header">
    <el-col :span="8" :offset="5" class="nav">
      <a>个人博客 | 技术博客</a>
      <ul>
        <li><router-link to="/home/index" tag='a'>首页</router-link></li>
        <li><router-link to="/map" tag='a'>地图</router-link></li>
        <li><a href="http://resume.57301456.top">关于</a></li>
        <li><router-link to="/home/liuyan" tag='a'>留言</router-link></li>
      </ul>
    </el-col>
    <el-col :span="6" class="search">
        <el-input v-model="k" placeholder="请输入搜索内容" class='input'></el-input>
        <el-button type="primary" icon="el-icon-search" class='button'>搜索</el-button>
    </el-col>
  </el-row>
</template>
<script>
  export default {
      data () {
          return {
              k:''
          }
      }
  };
</script>
<style scoped>
  .header {
    height: 60px;
    background-color: #1f1f1f;
  }
  .header >.nav > a {
    display: block;
    float: left;
    color: #eee;
    line-height: 60px;
    margin: 0 15px;
    font-size: 16px;
  }
  .header >.nav > ul {
    float: left;
    margin: 0;
    padding: 0;
  }
  .header >.nav > ul > li {
    display: inline-block;
  }
 .header >.nav > ul > li a {
    color: #eee;
    display: inline-block;
    height: 60px;
    width: 58px;
    line-height: 60px;
    text-align: center;
  }
  .search{
      display: inline-block;
      height: 60px;
      position: relative;
  }
  .search .input {
    position: absolute;
    top:10px;
    width: 240px;
    right:100px;
  }
  .search .button{
    position: absolute;
    top: 10px;
    right: 0;
  }
</style>
