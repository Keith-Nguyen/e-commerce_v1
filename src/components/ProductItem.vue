<template>
  <div class="product-item h-100">
    <div class="card h-100 shadow-sm">
      <img :src="product.image" alt="" class="card-img-top product-item-img" />
      <div class="card-body">
        <router-link to="/product-details">
          <h5 class="card-title product-name" @click="addCurrentProduct(product)">
            {{ product.name }}
          </h5>
        </router-link>
        <div class="product-price">
          <h6>Giá: {{ product.price }},00 $</h6>
        </div>
        <div class="product-details">
          <p>{{ product.details }}</p>
        </div>
      </div>
      <div class="card-footer text-center">
        <button class="btn btn-primary" @click="addProductToCart(product)">
          Thêm vào Giỏ hàng
        </button>
      </div>
    </div>
  </div>
</template>

<script>
// Import helper mapActions của Vuex để có thể sử dụng các actions `addProduct, currentProduct` 
// đã khai báo bên KHO chứa (store)
import { mapActions } from 'vuex'

export default {
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapActions(['addProduct', 'currentProduct']),
    addProductToCart (product) {
      this.addProduct(product)
    },
    addCurrentProduct (product) {
      this.currentProduct(product)
    }
  }
}
</script>

<style scoped>
.product-item-img {
  height: 150px;
  object-fit: contain;
}
</style>
