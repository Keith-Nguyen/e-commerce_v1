<template>
  <div>
    <router-link class="btn btn-success" to="/kiem-tra-gio-hang">
      <font-awesome-icon :icon="['fas', 'shopping-cart']" />&nbsp;Giỏ hàng ({{ getProductsInCartCount }} sp)
    </router-link>
  </div>
</template>

<script>
// Import helper mapGetters của Vuex để có thể sử dụng getters 'getProductsInCart' đã khai báo bên KHO chứa (store)
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getProductsInCart']),
    getProductsInCartCount () {
      return this.getProductsInCart.length
    }
  }
}
</script>

<style></style>
