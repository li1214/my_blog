<template>
    <div class="right-box" style="margin-top:25px">
        <h4 :style="{color:color}">友情链接</h4>
        <div class="contents">
            <ul class="list-group">
                <li class="list-group-item" v-for="item in links" :key="item.id">
                    <a :href="item.link">{{ item.title }}</a>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        props:['color'],
        data () {
            return {
                links:[
                    {id:0,title:'js原生空当接龙游戏',link:'http://www.li1214.xyz/cardGame/index.html'},
                    { id: 1, title: 'vue的消消乐游戏组件', link: 'http://www.li1214.xyz/popstart' },
                    { id: 2, title: 'javaScript冷知识', link: 'https://github.com/li1214/javaScript-notes/blob/master/%E4%BD%A0%E7%9C%9F%E7%9A%84%E4%BA%86%E8%A7%A3js%E5%90%97%3F.md' },
                ]
            }
        }
    }
</script>
<style scoped>
.list-group-item {
    padding: 10px 0;
  }
  .right-box .contents li a {
    font-size: 14px;
    display: inline-block;
    color: #eee;
    padding: 5px 0;
    transition: color 0.5s;
  }
  .right-box .contents li a:hover {
    color: #337ab7;
  }
</style>