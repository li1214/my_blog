new Vue({
    el:"#app",
    data () {
        return {
            type:'blog'
        }
    },
    created() {
        this.createEditor();
    },
    computed: {
        createEditor () {
            return function(){
                var E = window.wangEditor;
                var editor = new E("#blog");
                editor.create();
            }
        }
    },
})