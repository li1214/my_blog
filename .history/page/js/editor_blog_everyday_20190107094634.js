var app = new Vue({
  el: "#app",
    data(){
       return {
           type : 'blog'
       }
    },
    created() {
        this.type ='blog'
        this.createEditor();
    },
    methods:{
        changeType(){
            console.log(this.type)
            this.createEditor();
        },
        createEditor () {
            var E = window.wangEditor;
            var editor = new E("#blog");
            editor.create();
        }
    }

});