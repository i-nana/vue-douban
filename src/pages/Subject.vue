<template>
    <div>
        <m-header title="书影音">
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../assets/images/ic_chat_green.png">
            </a>
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../assets/images/ic_actionbar_search_icon.png">
            </a>
        </m-header>
        <div class="page-content">
            <section id="hot-movie" class="tab-movies tab-hot-movie">
                <div class="section-header flex">
                    <h3 class="flex-fit">影院热映</h3>
                    <div class="tab-btns">
                        <a class="flex" href="javascript:void(0);">更多 <img class="icon-img icon-right-arrow" src="../assets/images/ic_arrow_green_right.png"></a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <ul class="h-scroll">
                            <li v-for="(item, index) in hotMovies.subjects" v-if="index < 10" class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster" :style="'background-image:url(' + item.images.large+ ')'"></div>
                                    <p>{{ item.title }}</p>
                                </a>
                            </li>
                            <li class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster movie-poster-empty">
                                        <h5>全部</h5>
                                        <p>{{ hotMovies.total }}部</p>
                                    </div>
                                    <p>-</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="soon-movie" class="tab-movies tab-hot-movie">
                <div class="section-header flex">
                    <h3 class="flex-fit">院线即将上映</h3>
                    <div class="tab-btns">
                        <a class="flex" href="javascript:void(0);">更多 <img class="icon-img icon-right-arrow" src="../assets/images/ic_arrow_green_right.png"></a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <ul class="h-scroll">
                            <li v-for="(item, index) in soonMovies.subjects" v-if="index < 10" class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster" :style="'background-image:url(' + item.images.large+ ')'"></div>
                                    <p>{{ item.title }}</p>
                                    <p>{{item.wish_count}}人想看</p>
                                </a>
                            </li>
                            <li class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster movie-poster-empty">
                                        <h5>全部</h5>
                                        <p>{{ soonMovies.total }}部</p>
                                    </div>
                                    <p>-</p>
                                    <p>-</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    </div>
</template>
<script>
	import mHeader from '../components/header'
	export default {
		name: 'subject',
		components: {
			mHeader
		},
		data(){
			return {
				hotMovies: [],
                soonMovies: [],
			}
        },
		created() {
			this.getHotMovies();
			this.getSoonMovies();
		},
		methods: {
			getHotMovies() {
				this.axios.get('/api/movie/in_theaters').then(response => {
                    this.hotMovies = response.data;
				}, response => {
					// error callback
				});
			},
            getSoonMovies() {
	            this.axios.get('/api/movie/coming_soon').then(response => {
		            this.soonMovies = response.data;
	            }, response => {
		            // error callback
	            });
            }
		}
	}
</script>
<style lang="less">
    section.tab-hot-movie .section-body{
        padding-right: 0;
        padding-bottom: 10px;
        overflow-y: hidden;
        .h-scroll-box{
            margin-bottom: -40px;
            overflow: hidden;
        }
    }
    .movie-item{
        display: inline-block;
        width: 100px;
        margin-right: 10px;
        &:last-child{
             margin-right: 15px;
         }
        .movie-poster {
            width: 100%;
            overflow: hidden;
            background-size: cover;
            background-position: center;
            background-color: #ededed;
            &:before{
                 content: '';
                 float: left;
                 margin-top: 142%;
             }
        }
        p{
            font-size: 12px;
            line-height: 2;
            color: #525252;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
    }
    .tab-btns{
        font-size: 12px;
        line-height: 28px;
        a{
            align-items: center;
            color: #42bd56;
            .icon-img {
                margin-left: 4px;
                &.icon-right-arrow{
                     height: 18px;
                 }
            }
    }
    }
</style>
