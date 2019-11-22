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
            // ?. 操作符
            console.log( obj?.woman?.name );
        
            //  flat 操作符，扁平化数组
            let arr = [1,2,3,[4,5,[6,7,8]]];

            console.log( arr.flat(2) );
            
        }
    }
</script>
<style lang='scss'>
    @import './scss/app.scss';
</style>