<template name='liuyanlist'>
    <div class="liuyan">
        <span>{{title}}：目前{{ commentsCount }} </span>
        <div class="liuyan-item" v-for="item in commentsList">
            <span><b>{{ item.nickname }}</b>：发表于 {{ item.ctime | toDate }}
                <span class="reply" @click="replay(item.id,item.username)"> [ 回复 ] </span>
                </span>
            <p>{{ item.text }}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'liuyanlist',
    props:['title','blogid'],
    data () {
        return {
            commentsList:[],
            commentsCount:'没有留言'
        }
    },
    created() {
        this.getCommentsCount()
        this.getComments();
    },
    methods:{
        replay (id, username) {
            this.$emit('replay',id, username)
        },
        getComments() {
            this.$axios.get("selcetByBlogId?blogid=" + this.blogid).then(res => {
                if (res.status == 200) {
                    var data = res.data.data;
                    for (var i in data) {
                        if (data[i]['parent'] > 0) {
                            data[i].nickname = data[i].username + ' 回复@ ' + data[i]['parent_name'];
                        } else {
                            data[i].nickname = data[i].username
                        }
                    }
                    this.commentsList = data
                }
            });
        },
        getCommentsCount() {
            this.$axios.get("selectCountByBlogId?blogid=" + this.blogid).then(res => {
                if (res.status == 200) {
                    this.commentsCount = '有' + res.data.data[0].count + '条留言';
                }
            });
        },
    },
    watch: {
        blogid () {
            this.getComments();
            this.getCommentsCount();
        }
    },
}
</script>
<style scoped>
.liuyan{
    margin-top: 20px;
}
.liuyan-item{
    width: 100%;
    border:1px #7ca4c1 dashed;
    background-color: #d9edf7;
    margin-top: 15px;
    padding: 20px;
    box-sizing: border-box;
}
.liuyan-item span,.liuyan-item p{
    font-size: 14px;
    color: #31708f;
}
.reply{cursor: pointer;}
</style>