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
                <form class="login-form" method="post" action="javascript: return false;" autocomplete="off">
                    <input type="text" class="login-input" name="uname" value="" placeholder="手机号/邮箱">
                    <input type="password" class="login-input" name="psw" placeholder="密码">
                    <button class="login-submit">登录</button>
                </form>
                <p class="login-other"><a class="login-register">注册豆瓣</a><i></i><a class="psw-forget">忘记密码</a></p>
            </div>
        </div>
    </div>
</template>
<script>
import mHeader from '../../components/header'
export default {
    name: 'login',
    components: {
        mHeader
    },
    data() {
        return {

        }
    },
    created() {

    },
    methods: {

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
    padding-bottom: 20px;
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
        &:focus {
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
    .login-register {
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
</style>