<template>
    <div>
        <img src="./img/20191011 (33).png" alt="">
        <p>你好111</p>
        <span class="iconfont icongongyubaoxiu"></span>
    </div>
</template>
<script>
    export default {
        data() {
            return {}
        },
        mounted() {

            let obj = {
                man:{
                    sex: 'man',
                    age: 6
                }
            };

            console.log( obj?.woman?.name );

            // ?. 操作符
        }
    }
</script>
<style lang='scss'>
    @import './scss/app.scss';
</style>