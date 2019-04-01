<template lang="html">
<div>
  <!-- Start Bradcaump area -->
  <div class="ht__bradcaump__area">
      <div class="ht__bradcaump__wrap">
          <div class="container">
              <div class="row">
                  <div class="col-12">
                      <div class="bradcaump__inner text-center">
                          <h2 class="bradcaump-title">주문하기</h2>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  <!-- End Bradcaump area -->
  <!-- Start Checkout Area -->
  <section class="our-checkout-area bg__white">
      <div class="container">

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
                    <!-- <th class="product-remove">Remove</th> -->
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(order, index) in this.$store.state.cart.orders">
                    <tr>
                      <td class="product-thumbnail"><a href="#"><img :src="order.product.thumbnails[0].url" alt="product img" /></a></td>
                      <td class="product-name"><router-link :to="{ path: `/product/${order.product.id}` }">{{ order.product.name }}</router-link></td>
                      <td class="product-price"><span class="amount">{{ ThousandSeparator(order.product.price) }}원</span></td>
                      <td class="product-quantity"><input type="text" v-model="order.quantity" readonly/></td>
                      <td class="product-subtotal">{{ ThousandSeparator(order.product.price * order.quantity) }}원</td>
                      <!-- <td class="product-remove"><a href="#" @click="removeOrder(index)">X</a></td> -->
                    </tr>
                  </template>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <hr>

        <div class="row">
            <div class="col-md-6 col-lg-6 px-5" style="border-right:1px solid #e6e6e6;">
                <div class="ckeckout-left-sidebar">
                    <!-- Start Checkbox Area -->
                    <div class="checkout-form">
                        <h2 class="section-title-2">주문고객 정보</h2>
                        <div class="checkout-form-inner">
                            <div class="single-checkout-box">
                                <input
                                v-model="customerName"
                                class="w-100"
                                type="text"
                                placeholder="이름*">
                            </div>
                            <div class="single-checkout-box">
                                <input
                                v-model="customerEmail"
                                class="w-100"
                                type="email"
                                placeholder="이메일*">
                            </div>
                            <div class="single-checkout-box d-flex justify-content-between">
                                <input
                                v-model="customerPhone.first"
                                class="w-25"
                                type="email"
                                placeholder="휴대전화*">
                                <span style="padding-top: 8px;">-</span>
                                <input
                                v-model="customerPhone.second"
                                class="w-25"
                                type="email"
                                placeholder="">
                                <span style="padding-top: 8px;">-</span>
                                <input
                                v-model="customerPhone.third"
                                class="w-25"
                                type="email"
                                placeholder="">
                            </div>
                        </div>
                    </div>
                    <!-- End Checkbox Area -->
                    <!-- Start Payment Box -->
                    <div class="payment-form">
                      <h2 class="section-title-2">배송지 정보</h2>
                      <div class="checkout-form-inner">
                          <div class="single-checkout-box">
                              <input
                              v-model="shippingName"
                              class="w-100"
                              type="text"
                              placeholder="받는분*">
                          </div>
                          <div class="single-checkout-box d-flex justify-content-between">
                              <input
                              v-model="shippingPhone.first"
                              class="w-25"
                              type="email"
                              placeholder="휴대전화*">
                              <span style="padding-top: 8px;">-</span>
                              <input
                              v-model="shippingPhone.second"
                              class="w-25"
                              type="email"
                              placeholder="">
                              <span style="padding-top: 8px;">-</span>
                              <input
                              v-model="shippingPhone.third"
                              class="w-25"
                              type="email"
                              placeholder="">
                          </div>
                          <div class="single-checkout-box d-flex justify-content-between">
                              <input
                              v-model="shippingPostCode.first"
                              type="text"
                              placeholder="우편번호*">
                              <span style="padding-top: 8px;">-</span>
                              <input
                              v-model="shippingPostCode.second"
                              type="text"
                              placeholder="">
                          </div>
                          <div class="single-checkout-box">
                              <input
                              v-model="shippingAddress"
                              class="w-100"
                              type="text"
                              placeholder="주소* ex) 경기도 이천시 송정동 현진에버빌 102동 509호 ">
                          </div>
                      </div>
                    </div>
                    <!-- End Payment Box -->
                </div>
            </div>
            <div class="col-md-6 col-lg-6 px-5">

                <div class="checkout-right-sidebar">
                  <div class="checkout-form">
                    <h2 class="section-title-2">결제정보</h2>
                    <div class="payment-tab-wrap">
                      <h2
                      :class="{ 'section-title-2': true, 'payment-tab-active': paymentType == 'card' }"
                      style="margin-right: 20px;"
                      @click="paymentType = 'card'">신용카드</h2>
                      <h2
                      :class="{ 'section-title-2': true, 'payment-tab-active': paymentType == 'cash' }"
                      @click="paymentType = 'cash'">무통장입금</h2>

                    </div>

                    <!-- 신용카드 -->
                    <div class="payment-form-inner" v-if="paymentType == 'card'">
                      <div class="single-checkout-box">
                        <input
                        v-model="paymentName"
                        class="w-100"
                        type="text"
                        placeholder="이름*">
                        <input
                        v-model="paymentCardNumber"
                        class="w-100"
                        type="text"
                        placeholder="카드번호*"
                        style="margin-left: 0;">
                      </div>
                      <div class="single-checkout-box select-option">
                        <select style="width: 104px; margin-left: 20px;" v-model="paymentMonth">
                          <option>월*</option>
                          <template v-for="month in [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ]">
                            <option>{{ month }}</option>
                          </template>
                        </select>
                        <select style="width: 104px; margin-left: 20px;" v-model="paymentYear">
                          <option>년도*</option>
                          <template v-for="month in [19, 20, 21, 22, 23, 24, 25, 26]">
                            <option>{{ month }}</option>
                          </template>
                        </select>
                        <input type="text" placeholder="CVC* (카드 뒷면 7자리중 뒤 3자리)">
                      </div>
                    </div>

                    <!-- 무통장 입금 -->
                    <div class="payment-form-inner" v-else-if="paymentType == 'cash'">
                      <div class="single-checkout-box select-option">
                        <select style="margin: 0; width: 100%;">
                          <option>월*</option>
                          <template v-for="month in [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ]">
                            <option>{{ month }}</option>
                          </template>
                        </select>
                      </div>
                      <div class="single-checkout-box" style="margin-top: 40px;">
                        <input class="w-100" type="text" placeholder="입금하시는 분*">
                      </div>

                    </div>
                  </div>

                  <div class="checkout-form">
                    <h2 class="section-title-2">할인 정보</h2>
                    <div class="checkout-form-inner">
                      <div class="single-checkout-box">
                        <input class="w-100" type="number" min="0" :placeholder="candyPlaceholder">
                      </div>
                    </div>
                  </div>

                  <div class="checkout-form">
                    <h2 class="section-title-2">최종 결제 금액</h2>
                    <div class="payment-item" style="margin-top: 40px;">
                      <h6>총 상품금액</h6>
                      <h6>{{ ThousandSeparator(this.$store.getters.totalProductFee) }} 원</h6>
                    </div>
                    <div class="payment-item">
                      <h6>배송비</h6>
                      <h6>{{ ThousandSeparator($store.getters.shippingFee) }} 원</h6>
                    </div>
                    <div class="payment-item">
                      <h6>쿠폰 적용</h6>
                      <h6>- 0 원</h6>
                    </div>
                    <div class="payment-item">
                      <h6>꿈캔디 적용</h6>
                      <h6>- 0 원</h6>
                    </div>
                    <hr>
                    <div class="payment-item" style="align-items: center;">
                      <h5 style="font-size: 24px;">총 결제금액</h5>
                      <h5 class="final-amount">{{ ThousandSeparator(this.$store.getters.totalFee) }} 원</h5>
                    </div>

                    <div class="wc-proceed-to-checkout" style="text-align: center;">
                      <a href="#" style="width: 100%;">결제하기</a>
                      <!-- <router-link :to="{ name: 'Checkout' }">결제하기</router-link> -->
                    </div>


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
  data () {
    return {
      // View 관련 데이터
      paymentType: 'card', // 'card', 'cash'
      // Form 데이터
      // 주문고객 정보
      customerName: '',
      customerEmail: '',
      customerPhone: {
        first: '',
        second: '',
        third: '',
      },
      // 배송지 정보
      shippingName: '',
      shippingPhone: {
        first: '',
        second: '',
        third: '',
      },
      shippingPostCode: {
        first: '',
        second: '',
      },
      shippingAddress: '',
      // 결제정보
      paymentName: '',
      paymentCardNumber: '',
      paymentCVC: '',
      paymentMonth: '월*',
      paymentYear: '년도*',
      paymentBank: '',
      // 할인정보
    }
  },
  computed: {
    candyPlaceholder () {
      // return `꿈캔디* (사용가능: ${this.$store.state.user.candy})`
      return `꿈캔디* (사용가능: 9,384개)`
    },
  }
}
</script>

<style lang="css" scoped>
.payment-item {
  display: flex;
  justify-content: space-between;
  margin: 40px 0 0 0;
}
.final-amount {
  font-size: 36px;
  color: #e71f22;
}
.payment-tab-wrap {
  float: right;
  display: flex;
}
.payment-tab-wrap h2 {
  cursor: pointer;
}
.payment-tab-active {
  color: black;
}

</style>
