<template>
    <div class="pro-box">
        <div class="product-signal" 
            v-for = "item in smalllist.items"
            :key = item.id>
            <img :src="item.imgUrl" alt="">
            <div class="group-name">
                {{item.goodsName}}
            </div>
            <div class="m-price">
                {{item.marketPrice}}
               
            </div>
            <div class="o-price">
                 {{item.price}}
            </div>
            <div class="add-cart">
                <img class="cartimg" src="http://wmall.wochu.cn/h5/home/vueimg/add.png">
            </div>
        </div>
    </div>
    
</template>

<script>
    export default{
        props:['smalllist'],
        mounted() {
            console.log('滑动商品池')
             console.log(this.smalllist)
            
        },
    }
</script>

<style lang="stylus">
    .pro-box
        display flex
        width 100%
        overflow-x scroll
        .product-signal
            height: 3.52rem
            width: 1.9rem
            position: relative
            vertical-align: top
            img
                width 100%
            .group-name
                font-size .24rem
                margin-top .24rem
                width 1.9rem
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
            .m-price
                    height .24rem
                    margin-top .14rem
                    font-size .2rem
                    color #bababa
                    text-decoration line-through
            .o-price
                    height .24rem
                    margin-top .1rem
                    font-size .24rem
                    color #001e00
                    line-height .24rem
            .add-cart
                position absolute
                bottom .28rem
                left 1.42rem
                width .38rem
                img 
                    width .48rem!important
                    height .48rem!important
                    position absolute
                    right .36rem
                    top -.48rem

</style>