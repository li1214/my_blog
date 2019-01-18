<template>
    <el-row>
        <h2 class='title'>博客后台编辑发布</h2>
        <div>
            <el-radio v-model="editorType" label="blog" border>编辑博客</el-radio>
            <el-radio v-model="editorType" label="everyday" border>编辑每日一句</el-radio>
            <el-radio v-model="editorType" label="upload" border>上传图片</el-radio>
            <el-radio v-model="editorType" label="imgList" border>图片列表</el-radio>
        </div>
        <keep-alive>
           <keep-alive>
            <component :is="editorType"></component>
           </keep-alive> 
        </keep-alive>
    </el-row>
</template>
<script>
import blog from '../components/publicBlog/blog'
import everyday from '../components/publicBlog/everyday'
import upload from '../components/publicBlog/upload'
import imgList from '../components/publicBlog/imgList'
export default {
    data (){
        return {
            editorType:'blog',
        }
    },
    created() {
        
    },
    components :{
        blog,
        everyday,
        upload,
        imgList
    },
    methods: {
        onSubmit(){
            console.log(123)
        }
    },
}
</script>
<style scoped>
.title{text-align: center;}
</style>