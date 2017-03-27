<template>
    <div class ="index-item">
        <a href="javascript:void(0);">
            <div class="item-content">
                <div class="item-pics flex" v-if="data.layout == 5">
                    <div class="item-pic-big" :style="'background-image: url('+data.target.cover_url+')'"></div>
                    <div class="item-pic-side flex-fit">
                        <div class="item-pic-small" :style="'background-image: url('+data.target.more_pic_urls[0]+')'"></div>
                        <div class="item-pic-small" :style="'background-image: url('+data.target.more_pic_urls[1]+')'">
                            <div class="item-pics-count flex"><span class="flex-fit">{{ data.target.photos_count - 3 }}  +</span></div>
                        </div>
                    </div>
                </div>
                <div class="item-cover" :class="'item-cover-'+data.layout" v-else-if="data.target.cover_url" :style="'background-image: url('+data.target.cover_url+')'">
                    <!--<img :src="data.target.cover_url">-->
                </div>
                <div class="item-info">
                    <h3>{{data.title}}</h3>
                    <p>{{data.target.desc}}</p>
                </div>
            </div>
            <div class="item-author flex">
                <p class="flex-fit" v-if="data.target.author">作者: {{data.target.author.name}}</p>
                <p class="flex-fit">{{data.source_cn}}</p>
            </div>
        </a>
    </div>
</template>
<script>
export default {
     props: {
         data:{
            type: Object,
            default: {}
        }
     }
}
</script>
<style lang="less">
    .recommend-section {
        background-color: #fff;
        margin-bottom: 10px;
        
        > .recommend-section-title {
            position: relative;
            padding: 15px 15px 5px;
            color: #494949;
            line-height: 20px;
            &:before{
                content: '';
                display: block;
                position: absolute;
                left: 0;
                top: 15px;
                width: 3px;
                background: #42bd56;
                height: 20px;
            }
        }
        &.recommend-section-hot {
            > .recommend-section-title {
                color: #ff8447;

                &:before{
                    background: #ff8447;
                }
            }
        }
    }
    .index-item {
        padding: 10px 0;
        margin: 0 15px;
        &:not(:last-child) {
            border-bottom: 1px solid #eee;
        }
        
        a{
            color: #494949;
            .item-content{
                overflow: hidden;
            }
            .item-cover {
                width: 25.6%;
                float: right;
                margin-left: 20px;
                margin-top: 4px;
                background-size: cover;
                background-position: center top;
                background-color: #ccc;
                &:before{
                    content: '';
                    display: block;
                    width: 100%;
                    padding-bottom: 100%; 
                }
                &.item-cover-9{
                    width: 100%;
                    float: none;
                    margin-left: 0;
                    margin-bottom: 10px;
                    &:before{
                        padding-bottom: 50%; 
                    }
                }
            }
            .item-info{
                h3{
                    line-height: 1.4;
                    margin-bottom: 6px;

                    display: -webkit-box;
                    overflow: hidden;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                }
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
                margin-bottom: 10px;
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
                .item-pics-count {
                    position: absolute;
                    width: 100%;
                    height: 100%;
                    background: rgba(0, 0, 0, 0.4);
                    color: #fff;
                    text-align: center;
                    -webkit-box-align: center;
                    -webkit-align-items: center;
                    -ms-flex-align: center;
                    align-items: center;
                    font-size: 12px;
                }
            }
        }
    }
</style>