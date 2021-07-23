<template>
  <div class="LayoutDefault">
    
    <nav-bar />
    <div class="container mt-2">
      <div class="row">
        <div class="col-md-3">
          <side-bar />
        </div>
        <div class="col-md-9">
          <main class="LayoutDefault__main">
            <slot />
          </main>
        </div>
      </div>
    </div>
    
    <footer-bar />
  </div>
</template>

<script>
// Import thành phần (components) NavBar, SideBar, FooterBar để sử dụng
import NavBar from '@/components/NavBar.vue'
import SideBar from '@/components/SideBar.vue'
import FooterBar from '@/components/FooterBar.vue'

// Để sử dụng được các thẻ (tag) của các component tương ứng
// <nav-bar />     -> component NavBar
// <side-bar />    -> component SideBar
// <footer-bar />  -> component FooterBar
// Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
export default {
  components: {
    NavBar,
    SideBar,
    FooterBar
  },
  name:'DefaultLayout'
}
</script>

<style scoped>

</style>
