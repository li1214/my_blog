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
        console.log(this.type)
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