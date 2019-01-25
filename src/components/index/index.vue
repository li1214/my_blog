<template>
    <el-row>
        <everyday />
        <div class="blog-list">
            <blog-item v-for='item in list' :blog='item'></blog-item>
            <el-pagination v-if='count/pagesize > 1' background layout="prev, pager, next" :pageSize='pagesize' :total="count" @current-change='changepage' style='margin-top: 20px' />
        </div>
    </el-row>
</template>
<script>
    import everyday from './everyday.vue'
    import blogItem from './blogitem.vue'
export default {
    components: { everyday, blogItem },
     data() {
        return {
            page: 1,
            pagesize:5,
            count:0,
            list: [],
            keyword: this.$route.query.keyword,
            tag:this.$route.query.tag
        }
    },
    created() {
        this.getBlogList();
    },
    methods: {
        changepage(i) {
            this.page = i;
            this.getBlogList()
        },
        getBlogList () {
            if(this.keyword && this.keyword != undefined){
                this.getBlogListByKeyword()
            }else if(this.tag && this.tag != undefined){
                this.getBlogListByTag()
            }else{
                this.$axios.get('getBlog',{params:{page:this.page,pagesize:this.pagesize}}).then(res => {
                    if (res.status == "200") {
                        var data = res.data.data.data;
                        for (var i in data) {
                            data[i]["link"] = "/home/blog/" + data[i]["id"];
                        }
                        this.list = data;
                        this.count = res.data.data.count;
                    }
                }).catch(e => console.log(e))
            }
        },
        getBlogListByTag () {
            this.$axios.get('selectByTag',{params:{tag:this.tag,page:this.page,pagesize:this.pagesize}}).then(res => {
                if (res.status == "200") {
                    var data = res.data.data;
                    for (var i in data) {
                        data[i]["link"] = "/home/blog/" + data[i]["id"];
                    }
                    this.list = data;
                    this.getBlogCountByTag();
                }
            }).catch(e => console.log(e))
        },
        getBlogListByKeyword () {

        },
        getBlogCountByTag () {
            this.$axios.get("selectTagCount?tag=" + this.tag).then(res => {
                if(res.status == 200){
                    this.count = res.data.data[0].count;
                }
            }).catch(e => console.log(e))
        }
    },
    watch: {
        $route () {
            this.tag = this.$route.query.tag
        }, 
        tag : function () {
            this.getBlogList()
        }
    },
}
</script>
<style scoped>
.blog-list{position: relative;}
</style>