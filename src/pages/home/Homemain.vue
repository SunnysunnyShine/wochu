<template>
    <div class="index-content">
        <!-- 顶部定位及搜索 -->
        <header class="nav-content">
                <div class="logo">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/wochuLogo.png" alt="">
                </div>
                <div class="addr">
                    <p class="addr-detail">
                        请填写地址
                    </p>
                    <span>
                        <img src="http://wmall.wochu.cn/h5/home/vueimg/icon.png" alt="">
                    </span>
                </div>
                <div class="search-btn">
                    <img src="http://wmall.wochu.cn/h5/home/vueimg/search.png" alt="">
                </div>
            </header>
        <div class="main-content">
            <div class="m-content">
                <div class="swiper">
                    <!-- 使用轮播图插件 -->
                    <SwiperItem 
                    v-if = "navCarousel.length"
                    :navCarousel="navCarousel"></SwiperItem>
                </div>
                <!-- 首页中间的图片导航 -->
                <div class="main-nav">
                    <ul v-for="itemAll in navRecomend"
                        :key = "itemAll.id">
                        <li v-for="item in itemAll.items"
                            :key = "item.id">
                            <img :src="item.imgUrl" alt="">
                        </li>
                    </ul>
                </div> 
                <div class="goods-item-list">
                    豆腐
                </div>
                <!-- 根据templateType选择要填充的模板类型 -->
                <div class="goods-item-list" 
                    v-for= "item in uplist"
                    :key = item.id>
                    <!-- 大图 -->
                    <homebigimg 
                        v-if = "item.templateType == 4"
                        :imgUrl = 'item.items[0].imgUrl'></homebigimg>
                    <!-- 大商品加滑动商品 -->
                    <titleproduct
                        v-if="item.templateType == 17 || item.templateType == 13"
                        :promsg="item"></titleproduct>

                    <!-- 三张图片 -->
                    <div class="img-three"
                        v-if="item.templateType == 16">
                        <div class="left-view">
                            <img src="https://img.wochu.cn/upload/cb90c5b7-04f1-4da3-9f64-f9682f31287d.jpg">
                        </div>
                        <div class="right-view">
                            <div class="top-view">
                                <img src="https://img.wochu.cn/upload/6148ed94-ee8f-4076-b238-1382425763bc.jpg" lazy="loaded">
                            </div>
                            <div class="under-view">
                                <img src="https://img.wochu.cn/upload/9c33a199-3bec-4959-9986-9232a943084a.jpg" lazy="loaded">
                            </div>
                        </div>
                    </div>
                </div> 

                <!-- 下方总的商品列表 -->
                <Homeproduct
                 :downlist = "downlist"></Homeproduct>
                      
            </div>
            
        </div>
    </div>   
</template>

<script>
import SwiperItem from '../../components/Swiper'
import http from '../../utils/http'
import axios from 'axios'


import homebigimg from './Homebigimg'
import Homeproduct from './Homeproduct'
import titleproduct from './Titleproduct'


    export default {
        data() {
            return {
                navCarousel : [],
                navRecomend : [],
                proResult : [],
                uplist : [],
                downlist : []
            }
        },
      
        async created(){  
            // 轮播图及中间导航部分数据
            let navResult = await axios({
                url: 'http://api9.wochu.cn/client/v1/app/layoutamend',
                method: 'GET',
                params:{
                    parameters : {version:"10.0.0",source:"H"}
                }
            }).then((result) => {
                return result.data
            })
            //console.log(navResult.data)
            //轮播图数据
            this.navCarousel = navResult.data.carousel
            //console.log(this.navCarousel)
            // 中间导航图片
            this.navRecomend = navResult.data.recommendedContent
            //console.log(this.navRecomend)

            //余下商品详情数据
             // 商品数据
            let proResult = await axios({
                url: 'http://api9.wochu.cn/api/app/acts?version=20.0.0&source=H',
                method: 'GET'
            }).then((result) => {
                return result.data
            })
            console.log(proResult)
            this.proArray = proResult.data.acts;
            
            for(let i = 1; i < this.proArray.length ;i++){
                if(i < 8){
                    this.uplist.push(this.proArray[i])
                }else{
                    this.downlist.push(this.proArray[i])
                }     
            }    
            // console.log(this.proArray)
            // console.log(this.uplist)
            // console.log(this.downlist)
            
            
        },
        components:{
            SwiperItem,
            homebigimg,
            titleproduct,
            Homeproduct
        }

    }
    
</script>
   
<style lang="stylus">
    .index-content
        position relative
        display flex
        width 100%
        height 100%
        overflow-y  scroll
        flex-direction column
        .nav-content
            display flex
            position fixed
            width 100%
            height .9rem
            line-height .9rem
            padding 0 .24rem
            background #fff
            z-index 3
            top 0
            left 0
            .logo
                position relative
                margin-right .3rem
                line-height 1
                img
                    vertical-align middle
                    width .88rem
                    margin-top .25rem
            .addr
                display flex
                width 3.5rem
                font-size .3rem
                color #1f6117
                p
                    text-align center
                    width 2rem
                    overflow hidden
                    text-overflow ellipsis
                    white-space nowrap
                    height .9rem
                span
                    img
                        width .15rem
                        vertical-align 6%
            .search-btn
                position absolute
                right .24rem
                width .8rem
                font-size .26rem
                color #666
                text-align right
                img
                    width .36rem
                    height auto

        .main-content
            position relative
            top .9rem
            left 0
            flex 1
            background-color #fff
            .swiper
                width 100%
                height 3.32rem
            .main-nav
                width 100%
                padding .14rem 0 .2rem .14rem
                ul
                    display flex
                    flex-decrition row
                    li
                        width 1.7rem
                        height 1.7rem
                        float left
                        margin 0 .14rem .14rem 0
                        img
                            width 1.7rem
                            height 1.7rem
            .goods-item-list
                .img-three
                    display flex
                    padding .3rem .2rem 0
                    background #f4f4f4
                    .left-view,
                    .right-view
                        background #fff
                        width 3.5rem
                        height 5.2rem
                        border-radius .06rem
                        img 
                            border-radius .06rem
                            width 100%
                            height 100%
                    .right-view
                        margin-left .1rem

                


          
</style>