<template>
    <!-- 大图 -->
    <div class="big-imglink">
        <img :src="imgUrl" alt="">        
    </div>
</template> 

<script>
    export default {
        props:['imgUrl'],
        data(){
            return{

            }
        },
        // computed: {
        //     bimgUrl(){
        //       return this.imgUrl;  
        //     }
        // },
        mounted() {
            // console.log(this.imgUrl)
        }
         
    }
</script>

<style lang="stylus">
    .big-imglink
        background-color #f8f8f8
        img
            width 7.5rem
            height 3.04rem
            margin-bottom .08rem
</style>