var app = new Vue({
  el: "#app",
    data(){
       return {
           type : 'everyday'
       }
    },
    created() {
        this.type='everyday'
        this.createEditor();
       
    },
    mounteds: {
        createEditor() {
            var E = window.wangEditor;
            var editor = new E("#" + this.type);
            editor.create();
        }
    },
    mounted() {
        console.log(this.type)
    },
});