<template>
    <div class='content'>
        <div class="blog">
            <div class="blog-head">
                <div>
                    当前位置：<router-link to="/home/idnex" tag='a'>博客首页</router-link>>><router-link to="/map" tag='a'>博客列表</router-link>>>阅读征文
                </div>
                <h3 class="blog-title">{{ blog.title }}</h3>
                <div>
                    作者：李恭兆 发布于 <span>{{ blog.ctime | toDate}}</span> 浏览({{
                    blog.views
                    }})
                </div>
            </div>
            <div class="blog-content" v-html="blog.content"></div>
        </div>
        <liuyan :title='blog.title' :blogid="blogid"  @replay='replay' />
        <subly ref='subly' :title='blog.title' :blogid='blogid' :parentId='parentId' :parentName='parentName' />
    </div>
</template>
<script>
import liuyan from '../components/liuyan.vue'
import subly from '../components/subly.vue'
export default {
    data () {
        return {
            blogid: this.$route.params.id,
            parentId: -1,
            parentName: null,
            blog:{ title:''}
        }
    },
    components:{ liuyan, subly},
    created() {
        this.getBlog();
    },
     methods: {
        replay(id, username) {
            this.parentId = id;
            this.parentName = username
            this.$refs.subly.getFoucs()
        },
        getBlog() {
             this.$axios.get( "getBlogById?id=" + this.blogid).then(res => {
                 if (res.status == 200) {
                     this.blog = res.data.data[0];
                 }
             });
         },
    },
}
</script>

<style scoped>
.blog{
    background-color: white;
    text-align: left;
    width: 100%;
    border-radius: 6px;
    box-sizing: border-box;
    box-shadow: 3px 4px 3px #888;
    margin-top: 25px;
    padding: 20px;
}
.blog-head a{color: #337ab7}
.blog-head{
    padding-bottom: 20px;
    border-bottom: 1px solid #b9b9b9;
}
.blog-content{
    margin-top: 20px;
}
.blog-content>p{
    line-height: 23px;
}
</style>