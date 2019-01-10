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
      color:'rgb(0,255,255)'
      timer:null
    };
  },
  created() {
      this.timer = null;
      this.timer = setInterval(() => {
          this.changeColor()
      }, 300);
  },
  computed: {
    randomColor () {
        return function () {
            var red = Math.random() * 255 + 50;
            var green = Math.random() * 255 + 50;
            var blue = Math.random() * 255 + 50;
            var a = Math.random();
            return "rgba(" + red + " ," + green +"," + blue +")"
        }
    },
    randomSize () {
        return function () {
            return (Math.random() * 20 + 12) + 'px'
        }
    }
  },
  methods: {
      changeColor () {
        this.c_a ++ 
        if(this.c_a === 255){
            this.c_a = 0
        }
      }
  },
});