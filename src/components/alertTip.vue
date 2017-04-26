<template>
    <div class="alert-container">
        <div class="alert-tip">
            <p class="alert-tip-text">{{alertText}}</p>
            <button class="alert-confirm" v-if="isConfirm" @click="closeAlert">确认</button>
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                timer: 3000
            }
        },
        props: {
            alertText: {
                type: String,
                default: ""
            },
            isConfirm: {
                type: Boolean,
                default: false
            }
	    },
        methods: {
            closeAlert() {
                this.$emit('closeAlert')
            },
            autoClose() {
                // if(!isConfirm)
            }
        }
    }
</script>
<style lang="less">
.alert-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 99;
    .alert-tip{
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -10rem;
        margin-top: -5rem;
        width: 20rem;
        height: 10rem;
        background: rgba(0, 0, 0, .5);
        color: #fff;
    }
}

</style>