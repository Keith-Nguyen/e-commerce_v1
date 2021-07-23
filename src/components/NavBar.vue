<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
    <div class="container">
      <!-- <img src="@/assets/logo.png" class="bg-dark" width="70" height="70" /> -->
      <router-link to="/" class="navbar-brand">Smartphone Shop</router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
  
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li>
            <router-link to="/" class="nav-link" exact-active-class="text-success" active-class="active">
              <font-awesome-icon :icon="['fas', 'home']" />&nbsp;Trang chủ
            </router-link>
          </li>
          <li>
            <router-link to="/gioi-thieu" class="nav-link" exact-active-class="text-success" active-class="active">
              <font-awesome-icon :icon="['fas', 'history']" />&nbsp;Giới thiệu
            </router-link>
          </li>
          <li>
            <router-link to="/lien-he" class="nav-link" exact-active-class="text-success" active-class="active">
              <font-awesome-icon :icon="['fab', 'twitter']" />&nbsp;Liên hệ
            </router-link>
          </li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li>
            <cartSummary />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import CartSummary from'@/components/CartSummary'
export default {
    name:'NavBar',
    components:{CartSummary}
}
</script>

<style></style>
