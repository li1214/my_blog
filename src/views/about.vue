<template>
    <div class='content'>
        <div class="about">
            <div class="about-me">
                <h4>关于我</h4>
                <p>博主郑晓，zx，性别男，山东青岛即墨区人。</p>
                <p>博主郑晓，zx，性别男，山东青岛即墨区人。</p>
                <p>博主郑晓，zx，性别男，山东青岛即墨区人。</p>
                <p>博主郑晓，zx，性别男，山东青岛即墨区人。</p>
                <p>博主郑晓，zx，性别男，山东青岛即墨区人。</p>
                <p>博主郑晓，zx，性别男，山东青岛即墨区人。</p>
            </div>
            <div class="about-blog">
                <h4>关于博客</h4>
                <p style="line-height: 25px;">
                    从2009年 – 今 博主很懒加词穷，佛系更新… 域名 zhengoo.cn ->
                    zh30.com 程序 tcms -> WordPress 服务器 免费空间 -> 国内某收费空间
                    -> 国外vps -> 阿里云 推荐便宜又稳定的xen-VPS吧: HostShare kvm
                    vps:hostEONS 洛杉矶节点，我在用，速度可以，可以干一些羞羞的事。
                </p>
            </div>
        </div>
        <liuyan :title='"关于"' :blogid="-1"  @replay='replay' />
        <subly :title='"关于"' :blogid='-1' :parentId='parentId' :parentName='parentName' />
    </div>
</template>
<script>
    import liuyan from '../components/liuyan.vue'
    import subly from '../components/subly.vue'
export default {
    components:{ liuyan, subly},
    data () {
        return {
            parentId:-1,
            parentName:null,
        }
    },
    methods: {
        replay (id,username) {
            this.parentId = id;
            this.parentName = usernmae
        }
    },
}
</script>