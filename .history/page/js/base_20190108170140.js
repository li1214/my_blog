var randomTags = new Vue({
  el: "#random_tags",
  data() {
    return {
      tags: [],
      hots: [],
      comments: [
        {
          id: 1,
          name: "代码狗",
          text: "抱歉，由于种种原因，本站不再链接至贵",
          date: "一周前"
        },
        {
          id: 2,
          name: "代码狗",
          text: "抱歉，由于种种原因，本站不再链接至贵",
          date: "一周前"
        },
        {
          id: 3,
          name: "代码狗",
          text: "抱歉，由于种种原因，本站不再链接至贵",
          date: "一周前"
        },
        {
          id: 4,
          name: "代码狗",
          text: "抱歉，由于种种原因，本站不再链接至贵",
          date: "一周前"
        },
        {
          id: 5,
          name: "代码狗",
          text: "抱歉，由于种种原因，本站不再链接至贵",
          date: "一周前"
        },
        {
          id: 6,
          name: "代码狗",
          text: "抱歉，由于种种原因，本站不再链接至贵",
          date: "一周前"
        },
        {
          id: 7,
          name: "代码狗",
          text: "抱歉，由于种种原因，本站不再链接至贵",
          date: "一周前"
        }
      ],
      c_a: 0,
      color: "rgb(0,255,255)",
      timer: null
    };
  },
  created() {
    this.getHots();
  },
  computed: {
    randomColor() {
      return function() {
        var red = Math.random() * 255 + 50;
        var green = Math.random() * 255 + 50;
        var blue = Math.random() * 255 + 50;
        var a = Math.random();
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
    getHots () {
      axios.get("/getHotBlog").then(res => {
        if (res.status == 200) {
          var data = res.data.data;
          for (var i in data) {
            data[i]['link'] = './blog.html?id=' + data[i]['id']
          }
          this.hots = data;
        }
      });
    },
    getTags () {
      axios.get("/selectRandomTag").then(res => {
        if (res.status == 200) {
          this.tags = res.data.data
        }
      });
    },
    changeColor() {
      this.c_a += 10;
      if (this.c_a > 255) {
        this.c_a = 0;
      }
      this.color = `rgba(${this.c_a},255,255)`;
    }
  }
});
