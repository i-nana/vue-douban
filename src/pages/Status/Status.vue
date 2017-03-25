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
            <section class="tab-status">
                <a class="section-header status-header flex">
                    <img class="status-avatar" src="../../assets/pics/avatar_1.png">
                    <div class="status-user flex-fit">
                        <h5>豆芽</h5>
                        <p>想看这部电影</p>
                    </div>
                    <p class="status-time">18小时前</p>
                    <img class="icon-img icon-more" src="../../assets/images/ic_more_action_overflow.png">
                </a>
                <div class="section-body">
                    <p class="status-text">爱闯祸的无名小卒缪恩，有一天阴差阳错得成了重要的月亮守护者，而他任职第一天就造成大错，间接导致太阳被偷、月亮消失、世界大乱。于是，他不得不携手太阳守护者和蜡质姑娘茜尔，展开一场大冒险，揪出混乱背后的黑手，拯救世界。</p>
                    <div class="status-share flex status-share-movie">
                        <div class="status-share-poster"
                             style="background-image: url(https://img1.doubanio.com/view/movie_poster_cover/lpst/public/p2228888107.jpg)"></div>
                        <div class="status-share-info flex-fit">
                            <h5>明月守护者 Mune, le gardien de la lune (2014)</h5>
                            <p class="">豆瓣评分：8.3</p>
                            <p>亚历山大·西伯恩（导演）/奥玛·赛/伊兹雅·海格林/迈克尔·格雷戈里奥/动画/法国</p>
                        </div>
                    </div>
                </div>
                <div class="section-footer tab-status-btns flex">
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_vote_normal_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reply_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reshare_large.png">
                    </a>
                </div>
            </section>
            <section class="tab-status">
                <a class="section-header status-header flex">
                    <img class="status-avatar" src="../../assets/pics/avatar_1.png">
                    <div class="status-user flex-fit">
                        <h5>豆芽</h5>
                    </div>
                    <p class="status-time">18小时前</p>
                    <img class="icon-img icon-more" src="../../assets/images/ic_more_action_overflow.png">
                </a>
                <div class="section-body">
                    <p class="status-text">爱闯祸的无名小卒缪恩，有一天阴差阳错得成了重要的月亮守护者，而他任职第一天就造成大错，间接导致太阳被偷、月亮消失、世界大乱。于是，他不得不携手太阳守护者和蜡质姑娘茜尔，展开一场大冒险，揪出混乱背后的黑手，拯救世界。</p>
                    <div class="media">
                        <div class="media-pics clear flex" @click="onThumbnailsClick">
                            <figure>
                                <div data-href="http://wx2.sinaimg.cn/large/62c28b12ly1fdkh9wbyocj20nz0nz0yz.jpg" data-size="863x863" itemprop="contentUrl">
                                    <div class="media-pics-box" style="background-image:url(http://wx2.sinaimg.cn/orj360/62c28b12ly1fdkh9wbyocj20nz0nz0yz.jpg)"></div>
                                </div>
                            </figure>
                            <figure>
                                <div data-href="http://wx4.sinaimg.cn/large/d90d58e8gy1fc1nk7tyjnj20yi1pce03.jpg" data-size="1242x2208" itemprop="contentUrl">
                                    <div class="media-pics-box" style="background-image:url(http://wx4.sinaimg.cn/orj360/d90d58e8gy1fc1nk7tyjnj20yi1pce03.jpg)"></div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="section-footer tab-status-btns flex">
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_vote_normal_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reply_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reshare_large.png">
                    </a>
                </div>
            </section>
            <section class="tab-status">
                <a class="section-header status-header flex">
                    <img class="status-avatar" src="../../assets/pics/avatar_1.png">
                    <div class="status-user flex-fit">
                        <h5>豆芽</h5>
                    </div>
                    <p class="status-time">18小时前</p>
                    <img class="icon-img icon-more" src="../../assets/images/ic_more_action_overflow.png">
                </a>
                <div class="section-body">
                    <p class="status-text">爱闯祸的无名小卒缪恩，有一天阴差阳错得成了重要的月亮守护者，而他任职第一天就造成大错，间接导致太阳被偷、月亮消失、世界大乱。于是，他不得不携手太阳守护者和蜡质姑娘茜尔，展开一场大冒险，揪出混乱背后的黑手，拯救世界。</p>
                </div>
                <div class="section-footer tab-status-btns flex">
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_vote_normal_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reply_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reshare_large.png">
                    </a>
                </div>
            </section>
            <section class="tab-status" v-for="(item, index) in statusData">
                <a class="section-header status-header flex">
                    <img class="status-avatar" :src="item.user.profile_image_url">
                    <div class="status-user flex-fit">
                        <h5>{{ item.user.screen_name}}</h5>
                        <p>{{ item.source}}</p>
                    </div>
                    <p class="status-time">{{ item.created_at}}</p>
                    <img class="icon-img icon-more" src="../../assets/images/ic_more_action_overflow.png">
                </a>
                <div class="section-body">
                    <p class="status-text" v-html="item.text"></p>
                    <div class="media" v-if="item.pics">
                        <div class="media-pics clear flex" @click="onThumbnailsClick"
                             :class="{'media-pics-2': [1,2,4].indexOf(item.pics.length) > -1}">
                            <figure v-for="(pic, j) in item.pics">
                                <div :data-href="pic.large.url" :data-size="pic.large.geo.width + 'x' + pic.large.geo.height" itemprop="contentUrl">
                                    <div class="media-pics-box" :style="'background-image:url(' + pic.url+ ')'"></div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="section-footer tab-status-btns flex">
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_vote_normal_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reply_large.png">
                    </a>
                    <a href="javascript: void(0);" class="tab-status-btn flex-fit">
                        <img class="icon-img" src="../../assets/images/ic_reshare_large.png">
                    </a>
                </div>
            </section>
        </div>
        <m-photoswipe></m-photoswipe>  
        <tabbar v-model="select"></tabbar>
    </div>
