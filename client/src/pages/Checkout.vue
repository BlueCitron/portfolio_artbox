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
                  </tr>
                </thead>
                <tbody>
                  <template v-for="(bundle, index) in this.$store.state.cart.cart">
                    <tr>
                      <td class="product-thumbnail"><a href="#"><img :src="bundle.product.thumbnails[0].url" alt="product img" /></a></td>
                      <td class="product-name"><router-link :to="{ path: `/product/${bundle.product.id}` }">{{ bundle.product.name }}</router-link></td>
                      <td class="product-price"><span class="amount">{{ ThousandSeparator(bundle.product.price) }}원</span></td>
                      <td class="product-quantity"><input type="number" v-model="bundle.quantity" min="0"/></td>
                      <td class="product-subtotal">{{ ThousandSeparator(bundle.product.price * bundle.quantity) }}원</td>
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
                                v-validate="'required|min:2|max:6'"
                                name="customerName"
                                class="w-100"
                                type="text"
                                placeholder="이름*">
                            </div>
                            <div class="single-checkout-box">
                                <input
                                v-model="customerEmail"
                                v-validate="'required|email'"
                                name="customerEmail"
                                class="w-100"
                                type="email"
                                placeholder="이메일*">
                            </div>
                            <div class="single-checkout-box d-flex justify-content-between">
                                <input
                                v-model="customerPhoneSeg.first"
                                v-validate="'required|numeric|min:3|max:3'"
                                name="customerPhoneSegFirst"
                                class="w-25"
                                type="text"
                                maxlength="3"
                                placeholder="휴대전화*">
                                <span style="padding-top: 8px;">-</span>
                                <input
                                v-model="customerPhoneSeg.second"
                                v-validate="'required|numeric|min:4|max:4'"
                                name="customerPhoneSegSecond"
                                class="w-25"
                                type="text"
                                maxlength="4"
                                placeholder="">
                                <span style="padding-top: 8px;">-</span>
                                <input
                                v-model="customerPhoneSeg.third"
                                v-validate="'required|numeric|min:4|max:4'"
                                name="customerPhoneSegThird"
                                class="w-25"
                                type="text"
                                maxlength="4"
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
                              v-validate="'required|min:2|max:6'"
                              name="shippingName"
                              class="w-100"
                              type="text"
                              placeholder="받는분*">
                          </div>
                          <div class="single-checkout-box d-flex justify-content-between">
                              <input
                              v-model="shippingPhoneSeg.first"
                              v-validate="'required|numeric|min:3|max:3'"
                              name="shippingPhoneSegFirst"
                              class="w-25"
                              type="text"
                              maxlength="3"
                              placeholder="휴대전화*">
                              <span style="padding-top: 8px;">-</span>
                              <input
                              v-model="shippingPhoneSeg.second"
                              v-validate="'required|numeric|min:4|max:4'"
                              name="shippingPhoneSegSecond"
                              class="w-25"
                              type="text"
                              maxlength="4"
                              placeholder="">
                              <span style="padding-top: 8px;">-</span>
                              <input
                              v-model="shippingPhoneSeg.third"
                              v-validate="'required|numeric|min:4|max:4'"
                              name="shippingPhoneSegThird"
                              class="w-25"
                              type="text"
                              maxlength="4"
                              placeholder="">
                          </div>
                          <div class="single-checkout-box d-flex justify-content-between">
                              <input
                              v-model="shippingPostCodeSeg.first"
                              v-validate="'required|numeric|min:3|max:3'"
                              name="shippingPostCodeSegFirst"
                              type="text"
                              maxlength="3"
                              placeholder="우편번호*">
                              <span style="padding-top: 8px;">-</span>
                              <input
                              v-model="shippingPostCodeSeg.second"
                              v-validate="'required|numeric|min:3|max:3'"
                              name="shippingPostCodeSegSecond"
                              type="text"
                              maxlength="3"
                              placeholder="">
                          </div>
                          <div class="single-checkout-box">
                              <input
                              v-model="shippingAddress"
                              v-validate="'required'"
                              name="shippingAddress"
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
                    <div ref="card" class="payment-form-inner" v-if="paymentType == 'card'">
                      <div class="single-checkout-box">
                        <input
                        v-model="paymentCardName"
                        v-validate="paymentType == 'card' ? 'required|min:2|max:6' : ''"
                        name="paymentCardName"
                        class="w-100"
                        type="text"
                        placeholder="이름*">
                        <input
                        v-model="paymentCardNumber"
                        v-validate="paymentType == 'card' ? 'required' : ''"
                        name="paymentCardNumber"
                        class="w-100"
                        type="text"
                        placeholder="카드번호*(-포함)"
                        style="margin-left: 0;">
                      </div>
                      <div class="single-checkout-box select-option">
                        <select
                        v-model="paymentMonth"
                        v-validate="paymentType == 'card' ? 'required|min:2|max:2' : ''"
                        name="paymentMonth"
                        style="width: 104px; margin-left: 20px;" >
                          <option>월*</option>
                          <template v-for="month in months">
                            <option :value="month">{{ month }}</option>
                          </template>
                        </select>
                        <select
                        v-model="paymentYear"
                        v-validate="paymentType == 'card' ? 'required|min:2|max:2' : ''"
                        name="paymentYear"
                        style="width: 104px; margin-left: 20px;">
                          <option>년도*</option>
                          <template v-for="year in years">
                            <option :value="year">{{ year }}</option>
                          </template>
                        </select>
                        <input
                        v-model="paymentCVC"
                        v-validate="paymentType == 'card' ? 'required|numeric|min:3|max:3' : ''"
                        name="paymentCVC"
                        type="text"
                        maxlength="3"
                        placeholder="CVC* (카드 뒷면 7자리중 뒤 3자리)">
                      </div>
                    </div>

                    <!-- 무통장 입금 -->
                    <div ref="cash" class="payment-form-inner" v-if="paymentType == 'cash'">
                      <div class="single-checkout-box select-option">
                        <select
                        v-model="paymentBank"
                        v-validate="paymentType == 'cash' ? 'required' : ''"
                        name="paymentBank"
                        style="margin: 0; width: 100%;">
                          <template v-for="bank in banks">
                            <option>{{ `${bank.bank} ${bank.accountNumber}` }}</option>
                          </template>
                        </select>
                      </div>
                      <div class="single-checkout-box" style="margin-top: 40px;">
                        <input
                        v-model="paymentDepositName"
                        v-validate="paymentType == 'cash' ? 'required|min:2|max:6' : ''"
                        name="paymentDepositName"
                        class="w-100"
                        type="text"
                        placeholder="입금하시는 분*">
                      </div>

                    </div>
                  </div>

                  <div class="checkout-form">
                    <h2 class="section-title-2">할인 정보</h2>
                    <div class="checkout-form-inner">
                      <div class="single-checkout-box">
                        <input
                        v-model="discountCandy"
                        v-validate="'required|numeric|min_value:0'"
                        name="discountCandy"
                        class="w-100"
                        type="number"
                        min="0"
                        :max="$store.state.user.user.candy"
                        :placeholder="candyPlaceholder">
                      </div>
                    </div>
                  </div>

                  <div class="checkout-form">
                    <h2 class="section-title-2">최종 결제 금액</h2>
                    <div class="payment-item" style="margin-top: 40px;">
                      <h6>총 상품금액</h6>
                      <h6>{{ ThousandSeparator($store.getters.totalProductFee) }} 원</h6>
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
                      <h6>- {{ discountCandy * 10 }} 원</h6>
                    </div>
                    <hr>
                    <div class="payment-item" style="align-items: center;">
                      <h5 style="font-size: 24px;">총 결제금액</h5>
                      <h5 class="final-amount">{{ ThousandSeparator($store.getters.totalFee - (discountCandy * 10)) }} 원</h5>
                    </div>

                    <div class="wc-proceed-to-checkout" style="text-align: center;">
                      <a href="#" style="width: 100%;" @click="payment()">결제하기</a>
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
      months: [ '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12' ],
      years: [ '19', '20', '21', '22', '23', '24', '25', '26' ],
      banks: [{
        bank: '농협',
        accountNumber: '233083-52-031125',
        accountHolder: '서동성',
      }],

      // Form 데이터
      // 주문고객 정보
      customerName: '',
      customerEmail: '',
      customerPhoneSeg: {
        first: '',
        second: '',
        third: '',
      },
      // 배송지 정보
      shippingName: '',
      shippingPhoneSeg: {
        first: '',
        second: '',
        third: '',
      },
      shippingPostCodeSeg: {
        first: '',
        second: '',
      },
      shippingAddress: '',
      // 결제정보
      paymentCardName: '',
      paymentCardNumber: '',
      paymentCVC: '',
      paymentMonth: '월*',
      paymentYear: '년도*',
      paymentDepositName: '',
      paymentBank: '',
      // 할인정보
      discountCandy: '',

    }
  },
  computed: {
    candyPlaceholder () {
      // return `꿈캔디* (사용가능: ${this.$store.state.user.candy})`
      const { candy } = this.$store.state.user.user
      return `꿈캔디* (사용가능: ${ this.ThousandSeparator(candy) }개)`
    },
  },
  methods: {
    async payment () {
      const { state, dispatch } = this.$store
      const result = await this.$validator.validateAll()
      console.log('Validation: ', this.paymentType, result)
      if (result) {
        // 결제 정보 요청
        const {
          customerName, customerEmail, customerPhoneSeg,
          shippingName, shippingPhoneSeg, shippingPostCodeSeg, shippingAddress,
          paymentType,
          paymentCardName, paymentCardNumber, paymentCVC, paymentMonth, paymentYear,
          paymentDepositName, paymentBank,
          discountCandy,
        } = this
        const orderedProducts = state.cart.cart
        const { user } = state.user

        const customerPhoneNumber = `${customerPhoneSeg.first}-${customerPhoneSeg.second}-${customerPhoneSeg.third}`
        const shippingPhoneNumber = `${shippingPhoneSeg.first}-${shippingPhoneSeg.second}-${shippingPhoneSeg.third}`
        const shippingPostCode    = `${shippingPostCodeSeg.first}-${shippingPostCodeSeg.second}`

        try {
          const { data } = dispatch('CHECKOUT', {
            customerName, customerEmail, customerPhoneNumber,
            shippingName, shippingPhoneNumber, shippingPostCode, shippingAddress,
            paymentType,
            paymentCardName, paymentCardNumber, paymentCVC, paymentMonth, paymentYear,
            paymentDepositName, paymentBank,
            discountCandy,
            orderedProducts,
            user,
          })
          dispatch('CLEAR_CART')
          await dispatch('VERIFY', { accessToken: state.user.accessToken })
          this.$router.push({ name: 'OrderSuccess' })
        } catch (error) { }
      } else {

      }
    }
  },
  mounted () {
    const { user } = this.$store.state.user
    if (user.id == undefined || user.id == null) {
      this.$router.push({ name: 'Login' })
    }
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
