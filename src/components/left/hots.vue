<template>
  <div class="right-box" style="margin-top:25px" v-if='hots.length > 0'>
    <h4 :style="{color:color}">最近热门</h4>
    <div class="contents">
      <ul class="list-group">
        <li class="list-group-item" v-for="item in hots" :key="item.id">
          <router-link :to="'/home/blog/' + item.id" tag='a'>{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    props: ["color"],
    data() {
      return {
        hots: []
      };
    },
    created() {
      this.getHots();
    },
    methods: {
      getHots() {
        this.$axios
          .get("getHotBlog")
          .then(res => {
            if(res.status == 200){
              this.hots = res.data.data
            }
          })
          .catch(e => console.log(e));
      }
    }
  };
</script>
<style scoped>
  .list-group-item {
    padding: 10px 0;
  }
  .right-box .contents li a {
    font-size: 14px;
    display: inline-block;
    color: #eee;
    padding: 5px 0;
    transition: color 0.5s;
    cursor: pointer;
  }
  .right-box .contents li a:hover {
    color: #337ab7;
  }
</style>
