<template>
    <div class="blog">
        <router-link :to='blog.link' tag='a'>
            <h3>{{blog.title}}</h3>
        </router-link>
        <p v-html='blog.content' class='blog-item'></p>
        <div class="blog-foot">
            <template>发布于 {{blog.ctime | toDate}} | 浏览({{blog.views}}) | Tags：{{blog.tags | tagfliter}}</template>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['blog'],
        filters: {
            tagfliter(d) {
                return d.replace(/\,/g, " ");
            }
        }
    }
</script>
<style>
    .blog-list .blog {
        width: 100%;
        border: 1px solid #333;
        border-radius: 6px;
        box-sizing: border-box;
        margin-top: 20px;
        box-shadow: 2px 2px 2px #333;
    }

    .blog-list .blog h3 {
        padding: 0 10px;
        color: #13102b;
        transition: color 0.5s;
    }

    .blog-list .blog h3:hover {
        color: #337ab7;
        cursor: pointer;
    }

    .blog-list .blog p {
        padding: 0 10px;
        font-size: 14px;
        color: #1f1f1f;
        line-height: 20px;
    }

    .blog-list .blog .blog-foot {
        background-color: #1f1f1f;
        padding: 5px 10px;
        color: #eee;
        font-size: 14px;
    }
</style>