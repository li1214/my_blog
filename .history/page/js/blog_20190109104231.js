var app = new Vue({
  el: "#blog",
  data () {
      return {
          blog:{}
      }
  },
  created() {
      this.getBlogId;
  },
  methods: {
      getBlogId () {
          var url = window.location.search.replace('?','');
          console.log(url)
      }
  },
});