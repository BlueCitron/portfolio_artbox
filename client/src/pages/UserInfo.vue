<template lang="html">
  <div class="container">
      <div style="height: 137px;"></div>

      <div class="row mt-5">
        <div class="col-md-12">
          <h2 class="section-title-2">안녕하세요, <span style="font-size: 24px;">서동성</span>님</h2>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12">
          <div class="d-flex">
            <div class="lookup-item mr-4">
              <h6 class="title__5">주문 / 배송</h6>
              <h6 class="title__6" style="margin-bottom: 0;">{{ $store.state.order.orders.length }}</h6>
            </div>
            <div class="lookup-item mr-4">
              <h6 class="title__5">위시리스트</h6>
              <h6 class="title__6" style="margin-bottom: 0;">{{ $store.state.wish.wishlist.length }}</h6>
            </div>
            <div class="lookup-item">
              <h6 class="title__5">꿈캔디</h6>
              <h6 class="title__6" style="margin-bottom: 0;">100</h6>
            </div>
          </div>
        </div>
      </div>

      <hr>

      <div class="row">
        <div class="col-md-12">
          <div class="d-flex">
            <div class="htc__login__btn w-50">
                <a
                :class="{'lookup-btn': true, 'active': tab == 'delivery' }"
                href="#"
                @click="setTab('delivery')">
                  <span class="ti-shopping-cart"></span>주문 / 배송
                </a>
            </div>
            <div class="htc__login__btn w-50">
              <a
              :class="{'lookup-btn': true, 'active': tab == 'wish' }"
              href="#"
              @click="setTab('wish')">
                  <span class="ti-heart"></span>위시리스트
                </a>
            </div>
          </div>
        </div>
      </div>


      <div class="row mt-4">
        <div class="col-md-12 col-sm-12 col-12">
          <div class="table-content table-responsive">
            <!-- 주문/배송 탭-->
            <table v-if="tab == 'delivery'">
              <thead>
                <tr>
                  <th class="product-name">orderNo</th>
                  <th class="product-thumbnail">Image</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-quantity">Quantity</th>
                  <th class="product-remove">State</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="order in $store.state.order.orders">
                  <template v-for="product in order.products">
                    <tr>
                      <td class="product-name"><a href="#">{{ order.orderNo }}</a></td>
                      <td class="product-thumbnail">
                        <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
                          <img :src="product.thumbnails[0].url" alt="product img" />
                        </router-link>
                      </td>
                      <td class="product-name"><router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link></td>
                      <td class="product-price"><span class="amount">{{ ThousandSeparator(product.price) }}원</span></td>
                      <td class="product-quantity"><input type="text" v-model="product.ordered_product.quantity" readonly/></td>
                      <td class="product-name"><a href="#">{{ orderState(order) }}</a></td>
                    </tr>
                  </template>
                </template>
              </tbody>
            </table>
            <!-- 위시리스트 탭 -->
            <table v-else-if="tab == 'wish'">
              <thead>
                <tr>
                  <th class="product-thumbnail">Image</th>
                  <th class="product-name">Product</th>
                  <th class="product-price">Price</th>
                  <th class="product-remove">Remove</th>
                  <th class="product-price">etc</th>
                </tr>
              </thead>
              <tbody>
                <template v-for="product in $store.state.wish.wishlist">
                  <tr>
                    <td class="product-thumbnail">
                      <router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">
                        <img :src="product.thumbnails[0].url" alt="product img" />
                      </router-link>
                    </td>
                    <td class="product-name"><router-link :to="{ name: 'ProductDetail', params: { id: product.id } }">{{ product.name }}</router-link></td>
                    <td class="product-price"><span class="amount">{{ ThousandSeparator(product.price) }}원</span></td>
                    <td class="product-remove"><a href="#" @click="removeToWishlist(product)">X</a></td>
                    <td class="product-name">
                      <div class="htc__login__btn">
                          <a
                          href="#"
                          @click="addToCart(product)">장바구니에 담기</a>
                      </div>
                    </td>
                  </tr>
                </template>
              </tbody>
            </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'delivery', // 'wish'
    }
  },
  methods: {
    orderState(order) {
      const {
        status
      } = order
      console.log('status : ', status)
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
    },
    setTab(tab) {
      this.tab = tab
    },
    addToCart (product) {
      this.$store.dispatch('ADD_TO_CART', { product, quantity: 1 })
      alert('장바구니에 추가되었습니다.')
    },
    removeToWishlist (product) {
      this.$store.dispatch('REMOVE_TO_WISHLIST', { product })
    },
  }
}
</script>

<style lang="css" scoped>
.lookup-item {
  border: 1px solid #e6e6e6;
  width: 240px;
  height: 120px;
  font-size: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.lookup-btn {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.lookup-btn.active {
  background: #ff4136;
  color: #fff;
  border: 1px solid #ff4136;
}
.lookup-btn span {
  font-size: 24px;
  margin-right: 20px;
}

</style>
