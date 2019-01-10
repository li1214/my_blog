new Vue({
  el: "#app",
  data() {
    return {
      ediorType: "blog",
      types:[{name:'blog',text:'博客'},{name:'everyday',text:'每日一句'}]
    };
  },
  created() {
    this.createEditor();
    console.log(this.type);
  },
  computed: {
    createEditor() {
      return function() {
        var E = window.wangEditor;
          var editor = new E("#" + this.ediorType);
        editor.create();
      };
    }
  }
});