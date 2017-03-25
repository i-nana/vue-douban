<template>
    <div>
        <m-header title="栏目" fixed>
            <a class="btn-back" href="javascript:void(0);" slot="left" @click="$router.go(-1)">
                <img class="icon-img" src="../../assets/images/ic_bar_back_green.png">
            </a>
        </m-header>
        <div class="page-content">
        </div>
    </div>
</template>
<script>
	import mHeader from '../../components/header'
	export default {
		name: 'themes',
		components: {
			mHeader
		},
        data() {
            return {
                themes: []
            }
        },
       created(){
            this.getThemes();
        },
        methods: {
            getThemes(){
                this.axios.get('/api/themes').then(response => {
                    var data = response.data.data;
                    data.sort(function(x, y){
                        return Math.random() - 0.5;
                    });
                    this.themes = data;

                });
            }
        }
	}
</script>
<style lang="less">

</style>