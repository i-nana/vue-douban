<template>
    <div class="swipe"
         v-if="imgs.length > 0">
        <div class="swipe-holder"
             :style="'padding-bottom:'+swipeHeight"></div>
        <ul class="swipe-list">
            <li class="swipe-list-item"
                v-for="(item, index) in imgs"
                @touchstart="touchStart"
                @touchmove="touchMove"
                @touchend="touchEnd"
                @mouseover="swipeEnd"
                @mouseleave="scroll">
                <a href="javascript: void(0);"
                   :style="'background-image: url(' + item.src + ')'"></a>
            </li>
        </ul>
        <ul class="swipe-dot">
            <li class="swipe-dot-item"
                v-for="(item, index) in imgs"
                @click="clickScroll(index)"></li>
        </ul>
    </div>
</template>
<style lang="less">
.swipe {
    position: relative;
    width: 100%;
    .swipe-holder {
        width: 100%;
        height: 0;
        padding-bottom: 50%;
    }
    .swipe-list {
        position: absolute;
        top: 0;
        overflow: hidden;
        width: 100%;
        height: 100%;

        -webkit-overflow-scrolling: touch;
        .swipe-list-item {
            position: absolute;
            height: 100%;
            width: 100%;
            display: none;
            >a {
                display: block;
                height: 100%;
                width: 100%;
                background-position: center;
                background-size: cover;
            }
        }
    }
    .swipe-dot {
        display: none;
        position: absolute;
        bottom: 8px;
        left: 50%;
        transform: translate3d(-50%, 0, 0);

        &.show {
            display: block;
        }
        .swipe-dot-item {
            float: left;
            margin: 0 4px;
            width: 8px;
            height: 8px;
            background: rgba(255, 255, 255, 0.54);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 50%;
            cursor: pointer;
            &.active {
                background: transparent;
                border-color: #fff;
            }
        }
    }
}
</style>
<script>
export default ({
    name: 'swipe',
    props: {
        imgs: {
            type: Array,
            default: () => { return []; }
        },
        swipeHeight: {
            type: String,
            default: "50%"
        }
    },
    data() {
        return {
            list: [],
            dots: [],
            index: 0,
            direction: 1,
            swipeTimer: null,
            touch: {
                swiping: 0,     // 是否正在滑动中
                isCanSwipe: 1,  // 是否可以滑动
                startX: 0,
                startY: 0,
                distance: 0,
                current: 0,
                next: 0
            }
        }
    },
    created() {

    },
    mounted() {
        this.initSwipe();
        this.windowResize();
    },
    methods: {
        windowResize() {
            window.addEventListener('resize', () => {
                this.width = this.$el.clientWidth;
            });
        },
        initSwipe() {
            let list = [...this.$el.getElementsByClassName('swipe-list-item')];
            this.index = 0;
            this.width = this.$el.clientWidth;
            this.list = list;
            if (this.list.length > 1) {
                let dotBox = this.$el.getElementsByClassName('swipe-dot')[0];
                if (dotBox) {
                    dotBox.className = 'swipe-dot show';
                    this.dots = [...dotBox.getElementsByClassName('swipe-dot-item')];
                }
                this.initSwipeDot(0);
            }
            this.scroll();
        },
        initSwipeDot(index) {
            let dots = this.dots;
            index = index ? index : 0;
            dots.forEach((item, i) => {
                if (i === index) {
                    dots[index].className = 'swipe-dot-item active';
                } else {
                    dots[i].className = 'swipe-dot-item';
                }
            });
        },
        scroll(page) {
            if (this.list.length === 0) return;
            let currentPage = this.index;
            let nextPage = page && typeof page === Number ? page : currentPage + 1;
            if (nextPage >= this.list.length) nextPage = 0;
            let currentLi = this.list[currentPage];
            let nextLi = this.list[nextPage];
            currentLi.style.display = 'block';
            if (this.list.length === 1) {
                this.touch.isCanSwipe = 0;
                return;
            }
            nextLi.style.display = 'block';
            nextLi.style.webkitTransform = `translate3d(${this.width}px, 0, 0)`;

            let callback = () => {
                if (this.dots.length > 1) {
                    this.initSwipeDot(nextPage);
                }
                currentLi.style.display = 'none';
                this.index = nextPage;
                this.isCanSwipe = 1;
                this.scroll();
            };

            clearTimeout(this.swipeTimer);
            this.swipeTimer = setTimeout(() => {
                this.translate(currentLi, this.width, 800, callback);
                this.translate(nextLi, 0, 800);
                this.isCanSwipe = 0;
            }, 6000);
        },
        clickScroll(page) {
            if (!this.touch.isCanSwipe || page === undefined || page === this.index) return;
            clearTimeout(this.swipeTimer);
            this.isCanSwipe = 0;
            let currentLi = this.list[this.index];
            let nextLi = this.list[page];
            let direction = page > this.index ? 1 : -1;
            nextLi.style.display = 'block';
            this.translate(nextLi, direction * this.width);
            let callback = () => {
                if (this.dots.length > 1) {
                    this.initSwipeDot(page);
                }
                currentLi.style.display = 'none';
                this.index = page;
                this.isCanSwipe = 1;
                this.scroll();
            };
            setTimeout(() => {
                this.translate(currentLi, this.width * direction, 800, callback);
                this.translate(nextLi, 0, 800);
            }, 100);
        },
        swipeEnd() {
            clearTimeout(this.swipeTimer);
        },
        translate(element, offset, speed, callback) {
            if (speed) {
                element.style.webkitTransition = '-webkit-transform ' + speed + 'ms ease';
                setTimeout(() => {
                    offset = -1 * offset;
                    element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
                }, 50);
                setTimeout(() => {
                    if (offset !== 0) {
                        element.style.display = 'none';
                    }
                    element.style.webkitTransition = '';
                    element.style.webkitTransform = '';
                    if (callback) callback();
                }, speed + 50);
            } else {
                element.style.webkitTransition = '';
                element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
            }
        },
        touchStart(e) {
            let touch = this.touch;
            if (!touch.isCanSwipe || touch.swiping) return;
            e.preventDefault();
            e.stopPropagation();
            let touches = e.touches[0];
            touch.startX = touches.pageX;
            touch.startY = touches.pageY;

            touch.swiping = 1;
            clearTimeout(this.swipeTimer);
        },
        touchMove(e) {
            let touch = this.touch;
            if (!touch.isCanSwipe || !touch.swiping) return;

            let touches = e.touches[0];
            let left = touches.pageX, top = touches.pageY;
            touch.distance = left - touch.startX;
            let dDis = Math.abs(touch.distance) - Math.abs(top - touch.startY);
            let listLength = this.list.length;
            if (dDis < 0) {
                touch.swiping = 0;
                this.scroll();
            } else if (Math.abs(touch.distance) > 10) {     // 水平方向滑动
                e.preventDefault();
                e.stopPropagation();
                touch.distance = left - touch.startX;
                let currentPage = this.index;
                let nextPage = touch.distance > 0 ? currentPage - 1 : currentPage + 1;
                let prevPage = touch.distance > 0 ? currentPage + 1 : currentPage - 1;
                if (nextPage >= listLength) {
                    nextPage = 0
                } else if (nextPage < 0) {
                    nextPage = listLength - 1;
                };
                if (prevPage >= listLength) {
                    prevPage = 0
                } else if (prevPage < 0) {
                    prevPage = listLength - 1;
                };
                let currentLi = this.list[currentPage];
                let nextLi = this.list[nextPage];
                let prevLi = this.list[prevPage];
                touch.current = currentPage;
                touch.next = nextPage;
                currentLi.style.display = 'block';
                nextLi.style.display = 'block';
                prevLi.style.display = 'block';
                if (touch.distance < 0) {
                    this.direction = 1;
                } else if (touch.distance > 0) {
                    this.direction = -1;
                }
                this.translate(currentLi, touch.distance);
                this.translate(prevLi, this.width * -1 * this.direction);
                this.translate(nextLi, this.width * this.direction + touch.distance);
            }
        },
        touchEnd(e) {
            let touch = this.touch;
            if (!touch.isCanSwipe || !touch.swiping) return;
            let currentLi = this.list[touch.current];
            let nextLi = this.list[touch.next];
            let isLeft = this.direction;
            if (Math.abs(touch.distance) > this.width * 0.2) {
                let callback = () => {
                    if (this.dots.length > 1) {
                        this.initSwipeDot(touch.next);
                    }
                    currentLi.style.display = 'none';
                    this.index = touch.next;
                    touch.swiping = 0;
                    this.scroll();
                };

                this.translate(currentLi, this.width * isLeft, 150, callback);
                this.translate(nextLi, 0, 150);
            } else {
                let cb = () => {
                    this.index = touch.current;
                    nextLi.style.display = 'none';
                    touch.swiping = 0;
                    this.scroll();
                };
                this.translate(currentLi, 0, 150, cb);
                this.translate(nextLi, -1 * this.width * isLeft, 150);
            }
        }
    }
});
</script>