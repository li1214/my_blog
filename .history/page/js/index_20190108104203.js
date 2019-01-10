var everyDay = new Vue({
  el: "#every_day",
  data() {
    return {
      content: "仰望星空，看那满天繁星如何为你、为你所做的一切而闪耀。",
    };
  },
  created() {
    axios.get("/getEveryday").then(res => {
      if(res.status == 200){
        this.content = res.data.data[0]['content']
      }
    });
  },
});

var blogList = new Vue({
  el: "#blogList",
  data() {
    return {
      page:1,
      pagesize:5,
      list: []
    };
  },
  created() {
    axios.get('/getBlog?page=' + this.page + '&pagesize=' + this.pagesize).then(res => {
      if(res.status == 'success'){
        this.list = res.data.data
      }
    })
  },
  filters: {
    tagfliter(d) {
      return d.replace(/，/g,',').replace(/\,/,' ')
    }
  }
});
