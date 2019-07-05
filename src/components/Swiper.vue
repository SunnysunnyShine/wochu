<!-- 轮播图插件 -->
<template>
    <div class="swiper-container">
        <div class="swiper-wrapper"
            v-if ="navCarousel">
            <div class="swiper-slide"
                v-for = "sitems in list">
                <img :src="sitems.picUrl" alt="">
            </div>
            
        </div>
         <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
    
    </div>
</template>

<script>
import Swiper from 'swiper'
    export default{
        props:['navCarousel'],
        data(){
            return {
                list : this.navCarousel
            }
        },
        async mounted() {
            console.log(this.list)
            var swiper = await new Swiper('.swiper-container',{
                direction :'horizontal',
                loop : true,
                autoplay : true,
                pagination: {
                    el: '.swiper-pagination',
                }
            })              
        }      
    }

</script>

<style lang="stylus">   
@import '../../node_modules/swiper/dist/css/swiper.css'
    .swiper-container 
        img
            width 7.5rem
            height 3.32rem
</style>