<template>
  <div class="w-full flex">
    <side-bar />
    <div class="main-content w-4/5 h-screen">
      <div class="main mx-auto my-auto bg-white mt-12">
       
      </div>
    </div>
  </div>
</template>

<script>
import SideBar from '../Dashboard/Sidebar.vue'
export default {
    name: 'Dasboard',
    components:{
        SideBar
    }
}
</script>
<style>
.color-tab-navigation {
  color: #4299e1;
}
.main-content {
  background-color: #f6f6f6;
}
.main {
  margin-top: 8%;
  height: 80%;
  width: 90%;
}
.icon-dashboard:hover {
  fill: #4299e1;
}
</style>