<template>
    <div class="swipe"
         v-if="imgs.length > 0">
        <div class="swipe-holder"
             :style="'padding-bottom:'+swipeHeight"></div>
        <ul class="swipe-list">
            <li class="swipe-list-item"
                v-for="(item, index) in imgs">
                <router-link :to="item.href" :style="'background-image: url(' + item.src + ')'">
                </router-link>
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
            index: 0
        }
    },
    created() {

    },
    mounted() {
        this.initSwipe();
    },
    methods: {
        initSwipe() {
            var children = this.$children;
            var list = [];
            this.index = 0;
            this.width = this.$el.clientWidth;
            children.forEach(function (child, index) {
                list.push(child.$el.parentNode);
            });
            this.list = list;
            this.scroll();
        },
        scroll(page) {
            if (this.list.length === 0) return;
            var currentPage = this.index;
            var nextPage = page ? page : currentPage + 1;
            if(nextPage >= this.list.length) nextPage = 0;
            var currentLi = this.list[currentPage];
            var nextLi = this.list[nextPage];
            currentLi.style.display = 'block';
            nextLi.style.display = 'block';
            nextLi.style.webkitTransform = `translate3d(${this.width}px, 0, 0)`;
            var callback = () => {
                currentLi.style.display = 'none';
                this.index = nextPage;
                this.scroll();
            };
            setTimeout(() => {
                this.translate(currentLi, this.width, 500, callback);
                this.translate(nextLi, 0, 500);
            }, 5000);

        },
        translate(element, offset, speed, callback) {
            if (speed) {
                element.style.webkitTransition = '-webkit-transform ' + speed + 'ms linear';
                setTimeout(() => {
                    element.style.webkitTransform = `translate3d(-${offset}px, 0, 0)`;
                }, 50);
            } else {
                element.style.webkitTransition = '';
                element.style.webkitTransform = `translate3d(-${offset}px, 0, 0)`;
            }
            setTimeout( () => {
                element.style.webkitTransition = '';
                element.style.webkitTransform = '';
                
                if(callback) callback();
            }, speed + 100);
        },
    }
})
</script>