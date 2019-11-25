<template>
    <div>
        <h1>home</h1>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {
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