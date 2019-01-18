<template>
    <div class="right-box" style="margin-top:25px;">
        <h4 :style='{color:color}'>随机标签云</h4>
        <p class="contents">
            <a v-for='tag in tags' v-bind:style='{color:randomColor(),fontSize:randomSize()}' @click='toIndex(tag.tag)'>{{tag.tag}}</a>
        </p>
    </div>
</template>
<script>
export default {
    props:['color'],
    data () {
        return {
            tags:[]
        }
    },
    computed: {
        randomColor() {
            return function () {
                var red = Math.random() * 255 + 50;
                var green = Math.random() * 255 + 50;
                var blue = Math.random() * 255 + 50;
                return "rgba(" + red + " ," + green + "," + blue + ")";
            };
        },
        randomSize() {
            return function () {
                return Math.random() * 20 + 12 + "px";
            };
        }
    },
    created() {
        this.getTags();
    },
    methods: {
        toIndex () {
            console.log(arguments)
        },
        getTags() {
            this.$axios.get("selectRandomTag").then(res => {
                if (res.status == 200) {
                    var data = res.data.data;
                    for (var i in data) {
                        data[i].link = "/home/blog/" + data[i].id;
                    }
                    this.tags = data;
                }
            });
        },
    },
}
</script>
