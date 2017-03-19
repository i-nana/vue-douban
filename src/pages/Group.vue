<template>
    <div>
        <m-header title="小组">
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../assets/images/ic_chat_green.png">
            </a>
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../assets/images/ic_actionbar_search_icon.png">
            </a>
        </m-header>
        <div class="page-content">
            <div class="group-latest flex">
                <a href="javascript: void(0);" class="flex-fit">
                    <img class="icon-img" src="../assets/images/ic_latest_group_topics.png">
                    最新话题
                </a>
                <a href="javascript: void(0);" class="flex-fit">
                    <img class="icon-img" src="../assets/images/ic_posted_group_topics.png">
                    发表的
                </a>
                <a href="javascript: void(0);" class="flex-fit">
                    <img class="icon-img" src="../assets/images/ic_replied_group_topics.png">
                    回应的
                </a>
                <a href="javascript: void(0);" class="flex-fit">
                    <img class="icon-img" src="../assets/images/ic_viewed_group_topics.png">
                    最近浏览
                </a>
            </div>
            <section class="tab-normal tab-slide">
                <div class="section-header">
                    <h3>精选小组</h3>
                    <div class="tab-btns">
                        <a href="javascript: void(0);" class="tab-btn-right">
                            <img class="icon-img icon-group-more" src="../assets/images/ic_groups_more.png">
                        </a>
                    </div>
                </div>
                <div class="section-body">
                    <div class="group-slides-scroll">
                        <div class="slides-scroll">
                            <a class="slides-scroll-item" href="#">
                                <img src="../assets/pics/file-group-0.png">
                            </a>
                            <a class="slides-scroll-item" href="#">
                                <img src="../assets/pics/file-group-1.png">
                            </a>
                            <a class="slides-scroll-item" href="#">
                                <img src="../assets/pics/file-group-2.png">
                            </a>
                            <a class="slides-scroll-item" href="#">
                                <img src="../assets/pics/file-group-3.png">
                            </a>
                            <a class="slides-scroll-item" href="#">
                                <img src="../assets/pics/file-group-4.png">
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section class="tab-normal">
                <p class="tab-title">我的小组</p>
                <div class="section-header">
                    <h3>最近更新</h3>
                </div>
                <ul class="section-body group-list">
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-01.jpg">
                            <span class="group-name flex-fit">☞和手账有关的那些事❤</span>
                            <span class="group-update-num">999+条更新</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-10.jpg">
                            <span class="group-name flex-fit">家有萌宠我是铲屎官</span>
                            <span class="group-update-num">52条更新</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-00.jpg">
                            <p class="group-name flex-fit">买书如山倒 读书如抽丝</p>
                            <div class="group-update-num">18条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-08.jpg">
                            <p class="group-name flex-fit">我们都是多肉控</p>
                            <div class="group-update-num">9条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-05.jpg">
                            <p class="group-name flex-fit">爱生活！爱家居！爱艺术！</p>
                            <div class="group-update-num">32条更新</div>
                        </a>
                    </li>
                </ul>
            </section>
            <section class="tab-normal">
                <div class="section-header">
                    <h3>我常去的</h3>
                </div>
                <ul class="section-body group-list">
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-00.jpg">
                            <p class="group-name flex-fit">买书如山倒 读书如抽丝</p>
                            <div class="group-update-num">18条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-01.jpg">
                            <span class="group-name flex-fit">☞和手账有关的那些事❤</span>
                            <span class="group-update-num">999+条更新</span>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-02.jpg">
                            <p class="group-name flex-fit">最新最好看的电影电视剧推荐</p>
                            <div class="group-update-num">18条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-03.jpg">
                            <p class="group-name flex-fit">人人都有一个花店梦~~~</p>
                            <div class="group-update-num">18条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-04.jpg">
                            <p class="group-name flex-fit">美甲DIY指甲美起来</p>
                            <div class="group-update-num">32条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-05.jpg">
                            <p class="group-name flex-fit">爱生活！爱家居！爱艺术！</p>
                            <div class="group-update-num">32条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-06.jpg">
                            <p class="group-name flex-fit">水彩手绘</p>
                            <div class="group-update-num">9条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-07.jpg">
                            <p class="group-name flex-fit">烘焙爱好蛋糕甜点DIY</p>
                            <div class="group-update-num">9条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-08.jpg">
                            <p class="group-name flex-fit">我们都是多肉控</p>
                            <div class="group-update-num">9条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-09.jpg">
                            <p class="group-name flex-fit">每天多知道一点，生活美好一点~</p>
                            <div class="group-update-num">32条更新</div>
                        </a>
                    </li>
                    <li>
                        <a href="#" class="flex group-list-item">
                            <img class="group-avatar" src="../assets/pics/group-10.jpg">
                            <span class="group-name flex-fit">家有萌宠我是铲屎官</span>
                            <span class="group-update-num">52条更新</span>
                        </a>
                    </li>
                </ul>
            </section>
        </div>
    </div>
</template>
<script>
	import mHeader from '../components/header'

	export default {
		name: 'group',
		components: {
			mHeader
		}
	}
</script>
