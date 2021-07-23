<template>
  <div>
      <b-carousel id="carousel-1" v-model="slide" :interval="4000" controls indicators background="#ababab"
         style="text-shadow: 1px 1px 2px #333;" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
        <div class="carousel-item carousel-slide">
          <img src="@/assets/assets/img/slider/slider-1.jpg" class="d-block  slider-img" height="387" />
          <div class="carousel-caption d-none d-md-block">
             <h3>First Slide</h3>
          </div>
        </div>

        <div class="carousel-item carousel-slide">
          <img src="@/assets/assets/img/slider/slider-2.jpg" class="d-block slider-img" width="830" height="387" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Second Slide</h3>
          </div>
        </div>
            
        <div class="carousel-item carousel-slide">
          <img src="@/assets/assets/img/slider/slider-3.jpg" class="d-block slider-img" width="830" height="387" />
          <div class="carousel-caption d-none d-md-block">
            <h3>Second Slide</h3>
          </div>
        </div>

            <!-- Cách khác để import image -->
            <!-- <b-carousel-slide>
                <template #img>
                <img
                    class="d-block img-fluid w-100"
                    width="1024"
                    height="480"
                    src="https://picsum.photos/1024/480/?image=55"
                    alt="image slot"
                >
                </template>
            </b-carousel-slide> -->
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null
      }
    }
  }
</script>

<style scoped>

</style>
