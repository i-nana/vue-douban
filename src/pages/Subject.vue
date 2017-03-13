<template>
    <div>
        <m-header title="书影音">
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../assets/images/ic_chat_green.png">
            </a>
            <a class="btn-chat" href="javascript:void(0);" slot="right">
                <img class="icon-img" src="../assets/images/ic_actionbar_search_icon.png">
            </a>
        </m-header>
        <div id="hot-movie"></div>
    </div>
</template>
<script>
	import mHeader from '../components/header'
	export default {
		name: 'subject',
		components: {
			mHeader
		},
		data(){
			return {
				hotMovies: [],
			}
        },
		created() {
			this.fetchData();
		},
		methods: {
			fetchData() {
				this.$http.get('/api/movie/in_theaters').then(response => {
console.log(response);
				}, response => {
					// error callback
				});
			}
		}
	}


</script>
