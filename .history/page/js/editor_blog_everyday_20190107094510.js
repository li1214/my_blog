var app = new Vue({
  el: "#app",
    data(){
       return {
           type : 'blog'
       }
    },
    created() {
        this.type='everyday'
        this.createEditor();
    },
    methods:{
        changeType(){
            console.log(this.type)
            this.createEditor();
        },
        createEditor () {
            var E = window.wangEditor;
            var editor = new E("#" + this.type);
            editor.create();
        }
    }

});