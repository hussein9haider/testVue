<template>
  <div id="wrapper"  :class="{'p-0':['movie'].indexOf($route.name) > -1}" class="toggled">
    <SideBar  v-if="['movie'].indexOf($route.name) <= -1"></SideBar>
   <router-view></router-view>
  </div>
</template>

<script>
import SideBar from './components/SideBar.vue'
export default {
  components:{
    SideBar
  }
}
</script>
