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
        axios.get('').then(res => {
            if(res.status == 200){
                this.list = res.data.data
            }
        })
    }
  }
});