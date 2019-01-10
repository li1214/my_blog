var app = new Vue({
  el: "#blog",
  data () {
      return {
          blog:{}
      }
  },
  created() {
      console.log()
  },
  methods: {
      getBlogId () {
          var url = window.location.search.replace('?','')
      }
  },
});