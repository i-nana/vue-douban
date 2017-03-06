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
