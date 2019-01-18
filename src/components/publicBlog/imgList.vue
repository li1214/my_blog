<template>
    <ul class='list'>
        <li v-for='item in imgs'><img :src='item.url'><span>url:{{item.url}}</span></li>
    </ul>
</template>
<script>
export default {
    data (){
        return {
            imgs:[]
        }
    },
    created() {
        this.$axios.get('selectImg').then(res => {
            if(res.status == 200){
                var d = res.data.data;
                for(var i in d){
                    d[i]['url'] = '/' + d[i].path + '.' + d[i].type
                }
                this.imgs = d
            }
        })
    },
}
</script>
<style>
    .list{
        padding: 20px;
        list-style: none;
        box-shadow: -1px -1px 23px #555;
        border-radius: 8px;
    }
    .list li {
        overflow: hidden;
        z-index: 0;
        background-color: #fff;
        border: 1px solid #c0ccda;
        border-radius: 6px;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        margin-top: 10px;
        padding: 10px 10px 10px 90px;
        height: 92px;
        -webkit-transition: all .5s cubic-bezier(.55,0,.1,1);
        transition: all .5s cubic-bezier(.55,0,.1,1);
        font-size: 14px;
        color: #606266;
        line-height: 1.8;
        margin-top: 5px;
        position: relative;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
        border-radius: 4px;
        width: 100%;
    }
      .list li img{
            vertical-align: middle;
            display: inline-block;
            width: 70px;
            height: 70px;
            float: left;
            position: relative;
            z-index: 1;
            margin-left: -80px;
      }
      .list li span{
          color: #606266;
            display: block;
            margin-right: 40px;
            overflow: hidden;
            padding-left: 4px;
            text-overflow: ellipsis;
            -webkit-transition: color .3s;
            transition: color .3s;
            white-space: nowrap;
            line-height: 70px;
      }
</style>