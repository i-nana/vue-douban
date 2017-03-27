<template>
    <div class="swipe" v-if="imgs.length > 0">
        <div class="swipe-holder" :style="'padding-bottom:'+swipeHeight"></div>
        <ul class="swipe-list">
            <li class="swipe-list-item" v-for="(item, index) in imgs">
                <router-link :to="item.href">
                    <img class="swipe-img" :src="item.src">
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default({
        props: {
            imgs: {
                type: Array,
                default: () => { return []; }
            },
            swipeHeight: {
                type: String,
                default: "50%"
            }
        }
    })
</script>
<style lang="less">
.swipe{
    position: relative;
    width: 100%;
    .swipe-holder{
        width: 100%;
        height: 0;
        padding-bottom: 50%;
    }
    .swipe-list {
        position: absolute;
        top: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;
        .swipe-list-item{
            position: absolute;
            height: 100%;
            > a{
                display: block;
            }
            .swipe-img{
                display: block;
                width: 100%;
                height: auto;
            }
        }
    }
}
</style>