<template>
    <ul class='bloglist'>
        <li v-for='item in bloglist'><router-link :to="'/home/index/'+ item.id" tag='a'>{{item.title}}</router-link></li>
    </ul>
</template>
<script>
    export default {
        data () {
            return {
                bloglist: []
            }
        },
        created() {
            this.$axios.get('getAllBlog').then(res => {
                if(res.status == 200){
                    this.bloglist = res.data.data
                }
            }).catch(e => console.log(e))
        },
    }
</script>
<style scoped>
    .bloglist{
        padding: 20px;
        margin-top: 25px;
        border-radius: 8px;
        box-shadow: -1px -1px 23px #555;
    }
     .bloglist li a{
        display: block;
        padding: 5px 0;
        cursor: pointer;
        color:#1f1f1f;
        transition: color 0.5s;
     }
     .bloglist li a:hover{color: #0F3DB0  }
</style>