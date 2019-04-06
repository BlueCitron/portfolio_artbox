<template lang="html">
  <!-- Start Offset Wrapper -->
  <div class="offset__wrapper">
      <!-- Start Search Popap -->
      <div class="search__area">
          <div class="container" >
              <div class="row" >
                  <div class="col-md-12" >
                      <div class="search__inner">
                          <div>
                              <input
                              v-model="search"
                              placeholder="찾고 싶은 상품을 검색해보세요."
                              type="text"
                              @keyup.enter="searchProducts(search)">
                              <button
                              type="button"
                              @click="searchProducts(search)"></button>
                          </div>
                          <div class="search__close__btn">
                              <span class="search__close__btn_icon"><i class="zmdi zmdi-close"></i></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- End Search Popap -->

      <!-- Start Cart Panel -->
      <div class="shopping__cart">
          <div class="shopping__cart__inner">
              <div class="offsetmenu__close__btn">
                  <a href="#"><i class="zmdi zmdi-close"></i></a>
              </div>
              <div class="shp__cart__wrap">
                <template v-for="bundle in this.$store.state.cart.cart">
                  <div class="shp__single__product">
                    <div class="shp__pro__thumb">
                      <a href="#">
                        <img :src="bundle.product.thumbnails[0].url" alt="product images">
                      </a>
                    </div>
                    <div class="shp__pro__details">
                      <h2><a href="#">{{ bundle.product.name }}</a></h2>
                      <span class="quantity">수량 : {{ bundle.quantity }}</span>
                      <span class="shp__price">{{ ThousandSeparator(bundle.product.price) }} 원</span>
                    </div>
                    <div class="remove__btn">
                      <a href="#" title="Remove this item"><i class="zmdi zmdi-close"></i></a>
                    </div>
                  </div>
                </template>
              </div>
              <ul class="shoping__total">
                  <li class="subtotal">총 주문금액 :</li>
                  <li class="total__price">{{ ThousandSeparator(this.$store.getters.totalProductFee) }} 원</li>
              </ul>
              <ul class="shopping__btn">
                  <!-- <li><router-link :to="{ name: 'Cart' }">장바구니 보기</router-link></li> -->
                  <li><a href="#" @click="gotoCart()">장바구니 보기</a></li>
                  <li class="shp__checkout"><a href="#" @click="gotoCheckout()">결제하기</a></li>
              </ul>
          </div>
      </div>
      <!-- End Cart Panel -->
  </div>
  <!-- End Offset Wrapper -->
</template>

<script>
export default {
  data () {
    return {
      search: '',
    }
  },
  methods: {
    gotoCart () {
      document.querySelector('.body__overlay').setAttribute('class', 'body__overlay')
      document.querySelector('.shopping__cart').setAttribute('class', 'shopping__cart')
      this.$router.push({ name: 'Cart' })
    },
    gotoCheckout () {
      document.querySelector('.body__overlay').setAttribute('class', 'body__overlay')
      document.querySelector('.shopping__cart').setAttribute('class', 'shopping__cart')
      this.$router.push({ name: 'Checkout' })
    },
    async searchProducts (name) {
      const { path } = this.$route
      if (path == '/search') {
        await this.$store.dispatch('SEARCH_PRODUCTS', { name, page: 1 })
        this.$router.push({ path: `/search?name=${name}&page=1`})
      } else {
        this.$router.push({ path: `/search?name=${name}&page=1`})
      }
      this.search = ''
    }
  }
}
</script>

<style lang="css" scoped>
</style>
