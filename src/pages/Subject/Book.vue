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
            <section id="book-fiction"
                     class="tab-movies tab-hot-movie">
                <div class="section-header flex">
                    <h4 class="flex-fit">最受关注的虚拟类图书</h4>
                    <div class="tab-btns">
                        <a class="flex"
                           href="javascript:void(0);">更多 <img class="icon-img icon-right-arrow" src="../../assets/images/ic_arrow_green_right.png"></a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <ul class="h-scroll">
                            <li class="movie-item"
                                v-for="(item, index) in bookFiction.subject_collection_items"
                                :key="item.id">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster"
                                         :style="'background-image:url(' + item.cover.url+ ')'"></div>
                                    <p class="movie-item-name">{{ item.title }}</p>
                                    <div class="movie-item-rating">
                                        <div v-if="item.rating.count > 0">
                                            <div class="rating-star-bg">
                                                <span class="rating-star-on"
                                                      :style="'width:'+ 10*item.rating.value +'%'"></span>
                                            </div>
                                            <span>{{item.rating.value}}</span>
                                        </div>
                                        <span v-else>暂无评分</span>
                                    </div>
                                </a>
                            </li>
                            <li class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster movie-poster-empty">
                                        <div class="movie-item-total">
                                            <h6>全部</h6>
                                            <p>{{ bookFiction.total }} 本</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="book-nonfiction"
                     class="tab-movies tab-hot-movie">
                <div class="section-header flex">
                    <h4 class="flex-fit">最受关注的非虚构类图书</h4>
                    <div class="tab-btns">
                        <a class="flex"
                           href="javascript:void(0);">更多 <img class="icon-img icon-right-arrow" src="../../assets/images/ic_arrow_green_right.png"></a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="h-scroll-box">
                        <ul class="h-scroll">
                            <li class="movie-item"
                                v-for="(item, index) in bookNonfiction.subject_collection_items">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster"
                                         :style="'background-image:url(' + item.cover.url+ ')'"></div>
                                    <p class="movie-item-name">{{ item.title }}</p>
                                    <div class="movie-item-rating">
                                        <div v-if="item.rating.count > 0">
                                            <div class="rating-star-bg">
                                                <span class="rating-star-on"
                                                      :style="'width:'+ 10*item.rating.value +'%'"></span>
                                            </div>
                                            <span>{{item.rating.value}}</span>
                                        </div>
                                        <span v-else>暂无评分</span>
                                    </div>
                                </a>
                            </li>
                            <li class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster movie-poster-empty">
                                        <div class="movie-item-total">
                                            <h6>全部</h6>
                                            <p>{{ bookNonfiction.total }} 本</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            <section id="market-book"
                     class="tab-movies tab-hot-movie market-book">
                <div class="section-header flex">
                    <h4 class="flex-fit">豆瓣纸书</h4>
                    <div class="tab-btns">
                        <a class="flex"
                           href="javascript:void(0);">更多 <img class="icon-img icon-right-arrow" src="../../assets/images/ic_arrow_green_right.png"></a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="section-body-header">
                        <div class="movie-poster"
                             :style="'background-image:url(' + marketBook.header.cover.url+ ')'"></div>
                        <div class="section-markert-header">
                            <h3 class="section-markert-header-title">{{ marketBook.header.title }}<span>￥{{marketBook.header.price}}</span></h3>
                            <p>{{ marketBook.header.info }}</p>
                        </div>
                    </div>
                    <div class="h-scroll-box">
                        <ul class="h-scroll">
                            <li class="movie-item"
                                v-for="(item, index) in marketBook.subject_collection_items">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster"
                                         :style="'background-image:url(' + item.cover.url+ ')'"></div>
                                    <p class="movie-item-name">{{ item.title }}</p>
                                    <div class="movie-item-rating">
                                        <span>￥{{item.price}}</span>
                                    </div>
                                </a>
                            </li>
                            <li class="movie-item">
                                <a href="javascript:void(0);">
                                    <div class="movie-poster movie-poster-empty">
                                        <div class="movie-item-total">
                                            <h6>全部</h6>
                                            <p>{{ marketBook.total }} 本</p>
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
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
export default {
    name: 'book',
    components: {
        mHeader,
        tabbar
    },
    data() {
        return {
            select: 'movie',
            bookFiction: () => {
                return {
                    subject_collection_items: []
                }
            },
            bookNonfiction: () => {
                return {
                    subject_collection_items: []
                }
            },
            marketBook: () => {
                return {
                    header: {
                        cover: {
                            url: ''
                        }
                    },
                    subject_collection_items: []
                }
            }
        }
    },
    created() {
        this.getBookFiction();
        this.getBookNonfiction();
        this.getMarketBook();
    },
    methods: {
        getBookFiction() {
            this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items").then(res => {
                this.bookFiction = res.data;
            }, function () {
                //console.log(1)
            });
        },
        getBookNonfiction() {
            this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/book_nonfiction/items").then(res => {
                this.bookNonfiction = res.data;
            }, function () {

            });
        },
        getMarketBook() {
            this.$http.jsonp("https://m.douban.com/rexxar/api/v2/subject_collection/market_product_book/items").then(res => {
                this.marketBook = res.data;
            }, function () {

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
    p.movie-item-name {
        margin-top: 4px;
        font-size: 12px;
        color: #525252;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
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

.market-book {
    .movie-poster {
        background-color: transparent;
    }
    .section-body-header {
        margin: 0 15px 15px;
        overflow: hidden;
        .movie-poster {
            float: left;
            margin-right: 10px;
            width: 100px;
        }
    }
    .section-markert-header {
        position: relative;
        margin-top: 10px;
        p {
            color: #a7a7a7;
            font-size: 12px;
        }
        .section-markert-header-title {
            span {
                float: right;
                color: #E76648;
            }
        }
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
