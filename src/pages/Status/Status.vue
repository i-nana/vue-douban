<template>
    <div>
        <m-header title="广播">
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../../assets/images/ic_chat_green.png">
            </a>
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../../assets/images/ic_status_search_user.png">
            </a>
        </m-header>
        <div class="page-content">
            <div class="status-add">
                <div class="status-add-box flex">
                    <img class="status-avatar" src="../../assets/pics/avatar.jpg">
                    <p class="flex-fit">分享生活点滴...</p>
                    <img class="icon-img" src="../../assets/images/ic_status_send_text.png">
                </div>
                <a href="javascript: void(0);" class="status-add-photo">
                    <img class="icon-img" src="../../assets/images/ic_status_send_pic.png">
                </a>
            </div>
            <timeline :data="statusData"></timeline>
        </div>
        <m-photoswipe></m-photoswipe>  
        <tabbar v-model="select"></tabbar>
    </div>
</template>
<script>
	import mHeader from '../../components/header'
    import tabbar from '../../components/tabbar'
    import timeline from '../../components/status-item'
	import mPhotoswipe from '../../components/photoswipe'
    import timelineData from '../../assets/json/status/timeline.json'

	export default {
		name: 'status',
		components: {
			mHeader,
            mPhotoswipe,
            tabbar,
            timeline
		},
		data() {
			return {
                select: 'status',
				statusData: []
			}
		},
        created(){
            this.fetchData();
        },
        methods: {
	        fetchData(){
		        this.statusData = timelineData;
            }
        }
	}
</script>
<style>
    @import "../../assets/photoswipe/photoswipe.css";
    @import "../../assets/photoswipe/default-skin/default-skin.css";
</style>
