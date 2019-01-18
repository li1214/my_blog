<template>
  <el-row class='every-day'>
    <i class="el-icon-loading"></i>
    <span>每日一句</span>
    <p>{{everyday.ctext}}</p>
    <p>{{everyday.etext}}</p>
    <p class='author'>———— {{everyday.author}}</p>
  </el-row>
</template>
<script>
  export default {
      data () {
          return {
              everyday:{
                  ctext:'',
                  etext:'',
                  author:''
              }
          }
      },
      created() {
          this.$axios.get("getEveryday").then(res => {
              console.log(res)
              if (res.status == 200) {
                  this.everyday = res.data.data[0]
              }
          });
      },
  };
</script>
<style scoped>
    .every-day{
        position: relative;
        background-color: white;
        text-align: left;
        border-radius: 6px;
        box-sizing: border-box;
        padding: 5px 10px;
        box-shadow: 3px 4px 3px #888;
        margin-top: 25px;
    }
    .every-day span{
        font-size: 14px;
        display: inline-block;
        margin-bottom: 5px;
        color: slateblue;
    }
    .every-day > p{
        font-size: 14px;
        word-wrap:break-word;
        line-height: 24px;
    }
    .author{
        text-align: right
    }
</style>
