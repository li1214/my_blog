var app = new Vue({
  el: "#bloglist",
  data (){
      return {
          list :[]
      }
  },
  created() {
      this.getBloglist();
  },
});