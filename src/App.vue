<template>
  <div id="app">
    <router-view></router-view>
    <tabbar v-model="select">
      <tabbar-item id="Index" isRouter>
        <img src="./assets/images/ic_tab_home_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_home_active.png" alt="" slot="icon-active">
        首页
      </tabbar-item>
      <tabbar-item id="Subject" isRouter>
        <img src="./assets/images/ic_tab_subject_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_subject_active.png" alt="" slot="icon-active" >
        影音书
      </tabbar-item>
      <tabbar-item id="Status" isRouter>
        <img src="./assets/images/ic_tab_status_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_status_active.png" alt="" slot="icon-active">
        广播
      </tabbar-item>
      <tabbar-item id="Group" isRouter>
        <img src="./assets/images/ic_tab_group_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_group_active.png" alt="" slot="icon-active">
        小组
      </tabbar-item>
      <tabbar-item id="Profile" isRouter>
        <img src="./assets/images/ic_tab_profile_normal.png" alt="" slot="icon-normal">
        <img src="./assets/images/ic_tab_profile_active.png" alt="" slot="icon-active">
        我的
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import tabbar from './components/tabbar'
  import tabbarItem from './components/tabbar-item'
  export default{
    name: 'app',
    components: {
      tabbar,
      tabbarItem
    },
    data() {
      return {
        select: 'Index'
      }
    }

  }
</script>

