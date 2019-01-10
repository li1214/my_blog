var app = new Vue({
  el: "#app",
    data(){
       return {
           type : 'blog',
           blog:'',
           title:'',
           tags:'',
           everyday:'',
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
            this.blog = blog
            var every = new E('#everyday');
            every.create();
            this.everyday = every;
        },
        submitBlog () {
            if(this.title == ''){
                alert('请输入文章标题')
                return
            }else if(this.tags == ''){
                alert('请输入文章标签')
                return
            }
            var blogHtml = this.blog.txt.html().trim();
           if(blogHtml =='<p><br></p>'){
               alert("请输入文章内容")
               return
           }
            axios.post('/editorBlog?title=' + this.title + '&tags=' + this.tags, { blog: blogHtml}).then(res => {
                console.log(res)
            })
        },
        submitEveryday () {
            var everydayHtml = this.everyday.txt.html().trim();
            console.log(everydayHtml);
            if (everydayHtml == '<p><br></p>') {
                alert("请输入每日一句内容")
                return
            }
            axios.get('/editorEveryday?text=' + everydayHtml).then(res => {
                console.log(res)
            })
        },
        submit () {
            var submit = this.type == 'blog' ? this.submitBlog : this.submitEveryday
            submit();
        }
    }

});