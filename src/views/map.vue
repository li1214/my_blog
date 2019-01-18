<template>
    <div>
        <ul>
            <li v-for='item in bloglist'><a :href='item.link'>{{item.title}}</a></li>
        </ul>
    </div>
</template>
<script>
    import bloglist from '../bloglist.js'
    export default {
        data () {
            return {
                bloglist: bloglist
            }
        }
    }
</script>