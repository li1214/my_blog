var randomTags = new Vue({
  el: "#random_tags",
  data() {
    return {
      tags: [
        "java",
        "C++",
        "Html5",
        "css3",
        "javascript",
        "python",
        "node",
        "express",
        "koa",
        "mysql",
        "redis",
        "Vue",
        "react",
        "angular",
        "Jquery"
      ],
      c_a: 0,
      color: "rgb(0,255,255)",
      timer: null
    };
  },
  created() {
    //   this.timer = null;
    //   this.timer = setInterval(() => {
    //       this.changeColor()
    //   }, 300);
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
    changeColor() {
      this.c_a += 10;
      if (this.c_a > 255) {
        this.c_a = 0;
      }
      this.color = `rgba(${this.c_a},255,255)`;
    }
  }
});

var hotBlogs = new Vue({
  el: "#hotBlogs",
  data() {
    return {
      hots: [
        { id: 1, title: "查看你的AWS服务器已使用流量", link: "" },
        { id: 2, title: "python+selenium自动登录qq空间并下载", link: "" },
        {
          id: 3,
          title: "详细阅读 vscode+XDebug调试远程环境(虚拟机)上的PHP代码",
          link: ""
        },
        {
          id: 4,
          title: "详细阅读 VirtualBox压缩vmdk、vagrant打包box一口气全对",
          link: ""
        },
        { id: 5, title: "ubuntu下cmake报错Could NOT fin", link: "" },
        { id: 6, title: "使用码云git的webhook实现生产环境代", link: "" },
        {
          id: 7,
          title: "详细阅读 填坑解决homestead中serve添加多站点后无法访问",
          link: ""
        },
        { id: 8, title: "抓取摩拜单车车辆位置数据", link: "" },
        {
          id: 9,
          title: "注册谷歌时提示”此电话号码无法用于进行验证”的解决办法",
          link: ""
        },
        { id: 10, title: "lnmp集成环境运行laravel报open_base", link: "" }
      ]
    };
  },
  created() {
      console.log(this.hots);
  },
});
