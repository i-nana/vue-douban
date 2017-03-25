<template>
    <div class="recommend-section">
        <div class ="index-item">
            <a href="javascript:void(0);">
                <div class="item-cover">
                    <img src="https://qnmob2.doubanio.com/img/files/file-1490249769.jpg?imageView2/2/q/80/w/330/h/330/format/jpg">
                </div>
                <div class="item-info">
                    <h2>广播精选 | 今日地铁甚是拥挤</h2>
                    <p>记忆碎片经常会翻涌上来：有时是阴沉天气之下走过的街道记忆碎片经常会翻涌上来：有时是阴沉天气之下走过的街道……</p>
                </div>
                <div class="item-author flex">
                    <p class="flex-fit">作者: 豆瓣</p>
                    <p class="flex-fit">来自栏目: 广播精选</p>
                </div>
            </a>
        </div>
        <div class ="index-item">
            <a href="javascript:void(0);">
                <div class="item-info">
                    <h2>好想和你再去放放火</h2>
                    <p>我堂弟过年的时候从湖南回来。中午我弄了几个菜，我俩坐在一起喝酒。他量比我大，很快一杯酒喝完了，我...有时是阴沉天气之下走过的街道……</p>
                </div>
                <div class="item-author flex">
                    <p class="flex-fit">作者: 豆瓣</p>
                    <p class="flex-fit">来自栏目: 广播精选</p>
                </div>
            </a>
        </div>
        <div class ="index-item">
            <a href="javascript:void(0);">
                <div class="item-pics flex">
                    <div class="item-pic-big" style="background-image: url(http://wx4.sinaimg.cn/orj360/9b696272ly1fdnolmckuzj20c807mdg3.jpg)"></div>
                    <div class="item-pic-side flex-fit">
                        <div class="item-pic-small" style="background-image: url(http://wx2.sinaimg.cn/orj360/005yORshly1fdep854d3vj30ku0kln1a.jpg)"></div>
                        <div class="item-pic-small" style="background-image: url(https://qnmob2.doubanio.com/img/files/file-1490249769.jpg?imageView2/2/q/80/w/330/h/330/format/jpg)"></div>
                    </div>
                </div>
                <div class="item-info">
                    <h2>广播精选 | 今日地铁甚是拥挤</h2>
                    <p>记忆碎片经常会翻涌上来：有时是阴沉天气之下走过的街道……</p>
                </div>
                <div class="item-author flex">
                    <p class="flex-fit">作者: 豆瓣</p>
                    <p class="flex-fit">来自栏目: 广播精选</p>
                </div>
            </a>
        </div>
    </div>
</template>
<script></script>
<style lang="less">
    .recommend-section {
        background-color: #fff;
    }
    .index-item {
        padding: 10px 0;
        margin: 0 15px;
        border-bottom: 1px solid #eee;
        a{
            color: #494949;
            .item-cover {
                width: 25.6%;
                float: right;
                margin-left: 20px;
                margin-top: 6px;
                img{
                    width: 100%;
                }
            }
            .item-info{
                p{
                    text-align: justify;
                    color: #9b9b9b;
                    font-size: 12px;
                    line-height: 1.5;
                    display:-webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 3;
                }
            }
            .item-author{
                position: relative;
                margin-top: 10px;
                padding-top: 10px;
                font-size: 12px;
                color: #ccc;
                
                &:before{
                    content: '';
                    display: block;
                    position: absolute;
                    top: 0;
                    width: 24px;
                    height: 1px;
                    background: #ccc;
                }
                p:last-child{
                    text-align: right;
                }
            }
            .item-pics{
                margin-top: 6px;
                .item-pic-big{
                    -webkit-box-flex: 3.2;
                    -webkit-flex: 3.2;
                    -ms-flex: 3.2;
                    flex: 3.2;
                    
                    background-size: cover;
                    background-position: center;
                    background-color: #ccc;
                }
                .item-pic-side {
                    margin-left: 6px;
                    .item-pic-small{
                        position: relative;
                        width: 100%;
                        background-size: cover;
                        background-position: center;
                        background-color: #ccc;
                        &:first-child{
                            margin-bottom: 6px;
                        }
                        &:after{
                            content: '';
                            display: block;
                            padding-top: 100%;
                        }
                    }
                }
            }
        }
    }
</style>