<template>
<div>
  <!-- Start Bradcaump area -->
  <div class="ht__bradcaump__area" v-if="$store.getters.isCartEmpty">
      <div class="ht__bradcaump__wrap">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="bradcaump__inner text-center">
                          <h2 class="bradcaump-title">장바구니</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- End Bradcaump area -->
  <!-- cart-main-area start -->
  <div class="cart-main-area bg__white">
      <div class="container" v-if="!$store.getters.isCartEmpty">

        <div class="row">
          <h2 class="title__5">총 {{ $store.state.cart.cart.length }}개의 상품이 담겼어요!</h2>
        </div>

        <div class="row">
            <div class="col-md-12 col-sm-12 col-12">
                    <div class="table-content table-responsive">
                        <table>
                            <thead>
                                <tr>
                                    <th class="product-thumbnail">Image</th>
                                    <th class="product-name">Product</th>
                                    <th class="product-price">Price</th>
                                    <th class="product-quantity">Quantity</th>
                                    <th class="product-subtotal">Total</th>
                                    <th class="product-remove">Remove</th>
                                </tr>
                            </thead>
                            <tbody>
                              <template v-for="(bundle, index) in $store.state.cart.cart">
                                <tr>
                                  <td class="product-thumbnail"><a href="#"><img :src="bundle.product.thumbnails[0].url" alt="product img" /></a></td>
                                  <td class="product-name"><router-link :to="{ path: `/product/${bundle.product.id}` }">{{ bundle.product.name }}</router-link></td>
                                  <td class="product-price"><span class="amount">{{ ThousandSeparator(bundle.product.price) }}원</span></td>
                                  <td class="product-quantity"><input type="number" v-model.number="bundle.quantity" min="1"/></td>
                                  <td class="product-subtotal">{{ ThousandSeparator(bundle.product.price * bundle.quantity) }}원</td>
                                  <td class="product-remove"><a href="#" @click="removeOrder(index)">X</a></td>
                                </tr>
                              </template>
                            </tbody>
                        </table>
                    </div>
                    <div class="row">
                        <div class="col-md-8 col-sm-12">
                            <div class="buttons-cart">
                                <!-- <input type="submit" value="Update Cart" /> -->
                                <router-link :to="{ name: 'Index' }">
                                  쇼핑 계속하기
                                </router-link>
                            </div>
                            <div class="coupon">
                                <h3>쿠폰</h3>
                                <p>여기에 쿠폰코드를 입력해보세요.</p>
                                <input type="text" placeholder="쿠폰코드" />
                                <input type="submit" value="쿠폰적용" />
                            </div>
                        </div>
                        <div class="col-md-4 col-sm-12 ">
                            <div class="cart_totals">
                                <h2>전체 주문</h2>
                                <table>
                                    <tbody>
                                        <tr class="cart-subtotal">
                                            <th>상품 가격</th>
                                            <td><span class="amount">{{ ThousandSeparator(this.$store.getters.totalProductFee) }}원</span></td>
                                        </tr>
                                        <tr class="shipping">
                                            <th>배송비</th>
                                            <td>
                                                <ul id="shipping_method">
                                                    <li style="width: 240px;">{{ ThousandSeparator($store.getters.shippingFee) + '원' || '무료배송'}}</li>
                                                </ul>
                                                <p><a class="shipping-calculator-button" href="#">배송비 포함</a></p>
                                            </td>
                                        </tr>
                                        <tr class="order-total">
                                            <th>전체 가격</th>
                                            <td>
                                                <strong><span class="amount">{{ ThousandSeparator(this.$store.getters.totalFee) }} 원</span></strong>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div class="wc-proceed-to-checkout">
                                  <router-link :to="{ name: 'Checkout' }">결제하기</router-link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
      </div>

      <!-- 상품이 없을 경우 -->
      <div class="container" v-else>
        <div class="row">
          <div class="col-md-12">
            <div class="empty-cart-wrap">
              <div class="my-4" style="width: 200px; height: 153px; background: rgba(0, 0, 0, 0) url(/images/_custom/etc/sad_ryan.jpg) no-repeat scroll center center;"></div>
              <h2 class="title__5">장바구니가 비었어요.</h2>
              <h2 class="title__5">관심있는 상품을 담아보세요.</h2>
              <div class="htc__login__btn mt--30">
                  <router-link :to="{ name: 'Index' }" style="width: 200px;">쇼핑하러 가기</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>

  </div>
  <!-- cart-main-area end -->
</div>
</template>


<script>
export default {
  data () {
    return {
      check: false,
    }
  },
  methods: {
    removeOrder (index) {
      this.$store.dispatch('REMOVE_TO_CART', { index })
    },
    test() {
      console.log('test', this.$validator.validateAll())
    }
  },
  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.product__menu button {
  padding: 0 10px;
}
.empty-cart-wrap {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
