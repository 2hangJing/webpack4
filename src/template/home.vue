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
            console.log( this.vuex );
            this.$http.get('/api/web/article/list')
            .then( response =>{
                console.log( response );
            })
        }
    }
</script>
<style lang='scss'>
    @import '../scss/home.scss';
</style>