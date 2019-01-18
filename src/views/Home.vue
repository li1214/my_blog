<template>
<el-row :gutter="20">
  <el-col :span="16" class='left'>
    <router-view/>
  </el-col>
  <el-col :span="8" class='right'>
    <l-left />
  </el-col>
</el-row>
</template>

<script>

import lLeft from '../components/left'

export default {
  name: 'home',
  components:{ lLeft},
}
</script>
<style scoped >
  .left,.right{
    box-sizing: border-box;
  }
  .left{padding-right: 25px;}
</style>
