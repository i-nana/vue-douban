<template>
    <div>
        <m-header title="Demo" fixed>
            <a class="btn-back" href="javascript:void(0);" slot="left" @click="$router.go(-1)">
                <img class="icon-img" src="../../assets/images/ic_bar_back_green.png">
            </a>
        </m-header>
        <div class="page-content page-no-footer">
            <swipe :imgs="imgs" :swipeHeight="'34.167%'"></swipe>
        </div>
    </div>
</template>
<script>
	import mHeader from '../../components/header'
	import swipe from '../../components/swipe'
	export default {
		name: 'test',
		components: {
            mHeader,
			swipe
		},
        data() {
            return {
                imgs: [{
                    src: "http://ww1.sinaimg.cn/large/9ad31e86gw1euk1t7ads3j21hc0u0177.jpg",
                    href: "/"
                }, {
                    src: "http://ww2.sinaimg.cn/large/9ad31e86jw1f1fh6wuduzj21hc0u0tlg.jpg",
                    href: "/"
                }, {
                    src: "http://ww3.sinaimg.cn/large/9ad31e86gw1euk1symylij21hc0u01cc.jpg",
                    href: "/"
                }, {
                    src: "http://ww4.sinaimg.cn/large/9ad31e86gw1euk1soc7yej21hc0u0q7o.jpg",
                    href: "/"
                }, {
                    src: "http://ww4.sinaimg.cn/large/9ad31e86gw1evrzc8u1mvj21hc0u0n5s.jpg",
                    href: "/"
                }]
            }
        }
	}
</script>
<style lang="less">
    
</style>