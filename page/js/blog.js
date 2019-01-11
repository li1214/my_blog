var app = new Vue({
  el: "#blog",
  data() {
    return {
      blog: {},
      blogid: "",
      comments: {
        nickname: "",
        email: "",
        text: "",
        code: "",
        coder:'',
        codeText: "",
        parentId: -1,
        parentName: null
      },
      commentsList:[],
      commentsCount:'没有评论'
    };
  },
  created() {
    this.getBlogId();
    if (this.blogid == "") {
      window.history.go(-1);
    } else {
      this.getBlog();
    }
    this.getCode();
    this.getComments();
    this.getCommentsCount();
  },
  methods: {
    getBlogId() {
      var url = window.location.search.replace("?", "");
      var arr = url.split("&");
      var id = "";
      arr.forEach(item => {
        var [key, value] = item.split("=");
        if (key == "id") {
          this.blogid = value;
        }
      });
      return id;
    },
    getBlog() {
      axios.get("getBlogById?id=" + this.blogid).then(res => {
        if (res.status == 200) {
          this.blog = res.data.data[0];
        }
      });
    },
    getCode () {
      axios.get("createCode").then(res => {
        if(res.status == 200){
          this.comments.coder = res.data.data.data;
          this.comments.codeText = res.data.data.text;
        }
      });
    },
    getComments () {
      axios.get("/selcetByBlogId?blogid=" + this.blogid).then(res => {
        if(res.status == 200){
          var data = res.data.data;
          for(var i in data){
            if(data[i]['parent'] > 0){
              data[i].nickname = data[i].username + ' 回复@ ' + data[i]['parent_name'];
            }else{
              data[i].nickname = data[i].username
            }
          }
          this.commentsList = data
        }
      });
    },
    getCommentsCount () {
      axios.get("/selectCountByBlogId?blogid=" + this.blogid).then(res => {
        if (res.status == 200) {
          this.commentsCount = '有' + res.data.data[0].count + '条留言';
        }
      });
    },
    reset() {
      this.comments.nickname = "";
      this.comments.email = "";
      this.comments.text = "";
      this.comments.code = "";
    },
    submit() {
      axios
        .post(
          "/addComment?blogid=" +
            this.blogid +
            "&username=" +
            this.comments.nickname +
            "&email=" +
            this.comments.email +
            "&parent=" +
            this.comments.parentId +
            "&parentName=" +
            this.comments.parentName,
          {
            text: this.comments.text
          }
        )
        .then(res => {
          if (res.status == 200) {
            alert('评论成功！');
            location.reload();
          }
        });
    },
    submitVer() {
      if (this.comments.nickname == "") {
        alert("请填写昵称！~");
        return false;
      }
      if (this.comments.email == "") {
        alert("请填写邮箱！~");
        return false;
      }
      if (this.comments.text == "") {
        alert("请填写评论内容！~");
        return false;
      }
      if (this.comments.coder == "" || this.comments.code.toLowerCase() != this.comments.codeText.toLowerCase()) {
        alert("验证码错误！~");
        this.getCode();
        return false;
      } 
      this.submit();
    },
    replay (id,name){
      this.comments.parentId = id;
      this.comments.parentName = name;
      window.location.href = "#subly";
      this.$refs["username"].focus();
    }
  },
  filters:{
    toDate(d) {
      var date = new Date(d * 1000);
      var Y, M, D;
      Y = date.getFullYear();
      M = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
      D = date.getDate();
      return Y + '-' + M + '-' + D
    }
  }
});