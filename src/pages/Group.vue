<template>
  <m-header title="小组">
    <a class="btn-chat" href="javascript:void(0);" slot="right">
      <img class="icon-img" src="../assets/images/ic_chat_green.png">
    </a>
    <a class="btn-chat" href="javascript:void(0);" slot="right">
      <img class="icon-img" src="../assets/images/ic_actionbar_search_icon.png">
    </a>
  </m-header>
</template>
<script>
  import mHeader from '../components/header'

  export default {
    name: 'group',
    components: {
      mHeader
    }
  }
</script>
