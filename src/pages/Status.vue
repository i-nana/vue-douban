<template>
  <m-header title="广播">
    <a class="btn-chat" href="javascript:void(0);" slot="right">
      <img class="icon-img" src="../assets/images/ic_chat_green.png">
    </a>
    <a class="btn-chat" href="javascript:void(0);" slot="right">
      <img class="icon-img" src="../assets/images/ic_status_search_user.png">
    </a>
  </m-header>
</template>
<script>
  import mHeader from '../components/header'

  export default {
    name: 'status',
    components: {
      mHeader
    }
  }
</script>
