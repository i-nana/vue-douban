<template>
    <div>
        <m-header title="书影音">
            <a class="btn-chat"
               href="javascript:void(0);"
               slot="right">
                <img class="icon-img"
                     src="../../assets/images/ic_chat_green.png">
            </a>
            <a class="btn-chat"
               href="javascript:void(0);"
               slot="right">
                <img class="icon-img"
                     src="../../assets/images/ic_actionbar_search_icon.png">
            </a>
        </m-header>
        <div class="subject-tabbar flex">
            <router-link class="subject-to flex-fit active"
                         to="/subject/movie">电影</router-link>
            <router-link class="subject-to flex-fit"
                         to="/subject/book">读书</router-link>
            <router-link class="subject-to flex-fit"
                         to="/subject/demo">电视</router-link>
            <a class="subject-to flex-fit">同城</a>
            <a class="subject-to flex-fit">音乐</a>
        </div>
        <router-view class="page-content-subject"></router-view>
        <tabbar v-model="select"></tabbar>
    </div>
</template>
<script>
import mHeader from '../../components/header'
import tabbar from '../../components/tabbar'
export default {
    name: 'subject',
    components: {
        mHeader,
        tabbar
    },
    data() {
        return {
            select: 'subject'
        }
    },
    created() {

    },
    methods: {

    }
}
</script>
<style lang="less">
.subject-tabbar {
    position: fixed;
    top: 56px;
    width: 100%;
    border-bottom: 1px solid #e7e7e7;
    background: #fff;
    z-index: 10;
    .subject-to {
        position: relative;
        text-align: center;
        line-height: 40px;
        height: 40px;
        color: #a7a7a7;

        &.active {
            color: #42bd56;
            &:after {
                content: '';
                display: block;
                position: absolute;
                bottom: 0;
                width: 100%;
                height: 2px;
                background: #42bd56;
            }
        }
    }
}

.page-content.page-content-subject {
    padding-top: 96px;
}
</style>