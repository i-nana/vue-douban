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
            <section id="hot-movie"
                     class="tab-movies tab-hot-movie">
                <div class="section-header flex">
                    <h4 class="flex-fit">影院热映</h4>
                    <div class="tab-btns">
                        <a class="flex"
                           href="javascript:void(0);">更多 <img class="icon-img icon-right-arrow" src="../../assets/images/ic_arrow_green_right.png"></a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <ul class="h-scroll">
                            <subject-item v-for="(item, index) in hotMovies.subjects"
                                          v-if="index<10"
                                          :data="item"
                                          :key="item.id"
                                          :poster="item.images.large"
                                          :rating="true"></subject-item>
                            <li class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster movie-poster-empty">
                                        <div class="movie-item-total">
                                            <h6>全部</h6>
                                            <p>{{ hotMovies.total }}部</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="soon-movie"
                     class="tab-movies tab-hot-movie">
                <div class="section-header flex">
                    <h4 class="flex-fit">院线即将上映</h4>
                    <div class="tab-btns">
                        <a class="flex"
                           href="javascript:void(0);">更多 <img class="icon-img icon-right-arrow" src="../../assets/images/ic_arrow_green_right.png"></a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <ul class="h-scroll">
                            <subject-item v-for="(item, index) in soonMovies.subjects"
                                          v-if="index<10"
                                          :data="item"
                                          :key="item.id"
                                          :poster="item.images.large"></subject-item>
                            <li class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster movie-poster-empty">
                                        <div class="movie-item-total">
                                            <h6>全部</h6>
                                            <p>{{ soonMovies.total }}部</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section class="tab-movies">
                <div class="section-header">
                    <h4>精选榜单</h4>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <div class="h-scroll">
                            <a class="movies-rank-item"
                               href="javascript: void(0);">
                                <h4>豆瓣 Top250</h4>
                                <p>8分以上好电影</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p1910813120.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p511118051.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p480747492.jpg);"></div>
                                </div>
                            </a>
                            <a class="movies-rank-item movies-rank-item-week"
                               href="javascript: void(0);">
                                <h4>本周口碑榜</h4>
                                <p>3月10日 - 3月17日</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2362603905.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2417948644.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img5.doubanio.com/view/movie_poster_cover/lpst/public/p2356912156.jpg);"></div>
                                </div>
                            </a>
                            <a class="movies-rank-item movies-rank-item-new"
                               href="javascript: void(0);">
                                <h4>新片榜</h4>
                                <p>3月10日 - 3月17日</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2408394301.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2421855655.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/lpst/public/p2412370372.jpg);"></div>
                                </div>
                            </a>
                            <a class="movies-rank-item movies-rank-item-top"
                               href="javascript: void(0);">
                                <h4>票房榜</h4>
                                <p>票房最高排名</p>
                                <div class="movies-rank-posters movie-item">
                                    <div class="movie-poster movie-poster-1"
                                         style="background-image: url(https://img1.doubanio.com/view/movie_poster_cover/mpst/public/p2432493858.jpg);"></div>
                                    <div class="movie-poster movie-poster-2"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2429713841.jpg);"></div>
                                    <div class="movie-poster movie-poster-3"
                                         style="background-image: url(https://img3.doubanio.com/view/movie_poster_cover/mpst/public/p2431980130.jpg);"></div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <tabbar v-model="select"></tabbar>
    </div>
</template>
<script>
import mHeader from '../../components/header'
import tabbar from '../../components/tabbar'
import subjectItem from '../../components/subject-item'
export default {
    name: 'movie',
    components: {
        mHeader,
        tabbar,
        subjectItem
    },
    data() {
        return {
            select: 'movie',
            hotMovies: () => {
                return {
                    subject: []
                }
            },
            soonMovies: () => {
                return {
                    subject: []
                }
            }
        }
    },
    created() {
        this.getHotMovies();
        this.getSoonMovies();
    },
    methods: {
        getHotMovies() {
            this.$http.jsonp('/api/movie/in_theaters').then(response => {
                this.hotMovies = response.data;
            }, response => {
                // error callback
            });
        },
        getSoonMovies() {
            this.$http.jsonp('/api/movie/coming_soon').then(response => {
                this.soonMovies = response.data;
            }, response => {
                // error callback
            });
        }
    }
}
</script>
<style lang="less">
.tab-movies .section-body {
    padding-right: 0;
    padding-left: 0;
    overflow-y: hidden;
}

.movie-item {
    display: inline-block;
    width: 100px;
    margin-right: 10px;
    vertical-align: top;
    &:last-child {
        margin-right: 15px;
    }
    .movie-poster {
        position: relative;
        width: 100%;
        overflow: hidden;
        background-size: cover;
        background-position: center;
        background-color: #ededed;
        &:before {
            content: '';
            float: left;
            margin-top: 142%;
        }
        .movie-item-total {
            position: absolute;
            width: 30px;
            margin-left: -15px;
            margin-top: -20px;
            left: 50%;
            top: 50%;
            text-align: center;
            color: #a7a7a7;
            p {
                font-size: 12px;
                border-top: 1px solid #a7a7a7;
                transform: scale(0.8);
            }
        }
    }
    p.movie-item-name {
        margin-top: 4px;
        font-size: 12px;
        color: #525252;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}

.tab-btns {
    font-size: 12px;
    line-height: 28px;
    a {
        align-items: center;
        color: #42bd56;
        .icon-img {
            margin-left: 4px;
            &.icon-right-arrow {
                height: 18px;
            }
        }
    }
}

.movie-item-rating {
    font-size: 12px;
    line-height: 1.2;
    color: #a7a7a7;
    .rating-star-bg {
        display: inline-block;
        float: left;
        height: 11px;
        width: 55px;
        background: url("../../assets/images/rating_star_large_off.png") repeat-x;
        background-size: 11px 11px;
        margin-right: 4px;
        margin-top: 1px;
        .rating-star-on {
            display: block;
            background: url("../../assets/images/rating_star_large_on.png") repeat-x;
            background-size: 11px 11px;
            height: 11px;
        }
    }
}






/* ********* */

.movies-rank-item {
    display: inline-block;
    margin-right: 10px;
    width: 150px;
    height: 140px;
    background: linear-gradient(to bottom, #e1a01a, rgba(255, 196, 108, 0.2));
    color: #fff;
    border-radius: 4px;
    overflow: hidden;
    text-align: center;
    &.movies-rank-item-week {
        background: linear-gradient(to bottom, #22bc61, rgba(34, 188, 97, 0.2));
    }
    &.movies-rank-item-new {
        background: linear-gradient(to bottom, #a367c4, rgba(163, 103, 196, 0.2));
    }
    &.movies-rank-item-top {
        background: linear-gradient(to bottom, #e56c87, rgba(229, 108, 135, 0.2));
        margin-right: 15px;
    }
}

.movies-rank-posters.movie-item {
    position: relative;
    display: block;
    margin: 6px auto;
    width: 130px;
}

.movies-rank-item {
    h4 {
        padding-top: 15px;
        font-weight: bold;
        line-height: 1.2;
    }
    p {
        font-size: 12px;
    }
}

.movie-poster.movie-poster-3 {
    position: absolute;
    width: 54px;
    margin-left: -27px;
    left: 50%;
}

.movie-poster.movie-poster-2,
.movie-poster.movie-poster-1 {
    width: 40px;
    margin-top: 10px;
}

.movie-poster.movie-poster-2 {
    float: right;
}

.movie-poster.movie-poster-1 {
    float: left;
}
</style>
