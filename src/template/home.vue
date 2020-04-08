<template>
    <div>
        <h1>{{ this.vuex.VUEX_homeTitle }}</h1>
        <p @click='showData'>显示输出数据</p>
        <div v-html='jsHtml'></div>
        <mavon-editor @htmlCode='htmlCode' v-model="value"/>
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
            showData(){
                console.log( this.value );
            },
            htmlCode(boolean, md){

                let that = this;
                marked.setOptions({
                    highlight(code, lang, callback) {
                        return that.$hljs.highlight('javascript', code).value
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