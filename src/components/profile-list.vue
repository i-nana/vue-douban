<template>
        <li :key="item.id">
            <img class="icon-img" :src="item.img">{{item.name}}
        </li>
</template>
<script>
export default {
    props: {
        data: {
            type: Array,
            default: () => {
                return []
            }
        },
        isLogin: false
    },
    methods: {
        jumping(event) {
            console.log(event.target);
            this.isLogin = this.$store.state.login;
            if (isLogin) {
                this.$router.go('/profile/');
            }
        }
    }
}
</script>