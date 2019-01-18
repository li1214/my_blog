<template>
    <div class='content'>
        <div class="well">
            <div class="text">
                <p>欢迎灌水交流，别看我长时间不发博，博主可一直都在线~</p>
                <p style="color:red">友链只交换技术类个人博客。</p>
                <p style="color:red">不要皮，谢谢。</p>
            </div>
        </div>
        <liuyan :title='"留言"' :blogid='-2'  @replay='replay' />
        <subly :title='"留言"' :blogid='-2' :parentId='parentId' :parentName='parentName' />
    </div>
</template>
<script>
import liuyan from '../components/liuyan.vue'
import subly from '../components/subly.vue'
export default {
    components: { liuyan, subly },
    data() {
        return {
            parentId: -1,
            parentName: null,
            commentsList: []
        }
    },
    methods: {
        replay(id, username) {
            this.parentId = id;
            this.parentName = usernmae
        }
    },
}
</script>

<style scoped>
.well{
    width: 100%;
    box-sizing: border-box;
    padding: 20px;
    margin-top: 20px;
    background-color: #f5f5f5;
    border:1px solid #e3e3e3;
    border-radius: 6px;
    box-shadow: 1px 1px 5px #666;
}
.well p {
    font-size: 14px;
}
</style>