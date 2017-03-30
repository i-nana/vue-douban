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
            <div class="recommend-section recommend-section-hot" v-if="hot.length > 0">
                <h5 class="recommend-section-title">热点</h5>
                <recommend-item v-for="(item, index) in hot" :data="item" :key="item.id">
                </recommend-item>
            </div>
            <div class="recommend-section recommend-time">
                <h5 class="recommend-section-title">豆瓣时间
                    <a href="javascript:void(0);" class="more-link">更多专栏
                    <img class="icon-img icon-right-arrow" src="../../assets/images/ic_seti_arrow_right_gray.png"></a>
                </h5>
                <div class="h-scroll-box">
                    <div class="h-scroll">
                        <a href="javascript: void(0);" class="time-item" v-for="(item, index) in doubanTime" :key="item.id"
                        :style="'background-image:url('+item.poster_url+')'">
                           <div class="time-header">
                               <img :src="item.authors[0].avatar_url" class="time-author-avatar">
                               <div class="time-author-info">
                                   <h6>{{item.authors[0].name}}</h6>
                                   <p>{{item.authors[0].intro_brief}}</p>
                               </div>
                           </div>
                           <div class="time-body">
                               <h3>{{item.title}}</h3>
                               <div class="time-short-intro">{{item.short_intro}}</div>
                               <div class="time-latest">
                                   <h6>本期内容：</h6>
                                   <p>{{item.latest_article_title}}</p>
                               </div>
                               <div class="time-link">查看专栏</div>
                           </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="recommend-section" v-if="week.length > 0">
                <h5 class="recommend-section-title">周末</h5>
                <recommend-item v-for="(item, index) in week" :data="item" :key="item.id">
                </recommend-item>
            </div>
            <div class="recommend-section" v-if="featured.length > 0">
                <h5 class="recommend-section-title">一刻</h5>
                <recommend-item v-for="(item, index) in featured" :data="item" :key="item.id">
                </recommend-item>
            </div>
            <div class="recommend-section recommend-discover">
                <h5 class="recommend-section-title">发现
                    <router-link to="/themes" class="more-link">更多栏目
                    <img class="icon-img icon-right-arrow" src="../../assets/images/ic_seti_arrow_right_gray.png"></router-link>
                </h5>
                <div class="h-scroll-box">
                    <div class="h-scroll">
                        <a href="javascript: void(0);" class="discover-item" v-for="(item, index) in themes" :key="item.id" :style="'background-image:url('+item.poster+')'">
                            <div class="discover-item-wrapper">
                                <p>{{ item.name }}</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div class="recommend-section" v-if="recommend.length > 0">
                <h5 class="recommend-section-title">为你推荐</h5>
                <recommend-item v-for="(item, index) in recommend" :data="item" :key="item.id">
                </recommend-item>
            </div>
        </div>    
        <tabbar v-model="select"></tabbar>
    </div>
</template>
<script>
    import tabbar from '../../components/tabbar'
    import recommendItem from '../../components/recommend-item'
    import doubanTime from '../../assets/json/douban_time.json'
	export default{
		name: 'index',
		components: {
            tabbar,
            recommendItem
		},
        data() {
            return {
                select: 'index',
                hot: [],
                week: [],
                featured: [],
                recommend: [],
                themes: [],
                doubanTime: doubanTime
            }
        },
       created(){
            this.fetchData();
            this.getThemes();
        },
        methods: {
	        fetchData(){
                this.$http.get('/api/recommend_feed').then(response => {
                    let data = response.data.data.recommend_feeds;
                    let hot = [], week = [], featured = [], recommend = [];
                    
                    data.forEach(function(item, index){
                        if(item.card) {
                            switch(item.card.name){
                                case '热点':
                                    hot.push(item);
                                    break;
                                case '周末':
                                    week.push(item);
                                    break;
                                case '一刻':
                                    featured.push(item);
                                    break;
                                case '为你推荐':
                                    recommend.push(item);
                                    break;
                                default: 
                                  //  hot.push(item);
                            }
                        } else {
                          //  hot.push(item);
                        }
                    });
                    this.hot = hot;
                    this.week = week;
                    this.featured = featured;
                    this.recommend = recommend;
				}, response => {
					// error callback
				});
            },
            getThemes(){
                this.$http.get('/api/themes').then(response => {
                    var data = response.data.data;
                    data.sort(function(x, y){
                        return Math.random() - 0.5;
                    });
                    this.themes = data.slice(0, 6);
                });
            }
        }
	}
</script>
<style lang="less">
.recommend-section {
    h5{
        .more-link{
            position: absolute;
            right: 15px;
            font-size:12px;
            font-weight: 300;
            color: #a7a7a7;
            .icon-img{
                float: right;
                height: 12px;
                margin-top: 4px;
                margin-left: 4px;
            }
        }
    }
}

.recommend-discover{
    .h-scroll-box{
        height: 125px;
        padding: 10px 0 15px;
        margin: 0;
        .h-scroll{
            padding-right: 5px;
            .discover-item {
                position: relative;
                display: inline-block;
                margin-right: 10px;
                width: 100px;
                height: 100px;
                border-radius: 4px;
                background: center #ccc no-repeat;
                background-size: cover;
                color: #fff;
                overflow: hidden;

                .discover-item-wrapper{
                    background: rgba(0, 0, 0, .36);
                    height: 100%;
                }
                p{
                    position: absolute;
                    font-size: 12px;
                    bottom: 4px;
                    left: 8px;
                }
            }
        }
    }
}
.recommend-section.recommend-time{
    background: none;
    .h-scroll-box{
        padding: 10px 0 15px;
        height: 260px;
        margin: 0;
        overflow: hidden;
        .time-item{
            font-size: 12px;
            display: inline-block;
            width: 256px;
            height: 240px;
            border-radius: 6px;
            box-shadow: 0 0 4px 0 #a7a7a7;
            margin-right: 15px;
            background: center no-repeat #fff;
            background-size: cover;
            overflow: hidden;
            word-break: normal;
            white-space: normal;
            .time-header{
                height: 64px;
                background-color: rgba(0, 0, 0, .5);
                .time-author-avatar{
                    display: block;
                    float: left;
                    margin-left: 15px;
                    margin-top: 8px;
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    border: 2px solid #fff;
                }
                .time-author-info {
                    position: relative;
                    margin-left: 74px;
                    padding-top: 12px;
                    color: #fff;
                    p{
                        font-weight: 200;
                        transform: scale(0.8);
                        transform-origin: 0 bottom;
                    }
                }
            }
            .time-body{
                padding: 6px 15px 0;
                height: 176px;
                background: #fff;
                color: #494949;
                .time-short-intro{
                    color: #9b9b9b;
                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
                .time-latest{
                    margin-top: 10px;
                    p{
                        display: -webkit-box;
                        overflow: hidden;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: 1;
                    }
                }
                .time-link{
                    margin: 15px auto;
                    line-height: 28px;
                    border: 1px solid #42bd56;
                    border-radius: 4px;
                    text-align: center;
                    color: #42bd56;
                }
            }
        }
    }
}
</style>