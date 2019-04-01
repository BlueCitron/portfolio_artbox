<template lang="html">
<div>
  <div style="height:137px;"></div>
  <div class="container">
    <div class="row">
      <div class="col-md-12 col-sm-12 col-12">
        <div class="d-flex justify-content-center mt-4">
          <h2 class="title__3">주문완료</h2>
        </div>
      </div>
    </div>
  </div>
  <!-- Start Bradcaump area -->
  <!-- <div class="ht__bradcaump__area" style="background: rgba(0, 0, 0, 0) url(/images/ryan_shopping.jpg) no-repeat scroll center center;">
      <div class="ht__bradcaump__wrap">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="bradcaump__inner text-center">
                          <h2 class="bradcaump-title">주문완료</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div> -->
  <!-- End Bradcaump area -->
  <!-- Start Checkout Area -->
  <section class="our-checkout-area bg__white">
      <div class="container">

        <div class="row mt-5">
          <div class="col-md-12 col-sm-12 col-12">
            <h2 class="title__4">주문번호: 1904011554000001</h2>
          </div>
        </div>

        <div class="row mt-4">
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
                    <th class="product-remove">State</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(order, index) in this.$store.state.cart.orders">
                    <tr>
                      <td class="product-thumbnail"><a href="#"><img :src="order.product.thumbnails[0].url" alt="product img" /></a></td>
                      <td class="product-name"><router-link :to="{ name: '' }">{{ order.product.name }}</router-link></td>
                      <td class="product-price"><span class="amount">{{ ThousandSeparator(order.product.price) }}원</span></td>
                      <td class="product-quantity"><input type="number" v-model="order.quantity" /></td>
                      <td class="product-subtotal">{{ ThousandSeparator(order.product.price * order.quantity) }}원</td>
                      <td class="product-remove"><a href="#" @click="removeOrder(index)">X</a></td>
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-12 col-sm-12 col-12">
            <div class="d-flex justify-content-center mt-4">
              <div class="htc__login__btn mt--30">
                  <router-link :to="{ name: 'Index' }" style="width: 300px;">
                    계쇽 쇼핑하기
                  </router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
  </section>
  <!-- End Checkout Area -->
</div>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>

</style>
