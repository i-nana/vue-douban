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
            <section class="tab-movies">
                <div class="section-header">
                    <h3>精选榜单</h3>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <div class="h-scroll">
                            <a class="movies-rank-item" href="javascript: void(0);">
                                <h3>豆瓣 Top250</h3>
                                <p>8分以上好电影</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2421855655.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2361744534.jpg);"></div>
                                </div>
                            </a>
                            <a class="movies-rank-item movies-rank-item-week" href="javascript: void(0);">
                                <h3>本周口碑榜</h3>
                                <p>3月10日 - 3月17日</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2421855655.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2361744534.jpg);"></div>
                                </div>
                            </a>
                            <a class="movies-rank-item movies-rank-item-new" href="javascript: void(0);">
                                <h3>新片榜</h3>
                                <p>3月10日 - 3月17日</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2421855655.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2361744534.jpg);"></div>
                                </div>
                            </a>
                            <a class="movies-rank-item movies-rank-item-top" href="javascript: void(0);">
                                <h3>票房榜</h3>
                                <p>票房最高排名</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2421855655.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2395733377.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2361744534.jpg);"></div>
                                </div>
                            </a>
                        </div>
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
    section .section-body{
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

/* ********* */
    .movies-rank-item{
        display: inline-block;
        margin-right: 10px;
        width: 160px;
        height: 150px;
        background: linear-gradient(to bottom, #e1a01a, rgba(255, 196, 108, 0.2));
        color: #fff;
        border-radius: 4px;
        overflow: hidden;
        text-align: center;
        &.movies-rank-item-week{
             background: linear-gradient(to bottom, #22bc61, rgba(34, 188, 97, 0.2));
         }
        &.movies-rank-item-new{
             background: linear-gradient(to bottom, #a367c4, rgba(163, 103, 196, 0.2));
         }
        &.movies-rank-item-top{
             background: linear-gradient(to bottom, #e56c87, rgba(229, 108, 135, 0.2));
         }
    }
    .movies-rank-posters.movie-item{
        position: relative;
        display: block;
        margin: 6px auto;
        width: 140px;
    }
    .movies-rank-item {
        h3 {
            padding-top: 15px;
            font-weight: bold;
            line-height: 1.2;
        }
        p{
            font-size: 12px;
        }
    }
    .movie-poster.movie-poster-3{
        position: absolute;
        width: 60px;
        margin-left: -32px;
        left: 50%;
    }
    .movie-poster.movie-poster-2,
    .movie-poster.movie-poster-1{
        width: 46px;
        margin-top: 10px;
    }
    .movie-poster.movie-poster-2{
        float: right;
    }
    .movie-poster.movie-poster-1{
        float: left;
    }
</style>
