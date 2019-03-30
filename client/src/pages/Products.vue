<template>
  <div>
      <!-- Start Slider Area -->
      <div class="slider__container slider--one">
          <div class="slider__activation__wrap owl-carousel owl-theme">
              <!-- Start Single Slide -->
              <div
              class="slide slider__full--screen"
              :style="`background: rgba(0, 0, 0, 0) url(/images/slider/bg/category_${sliderBackgroundID}.jpg) no-repeat scroll center center;`">
                  <div class="container">
                      <div class="row">
                          <div class="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                            <div class="slider__inner">
                                <h2>{{ $store.state.category.category.name }}</h2>
                            </div>
                          </div>
                      </div>
                  </div>
              </div>
              <!-- End Single Slide -->
          </div>
      </div>
      <!-- Start Slider Area -->

      <!-- Start Our Product Area -->
      <section class="htc__product__area ptb--130 bg__white">
          <div class="container">
              <div class="htc__product__container">
                  <!-- Start Product MEnu -->
                  <div class="row">
                      <div class="col-md-12">
                          <div class="product__menu">
                              <button
                              :class="{ 'is-checked': this.$store.state.category.division == null }"
                              @click="handleProductMenu({ id: '', name: 'ALL' })">All</button>
                              <template v-for="division in this.$store.getters.GET_CURRENT_DIVISIONS">
                                <button
                                :class="{ 'is-checked': isChecked(division) }"
                                @click="handleProductMenu(division)">{{ division.name }}</button>
                              </template>
                          </div>
                      </div>
                  </div>
                  <!-- End Product MEnu -->
                  <div class="row product__list">
                      <!-- Start Single Product -->
                      <template>
                        <div class="col-md-3 single__pro col-lg-3 col-md-4 cat--1 col-sm-12" v-for="product in this.$store.state.product.products" :key="product.id">
                            <div class="product foo">
                                <div class="product__inner">
                                    <div class="pro__thumb">
                                      <router-link :to="{ name: 'ProductDetail', params: { id: product.id }}">
                                        <img :src="product.thumbnails[0].url" alt="product images">
                                      </router-link>

                                    </div>
                                    <div class="product__hover__info">
                                        <ul class="product__action">
                                            <li><a data-toggle="modal" data-target="#productModal" title="간단히 보기" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                            <li><a title="카트에 담기" href="#" @click="addToCart(product)"><span class="ti-shopping-cart"></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="add__to__wishlist">
                                        <a data-toggle="tooltip" title="Add To Wishlist" class="add-to-cart" href="wishlist.html"><span class="ti-heart"></span></a>
                                    </div>
                                </div>
                                <div class="product__details">
                                    <h2><a href="product-details.html">{{ product.name }}</a></h2>
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
import querystring from 'querystring'

export default {
  data () {
    return {
      check: false,
    }
  },
  computed: {
    sliderBackgroundID () {
      const { category } = this.$store.state.category
      return category ? category.id : 1
    }
  },
  methods: {
    // 1. 중분류 메뉴 클릭
    async handleProductMenu (division) {
      const { category } = this.$store.state.category
      this.setDivision(division)
      this.gotoDivision(category, division)
      await this.$store.dispatch('FETCH_PRODUCTS', { categoryId: category.id, divisionId: division.id })
      window.sr.reveal('.foo')
    },
    // 1-1. 중분류 Set
    setDivision (division) {
      this.$store.commit('SET_DIVISION', division)
    },
    // 1-2. 중분류 이동
    gotoDivision (category, division) {
      this.$router.push({ path: `/product?category=${category.id}&division=${division.id}` })
    },

    isChecked (division) {
      return this.$store.state.category.division == division
    },
    // 3-1. 이전페이지
    async prevPage () {
      const { state, dispatch } = this.$store

      const { category, division } = state.category

      const { pageInfo } = state.product
      const { page, totalPages } = pageInfo

      if (page > 1) {
        await dispatch('FETCH_PRODUCTS', {
          categoryId: category.id,
          divisionId: division ? division.id : '',
          page: (page/1 - 1)
        })
        const query = querystring.stringify({ category: category.id, division: division ? division.id : '', page: (page/1 - 1) })
        this.$router.push({ path: `/product?${query}`})
        window.sr.reveal('.foo')
      }
    },
    // 3-2. 다음페이지
    async nextPage () {
      const { state, dispatch } = this.$store

      const { category, division } = state.category

      const { pageInfo } = state.product
      const { page, totalPages } = pageInfo

      if (page < totalPages) {
        await dispatch('FETCH_PRODUCTS', {
          categoryId: category.id,
          divisionId: division ? division.id : '',
          page: (page/1 + 1)
        })
        const query = querystring.stringify({ category: category.id, division: division ? division.id : '', page: (page/1 + 1) })
        this.$router.push({ path: `/product?${query}`})
        window.sr.reveal('.foo')
      }
    },
    // 4.장바구니에 추가
    addToCart (product) {
      this.$store.dispatch('ADD_TO_CART', { product })
      alert('장바구니에 추가되었습니다.')
    }

  },
  mounted () {

  },
  async created () {
    const { state, commit, dispatch } = this.$store
    const { category, division } = this.$route.query

    // 카테고리 조회
    await dispatch('FETCH_CATEGORY')

    // 현재 카테고리 설정
    const nowCategory = state.category.categories.find(item => item.id == category)
    const nowDivision = state.category.divisions.find(item => item.id == division)

    commit('SET_CATEGORY', nowCategory || { id: 1, name: '인형/토이'})
    commit('SET_DIVISION', nowDivision)
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
