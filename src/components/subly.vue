<template>
    <el-form :model="form"  :rules="rules" ref="form"  class="demo-ruleForm subly">
        <h4>发表{{title}}</h4>
        <el-form-item prop='name' style="width:40;display: inline-block;">
            <el-input v-model="form.name" placeholder='昵称' ref='nameinput'></el-input>
        </el-form-item>
        <el-form-item prop='email' style="display: inline-block;width:57%;margin-left: 3%;">
            <el-input v-model="form.email" placeholder='邮箱(收到回复时你能收到通知)' ></el-input>
        </el-form-item>
        <el-form-item prop='text'>
            <el-input type="textarea" placeholder='请输入留言(评论)内容' v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item prop='code'>
            <el-input v-model="form.code" style="width:40%" placeholder='验证码'/>
            <div class='codeImg' v-html="comments.coder" @click="getCode()"></div>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">发布</el-button>
            <el-button @click="resetForm('form')">重写</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
    export default {
        name:'subly',
        props:['title','blogid','parentId','parentName'],
        data() {
            var validateCode = (rule, value, callback) => {
               if (value.toLowerCase() != this.comments.codeText.toLowerCase()) {
                     callback(new Error('验证码错误'));
                } else {
                    callback()
                }
            }   
            return {
                comments:{
                    coder:null,
                    codeText:''
                },
                form: {
                    name: '',
                    email: '',
                    text:''
                },
                rules: {
                    name: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                    ],
                    email: [
                        { required: true, message: '请输入邮箱', trigger: 'blur' },
                        { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change']}
                    ],
                    text:[{ required: true, message: '请输入留言(评论)内容', trigger: 'blur' }],
                    code:[{required: true, message: '验证码不能为空', trigger: 'blur'}, { validator: validateCode, trigger: 'blur' }]
                }
            };
        },
        created() {
            this.getCode()
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        this.submit();
                    } else {
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
            submit () {
                this.$axios({
                    url:'addComment',
                    method:'post',
                    headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json;charset=UTF-8" },
                    data:JSON.stringify({
                        blogid: this.blogid,
                        username:this.form.name,
                        email:this.form.email,
                        parent:this.parentId,
                        parentName:this.parentName,
                        text:this.form.text
                    })
                })
              .then(res => {
                if (res.status == 200) {
                    this.$alert("评论成功！");
                    location.reload();
                }
              });
            },
            getCode () {
                this.$axios.get("createCode").then(res => {
                    if (res.status == 200) {
                        this.comments.coder = res.data.data.data;
                        this.comments.codeText = res.data.data.text;
                    }
                });
            },
            getFoucs () {
                this.$refs.nameinput.focus();
            }
        }
    }
</script>

<style scoped>
.subly{
  box-sizing: border-box;
  margin-bottom: 20px;
  box-sizing: border-box;
  box-shadow: 3px 4px 3px #888;
  margin-top: 20px;
  background-color: #f4f4f4;
  border-radius: 6px;
  padding: 20px;
}
.codeImg{display: inline-block;margin-left: 8px;    position: relative;top: 14px;cursor: pointer;}
</style>