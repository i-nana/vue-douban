<template>
    <div>
        <m-header title="我的" fixed>
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../assets/images/ic_settings.png">
            </a>
        </m-header>
        <div class="page-content">
            <div class="profile-cover">
                <div class="profile-wrapper flex">
                    <div class="profile-avatar">
                        <img src="../assets/pics/avatar.jpg">
                    </div>
                    <div class="profile-info flex-fit">
                        <h1>葳蕤</h1>
                        <p class="profile-desc">人知名至 人随己愿</p>
                        <p class="profile-fans"><span>关注 35</span><span>被关注 8 </span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
	import mHeader from '../components/header'

	export default {
		name: 'profile',
		components: {
			mHeader
		}
	}
</script>
