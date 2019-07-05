<template>
   <div>
       <div class="list-wrap">
            <div class="select-signal"
                v-for = "item in rightCurrent"
                :key = "item.id">
                <img :src="item.checkicon" alt="">
                <p>{{item.name}}</p>
            </div> 
            
        </div>
   </div>
</template>
   
<script>
import axios from 'axios'
export default {
    props : ['rightCurrent'],
}
</script>

<style lang="stylus">
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
</style>
