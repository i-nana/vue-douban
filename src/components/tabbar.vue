<template>
  <div class="tabbar flex">
    <tabbar-item id="index" isRouter>
        <img src="../assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </tabbar-item>
      <tabbar-item id="movie" isRouter>
        <img src="../assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_subject_active.png" alt="" slot="icon-active" >
        影音书
      </tabbar-item>
      <tabbar-item id="status" isRouter>
        <img src="../assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        广播
      </tabbar-item>
      <tabbar-item id="group" isRouter>
        <img src="../assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_group_active.png" alt="" slot="icon-active">
        小组
      </tabbar-item>
      <tabbar-item id="profile" isRouter>
        <img src="../assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="../assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </tabbar-item>
  </div>
</template>

<script>
  import tabbarItem from './tabbar-item';
  export default {
    props: ['value'],
    components: {
      tabbarItem
    },    
    computed:{
      value(){
        return this.$route.name
      }
    }
  }
</script>
