<template lang="html">
  <div>
    <!-- Start Product Details -->
    <section class="htc__product__details pt--150 pb--100 bg__white">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-6 col-sm-12">
            <div class="product__details__container">
              <div class="product__big__images">
                <div class="portfolio-full-image tab-content">
                  <div role="tabpanel" class="tab-pane active" id="img-tab-1">
                    <img :src="Product.previews[0].url" alt="full-image">
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-12 col-lg-6 col-sm-12 smt-30 xmt-30">
            <div class="htc__product__details__inner">
              <div class="pro__detl__title">
                <h2>{{ Product.name }}</h2>
                <h6 class="my-3">{{ Product.division.category.name }} > {{ Product.division.name }}</h6>
              </div>
              <!-- <div class="pro__dtl__rating">
                <ul class="pro__rating">
                  <li><span class="ti-star"></span></li>
                  <li><span class="ti-star"></span></li>
                  <li><span class="ti-star"></span></li>
                  <li><span class="ti-star"></span></li>
                  <li><span class="ti-star"></span></li>
                </ul>
                <span class="rat__qun">(Based on 0 Ratings)</span>
              </div> -->
              <!-- <div class="pro__details">
                <p>{{ Product.description }}</p>
              </div> -->
              <ul class="pro__dtl__prize">
                <!-- <li class="old__prize">$15.21</li> -->
                <li>{{ ThousandSeparator(Product.price) }}원</li>
              </ul>
              <div class="pro__dtl__color d-flex">
                <h2 class="title__5" style="width: 100px;">배송비</h2>
                <ul class="pro__choose__color mx-5">
                  <li class="red">{{ ThousandSeparator(Product.shippingFee) }}원</li>
                </ul>
              </div>
              <div class="pro__dtl__color d-flex">
                <h2 class="title__5" style="width: 100px;">꿈캔디</h2>
                <ul class="pro__choose__color mx-5">
                  <li class="red">{{ Product.candy }}개</li>
                </ul>
              </div>
              <div class="pro__dtl__color d-flex">
                <h2 class="title__5" style="width: 100px;">상품코드</h2>
                <ul class="pro__choose__color mx-5">
                  <li class="red">{{ Product.productCode }}</li>
                </ul>
              </div>
              <div class="pro__dtl__color d-flex">
                <h2 class="title__5" style="width: 100px;">수량</h2>
                <ul class="pro__choose__color mx-5">
                  <li class="red"><input class="cart-plus-minus-box" type="number" name="qtybutton" v-model="quantity"></li>
                </ul>
              </div>
              <hr/>
              <div class="d-flex justify-content-between my-4">
                <h2 class="title__4">총 합계금액</h2>
                <h2 class="title__4">{{ ThousandSeparator(Product.price * quantity) }}원</h2>
              </div>
              <!-- <div class="pro__dtl__size">
                <h2 class="title__5">Size</h2>
                <ul class="pro__choose__size">
                  <li><a href="#">xl</a></li>
                  <li><a href="#">m</a></li>
                  <li><a href="#">ml</a></li>
                  <li><a href="#">lm</a></li>
                  <li><a href="#">xxl</a></li>
                </ul>
              </div> -->
              <ul class="pro__dtl__btn">
                <li class="buy__now__btn"><a href="#" @click="addToCart()">장바구니에 담기</a></li>
                <li class="buy__now__btn"><a href="#" @click="buyNow()">바로 구매하기</a></li>
                <li v-if="$store.getters.isLogedIn">
                  <a
                  @click="addToWishlist(Product)"
                  title="위시리스트에 추가"
                  href="#"><span :class="{'ti-heart': true,  'active': isWishItem(Product) }"></span></a></li>
                <!-- <li><a href="#"><span class="ti-email"></span></a></li> -->
              </ul>
              <!-- <div class="pro__social__share">
                <h2>Share :</h2>
                <ul class="pro__soaial__link">
                  <li><a href="https://twitter.com/devitemsllc" target="_blank"><i class="zmdi zmdi-twitter"></i></a></li>
                  <li><a href="https://www.instagram.com/devitems/" target="_blank"><i class="zmdi zmdi-instagram"></i></a></li>
                  <li><a href="https://www.facebook.com/devitems/?ref=bookmarks" target="_blank"><i class="zmdi zmdi-facebook"></i></a></li>
                  <li><a href="https://plus.google.com/" target="_blank"><i class="zmdi zmdi-google-plus"></i></a></li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Product Details -->
    <!-- Start Product tab -->
    <section class="htc__product__details__tab bg__white pb--120">
      <div class="container">
        <div class="row">
          <div class="col-md-12 col-lg-12 col-sm-12">
            <ul class="nav product__deatils__tab mb--60" role="tablist">
              <li role="presentation" class="active">
                <a class="active" href="#description" role="tab" data-toggle="tab">상품보기</a>
              </li>
              <li role="presentation">
                <a href="#sheet" role="tab" data-toggle="tab">상품상세</a>
              </li>
              <!-- <li role="presentation">
                <a href="#reviews" role="tab" data-toggle="tab">상품후기</a>
              </li> -->
            </ul>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <div class="product__details__tab__content">
              <!-- Start Single Content -->
              <div role="tabpanel" id="description" class="product__tab__content active">
                <div class="product__description__wrap">
                  <!-- 상품 설명 -->
                  <div class="product__desc">
                    <h2 class="title__6">{{ Product.name }}</h2>
                    <p>{{ Product.description }}</p>
                  </div>
                  <!-- 상품 이미지 -->
                  <div>
                    <template v-for="image in Product.images">
                      <p style="text-align:center;">
                        <img :src="image.url" style="max-width: 800px;"/>
                      </p>
                    </template>
                  </div>

                  <!-- 상품 배송 정보-->
                  <template>
                    <hr>
                    <h2 class="title__5 mb-4">배송/교환/환불 정보</h2>
                      <h6>배송정보</h6>
                      <ul class="delivery__info">
                        <li>배송기간은 주문일(또는 결제완료일)로부터 1일(24시간)~5일 정도 걸립니다. (지방일 경우 최장 7일)</li>
                        <li>주문금액이 30,000원 이상일 경우 무료배송</li>
                        <li>지정일 배송은 택배회사에 관련된 사항이므로 택일이 불가합니다.</li>
                      </ul>

                      <h6 class="my-3">교환/반품/환불 정보</h6>
                      <ul class="exchange__info">
                        <li>
                          배송완료 후 7일 이내에 신청할 수 있으며, 다음의 경우는 교환/반품 신청이 불가할 수 있습니다.
                          <ul>
                            <li>- 반품/교환 가능 기간이 경과된 경우</li>
                            <li>- 포장을 개봉하였거나 포장이 훼손되어 상품가치가 현저히 감소한 경우</li>
                            <li>- 고객의 주문을 확인한 후 상품제작에 들어가는 주문제작상품인 경우</li>
                            <li>- 소비자가 책임 있는 사유로 상품 등이 멸실 또는 훼손된 경우</li>
                            <li>- 시간의 경과에 의해 재판매가 곤란할 정도로 상품 등의 가치가 현저히 감소한 경우</li>
                            <li>- 복제가 가능한 재화 등의 포장을 훼손한 경우</li>
                          </ul>
                        </li>
                        <li>단순변심에 의한 반품/교환 택배비는 고객님이 부담하셔야 하며, 반품 접수 없이 임의로 반송하거나 우편으로 보낼 경우 상품 확인이 어려워 환불이 불가능 할 수 있습니다.</li>
                      </ul>
                  </template>

                </div>
              </div>
              <!-- End Single Content -->
              <!-- Start Single Content -->
              <div role="tabpanel" id="sheet" class="product__tab__content">

                <div class="pro__feature">
                  <template v-if="Product.product_informations.length != 0">
                    <!-- 상품 Information -->
                    <div class="pro__feature">
                      <h2 class="title__5 mb-4">Information</h2>
                      <ul class="feature__list">
                        <template v-for="information in Product.product_informations">
                          <li style="font-size: 12px;">{{ information.content }}</li>
                        </template>
                      </ul>
                    </div>
                  </template>

                  <!-- 상품정보제공 고시 상세정보 -->
                  <template>
                    <hr>
                    <h2 class="title__5 mb-4">상품정보제공 고시 상세정보</h2>
                      <template v-for="detail in Product.details">
                        <div class="d-flex">
                          <h6 class="detail__type">{{ detail.type}}</h6>
                          <p class="detail__content">{{ detail.content }}</p>
                        </div>
                      </template>
                  </template>
                </div>

              </div>
              <!-- End Single Content -->
              <!-- Start Single Content -->
              <div role="tabpanel" id="reviews" class="product__tab__content">
                <div class="review__address__inner">
                  <!-- Start Single Review -->
                  <div class="pro__review">
                    <div class="review__thumb">
                      <img src="images/review/1.jpg" alt="review images">
                    </div>
                    <div class="review__details">
                      <div class="review__info">
                        <h4><a href="#">Gerald Barnes</a></h4>
                        <ul class="rating">
                          <li><i class="zmdi zmdi-star"></i></li>
                          <li><i class="zmdi zmdi-star"></i></li>
                          <li><i class="zmdi zmdi-star"></i></li>
                          <li><i class="zmdi zmdi-star-half"></i></li>
                          <li><i class="zmdi zmdi-star-half"></i></li>
                        </ul>
                        <div class="rating__send">
                          <a href="#"><i class="zmdi zmdi-mail-reply"></i></a>
                          <a href="#"><i class="zmdi zmdi-close"></i></a>
                        </div>
                      </div>
                      <div class="review__date">
                        <span>27 Jun, 2016 at 2:30pm</span>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at estei to bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                    </div>
                  </div>
                  <!-- End Single Review -->
                  <!-- Start Single Review -->
                  <div class="pro__review ans">
                    <div class="review__thumb">
                      <img src="images/review/2.jpg" alt="review images">
                    </div>
                    <div class="review__details">
                      <div class="review__info">
                        <h4><a href="#">Gerald Barnes</a></h4>
                        <ul class="rating">
                          <li><i class="zmdi zmdi-star"></i></li>
                          <li><i class="zmdi zmdi-star"></i></li>
                          <li><i class="zmdi zmdi-star"></i></li>
                          <li><i class="zmdi zmdi-star-half"></i></li>
                          <li><i class="zmdi zmdi-star-half"></i></li>
                        </ul>
                        <div class="rating__send">
                          <a href="#"><i class="zmdi zmdi-mail-reply"></i></a>
                          <a href="#"><i class="zmdi zmdi-close"></i></a>
                        </div>
                      </div>
                      <div class="review__date">
                        <span>27 Jun, 2016 at 2:30pm</span>
                      </div>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer accumsan egestas elese ifend. Phasellus a felis at estei to bibendum feugiat ut eget eni Praesent et messages in con sectetur posuere dolor non.</p>
                    </div>
                  </div>
                  <!-- End Single Review -->
                </div>
                <!-- Start RAting Area -->
                <div class="rating__wrap">
                  <h2 class="rating-title">Write  A review</h2>
                  <h4 class="rating-title-2">Your Rating</h4>
                  <div class="rating__list">
                    <!-- Start Single List -->
                    <ul class="rating">
                      <li><i class="zmdi zmdi-star-half"></i></li>
                    </ul>
                    <!-- End Single List -->
                    <!-- Start Single List -->
                    <ul class="rating">
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                    </ul>
                    <!-- End Single List -->
                    <!-- Start Single List -->
                    <ul class="rating">
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                    </ul>
                    <!-- End Single List -->
                    <!-- Start Single List -->
                    <ul class="rating">
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                    </ul>
                    <!-- End Single List -->
                    <!-- Start Single List -->
                    <ul class="rating">
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                      <li><i class="zmdi zmdi-star-half"></i></li>
                    </ul>
                    <!-- End Single List -->
                  </div>
                </div>
                <!-- End RAting Area -->
                <div class="review__box">
                  <form id="review-form">
                    <div class="single-review-form">
                      <div class="review-box name">
                        <input type="text" placeholder="Type your name">
                        <input type="email" placeholder="Type your email">
                      </div>
                    </div>
                    <div class="single-review-form">
                      <div class="review-box message">
                        <textarea placeholder="Write your review"></textarea>
                      </div>
                    </div>
                    <div class="review-btn">
                      <a class="fv-btn" href="#">submit review</a>
                    </div>
                  </form>
                </div>
              </div>
              <!-- End Single Content -->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Product tab -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      quantity: 1,
    }
  },
  computed: {
    Product () {
      return this.$store.state.product.product
    }
  },
  methods: {
    addToCart () {
      const { product } = this.$store.state.product
      this.$store.dispatch('ADD_TO_CART', { product, quantity: 1 })
      alert('장바구니에 추가되었습니다.')
    },
    buyNow () {
      const product = this.$store.state.product.product
      const quantity = this.quantity
      this.$store.dispatch('BUY_NOW', { product, quantity })
      this.$router.push({ name: 'Cart' })
      this.quantity = 1
    },
    addToWishlist (product) {
      this.$store.dispatch('ADD_TO_WISHLIST', { product })
    },
    isWishItem (product) {
      const { wishlist } = this.$store.state.wish
      return !!wishlist.find(wish => wish.id == product.id)
    },
  }

}
</script>

<style lang="css" scoped>
.title__5 {
  margin-bottom: 0;
}
.detail__type {
  width: 300px;
  font-size: 14px;
  margin: 0 30px 15px 0;
}
.detail__content {
  font-size: 12px;
}
.delivery__info li {
  padding: 0 0 0 20px;
  margin: 8px 0;
  font-size: 13px;
  color: grey;
}
.exchange__info li {
  padding: 0 0 0 20px;
  margin: 8px 0;
  color: grey;
}
.ti-heart.active {
  color: #ff4136;
}
</style>
