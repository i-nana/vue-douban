<template>
  <div class="tabbar flex">
    <slot></slot>
  </div>
</template>

<script>
  import tabbarItem from './tabbar-item';
  export default {
    props: ['value'],
    computed:{
      value(){
        return this.$route.matched[0].name
      }
    }
  }
</script>
