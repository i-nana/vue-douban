<template>
    <div>
        <header class="m-header flex bg">
            <form class="search flex flex-fit" method="post">
                <button class="search-submit"><img class="icon-img" src="../../assets/images/ic_search_gray.png"></button>
                <input type="text" class="search-text flex-fit" placeholder="影视 图书 唱片 小组 舞台剧等">
                <a class="search-scan" href="javascript: void(0);">
                    <img class="icon-img" src="../../assets/images/ic_scan_gray.png">
                </a>
            </form>
            <a href="javascript: void(0);" class="btn-chat">
                <img class="icon-img" src="../../assets/images/ic_chat_white.png">
            </a>
        </header>
        <div class="page-content">
            <div >
                <recommend-item>
                </recommend-item>
            </div>
        </div>
    </div>
</template>
<script>
	import mHeader from '../../components/header'
    import recommendItem from '../../components/recommend'
	export default{
		name: 'index',
		components: {
			mHeader,
            recommendItem
		},
        data() {
            return {
                recommentFeed: []
            }
        },
       created(){
            this.fetchData();
        },
        methods: {
	        fetchData(){
                this.axios.get('/api/recommend_feed').then(response => {
                    let data = response.data.data.recommend_feeds;
                    let hot = [], week = [], featured = [], recommend = [];
                    
                    data.forEach(function(item, index){
                        if(item.card && item.card.name === '为你推荐') {
                            recommend.push(item);
                        } else if(item.theme){
                            if(item.theme.name === '周末去哪儿' || item.theme.name === '本周影院在映') {
                                week.push(item);
                            } else if(item.theme.name === '视频精选' || item.theme.name === '广播精选'){
                                featured.push(item);
                            }
                        } else {
                            hot.push(item);
                        }
                    });
                    console.log(hot, week, featured, recommend);

				}, response => {
					// error callback
				});
            }
        }
	}
</script>