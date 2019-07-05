<template>
<div v-if = "downlist.length">
    <!-- 首页下半部分商品列表 -->
    <div class="product-content" 
        v-for = "(allitem,index) in downlist"
        :key = "allitem.id">
        <Homebigimg 
            v-if = "index%2 ==0"
            :imgUrl="allitem.items[0].imgUrl"></Homebigimg>
        <div class="goods-list"
            v-else>
            <Productitem           
            :smalllist = "allitem"></Productitem>
        </div>
        
    </div>
</div>
    
</template>

<script>
import Homebigimg from './Homebigimg'
import Productitem from './Productitem'

import http from '../../utils/http'
import axios from 'axios'

export default {
    props : ['downlist'],
    components:{
        Homebigimg,
        Productitem
    }
    
}
</script>

<style lang="stylus">
.product-content    
    .goods-list
        display flex
        padding 0 .2rem .2rem .28rem
        .pro-box
            display flex
            overflow visible
            flex-flow row wrap
            .product-signal
                width 2.26rem
                height 3.46rem
                margin-top .28rem
                margin-right .08rem
                img
                    width 2.26rem
                    height 2.26rem
                .add-cart
                    width .66rem
                    height .54rem
                    line-height .54rem
                    text-align center
                    position relative
                    .cartimg
                        position absolute
                        right .26rem
                        top -0.26rem
                        
                

        
    
</style>