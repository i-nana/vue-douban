<template>
    <div>
        <m-header title="栏目" fixed>
            <a class="btn-back" href="javascript:void(0);" slot="left" @click="$router.go(-1)">
                <img class="icon-img" src="../../assets/images/ic_bar_back_green.png">
            </a>
        </m-header>
        <div class="page-content page-no-footer">
            <ul>
                <li v-for="(item, index) in themes" :key="item.id">
                    <a href="javascript:void(0);" class="theme-item flex">
                        <img class="theme-icon" :src="item.icon_url">
                        <div class="theme-info flex-fit">
                            <h5 class="theme-name">{{item.name}}</h5>
                            <p class="theme-desc">{{item.desc}}</p>
                        </div>
                        <img class="icon-img icon-right-arrow" src="../../assets/images/ic_seti_arrow_right_gray.png">
                    </a>
                </li>
            </ul>
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
                    this.themes  = response.data.data;
                });
            }
        }
	}
</script>
<style lang="less">
    .theme-item{
        padding: 15px;
        background: #fff;
        border-bottom: 1px solid #eee;
        align-items: center;
        .theme-icon{
            margin-right: 10px;
            width: 54px;
            height: 54px;
            border-radius: 50%;
        }
        .theme-info{
            .theme-name{
                color: #494949;
            }
            .theme-desc{
                padding-right: 10px;
                color: #a7a7a7;
                font-size: 12px;
            }
        }
    }
</style>