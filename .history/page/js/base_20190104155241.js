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
  }
});