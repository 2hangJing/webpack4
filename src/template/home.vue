<template>
    <div>
        <h1 class="homeH1 testPublic">{{ this.vuex.VUEX_homeTitle }}</h1>
        <p @click='showData'>显示输出数据</p>
        <div v-html='jsHtml'></div>
        <mavon-editor ref=md @save='save' @imgAdd="$imgAdd" v-model="value" />
    </div>
</template>
<script>
    import marked from 'marked';
    export default {
        data() {
            return {
                value: '',
                jsHtml: ''
            }
        },
        computed:{
            vuex(){
                return this.$store.state.module_home;
            }
        },
        mounted() {

            this.$http.get('/api/web/article/list')
            .then( response =>{
                console.log( response );

                console.log( this.$store.commit('modify_VUEX_homeTitle', 'mutation 提交') );
            })
        },
        methods:{
            // 绑定@imgAdd event
            $imgAdd(pos, $file){
                // 第一步.将图片上传到服务器.
                var formdata = new FormData();
                formdata.append('file', $file);
                this.$http({
                    url: 'https://www.ismoon.cn/api/upload/img',
                    method: 'post',
                    data: formdata,
                    headers: { 'Content-Type': 'multipart/form-data' },
                }).then((data) => {
                    
                    // 第二步.将返回的url替换到文本原位置![...](0) -> ![...](url)
                    /**
                    * $vm 指为mavonEditor实例，可以通过如下两种方式获取
                    * 1. 通过引入对象获取: `import {mavonEditor} from ...` 等方式引入后，`$vm`为`mavonEditor`
                    * 2. 通过$refs获取: html声明ref : `<mavon-editor ref=md ></mavon-editor>，`$vm`为 `this.$refs.md`
                    */
                    this.$refs.md.$img2Url(pos, data.data.thumbnailImg);
                })
            },
            showData(){
                console.log( this.value );
            },
            save(boolean, md){

                let that = this;
                marked.setOptions({
                    highlight(code, lang, callback) {
                        return that.$hljs.highlightAuto(code).value
                    }
                })
                let html = marked(md);
                
                this.jsHtml =  html;
                
            }
        }
    }
</script>
<style lang='scss'>
    @import '../scss/home.scss';
</style>