<template>
    <div>
        <m-header title="" fixed>
            <a class="btn-back" href="javascript:void(0);" slot="left" @click="$router.go(-1)">
                <img class="icon-img" src="../../assets/images/ic_bar_back_green.png">
            </a>
        </m-header>
        <div class="page-content page-no-footer">
            <div class="login-main">
                <div class="login-title">欢迎来到豆瓣</div>
                <form class="login-form" method="post" action="javascript: return false;" autocomplete="off" @submit.prevent="login">
                    <input type="text" class="login-input" name="uname" value="" placeholder="手机号/邮箱" v-model="user.name">
                    <input type="password" class="login-input" name="password" placeholder="密码" v-model="user.password">
                    <button class="login-submit" >登录</button>
                </form>
                <p class="login-other">
                    <a class="login-up">注册豆瓣</a>
                    <i></i>
                    <a class="psw-forget">忘记密码</a>
                </p>
            </div>
        </div>
        <div class="footer-login">

        </div>
        <div class="alert-tip-auto" :class="{'show': showAlert}">{{alertText}}</div>
    </div>
</template>
<script>
import mHeader from '../../components/header'
import {mapState, mapMutations} from 'vuex'
export default {
    name: 'login',
    components: {
        mHeader
    },
    data() {
        return {
            user: {
                name: null,
                password: null
            },
            showAlert: false,
            alertText: '',
            alertTimer: null
        }
    },
    mounted() {
        
    },
    methods: {
        // ...mapMutations([
        //     'RECORD_USERINFO',
        // ]),
        login(e) {
            let user = this.user;
            // if(!user.name || user.name.length === 0) {
            //     this.alertText = "请输入手机号/邮箱";
            //     this.showAlert = !0;
            //     this.closeAlert();
            //     return;
            // }
            // if(!user.password || user.password.length === 0) {
            //     this.alertText = "请输入密码";
            //     this.showAlert = !0;
            //     this.closeAlert();
            //     return;
            // }

            this.$store.state.user.name = user.name;
            this.$store.state.user.id = 1304110110;
            this.RECORD_USERINFO(user);
           // this.$router.go(-1);
        },
        closeAlert() {
            let that = this;
            this.alertTimer = setTimeout(function(){
                that.showAlert = !1;
                that.alertText = '';
                clearTimeout(that.alertTimer);
            }, 3000);
        }
    }
}
</script>
<style lang="less">
#app {
    background: #fff;
}

header {
    border-bottom: none;
}

.page-content {
    position: absolute;
    height: 100%;
    width: 100%;
}

.login-main {
    position: absolute;
    width: 100%;
    top: 50%;
    padding-bottom: 36px;
    transform: translateX(0) translateY(-50%) translateZ(0);
}

.login-title {
    text-align: center;
    color: #42bd56;
    font-size: 28px;
    letter-spacing: 2px;
}

.login-form {
    margin: 0 20px 10px;
    .login-input {
        display: block;
        padding: 4px 0 5px;
        margin: 16px 0;
        width: 100%;
        background: none;
        border: none;
        border-bottom: 1px solid #ccc;
        line-height: 1.5;
        &:focus, &.focus {
            padding-bottom: 4px;
            border-bottom: 2px solid #42bd56;
            color: #42bd56;
        }
    }
    .login-submit {
        display: block;
        margin-top: 30px;
        width: 100%;
        height: 40px;
        line-height: 40px;
        background: #42bd56;
        border: none;
        border-radius: 4px;
        color: #fff;
    }
}

.login-other {
    text-align: center;
    .login-up {
        font-size: 12px;
        color: #42bd56;
    }
    .psw-forget {
        font-size: 12px;
        color: #a7a7a7;
    }

    >i {
        display: inline-block;
        margin: -1px 16px;
        width: 1px;
        height: 10px;
        background: #ccc;
    }
}
.alert-tip-auto{
    position: fixed;
    z-index: -1;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%) translateY(0) translateZ(0);
    padding: 8px 12px;
    font-size: 14px;
    line-height: 1;
    color: #fff;
    background: rgba(0, 0, 0, .65);
    text-align: center;
    border-radius: 15px;
    opacity: 0;
    transition: all .25s linear;
    &.show {
        z-index: 99;
        opacity: 1;
        bottom: 30px;
    }
}
</style>