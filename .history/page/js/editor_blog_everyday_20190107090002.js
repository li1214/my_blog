new Vue({
    el:"#app",
    data () {
        return {
            type:''
        }
    },
    created() {
        createEditor();
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