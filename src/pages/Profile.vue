<template>
  <div>
    <m-header title="我的" fixed>
      <a href="javascript:void(0);" slot="right">
        <img class="icon-img" src="../assets/images/ic_actionbar_search_icon.png">
      </a>
      <a href="javascript:void(0);" slot="right">
        <img class="icon-img" src="../assets/images/ic_chat_green.png">
      </a>
    </m-header>
  </div>
</template>
<script>
  import mHeader from '../components/header'

  export default {
    name: 'profile',
    components: {
          mHeader
    }
  }
</script>
