<template lang="html">
  <!-- Start Offset Wrapper -->
  <div class="offset__wrapper">
      <!-- Start Search Popap -->
      <div class="search__area">
          <div class="container" >
              <div class="row" >
                  <div class="col-md-12" >
                      <div class="search__inner">
                          <form action="#" method="get">
                              <input placeholder="Search here... " type="text">
                              <button type="submit"></button>
                          </form>
                          <div class="search__close__btn">
                              <span class="search__close__btn_icon"><i class="zmdi zmdi-close"></i></span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- End Search Popap -->

      <!-- Start Offset MEnu -->
      <div class="offsetmenu">
          <div class="offsetmenu__inner">
              <div class="offsetmenu__close__btn">
                  <a href="#"><i class="zmdi zmdi-close"></i></a>
              </div>
              <div class="off__contact">
                  <div class="logo">
                      <a href="index.html">
                          <img src="/images/logo/artbox.png" alt="logo">
                      </a>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetu adipisicing elit sed do eiusmod tempor incididunt ut labore.</p>
              </div>
              <ul class="sidebar__thumd">
                  <li><a href="#"><img src="images/sidebar-img/1.jpg" alt="sidebar images"></a></li>
                  <li><a href="#"><img src="images/sidebar-img/2.jpg" alt="sidebar images"></a></li>
                  <li><a href="#"><img src="images/sidebar-img/3.jpg" alt="sidebar images"></a></li>
                  <li><a href="#"><img src="images/sidebar-img/4.jpg" alt="sidebar images"></a></li>
                  <li><a href="#"><img src="images/sidebar-img/5.jpg" alt="sidebar images"></a></li>
                  <li><a href="#"><img src="images/sidebar-img/6.jpg" alt="sidebar images"></a></li>
                  <li><a href="#"><img src="images/sidebar-img/7.jpg" alt="sidebar images"></a></li>
                  <li><a href="#"><img src="images/sidebar-img/8.jpg" alt="sidebar images"></a></li>
              </ul>
              <div class="offset__widget">
                  <div class="offset__single">
                      <h4 class="offset__title">Language</h4>
                      <ul>
                          <li><a href="#"> Engish </a></li>
                          <li><a href="#"> French </a></li>
                          <li><a href="#"> German </a></li>
                      </ul>
                  </div>
                  <div class="offset__single">
                      <h4 class="offset__title">Currencies</h4>
                      <ul>
                          <li><a href="#"> USD : Dollar </a></li>
                          <li><a href="#"> EUR : Euro </a></li>
                          <li><a href="#"> POU : Pound </a></li>
                      </ul>
                  </div>
              </div>
              <div class="offset__sosial__share">
                  <h4 class="offset__title">Follow Us On Social</h4>
                  <ul class="off__soaial__link">
                      <li><a class="bg--twitter" href="https://twitter.com/devitemsllc" target="_blank" title="Twitter"><i class="zmdi zmdi-twitter"></i></a></li>

                      <li><a class="bg--instagram" href="https://www.instagram.com/devitems/" target="_blank" title="Instagram"><i class="zmdi zmdi-instagram"></i></a></li>

                      <li><a class="bg--facebook" href="https://www.facebook.com/devitems/?ref=bookmarks" target="_blank" title="Facebook"><i class="zmdi zmdi-facebook"></i></a></li>

                      <li><a class="bg--googleplus" href="https://plus.google.com/" target="_blank" title="Google Plus"><i class="zmdi zmdi-google-plus"></i></a></li>

                      <li><a class="bg--google" href="#" target="_blank" title="Google"><i class="zmdi zmdi-google"></i></a></li>
                  </ul>
              </div>
          </div>
      </div>
      <!-- End Offset MEnu -->

      <!-- Start Cart Panel -->
      <div class="shopping__cart">
          <div class="shopping__cart__inner">
              <div class="offsetmenu__close__btn">
                  <a href="#"><i class="zmdi zmdi-close"></i></a>
              </div>
              <div class="shp__cart__wrap">
                <template v-for="order in this.$store.state.cart.orders">
                  <div class="shp__single__product">
                    <div class="shp__pro__thumb">
                      <a href="#">
                        <img :src="order.product.thumbnails[0].url" alt="product images">
                      </a>
                    </div>
                    <div class="shp__pro__details">
                      <h2><a href="#">{{ order.product.name }}</a></h2>
                      <span class="quantity">수량 : {{ order.quantity }}</span>
                      <span class="shp__price">{{ order.product.price }} 원</span>
                    </div>
                    <div class="remove__btn">
                      <a href="#" title="Remove this item"><i class="zmdi zmdi-close"></i></a>
                    </div>
                  </div>
                </template>
              </div>
              <ul class="shoping__total">
                  <li class="subtotal">총 주문금액 :</li>
                  <li class="total__price">{{ this.$store.getters.totalFee }} 원</li>
              </ul>
              <ul class="shopping__btn">
                  <!-- <li><router-link :to="{ name: 'Cart' }">장바구니 보기</router-link></li> -->
                  <li><a href="#" @click="gotoCart()">장바구니 보기</a></li>
                  <li class="shp__checkout"><a href="checkout.html">결제하기</a></li>
              </ul>
          </div>
      </div>
      <!-- End Cart Panel -->
  </div>
  <!-- End Offset Wrapper -->
</template>

<script>
export default {
  methods: {
    gotoCart () {
      document.querySelector('.body__overlay').setAttribute('class', 'body__overlay')
      document.querySelector('.shopping__cart').setAttribute('class', 'shopping__cart')
      this.$router.push({ name: 'Cart' })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
