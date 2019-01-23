<template>
    <ul class='bloglist'>
        <li><a class='titke'>Wow！一共有 {{count}} 篇文章</a></li>
        <li v-for='item in bloglist'><router-link :to="'/home/blog/'+ item.id" :class='{blogitem:item.isBlog,years:!item.isBlog,blog_a:item.isBlog,years_a:!item.isBlog}' tag='a'>{{item.title}}</router-link></li>
    </ul>
    <!-- <el-steps direction="vertical"  :space='40'>
        <el-step v-for = 'item in bloglist' :title="toDate(item.ctime) + ' ' +  (item.title)" status='finish'></el-step>
    </el-steps> -->
</template>
<script>
    export default {
        data () {
            return {
                bloglist: [],
                count:0
            }
        },
        created() {
            this.$axios.get('getAllBlog').then(res => {
                if(res.status == 200){
                    this.count =  res.data.data.length
                    this.dealDate(res.data.data)
                }
            }).catch(e => console.log(e))
        },
        methods: {
            toDate (d) {
                var date = new Date(d * 1000);
                var M, D;
                M =
                    date.getMonth() + 1 > 9
                        ? date.getMonth() + 1
                        : "0" + (date.getMonth() + 1);
                D = date.getDate();
                return  M + "-" + D;
            },
            getYear (d) {
                var date = new Date(d * 1000);
                var Y;
                Y = date.getFullYear();
                return Y
            },
            dealDate (d) {
                var arr = [];
                for (var i in d){
                    if(arr.length === 0){
                        arr.push({title: this.getYear(d[i].ctime),id:null,year:null,isBlog:false})
                    }
                    if(arr.length > 1){
                        let lastYear = arr[arr.length - 1].year
                        let itemYear = this.getYear(d[i].ctime)
                        if(lastYear != itemYear ){
                            arr.push({ title: itemYear, id: null, year: null, isBlog: false })
                        }
                        arr.push({ title: this.toDate(d[i].ctime) + ' ' + d[i].title, id: d[i].id, year: this.getYear(d[i].ctime), isBlog: true })
                    }else{
                        arr.push({ title: this.toDate(d[i].ctime) + ' ' + d[i].title, id: d[i].id, year:this.getYear(d[i].ctime),isBlog: true})
                    }
                }
                this.bloglist = arr;
            }
        },
    }
</script>
<style scoped>
    .bloglist{
        border-left:  2px solid #555;
        /* box-shadow: -1px -1px 23px #555; */
    }
      .years_a{
          display: block;
          padding: 10px 0;
          font-size: 20px;
          font-weight: bold;
          color:#1f1f1f;
          padding-left: 10px;
      }  
     .blog_a{
        display: block;
        padding: 10px 0;
        cursor: pointer;
        color:#1f1f1f;
        transition: color 0.5s;
        border-bottom: 1px #555 dashed;
        padding-left: 10px;
     }
     .titke{
        display: block;
        padding: 15px 0;
        color:#1f1f1f;
        transition: color 0.5s;
        padding-left: 20px;
     }
     .blogitem::before{
         content: '';
         display:inline-block;
         width: 10px;
         height: 10px;
         border-radius: 50%;
         background-color: #555;
         position: relative;
         left: -16px;
     }
     .years::before{
        content: '';
         display:inline-block;
         width: 15px;
         height: 15px;
         border-radius: 50%;
         background-color: #555;
         position: relative;
         left: -19px;
     }
     .blog_a:hover{color: #0F3DB0  }
</style>