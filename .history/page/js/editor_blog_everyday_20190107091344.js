new Vue({
  el: "#app",
  data() {
    return {
      type: "",
      types:[{type:'blog',text:'博客'},{type:'everyday',text:'每日一句'}]
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
        var editor = new E("#" + this.type);
        editor.create();
      };
    }
  }
});