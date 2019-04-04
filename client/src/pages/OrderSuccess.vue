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

  <!-- Start Checkout Area -->
  <section class="our-checkout-area bg__white">
      <div class="container">

        <div class="row mt-5">
          <div class="col-md-12 col-sm-12 col-12">
            <h2 class="title__4">주문번호: {{ $store.state.order.order.orderNo }}</h2>
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
                    <th class="product-remove">State</th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(bundle, index) in this.$store.state.order.order.products">
                    <tr>
                      <td class="product-thumbnail"><router-link :to="{ name: 'ProductDetail', params: { id: bundle.product.id } }"><img :src="bundle.product.thumbnails[0].url" alt="product img" /></router-link></td>
                      <td class="product-name"><router-link :to="{ name: 'ProductDetail', params: { id: bundle.product.id } }">{{ bundle.product.name }}</router-link></td>
                      <td class="product-price"><span class="amount">{{ ThousandSeparator(bundle.product.price) }}원</span></td>
                      <td class="product-quantity"><input type="text" v-model="bundle.quantity" readonly/></td>
                      <td class="product-remove"><a href="#">{{ orderState }}</a></td>
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
  computed: {
    orderState () {
      const { status } = this.$store.state.order.order
      if (status == 'WAIT_PAYMENT') {
        return '입금대기'
      } else if (status == 'PAID') {
        return '결제완료'
      } else if (status == 'SHIPPING') {
        return '배송중'
      } else if (status == 'DELIVERY_COMPLETE') {
        return '배송완료'
      } else {
        return '오류'
      }
    }
  }
}
</script>

<style lang="css" scoped>

</style>
