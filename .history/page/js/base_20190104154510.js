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
      ]
    };
  },
  methods: {
    randomColor () {
        return function () {
            var red = Math.random() * 255;
            var green = Math.random() * 255;
            var blue = Math.random() * 255;
            var a = Math.random();
            return "rgba(" + red + " ," + green +"," + blue +"," +a +)""
        }
    },
    randomSize () {
        return function () {
            return (Math.random() * 20 + 12) + 'px'
        }
    }
  }
});