<template>
  <el-row class='every-day'>
    <i class="el-icon-loading"></i>
    <span>每日一句</span>
    <p v-html='content'></p>
  </el-row>
</template>
<script>
  export default {
      data () {
          return {
              content:''
          }
      },
      created() {
          this.$axios.get("getEveryday").then(res => {
              if (res.status == 200) {
                  this.content = res.data.data[0]['content']
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
</style>
