<template>
    <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
        <el-form-item label="文章标题" prop="title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="文章标签" prop="tags">
            <el-input v-model="form.tags"></el-input>
        </el-form-item>
        <el-form-item label="文章简介" prop="intro">
            <el-input type="textarea" :rows="3" placeholder="请输入文章简介" v-model="form.intro"></el-input>
        </el-form-item>
        <el-form-item label="编辑文章" prop="text">
            <mark-down @on-save='getText'/>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('form')">立即发布</el-button>
            <el-button @click="resetForm('form')">重置</el-button>
        </el-form-item>
        <!-- <div v-html='form.text'></div> -->
    </el-form>
</template>
<script>
import MarkDown from 'vue-meditor'
export default {
    data(){
        return {
            form:{
                title:'',
                tags:'',
                text:'',
                intro:''
            },
            rules:{
                title:[{ required: true, message: '请输入文章标题', trigger: 'blur' }],
                tags:[{ required: true, message: '请输入文章标签', trigger: 'blur' }],
                intro: [{ required: true, message: '请输入文章简介', trigger: 'blur' }],
                text: [],
            }
        }
    },
    components:{
        MarkDown
    },
    methods: {
        getText (d) {
            this.form.text = d.htmlValue
        },
        resetForm(form) {
            this.$refs[form].resetFields();
        },
        submitForm(form) {
            this.$refs[form].validate((valid) => {
                if (valid) {
                    this.submit()
                } else {
                    return false;
                }
            });
        },
        submit() {
            this.$axios({
                url:'editorBlog',
                method:'post',
                data:JSON.stringify({
                    text:this.form.text,
                    tags:this.form.tags,
                    title:this.form.title,
                    intro:this.form.intro
                }),
                headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json;charset=UTF-8" },
            }).then(res => {
                if(res.status == 200){
                    this.$alert(res.data.msg);
                }
            }).catch(e => {console.log(e)})
            
        }
    },
}
</script>
<style scoped>
   .demo-ruleForm{margin-top: 35px;}

</style>