import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  // State là Trạng thái => hay còn gọi là Data (dữ liệu) của KHO chứa (store)
  // Tất cả dữ liệu sẽ được khởi tạo trong thuộc tính `state`
  state: {
    products: [
      {
        id: 1,
        name: 'Notebook Lenovo Ideapad 320 Intel® Core i5-7200u 8GB',
        price: 2259,
        image: require('@/assets/assets/img/product/ipad4.png'),
        stars: 5,
        totalReviews: 230,
        details: 'Mô tả chi tiết về sản phẩm Notebook Lenovo',
        totalBuyed: 0
      },
      {
        id: 2,
        name: 'Notebook Dell Inspiron i15-3567-A30P Intel Core 7ª i5 4GB',
        price: 2284,
        image: require('@/assets/assets/img/product/samsung-galaxy-tab.jpg'),
        stars: 3.4,
        totalReviews: 20,
        details: 'Mô tả chi tiết về sản phẩm Notebook Dell Inspiron',
        totalBuyed: 0
      },
      {
        id: 3,
        name: 'Notebook Samsung Essentials E21 Intel Celeron Dual Core',
        price: 1490,
        image: require('@/assets/assets/img/product/iphone5.jpg'),
        stars: 1,
        totalReviews: 1,
        details: 'Mô tả chi tiết về sản phẩm Notebook Samsung Essentials',
        totalBuyed: 0
      },
      {
        id: 4,
        name: 'Notebook Samsung Expert X22 Intel Core 7 i5 8GB',
        price: 2307,
        image: require('@/assets/assets/img/product/nokia-asha-311.jpg'),
        stars: 4.4,
        totalReviews: 340,
        details: 'Mô tả chi tiết về sản phẩm Notebook Samsung Expert',
        totalBuyed: 0
      }
    ],

    cartProducts: [],
    currentProduct: {}
  },

  // Getters: là các thuộc tính dùng để các component lấy dữ liệu từ KHO chứa (store) về
  getters: {
    // 
    getAllProducts: state => state.products,
    getProductsInCart: state => state.cartProducts,
    getCurrentProduct: state => state.currentProduct
  },

  // Mutations: là các thuộc tính dùng để thay đổi giá trị bên trong KHO chứa (store)
  // thay đổi giá trị, nhưng chạy ĐỒNG BỘ (SYNC)
  mutations: {
    // Thêm sản phẩm 
    ADD_PRODUCT: (state, product) => {
      let o = state.cartProducts.find(o => o.id === product.id) // Tìm sản phẩm trong Giỏ hàng theo ID
      if (!o) { // Nếu sản phẩm chưa có trong Giỏ hàng => Thêm sản phẩm vào giỏ hàng
        product.totalBuyed = 1 // Set số lượng cho sản phẩm là 1
        state.cartProducts.push(Object.assign({}, product)) // Đưa sản phẩm vào hàng cuối cùng của mảng và hiện thành 1 dòng mới
      } else { // Nếu sản phẩm đã có => cộng đồn số lượng mua lên 1 đơn vị
        o.totalBuyed += 1
      }
    },
    // Xóa sản phẩm
    REMOVE_PRODUCT: (state, id) => {
      let o = state.cartProducts.find(o => o.id === id) // Tìm sản phẩm trong Giỏ hàng theo ID
      let index = state.cartProducts.indexOf(o)
      state.cartProducts.splice(index, 1)
    },
    // Sản phẩm hiện tại
    CURRENT_PRODUCT: (state, product) => {
      state.currentProduct = product
    }
  },

  // Actions: là các hàm (methods) dùng để thực hiện các hành động thay đổi giá trị bên trong KHO chứa (store)
  // tương tự như Mutations, nhưng có thể chạy BẤT ĐỒNG BỘ (ASYNC)
  actions: {
    addProduct: (context, product) => {
      context.commit('ADD_PRODUCT', product)
    },
    removeProduct: (context, id) => {
      context.commit('REMOVE_PRODUCT', id)
    },
    currentProduct: (context, product) => {
      context.commit('CURRENT_PRODUCT', product)
    }
  }
})
