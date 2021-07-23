<template>
  <div id="app" class="App">
    <!-- <img src="./assets/logo.png" width="200" height="180"> -->
    <!-- <HelloWorld msg="Hello world" /> -->
    <!-- <font-awesome-icon :icon="['fas','robot']" /> -->
    <!-- Solid icons -->
    <!-- <font-awesome-icon :icon="['fas', 'image']" />
    <font-awesome-icon :icon="['fas', 'user']" /> -->
    <component :is="layout">
      <router-view />
    </component>
    <!-- <router-view/> -->
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import NavBar from './components/NavBar.vue'
// import SideBar from './components/SideBar.vue'
// import FooterBar from './components/FooterBar.vue'
// Khai báo layout mặc định là default
const defaultLayout = 'default'

export default {
  computed: {
    layout () {
      // Sử dụng this.$route.meta.layout để kiểm tra xem trong route có khai báo meta tương ứng hay không?
      // Nếu không có khai báo layout -> sẽ hiển thị layout default
      return (this.$route.meta.layout || defaultLayout) + '-layout'
    }
  },
  created () {
    // nothing defined here (when this.$route.path is other than "/")
    console.log(this.$route, this.$route.meta.layout)
  },
  updated () {
    // something defined here whatever the this.$route.path
    console.log(this.$route, this.$route.meta.layout)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
