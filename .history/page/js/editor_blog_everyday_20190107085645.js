new Vue({
    el:"#app",
    data () {
        return {
            type:'blog'
        }
    },
    created() {
        var E = window.wangEditor;
        var editor = new E("#editor");
        editor.create();
    },
})