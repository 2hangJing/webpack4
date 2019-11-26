<template>
    <div>
        <h1>{{ this.vuex.VUEX_homeTitle }}</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
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
        }
    }
</script>
<style lang='scss'>
    @import '../scss/home.scss';
</style>