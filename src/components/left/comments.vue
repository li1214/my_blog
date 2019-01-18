<template>
    <div class="right-box" style="margin-top:25px" v-if='comments.length > 0'>
        <h4 :style="{color:color}">最新评论</h4>
        <div class="contents">
            <div class="item" v-for="item in comments">
                <router-link :to="item.link" tag='div'>
                <div class="item-title">
                        <span>{{ item.username }}</span>
                        <span class="spanr">[{{ item.ctime | toDate }}]</span>
                </div>
                <p class="item-comtebt">{{ item.text }}</p>
                </router-link>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props:['color'],
        data () {
            return {
                comments:[]
            }
        },
        created() {
            this.getNewsComments();
        },
        methods: {
            getNewsComments() {
                this.$axios.get("selectNewComments").then(res => {
                    if (res.status == 200) {
                        var data = res.data.data;
                        for (var i in data) {
                            if (data[i]["blog_id"] == -2) {
                                data[i]["link"] = "/home/liuyan";
                            } else if (data[i]["blog_id"] == -1) {
                                data[i]["link"] = "/home/about";
                            } else {
                                data[i]["link"] = "/home/blog/" + data[i]["blog_id"];
                            }
                        }
                        this.comments = data;
                    }
                });
            },
        },
    }
</script>

<style scoped >

.right-box .item {cursor: pointer;}
.right-box .item .item-title{position: relative;}
.right-box .item .item-title span{display: inline-block;font-size: 14px;font-weight: normal;}
.right-box .item .item-title span.spanr{
    position: absolute;
    right: 10px;
}
.item-comtebt{color: #777;font-size: 14px;transition: color 0.5s;}
.item-comtebt:hover{color: #337ab7}
</style>