<template>
    <div>
        <header class="m-header flex bg">
            <form class="search flex flex-fit" method="post">
                <button class="search-submit"><img class="icon-img" src="../assets/images/ic_search_gray.png"></button>
                <input type="text" class="search-text flex-fit" placeholder="影视 图书 唱片 小组 舞台剧等">
                <a class="search-scan" href="javascript: void(0);">
                    <img class="icon-img" src="../assets/images/ic_scan_gray.png">
                </a>
            </form>
            <a href="javascript: void(0);" class="btn-chat">
                <img class="icon-img" src="../assets/images/ic_chat_white.png">
            </a>
        </header>
        <div class="page-content">
            <div class="group-banner">
                <div class="group-banner-main">
                    <h3>416479个小组等你来玩</h3>
                    <p>选择立即加入吧</p>
                </div>
            </div>
            <div class="section-banner">
                <p class="section-banner-title">书影音</p>
            </div>
            <section>
                <div class="section-header">
                    <div class=""></div>
                    <p>影视</p>
                </div>
                <div class="section-body">
                    <ul>
                        <li>
                            <a class="flex group-list-item" href="javascript:void(0);">
                                <img class="group-avatar" src="https://img3.doubanio.com/icon/g18616-1.jpg">
                                <div class="flex-fit">
                                    <h4>IMDb250部最佳影片</h4>
                                    <p>如果你相信IMDb排名，并且相信到了迷信的程度，甚至于到了非250名之内的电影都可以不看的地步，那么就欢迎你来吧！</p>
                                </div>
                                <p>40210人</p>
                            </a>
                            <button>√·✔</button>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    </div>
</template>

<script>
	import mHeader from '../components/header'
	export default{
		name: 'index',
		components: {
			mHeader
		}
	}
</script>
<style>
.group-banner{
    position: relative;
}
.group-banner:before{
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 47.5%;
}
.group-banner-main{
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background:url('../assets/images/ic_group_banner.png') center no-repeat #fff;
    background-size: cover;
    text-align: center;
}
.section-banner {
    position: relative;
    padding: 0 15px;
    background: #fff;
}
.section-banner:before{
    content: '';
    display: block;
    width: 100%;
    height: 0;
    padding-bottom: 21.74%;
    background:url('../assets/images/ic_rec_group_banner_1.png') center no-repeat #fff;
    background-size: contain;
}
.section-banner-title{
    position: absolute;
    bottom: 12%;
    left: 24px;
    color: #fff;
}
</style>
