<template>
  <div>
      <!-- Start Slider Area -->
      <div class="slider__container slider--one">
          <div class="slider__activation__wrap owl-carousel owl-theme">
              <!-- Start Single Slide -->
              <div
              class="slide slider__full--screen"
              :style="`background: rgba(0, 0, 0, 0) url(/images/_custom/etc/search.jpg) no-repeat scroll center center;`">
              </div>
              <!-- End Single Slide -->
          </div>
      </div>
      <!-- Start Slider Area -->

      <!-- Start Our Product Area -->
      <section class="htc__product__area bg__white">
          <div class="container">
              <div class="htc__product__container">
                <!-- Start Product MEnu -->
                <div class="row">
                    <div class="col-md-12">
                        <h2>총 {{ $store.state.product.pageInfo.totalItems }}건의 상품이 검색되었습니다.</h2>
                    </div>
                </div>
                <!-- End Product MEnu -->
                  <div class="row product__list">
                      <!-- Start Single Product -->
                      <template>
                        <div class="col-md-3 single__pro col-lg-3 col-md-4 cat--1 col-sm-12" v-for="product in $store.state.product.products" :key="product.id">
                            <div class="product foo">
                                <div class="product__inner">
                                    <div class="pro__thumb">
                                      <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
                                        <img :src="product.thumbnails[0].url" :alt="product.name">
                                      </router-link>

                                    </div>
                                    <div class="product__hover__info">
                                        <ul class="product__action">
                                            <li><a data-toggle="modal" data-target="#productModal" title="간단히 보기" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                            <li><a title="카트에 담기" href="#" @click="addToCart(product)"><span class="ti-shopping-cart"></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="add__to__wishlist">
                                      <template v-if="$store.getters.isLogedIn">
                                        <a
                                        @click="addToWishlist(product)"
                                        title="위시리스트에 추가"
                                        class="add-to-cart"
                                        style="cursor: pointer;"><span :class="{'ti-heart': true,  'active': isWishItem(product) }"></span></a>
                                      </template>
                                    </div>
                                </div>
                                <div class="product__details">
                                    <h2>
                                      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link>
                                    </h2>
                                    <ul class="product__price">
                                        <!-- <li class="old__price">{{ product.price }}</li> -->
                                        <li class="new__price">{{ ThousandSeparator(product.price) }}원</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                      </template>
                      <!-- End Single Product -->
                  </div>
              </div>
          </div>
      </section>

      <div class="d-flex justify-content-center">
        <div class="htc__loadmore__btn mx-4">
          <a href="#" @click="prevPage()">이전페이지</a>
        </div>

        <div class="htc__loadmore__btn mx-4">
          <a>{{ this.$store.state.product.pageInfo.page }} / {{ this.$store.state.product.pageInfo.totalPages }}</a>
        </div>

        <div class="htc__loadmore__btn mx-4">
          <a href="#" @click="nextPage()">다음페이지</a>
        </div>
      </div>
      <!-- End Our Product Area -->
    <!-- Placed js at the end of the document so the pages load faster -->
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  computed: {

  },
  methods: {
    async prevPage () {
      const { state, dispatch } = this.$store
      const { name } = this.$route.query
      const { pageInfo } = state.product
      const { page, totalPages } = pageInfo
      if (page > 1) {
        await dispatch('SEARCH_PRODUCTS', {
          name,
          page: (page/1 - 1)
        })
        window.sr.reveal('.foo')
      }
    },
    async nextPage () {
      const { state, dispatch } = this.$store
      const { name } = this.$route.query
      const { pageInfo } = state.product
      const { page, totalPages } = pageInfo
      console.log('nextPage : ', name, page)
      if (page < totalPages) {
        await dispatch('SEARCH_PRODUCTS', {
          name,
          page: (page/1 + 1)
        })
        window.sr.reveal('.foo')
      }
    },
  },
  mounted () {

  },
  async created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.product__menu button {
  padding: 0 10px;
}
.new__price {
  padding-left: 0 !important;
}
section {
  height: 1487px;
}
</style>
