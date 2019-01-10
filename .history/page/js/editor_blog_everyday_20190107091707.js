new Vue({
  el: "#app",
  data() {
    return {
      ediorr_type: "blog",
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
  },
  methods: {
    changeType(){
       this.type = 
    }
  }
});