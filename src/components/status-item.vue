<template>
    <div>
        <section class="tab-status"
                 v-for="(item, index) in data.items"
                 :key="item.id">
            <a class="section-header status-header flex">
                <img class="status-avatar"
                     :src="item.author.avatar">
                <div class="status-user flex-fit">
                    <h5>{{ item.author.name}}</h5>
                    <p>{{ item.activity }}</p>
                </div>
                <p class="status-time">{{ item.create_time }}</p>
                <img class="icon-img icon-more"
                     src="../assets/images/ic_more_action_overflow.png">
            </a>
            <div class="section-body">
                <p class="status-text"
                   v-html="item.text"></p>
                <div class="media"
                     v-if="item.images && item.images.length > 0">
                    <div class="media-pics clear flex"
                         @click="onThumbnailsClick"
                         :class="{'media-pics-2': [1,2,4].indexOf(item.images.length) > -1}">
                        <figure v-for="(pic, j) in item.images">
                            <div :data-href="pic.large.url"
                                 :data-size="pic.large.width + 'x' + pic.large.height"
                                 itemprop="contentUrl">
                                <div class="media-pics-box"
                                     :style="'background-image:url(' + pic.normal.url+ ')'"></div>
                            </div>
                        </figure>
                    </div>
                </div>
                <div class="status-share flex status-share-movie"
                     v-else-if="item.card">
                    <div class="status-share-poster"
                         v-if="item.card.image && item.card.image.normal"
                         :style="'background-image: url(' + item.card.image.large.url + ')'"></div>
                    <div class="status-share-info flex-fit">
                        <h5>{{item.card.title}}</h5>
                        <p>豆瓣评分：{{item.card.rating}}</p>
                        <p>{{item.card.subtitle}}</p>
                    </div>
                </div>
                <div class="status-reshare"
                     v-else-if="item.reshared_status">
                    <p class="status-text">
                        <a href="javascript: void(0);">@{{item.reshared_status.author.name}}</a>
                        <span v-html="item.reshared_status.text"></span>
                    </p>
                    <div class="media"
                         v-if="item.reshared_status.images && item.reshared_status.images.length > 0">
                        <div class="media-pics clear flex"
                             @click="onThumbnailsClick"
                             :class="{'media-pics-2': [1,2,4].indexOf(item.reshared_status.images.length) > -1}">
                            <figure v-for="(pic, j) in item.reshared_status.images">
                                <div :data-href="pic.large.url"
                                     :data-size="pic.large.width + 'x' + pic.large.height"
                                     itemprop="contentUrl">
                                    <div class="media-pics-box"
                                         :style="'background-image:url(' + pic.normal.url+ ')'"></div>
                                </div>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="section-footer tab-status-btns flex">
                <a href="javascript: void(0);"
                   class="tab-status-btn flex-fit">
                    <img class="icon-img"
                         src="../assets/images/ic_vote_normal_large.png">
                </a>
                <a href="javascript: void(0);"
                   class="tab-status-btn flex-fit">
                    <img class="icon-img"
                         src="../assets/images/ic_reply_large.png">
                </a>
                <a href="javascript: void(0);"
                   class="tab-status-btn flex-fit">
                    <img class="icon-img"
                         src="../assets/images/ic_reshare_large.png">
                </a>
            </div>
        </section>
    </div>
</template>

<script>
import PhotoSwipe from '../assets/photoswipe/photoswipe.min.js'
import PhotoSwipeUI_Default from '../assets/photoswipe/photoswipe-ui-default.min.js'
export default {
    props: {
        data: {
            type: Object,
            default: () => {
                return {
                    count: 0,
                    items: []
                };
            }
        }
    },
    methods: {
        fetchData() {
            //this.statusData = timelineData;
        },
        onThumbnailsClick(e) {
            function closest(el, fn) {
                return el && (fn(el) ? el : closest(el.parentNode, fn));
            }

            e = e || window.event;
            e.preventDefault ? e.preventDefault() : e.returnValue = false;
            let eTarget = e.target || e.srcElement;

            let clickedListItem = closest(eTarget, function (el) {
                return (el.tagName && el.tagName.toUpperCase() === 'FIGURE');
            });
            if (!clickedListItem) {
                return;
            }
            let clickedGallery = clickedListItem.parentNode,
                childNodes = clickedListItem.parentNode.childNodes,
                numChildNodes = childNodes.length,
                nodeIndex = 0,
                index;

            for (let i = 0; i < numChildNodes; i++) {
                if (childNodes[i].nodeType !== 1) {
                    continue;
                }

                if (childNodes[i] === clickedListItem) {
                    index = nodeIndex;
                    break;
                }
                nodeIndex++;
            }
            if (index >= 0) {
                openPhotoSwipe(index, clickedGallery);
            }

            function openPhotoSwipe(picIndex, galleryElement) {
                let pswpElement = document.querySelectorAll('.pswp')[0],
                    gallery,
                    items = [],
                    thumbElements = galleryElement.childNodes,
                    numNodes = thumbElements.length,
                    figureEl, linkEl, item;

                for (let i = 0; i < numNodes; i++) {
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
                        if (linkEl.children.length > 0) {
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
                    showHideOpacity: true,
                    index: picIndex,
                    galleryUID: galleryElement.getAttribute('data-pswp-uid'),
                    getThumbBoundsFn: function (index) {
                        let thumbnail = items[index].el.getElementsByClassName('media-pics-box')[0],
                            pageYScroll = window.pageYOffset || document.documentElement.scrollTop,
                            rect = thumbnail.getBoundingClientRect();
                        return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
                    }
                };
                gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
                gallery.init();
            }
        }
    }
}
</script>