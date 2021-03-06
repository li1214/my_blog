$(function() {
  var E = window.wangEditor;
  //创建blog富文本
  var blog = new E("#blog");
  blog.customConfig.uploadImgShowBase64 = true;
  blog.create();
  //创建每日一句富文本
  var every = new E("#everyday");
  every.create();

  
  //判断显示编辑类型
  function editorType() {
    var type = $("#editorType").val();
    if (type == "blog") {
      $("#blogBox").show();
      $("#everydayEdirot").hide();
    } else {
      $("#blogBox").hide();
      $("#everydayEdirot").show();
    }
  }
  editorType();
  $("#editorType").change(function() {
    editorType();
  });


  //提交
  $("#submit").click(function(e) {
    e.preventDefault();
    var type = $("#editorType").val();
    if (type === "blog") {
      submitBlog();
    } else {
      submitEveryday();
    }
  });
  function submitBlog() {
    var title = $("#title").val();
    var tags = $("#tags").val();
    var blogContent = blog.txt.html().trim();
    if (title == "" || tags == "" || blogContent == "<p><br></p>") {
      alert("请正确填写内容！");
      return;
    }
    $.post("/editorBlog?title=" + title + '&tags=' + tags , { text: blogContent}).then(res => {
      var res = JSON.parse(res)
      if (res.status == "success") {
        alert("添加成功！");
      }
      });
  }
  function submitEveryday() {
    var everydayContent = every.txt.html().trim();
    if (everydayContent == "<p><br></p>") {
      alert("请输入每日一句内容！");
      return;
    }
    var data = JSON.stringify({ ctext: everydayContent ,etext:'shdajkhdskjhdkjsa',author:'啥都看见'});
    $.ajax({
      type: "post",
      url: "/editorEveryday",
      dataType: "json",
      data: data,
      headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json;charset=UTF-8"},
      success:function(res){
        if (res.status == "success") {
          alert("添加成功！");
        }
      }
    });
    // $.post("/editorEveryday", { text: everydayContent ,page:123,ctext:'撒娇的卡萨',etext:'hello world'}).then(res => {
    //   var res = JSON.parse(res)
    //   if (res.status == "success") {
    //     alert("添加成功！");
    //   }
    // });
  }
});
