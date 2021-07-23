<template>
  <div class="LayoutNoSidebar">
    <NavBar />

    <div class="container">
      <main class="LayoutNoSidebar__main mt-2">
        <slot />
      </main>
    </div>

    <FooterBar />
  </div>
</template>

<script>
// Import thành phần (components) NavBar, FooterBar để sử dụng
import NavBar from '@/components/NavBar.vue'
import FooterBar from '@/components/FooterBar.vue'

// Để sử dụng được các thẻ (tag) của các component tương ứng
// <nav-bar />     -> component NavBar
// <footer-bar />  -> component FooterBar
// Chúng ta phải khai báo trong thuộc tính `components` của phần export default {}
export default {
  components: {
    NavBar,
    FooterBar
  },
  name:'NoSidebar'
}
</script>

<style></style>
