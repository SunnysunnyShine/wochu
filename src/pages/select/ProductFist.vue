<template>
    <div class="scroller">
        <div class="pro-content"
            v-for = "items in productmsg"
            :key = "items.id">
            <div class="title-wrap">
                <div class="float-wrap">
                    <span class="left-line"> </span>
                    <h3>
                        {{items.name}}
                    </h3>
                    <span class="right-line"></span>
                </div>
            </div>
            <div class="list-wrap">
                <div class="select-signal"
                    v-for = "item in items.children"
                    :key = "item.id">
                    <img :src="item.imgUrl" alt="">
                    <p>{{item.name}}</p>
                </div> 
            
            </div>
            <div class="under">   
                 
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            productmsg : []
        }
    },
    async created() {
        let result = await axios({
            url : 'http://api9.wochu.cn/client/v1/goods/GetCategoryRecommendList',
            methods : 'GET' 
        })
        .then((result)=>{
            return result.data
        })
        this.productmsg = result.data
        console.log(this.productmsg)
    },
   
}
</script>

<style lang="stylus">
    .scroller
        width 100%
        height 100%
        overflow-y scroll
        .pro-content
            display block!important
            .title-wrap
                position relative
                width 100%
                height .9rem
                text-align center
                overflow hidden
                background-color #fff
                .float-wrap
                    display flex
                    justify-content center
                    .left-line,
                    .right-line
                        display block
                        height .52rem
                        width .5rem
                        border-bottom .01rem solid #e5e5e5
                    .left-line
                        margin-right .2rem
                    .right-line
                        margin-left .2rem                       
                    h3
                        height .9rem
                        color #011e00
                        font-size .28rem
                        line-height 1rem
                        text-align center
                        font-weight 550
            .list-wrap
                width 100%
                display flex
                flex-wrap wrap
                padding .2rem .02rem 0 .22rem
                background #fff
                .select-signal 
                    width 1.58rem
                    margin-right .22rem
                    height 2.2rem
                    text-align center
                    img     
                        width 1rem
                        height 1rem
                    p 
                        width 1rem
                        height .86rem
                        font-size .24rem
                        color #666
                        line-height .34rem
                        padding-top .2rem
                        margin-left .29rem
                        overflow hidden
            .under
                width 100%
                height .22rem
                background #f4f5f7


</style>
