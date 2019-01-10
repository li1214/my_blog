var app = new Vue({
  el: "#blog",
  data () {
      return {
          blog:{},
          blogid:''
      }
  },
  created() {
      this.getBlogId();
  },
  methods: {
      getBlogId () {
          var url = window.location.search.replace('?','');
          var arr= url.split('&');
          var id = '';
          arr.forEach(item => {
              var [key,value] = item.split('=');
              if(key == 'id'){
                  this.blogid = value
              }
          });
          return id
      }
  },
});