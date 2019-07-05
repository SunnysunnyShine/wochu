<template>
<!-- 大图加下方滚动小图 -->
    <div class="scroll-item">
        <div class="temp-list"
            v-if = "promsg.templateType == 17">
            <div class="product-nav">
                <div class="temp-title">
                    <span></span>
                    {{promsg.title}}
                    <span class="line-rt"></span>
                </div>
                <ul>
                    <li>
                        <div class="img-view">
                            <img :src="promsg.items[0].imgUrl" alt="">
                        </div>
                        <div class="goods-item">
                            <p class="goods-item-name">
                                 {{promsg.items[0].goodsName}}</p>
                            <div class="goods-item-intro">
                                 {{promsg.items[0].description}}
                            </div>
                            <div class="goods-item-price">
                                <div class="pricr-wrap">
                                    <div class="real-price">
                                        ¥
                                        <span class="before-point">{{promsg.items[0].price}}</span>
                                        <!-- <span class="after-point">.9</span> -->
                                    </div>
                                    <p class="markt-price">¥{{promsg.items[0].marketPrice}}</p>
                                </div>
                                <div class="add-to-cart">
                                    <img src="http://wmall.wochu.cn/h5/home/vueimg/add.png">
                                </div>
                            </div>
                        </div>
                        
                    </li>
                </ul>    
            </div>
        </div>
        <div class="temp-list"
            v-if = "promsg.templateType == 13">
             <div class="swiper-view">
                <div class="swiper-item">
                    <Productitem
                        :smalllist="scrolllist"></Productitem>
                </div>
            </div>
            
        </div>
    </div>
    
</template>

<script>
    import Productitem from './Productitem'
    export default{
        props:['promsg'],
        data(){
            return{
                scrolllist : []
            }
        },
        components:{
            Productitem
        },
        mounted() {
            console.log(this.promsg)
            this.scrolllist = this.promsg
            console.log(this.scrolllist)
        },
    }
</script>

<style lang="stylus">
.temp-list
    width 100%
    .product-nav
        width 100%
        padding-top .3rem 
        background #f4f4f4 
        .temp-title 
            background-color #fff 
            text-align center 
            font-size .32rem 
            font-weight 600 
            padding .3rem 0 
            line-height .4rem 
            color #001e00 
            border-bottom 1px solid #e5e5e5 
            span 
                width 1.5rem 
                height 1px 
                display inline-block 
                margin 0 0.22rem 
                border-bottom 1px solid #e5e5e5 
        ul 
            background #fff 
            li 
                display flex 
                width 100% 
                height 3.12rem 
                padding .28rem .24rem 
                border-bottom 1px solid #e5e5e5 
                .img-view 
                    height 2.6rem 
                    width 2.6rem 
                    img 
                        width 100% 
                        height 100%
                .goods-item 
                    width 4.34rem 
                    height 100% 
                    padding-left .2rem 
                    .goods-item-name 
                        height 1rem 
                        line-height .36rem 
                        font-size .32rem 
                        font-weight 700 
                        letter-spacing .02rem 
                        overflow hidden 
                        text-overflow ellipsis 
                        padding-top .32rem 
                    .goods-item-intro 
                        width 100% 
                        height .56rem 
                        font-size .26rem 
                        letter-spacing .01rem 
                        overflow hidden 
                        text-overflow ellipsis 
                        margin-bottom .32rem 
                    .goods-item-price 
                        display flex 
                        .pricr-wrap
                            display flex 
                            line-height .5rem 
                            .real-price
                                color #ff5918
                                font-size .3rem
                                .before-point
                                    font-size .4rem
                                .after-point
                                    font-size .26rem
                            .markt-price
                                font-size .24rem
                                text-decoration line-through
                                color #999
                                margin-left .18rem
                                line-height .6rem

                        .add-to-cart
                            flex 1
                            text-align right
                            img
                                width .52rem 
                                height .52rem
    .swiper-view
        box-sizing border-box
        width 100%
        .swiper-item
            width 100%
            display flex
            overflow-x scroll
            min-height 3.26rem!important
            background #fff
            padding .26rem 0 0 .24rem
            font-size 0
            z-index 1
            box-sizing border-box
            .product-signal
                .product-signal
                    margin-right: .36rem
                   
</style>