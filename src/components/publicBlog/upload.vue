<template>
    <div class='source'>
        <el-upload class="upload-demo" action="upload" :on-preview="handlePreview"
            name='image'
            :on-remove="handleRemove" :file-list="fileList2" list-type="picture">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                fileList2: []
            };
        },
        methods: {
            handleRemove(file, fileList) {
                console.log(file, fileList);
            },
            handlePreview(file) {
                console.log(file);
            }
        }
    }
</script>

<style >
    .source{
        padding: 20px;
        margin-top: 25px;
        box-shadow: -1px -1px 23px #555;
        border-radius: 8px;
    }
</style>