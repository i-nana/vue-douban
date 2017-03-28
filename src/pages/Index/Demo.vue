<template>
    <div>
        <m-header title="Demo" fixed>
            <a class="btn-back" href="javascript:void(0);" slot="left" @click="$router.go(-1)">
                <img class="icon-img" src="../../assets/images/ic_bar_back_green.png">
            </a>
        </m-header>
        <div class="page-content page-no-footer">
            <swipe :imgs="imgs" :swipeHeight="'46.667%'"></swipe>
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
                    src: "https://img3.doubanio.com/img/files/file-1484564483.jpg",
                    href: "/"
                }, {
                    src: "https://img3.doubanio.com/img/files/file-1490094734.jpg",
                    href: "/"
                }, {
                    src: "https://img3.doubanio.com/img/files/file-1490351662.jpg",
                    href: "/"
                }, {
                    src: "https://img3.doubanio.com/img/files/file-1489029352.jpg",
                    href: '/'
                // }, {
                //     src: "https://img1.doubanio.com/view/status/median/public/1eEzgk.jpg",
                //     href: "/"
                // }, {
                //     src: "https://img3.doubanio.com/view/freyr_page_photo/raw/public/1392.jpg",
                //     href: "/"
                }]
            }
        }
	}
</script>
<style lang="less">
    
</style>