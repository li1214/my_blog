var app = new Vue({
  el: "#bloglist",
  data() {
    return {
      list: []
    };
  },
  created() {
    this.getBloglist();
  },
  methods: {
    getBloglist() {
          axios.get('/getAllBlog').then(res => {
            if(res.status == 200){
                var data = res.data.data;
                
                for(var i in data){
                    data[i]['linl'] = '../blog.html?id=' + data[i].id
                    this.list.push()
                }
            }
        })
    }
  }
});