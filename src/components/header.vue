<template>
  <header class="m-header" :class="{'bg':bg,'fixed':fixed}">
    <div class="header-btn pull-left">
      <slot name="left"></slot>
    </div>
    <h1 class="header-title" v-text="title"></h1>
    <div class="header-btn pull-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>
<script>
  export default{
      props: {
          title: {
            type: String,
            default: ''
          },
        bg: {
          type: Boolean,
          default: false
        },
        fixed: {
          type: Boolean,
          default: false
        }
      }
  }
</script>
