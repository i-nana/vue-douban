<template>
    <div>
        <m-header title="我的喜欢 ❤" fixed>
            <a class="btn-back" href="javascript:void(0);" slot="left" @click="$router.go(-1)">
                <img class="icon-img" src="../../../assets/images/ic_bar_back_green.png">
            </a>
        </m-header>
        <div class="page-content page-no-footer">
            
        </div>
    </div>
</template>
<script>
	import mHeader from '../../../components/header'
	export default {
		name: 'themes',
		components: {
			mHeader
		},
	}
</script>
<style lang="less">
    
</style>