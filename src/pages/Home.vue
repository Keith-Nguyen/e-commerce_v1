<template>
  <div id="home-page">
    <section>
      <div class="row">
        <div class="col">
          <Slider />
        </div>
      </div>
    </section>
    <section id="product-list" class="my-4">
      <div class="container">
        <div class="row">
          <div class="col">
            <h1 class="text-center">Danh sách Sản phẩm</h1>
          </div>
        </div>

        <productList v-bind:products="getAllProducts" />
      </div>
    </section>
  </div>
</template>

<script>
import Slider from '@/components/Slider'
// Import helper mapGetters của Vuex để có thể sử dụng getters `getAllProducts` đã khai báo bên KHO chứa (store)
import { mapGetters } from "vuex"
// Import component ProductList
import ProductList from "@/components/ProductList"
export default {
    name:'Home',
    components: {
        Slider,
        ProductList
    },
    computed: {
      ...mapGetters(["getAllProducts"])
    },
    data() {
      return {
      }
  }
}
</script>

<style>

</style>
