<template>
    <div class="scroll-nav">
                    <ul>
                        <li :class="{on : active === 0}"
                            @click="idClick(0)">

                            <p 
                                :class="{'p-on': active === 0}">推荐</p>   
                        </li>
                        <li 
                            :class="{on : active === item.id}"
                            v-for ="item in leftList"
                            :key = "item.id"
                            @click="idClick(item.id)">
                            <p
                                :class="{'p-on': active === item.id}">
                            {{item.name}}</p>   
                        </li>
                    </ul>
                </div>
</template>

<script>
export default {
    props : ['leftList'],
    data() {
        return {
            active : 0,

        }
    },
     methods:{
        idClick(itemId){
            this.$emit('childrenClick',itemId)     
            this.active = itemId       
        }
    }
}
</script>

<style lang="stylus">
     .scroll-nav
        background-color #fff
        overflow hidden
        height 100%
        ul
            overflow-y scroll
            height 100%
            width 100%
            li
                width 100%;
                height 1rem;
                padding .26rem 0
                line-height .6rem
                text-align center
                font-size .28rem
                p
                    &.p-on
                        border-left .06rem solid #6eb042
                &.on
                    color #6eb042
                    font-size .32rem
                    height 1.1rem
</style>