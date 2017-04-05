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
                @touchend="touchEnd">
                <a href="javascript: void(0);"
                   :style="'background-image: url(' + item.src + ')'"></a>
            </li>
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
            index: 0,
            direction: 'left',
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
    },
    methods: {
        initSwipe() {
            var children = [...this.$el.getElementsByClassName('swipe-list-item')];
            var list = [];
            this.index = 0;
            this.width = this.$el.clientWidth;
            children.forEach(function (child, index) {
                list.push(child);
            });
            this.list = list;
            this.scroll();
        },
        scroll(page) {
            if (this.list.length === 0) return;
            var currentPage = this.index;
            var nextPage = page ? page : currentPage + 1;
            if (nextPage >= this.list.length) nextPage = 0;
            var currentLi = this.list[currentPage];
            var nextLi = this.list[nextPage];
            currentLi.style.display = 'block';
            nextLi.style.display = 'block';
            nextLi.style.webkitTransform = `translate3d(${this.width}px, 0, 0)`;
            var callback = () => {
                currentLi.style.display = 'none';
                this.index = nextPage;
                //     this.scroll();
            };
            // setTimeout(() => {
            //     this.translate(currentLi, this.width, 500, callback);
            //     this.translate(nextLi, 0, 500);
            // }, 5000);

        },
        translate(element, offset, speed, callback) {
            if (speed) {
                element.style.webkitTransition = '-webkit-transform ' + speed + 'ms linear';
                setTimeout(() => {
                    offset = -1 * offset;
                    element.style.webkitTransform = `translate3d(${offset}px, 0, 0)`;
                }, 50);
            } else {
                element.style.webkitTransition = '';
                element.style.webkitTransform = `translate3d(-${offset}px, 0, 0)`;
            }
            setTimeout(() => {
                element.style.webkitTransition = '';
                element.style.webkitTransform = '';

                if (callback) callback();
            }, speed + 100);
        },
        touchStart(e) {
            var touch = this.touch;
            if (touch.swiping || !touch.isCanSwipe) return;
            var touches = e.touches[0];
            touch.startX = touches.pageX;
            touch.startY = touches.pageY;

            touch.swiping = 1;
        },
        touchMove(e) {
            var touch = this.touch;
            if (!touch.isCanSwipe || !touch.swiping) return;

            var touches = e.touches[0];
            var left = touches.pageX, top = touches.pageY;
            var dDis = Math.abs(left - touch.startX) - Math.abs(top - touch.startY);
            if (dDis >= 0) {     // 水平方向滑动
                e.preventDefault();
                e.stopPropagation();
                touch.distance = left - touch.startX;
                var currentPage = this.index;
                var nextPage = touch.distance > 0 ? currentPage - 1 : currentPage + 1;
                if (nextPage >= this.list.length) {
                    nextPage = 0
                } else if (nextPage < 0) {
                    nextPage = this.list.length - 1;
                };
                var currentLi = this.list[currentPage];
                var nextLi = this.list[nextPage];
                touch.current = currentPage;
                touch.next = nextPage;
                currentLi.style.display = 'block';
                nextLi.style.display = 'block';
                currentLi.style.webkitTransform = `translate3d(${touch.distance}px, 0, 0)`;
                if (touch.distance < 0) {
                    this.direction = 'left';
                    nextLi.style.webkitTransform = `translate3d(${(this.width + touch.distance)}px, 0, 0)`;
                } else if (touch.distance > 0) {
                    this.direction = 'right';
                    nextLi.style.webkitTransform = `translate3d(${(-this.width + touch.distance)}px, 0, 0)`;
                }
            }
        },
        touchEnd(e) {
            var touch = this.touch;
            console.log(this.direction, touch.next, touch.current);
            var currentLi = this.list[touch.current];
            var nextLi = this.list[touch.next];
            var callback = () => {
                currentLi.style.display = 'none';
                this.index = touch.next;
                //     this.scroll();
            };
            if (this.direction === 'left') {
                this.translate(currentLi, this.width, 200, callback);
                this.translate(nextLi, 0, 200);
            } else if (this.direction === 'right') {
                this.translate(currentLi, -1 * this.width, 200, callback);
                this.translate(nextLi, 0, 200);
            }
            this.index = touch.next;
            touch.swiping = 0;
        }
    }
});
// https://github.com/LingYanSi/LingYanSi.github.io/blob/master/vue/app/module/sider.vue#L181
</script>