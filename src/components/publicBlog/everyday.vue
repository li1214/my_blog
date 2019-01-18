<template>
    <el-form :model="from" :rules="rules" ref="from" label-width="180px" class="demo-ruleForm">
        <el-form-item label="每日一句" prop="ctext">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="from.ctext" />
        </el-form-item>
        <el-form-item label="One sentence per day" prop="etext">
            <el-input type="textarea" :rows="2" placeholder="请输入内容" v-model="from.etext" />
        </el-form-item>
        <el-form-item label="作者" prop="author">
            <el-input v-model="from.author"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('from')">立即发布</el-button>
            <el-button @click="resetForm('from')">重置</el-button>
        </el-form-item>
    </el-form>
    
</template>
<script>
    export default {
        data () {
            return {
                from:{
                    ctext:'',
                    etext:'',
                    author:''
                },
                rules:{
                    ctext:[{ required: true, message: '请输每日一句中文内容', trigger: 'blur' }],
                    etext:[{ required: true, message: '请输每日一句英语内容', trigger: 'blur' }],
                    author:[{ required: true, message: '请输每日一句作者', trigger: 'blur' }]
                }
            }
        },
        methods: {
            resetForm (form){
                this.$refs[form].resetFields();
            },
            submitForm (form) {
                this.$refs[form].validate((valid) => {
                    if (valid) {
                        this.submit()
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            submit () {
                this.$axios({
                    url:'editorEveryday',
                    method:'post',
                    headers: { 'Access-Control-Allow-Origin': '*', "Content-Type": "application/json;charset=UTF-8" },
                    data:JSON.stringify({ctext: this.from.ctext, etext: this.from.etext, author: this.from.author})
                }).then(res => {
                    if (res.status == 200) {
                        this.$alert(res.data.msg);
                    }
                }).catch(e => console.log(e))
                
            }
        },
    }
</script>
<style scoped>
 .demo-ruleForm{margin-top: 35px;}
</style>