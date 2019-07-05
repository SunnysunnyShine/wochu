<template>
    <div class="pro-classify">
        <header class="classify-header">
            <div class="search-box">
                <img src="http://wmall.wochu.cn/h5/classify/img/icon-search-40@2x.png" alt="">
                <div class="search-key">
                    <span>支持首字母搜索</span>
                </div>
            </div>
            <div class="shadowWrap"></div>
        </header>
        <div class="two-main">
            <nav class="nav-wrap">
                <Navwrap 
                    :leftList = "leftList"
                    @childrenClick = "childrenClick"></Navwrap>
            </nav>
            <!-- 右边商品列表 -->
            <div class="wrapper">              
                <Productfirst
                v-if = "this.rightId===0"></Productfirst>
                <Otherproduct v-else
                :rightCurrent = "rightCurrent">
                </Otherproduct>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

import Navwrap from './Navwrap'
import Productfirst from './ProductFist'
import Otherproduct from './Otherproduct'

export default {
    data() {
        return {
            proList : [],
            leftList : [],
            rightList : [],
            list:[],
            rightId : 0,
            rightCurrent:[]
        }
    },
    components :{
        Navwrap,
        Productfirst,
        Otherproduct
    },
    async created() {
      let List = await axios({
                url: 'http://api9.wochu.cn/client/v1/goods/GetCategoryListByMenuId',
                method: 'GET',
                params:{
                    parameters : {"menu":0}
                }
            }).then((result) => {
                return result.data
            })
            this.proList = List.data
            for(let i in this.proList){
                if(this.proList[i].id < 50)
                    this.leftList.push(this.proList[i])
                else
                    this.rightList.push(this.proList[i])

            }
            // console.log(this.proList)
            // console.log(this.leftList)
            // console.log(this.rightList)
            this.list = _.groupBy(this.rightList,'parentId')
            // console.log(this.list)
    },
    methods: {
        childrenClick(itemId){
            this.rightId = itemId
            // console.log('父组件打印' + this.rightId)
            this.rightCurrent = this.list[itemId]
            // console.log(this.rightCurrent)
            
        }
    }

}
</script>

<style lang="stylus">
    .pro-classify
        width 100%
        height 100%
        display flex
        flex-direction column
        .classify-header
            width 100%
            position absolute
            top 0
            left 0
            height 1.1rem
            padding 0
            margin 0
            border-bottom 1px solid #e5e5e5
            z-index 1
            background #fff
            .search-box
                width 7.1rem
                height .68rem
                margin .12rem .24rem
                line-height .62rem
                border-radius .12rem
                padding 0 .24rem
                border .01rem solid #ccc
                overflow hidden
                display flex
                img 
                    width .4rem
                    height .4rem
                    margin-top .14rem
                    margin-right .14rem
                .search-key
                    width: 6.12rem;
                    height: .62rem;
                    padding: 0;
                    float: right;
                    font-size: .28rem;
                    line-height: .68rem;
                    color: #ccc;
                    border: 0;
            .shadowWrap
                height: .22rem;
                background: #f4f5f7;
        .two-main
            overflow hidden
            display flex
            position relative
            top 1.1rem
            margin-bottom 1.08rem
            flex 1
            .nav-wrap
                overflow hidden
                width 1.8rem                              
            .wrapper
                width 5.7rem
                overflow hidden
                border-left .01rem solid #e5e5e5
                background #fff
                flex 1





</style>
