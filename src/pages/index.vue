<template>
    <div class="content">
        <div class="mainCon">
            <!-- <homemain></homemain>  -->
            <router-view></router-view>
        </div>
       
        <!-- <main>
             内容          
        </main> -->
        <nav class="footer">
            <ul>
                <router-link class="indexCut" tag="li" to="/home" active-class='active'>
                    <i></i>
                    <span>首页</span>
                </router-link>
                <router-link class="selectCut" tag="li" to="/select" active-class='active'>
                    <i></i>
                    <span>分类</span>
                </router-link>
                <router-link class="shopingCut" tag="li" to="/cart" active-class='active'>
                    <i></i>
                    <span>购物车</span>
                </router-link>
                <router-link class="personCut" tag="li" to="/user" active-class='active'>
                    <i></i>
                    <span>我的</span>
                </router-link>
            </ul>
        </nav>

    </div>
    
</template>
<script>
// import homemain from './home/Homemain'
export default {
    data() {
        return {
            
        }
    },
    // components : {
    //     homemain
    // }
}
</script>


<style lang="stylus">
body 
    width 100%
    height 100%
    .content
        position relative
        display flex
        flex-direction column
        width 100%
        height 100%  
        .mainCon 
            flex 1
            overflow hidden
        .footer
            width 100% 
            height 1rem
            margin 0 auto
            background-color #fff
            padding .08rem 0 .06rem
            z-index 500
            left 0 
            ul
                display flex
                width 100%
                list-style none
                li
                    flex 1
                    font-size .22rem
                    line-height .44rem
                    text-align center
                    align-items center
                    justify-content center
                    vertical-algn middle
                    color: #5d8640;
                    i
                        display block
                        width .58rem
                        height .58rem
                        margin 0 auto                       
                    span
                        line-height 1
                .indexCut
                    >i
                        background url('http://wmall.wochu.cn/h5/img/vueCommon/index_n.png') no-repeat bottom       
                        background-size cover
                    &.active
                        >i 
                            background url('http://wmall.wochu.cn/h5/img/vueCommon/index_r.png') no-repeat bottom                
                            background-size cover                        
                .selectCut
                    >i
                        background url('http://wmall.wochu.cn/h5/img/vueCommon/shopping_n.png') no-repeat bottom            
                        background-size cover
                    &.active
                        >i 
                            background url('http://wmall.wochu.cn/h5/img/vueCommon/shopping_r.png') no-repeat bottom                
                            background-size cover
                .shopingCut
                    >i
                        background url('http://wmall.wochu.cn/h5/img/vueCommon/cart_n.png') no-repeat bottom            
                        background-size cover
                    &.active
                        >i 
                            background url('http://wmall.wochu.cn/h5/img/vueCommon/cart_r.png') no-repeat bottom                
                            background-size cover
                .personCut
                    >i
                        background url('http://wmall.wochu.cn/h5/img/vueCommon/my_n.png') no-repeat bottom            
                        background-size cover
                    &.active
                        >i 
                            background url('http://wmall.wochu.cn/h5/img/vueCommon/my_r.png') no-repeat bottom                
                            background-size cover
                        
                        
                    

</style>