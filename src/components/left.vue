<template>
    <div>
        <keep-alive>
            <tags :color='color' />
        </keep-alive>
        <keep-alive>
            <hots :color='color' />
        </keep-alive>
        <comments :color='color' />
        <keep-alive>
            <links :color='color' />
        </keep-alive>
    </div>
</template>
<script>
    import tags from './left/tags.vue'
    import comments from './left/comments.vue'
    import hots from './left/hots.vue'
    import links from './left/links.vue'
    export default {
        components:{
            tags,
            comments,
            hots,
            links
        },
        data (){
            return {
                color: 'rgb(0,255,255)'
            }
        },
    }
</script>
<style>
.right-box{
    background-color: #1f1f1f;
    box-sizing: border-box;
    border-radius: 6px;
    padding: 10px ;
}
.right-box .contents{
    color: #eee;
    padding: 0 10px 0px 10px;
    word-wrap: break-word;
    word-break:break-all;
}
</style>