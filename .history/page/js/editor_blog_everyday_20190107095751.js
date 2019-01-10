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
            var blog = new E("#blog");
            blog.customConfig.uploadImgServer = "/upload";
            blog.create();
            var every = new E('#everyday');
            every.create();
        },
        submit () {
            var submit = this.type == 'blog' ? this.submitBlog : this.submitEveryday
            submit();
        }
    }

});