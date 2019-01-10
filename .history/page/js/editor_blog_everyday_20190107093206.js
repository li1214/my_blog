var app = new Vue({
  el: "#app",
  data() {
    return {
        type:''
    };
  },
  created() {
      this.type='everyday'
    this.createEditor();
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