</template>
<script>
	import mHeader from '../../components/header'
    import tabbar from '../../components/tabbar'
	import mPhotoswipe from '../../components/photoswipe'
	import PhotoSwipe from '../../assets/photoswipe/photoswipe.min.js'
	import PhotoSwipeUI_Default from '../../assets/photoswipe/photoswipe-ui-default.min.js'
    import WeiboData from '../../assets/json/weibo.json'

	export default {
		name: 'status',
		components: {
			mHeader,
            mPhotoswipe,
            tabbar
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
		        this.statusData = WeiboData;
            },
	        onThumbnailsClick(e) {
		        function closest(el, fn) {
			        return el && ( fn(el) ? el : closest(el.parentNode, fn) );
		        }

		        e = e || window.event;
		        e.preventDefault ? e.preventDefault() : e.returnValue = false;
		        let eTarget = e.target || e.srcElement;

		        let clickedListItem = closest(eTarget, function(el) {
			        return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
		        });
		        if(!clickedListItem) {
			        return;
		        }
		        let clickedGallery = clickedListItem.parentNode,
			        childNodes = clickedListItem.parentNode.childNodes,
			        numChildNodes = childNodes.length,
			        nodeIndex = 0,
			        index;

		        for (let i = 0; i < numChildNodes; i++) {
			        if(childNodes[i].nodeType !== 1) {
				        continue;
			        }

			        if(childNodes[i] === clickedListItem) {
				        index = nodeIndex;
				        break;
			        }
			        nodeIndex++;
		        }
		        if(index >= 0) {
			        openPhotoSwipe( index, clickedGallery );
		        }

		        function openPhotoSwipe(picIndex, galleryElement){
			        let pswpElement = document.querySelectorAll('.pswp')[0],
				        gallery,
				        items = [],
                        thumbElements = galleryElement.childNodes,
				        numNodes = thumbElements.length,
				        figureEl,linkEl, item;

			        for(let i = 0; i < numNodes; i++) {
				        figureEl = thumbElements[i]; // <figure> element

				        // include only element nodes
				        if (figureEl.nodeType === 1) {
					        linkEl = figureEl.children[0]; // <a> element
					        let size = linkEl.getAttribute('data-size').split('x');

					        item = {
						        src: linkEl.getAttribute('data-href'),
                                w: size[0],
                                h: size[1],
                                el: figureEl
					        };
					        if(linkEl.children.length > 0) {
						        item.msrc = linkEl.children[0].style.backgroundImage.split('"')[1];
					        }
					        items.push(item);
				        }
			        }
			        let options = {
				        focus: false,
				        shareEl: false,
				        tapToClose: true,
				        bgOpacity: 0.65,
				        index: picIndex,
				        galleryUID: galleryElement.getAttribute('data-pswp-uid'),
				        getThumbBoundsFn: function(index) {
					        let thumbnail = items[index].el.getElementsByClassName('media-pics-box')[0],
						        pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
						        rect = thumbnail.getBoundingClientRect();
					        return {x:rect.left, y:rect.top + pageYScroll, w:rect.width};
				        }

			        };
			        gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
			        gallery.init();
                }
	        }
        }
	}
</script>
<style>
    @import "../../assets/photoswipe/photoswipe.css";
    @import "../../assets/photoswipe/default-skin/default-skin.css";
</style>
