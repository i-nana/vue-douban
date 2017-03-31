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
        <div class="page-content">
            <div class="subject-tabbar flex">
                <router-link class="subject-to" to="/subject/movie">电影</router-link>
                <router-link class="subject-to" to="/subject/book">读书</router-link>
                <router-link class="subject-to" to="/subject/demo">电视</router-link>
                <route-link class="subject-to">同城</route-link>
                <route-link class="subject-to">音乐</route-link>
            </div>
            <router-view></router-view>
        </div>
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
            select: 'subject',
        }
    },
    created() {
        
    },
    methods: {
        
    }
}
</script>
