<template>
  <section>
    <div class="container">
      <div class="row">
        <div class="col">
          <h1 class="text-center">Giỏ hàng</h1>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <table class="table table-borderd table-striped">
            <thead>
              <th>STT</th>
              <th>Hình đại diện</th>
              <th>Tên sản phẩm</th>
              <th>Giá</th>
              <th>Số lượng</th>
              <th>Thành tiền</th>
              <th>Thêm số lượng</th>
              <th>Xóa sản phẩm</th>
            </thead>
            <tbody>
              <tr
                v-for="(product, index) in getProductsInCart"
                v-bind:key="product.id"
              >
                <td>{{ index + 1 }}</td>
                <td>
                  <img
                    :src="product.image"
                    alt=""
                    class="product-item-in-cart-img"
                  />
                </td>
                <td>{{ product.name }}</td>
                <td class="text-right">{{ product.price }}</td>
                <td class="text-right">{{ product.totalBuyed }}</td>
                <td class="text-right">
                  {{ product.price * product.totalBuyed }}
                </td>
                <td>
                  <button class="btn btn-success" @click="add(product)">
                    <font-awesome-icon :icon="['fas', 'plus']" />&nbsp;Thêm
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger" @click="remove(product.id)">
                    <font-awesome-icon :icon="['fas', 'trash']" />&nbsp;Xóa
                  </button>
                </td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="5" class="text-right">Tổng tiền:</td>
                <td class="text-right font-weight-bold">
                  {{ getTotalAmount }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
// Import helper mapGetters của Vuex để có thể sử dụng getters đã khai báo bên KHO chứa (store)
// Import helper mapActions của Vuex để có thể sử dụng actions đã khai báo bên KHO chứa (store)
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters(['getProductsInCart']),

    // Hàm dùng để tính Tổng tiền
    getTotalAmount () {
      // Duyệt qua tất cả sản phẩm có trong giỏ hàng
      // Thành tiền += Giá * Số lượng đã mua
      let totalAmount = 0
      this.getProductsInCart.forEach(product => {
        totalAmount += product.price * product.totalBuyed
      })
      return totalAmount
    }
  },
  methods: {
    ...mapActions(['removeProduct','addProduct']),

    // Hàm xóa Sản phẩm khỏi Giỏ hàng
    remove (id) {
      this.removeProduct(id)
    },
    add(product){
      this.addProduct(product)
    }
  }
}
</script>

<style scoped>
.product-item-in-cart-img {
  width: 150px;
  height: 150px;
  object-fit: contain;
}
</style>
