<template>
  <div>
    <!-- Start Slider Area -->
    <div class="slider__container slider--one">
        <div class="slider__activation__wrap owl-carousel owl-theme">
            <!-- Start Single Slide -->
            <router-link :to="{ name: 'EventDetail', params: { type: 'main', id: 1 } }">
              <div class="slide slider__full--screen" style="background: rgba(0, 0, 0, 0) url(/images/_custom/event/event_main_1.jpg) no-repeat scroll center center;"></div>
            </router-link>
            <!-- End Single Slide -->
            <!-- Start Single Slide -->
            <router-link :to="{ name: 'EventDetail', params: { type: 'main', id: 2 } }">
              <div class="slide slider__full--screen" style="background: rgba(0, 0, 0, 0) url(/images/_custom/event/event_main_2.jpg) no-repeat scroll center center;"></div>
            </router-link>
            <!-- End Single Slide -->
        </div>
    </div>
    <!-- Start Slider Area -->

    <!-- Start Our Product Area -->
    <section class="htc__product__area bg__white">
        <div class="container">
          <h6 class="title__6">BEST ITEM</h6>
          <div class="row">
            <div class="best-item" v-for="product in $store.state.product.bests">
              <div class="product" style="background: none;">
                <div class="product__inner">
                  <div class="pro__thumb">
                    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
                      <img :src="product.thumbnails[0].url" :alt="product.name">
                    </router-link>
                  </div>
                </div>
                <div class="product__details">
                  <h2>
                    <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }" style="overflow: hidden;">{{ product.name.slice(0, 15) + '..' }}</router-link>
                  </h2>
                  <ul class="product__price">
                    <li class="new__price">{{ ThousandSeparator(product.price) }}원</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    <!-- End Our Product Area -->

    <!-- Start Our Product Area -->
    <section class="htc__product__area ptb--130 bg__white">
        <div class="container">

            <div class="row">
              <div class="col-md-12">
                <router-link :to="{ path: `/product?category=${12}&division=${29}` }">
                  <div style="background: rgba(0, 0, 0, 0) url(images/_custom/event/event_promotion_1.jpg) no-repeat scroll center center / cover; width: 100%; height:350px;"></div>
                </router-link>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="event__product__wrapper">
                  <div class="product" v-for="product in $store.state.product.events.PROMOTION_1">
                    <div class="product__inner">
                      <div class="pro__thumb">
                        <img :src="product.thumbnails[0].url" :alt="product.name">
                      </div>
                    </div>
                    <div class="product__details">
                      <h2>
                        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link>
                      </h2>
                      <ul class="product__price">
                        <li class="new__price">{{ ThousandSeparator(product.price) }}원</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </section>
    <!-- End Our Product Area -->


    <!-- Placed js at the end of the document so the pages load faster -->
  </div>
</template>

<script>
import main from '@/assets/main.js'

export default {
  async mounted () {
    main()
    // await this.$store.dispatch('FETCH_EVENT_PRODUCTS', { eventId: 1 })
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.event__product__wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  background: rgba(223, 243, 254, 1);
}
.product {
  margin: 0;
  padding: 15px 20px 20px 20px;
  background: rgba(223, 243, 254, 1);
  width: 250px;
}
.product__price {
  justify-content: center;
}
.new__price {
  color: #303030;
}
.product__details>h2 {
  text-align: center;
  overflow: hidden;
}
.best-item {
  -webkit-box-flex: 0;
  -ms-flex: 0 0 25%;
  flex: 0 0 20%;
  max-width: 20%;
}
</style>
