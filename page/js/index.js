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
      page: 1,
      pagesize: 2,
      pages: [],
      count: null,
      list: [],
      urls: null
    };
  },
  created() {
    this.getUrlRequest();
    this.choosefun();
  },
  computed: {
    initPages() {
      var nowPage = this.page;
      var pagesize = this.pagesize;
      var count = this.count;
      console.log(nowPage, pagesize, count);
      var result = [];
      result.push({ text: "<<", page: 1 });
      if (nowPage > 2) {
        result.push({ text: nowPage - 2, page: nowPage - 2 });
      }
      if (nowPage > 1) {
        result.push({ text: nowPage - 1, page: nowPage - 1 });
      }
      result.push({ text: nowPage, page: nowPage });
      //是否是最后一页
      if (nowPage + 1 <= (count + pagesize - 1) / pagesize) {
        result.push({ text: nowPage + 1, page: nowPage + 1 });
      }
      if (nowPage + 2 <= (count + pagesize - 1) / pagesize) {
        result.push({ text: nowPage + 2, page: nowPage + 2 });
      }
      result.push({
        text: ">>",
        page: parseInt((count + pagesize - 1) / pagesize)
      });
      this.pages = result;
      return result;
    }
  },
  methods: {
    getBlog() {
      axios
        .get("/getBlog?page=" + this.page + "&pagesize=" + this.pagesize)
        .then(res => {
          if (res.status == "200") {
            var data = res.data.data.data;
            for (var i in data) {
              data[i]["link"] = "../blog.html?id=" + data[i]["id"];
            }
            this.list = data;
            this.count = res.data.data.count;
            this.initPages;
          }
        });
    },
    getBlogByTag() {
      axios
        .get(
          "selectByTag?tag=" +
            this.urls.tag +
            "&page=" +
            this.page +
            "&pagesize=" +
            this.pagesize
        )
        .then(res => {
          if (res.status == "200") {
            var data = res.data.data;
            for (var i in data) {
              data[i]["link"] = "../blog.html?id=" + data[i]["id"];
            }
            this.list = data;
            this.getBlogCountByTag();
          }
        });
    },
    choosefun() {
      if (this.urls.keywords) {
        this.getBlogByKeywords();
      } else if (this.urls.tag) {
        this.getBlogByTag();
      } else {
        this.getBlog();
      }
    },
    getUrlRequest() {
      var url = location.search; //获取url中"?"符后的字串
      var theRequest = new Object();
      if (url.indexOf("?") != -1) {
        var str = url.substr(1);
        strs = str.split("&");
        for (var i = 0; i < strs.length; i++) {
          theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
        }
      }
      this.urls = theRequest;
    },
    getBlogCountByTag() {
      axios.get("/selectTagCount?tag=" + this.urls.tag).then(res => {
        this.count = res.data.data[0].count;
        this.initPages;
      });
    },
    changePage (i) {
      this.page = i;
      this.choosefun();
    }
  },
  filters: {
    tagfliter(d) {
      return d.replace(/\,/g, " ");
    },
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
