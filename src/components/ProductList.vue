<template>
  <div class="row row-cols-1 row-cols-md-3 product-list">
    <div class="col my-2 product" v-for="product in products" :key="product.id">
      <product-item v-bind:product="product" v-bind:key="product.id"></product-item>
    </div>
  </div>
</template>

<script>
import ProductItem from '@/components/ProductItem'

export default {
  props: ['products'],
  components: {
    ProductItem
  }
}
</script>

<style scoped>
</style>
