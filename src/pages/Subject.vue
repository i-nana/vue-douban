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
        <div class="page-content">
            <section id="hot-movie" class="tab-movies">
                <div class="section-header flex">
                    <h3 class="flex-fit">影院热映</h3>
                    <div class="tab-btns">
                        <a href="javascript:;">更多 ></a>
                    </div>
                </div>
                <div class="section-body">
                    <ul>
                        <li>
                            <a href="javascript:;">
                                <img src="">
                                <p>一条狗的使命</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
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
                soonMovies: [],
			}
        },
		created() {
			this.getHotMovies();
			this.getSoonMovies();
		},
		methods: {
			getHotMovies() {
				this.$http.get('/api/movie/in_theaters').then(response => {
                    console.log(response.body);
                    this.hotMovies = response.body;
				}, response => {
					// error callback
				});
			},
            getSoonMovies() {
	            this.$http.get('/api/movie/coming_soon').then(response => {
		            console.log(response.body);
	            }, response => {
		            // error callback
	            });
            }
		}
	}


</script>
