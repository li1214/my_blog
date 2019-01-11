var randomTags = new Vue({
  el: "#random_tags",
  data() {
    return {
      tags: [],
      hots: [],
      comments: [],
      c_a: 0,
      color: "rgb(0,255,255)",
      timer: null
    };
  },
  created() {
    this.getHots();
    this.getTags();
    this.getNewsComments();
  },
  computed: {
    randomColor() {
      return function() {
        var red = Math.random() * 255 + 50;
        var green = Math.random() * 255 + 50;
        var blue = Math.random() * 255 + 50;
        return "rgba(" + red + " ," + green + "," + blue + ")";
      };
    },
    randomSize() {
      return function() {
        return Math.random() * 20 + 12 + "px";
      };
    }
  },
  methods: {
    getHots() {
      axios.get("/getHotBlog").then(res => {
        if (res.status == 200) {
          var data = res.data.data;
          for (var i in data) {
            data[i]["link"] = "./blog.html?id=" + data[i]["id"];
          }
          this.hots = data;
        }
      });
    },
    getTags() {
      axios.get("/selectRandomTag").then(res => {
        if (res.status == 200) {
          var data = res.data.data;
          for (var i in data) {
            data[i].link = "../index.html?tagid=" + data[i].id;
          }
          this.tags = data;
        }
      });
    },
    changeColor() {
      this.c_a += 10;
      if (this.c_a > 255) {
        this.c_a = 0;
      }
      this.color = `rgba(${this.c_a},255,255)`;
    },
    getNewsComments() {
      axios.get("/selectNewComments").then(res => {
        if (res.status == 200) {
          var data = res.data.data;
          for (var i in data) {
            if (data[i]["blog_id"] == -2) {
              data[i]["link"] = "../liuyan.html";
            } else if (data[i]["blog_id"] == -1) {
              data[i]["link"] = "../about.html";
            } else {
              data[i]["link"] = "../about.html?id=" + data[i]["blog_id"];
            }
          }
          this.comments = data;
        }
      });
    },
    toIndex (tag) {
      location.href = '../index.html?tag =' + tag;
    }
  },
  filters: {
    toDate(d) {
      var date = new Date(d * 1000);
      var Y, M, D;
      Y = date.getFullYear();
      M =
        date.getMonth() + 1 > 9
          ? date.getMonth() + 1
          : "0" + (date.getMonth() + 1);
      D = date.getDate();
      return Y + "-" + M + "-" + D;
    }
  }
});

// var search = new Vue({
//   el:'#search',
//   data () {
//     return {
//       show:false,
//       list:[],
//       keywords:''
//     }
//   },
//   methods:{
//     getList () {
//       axios.get('/')
//     }
//   }
// })

