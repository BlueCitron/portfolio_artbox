<template lang="html">
  <!-- QUICKVIEW PRODUCT -->
  <div id="quickview-wrapper">
      <!-- Modal -->
      <div class="modal fade" id="productModal" tabindex="-1" role="dialog">
          <div class="modal-dialog modal__container" role="document">
              <div class="modal-content">
                  <div class="modal-header modal__header">
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                  </div>
                  <div class="modal-body">
                      <div class="modal-product">
                          <!-- Start product images -->
                          <div class="product-images">
                              <div class="main-image images">
                                  <img alt="big images" :src="QuickViewItem.previews ? QuickViewItem.previews[0].url : ''">
                              </div>
                          </div>
                          <!-- end product images -->
                          <div class="product-info">
                              <h1>{{ QuickViewItem.name }}</h1>
                              <!-- <div class="rating__and__review">
                                  <ul class="rating">
                                      <li><span class="ti-star"></span></li>
                                      <li><span class="ti-star"></span></li>
                                      <li><span class="ti-star"></span></li>
                                      <li><span class="ti-star"></span></li>
                                      <li><span class="ti-star"></span></li>
                                  </ul>
                                  <div class="review">
                                      <a href="#">4 customer reviews</a>
                                  </div>
                              </div> -->
                              <div class="price-box-3">
                                  <div class="s-price-box">
                                      <span class="new-price">{{ ThousandSeparator(QuickViewItem.price) }}원</span>
                                      <!-- <span class="old-price">$45.00</span> -->
                                  </div>
                              </div>
                              <div class="quick-desc">
                                  {{ QuickViewItem.description }}
                              </div>
                              <div class="addtocart-btn">
                                  <a href="#" @click="addToCart(QuickViewItem)">장바구니에 담기</a>
                              </div>
                          </div><!-- .product-info -->
                      </div><!-- .modal-product -->
                  </div><!-- .modal-body -->
              </div><!-- .modal-content -->
          </div><!-- .modal-dialog -->
      </div>
      <!-- END Modal -->
  </div>
  <!-- END QUICKVIEW PRODUCT -->
</template>

<script>
export default {
  computed: {
    QuickViewItem () {
      return this.$store.state.product.quickview
    }
  },
  methods: {
    addToCart (product) {
      this.$store.dispatch('ADD_TO_CART', { product, quantity: 1 })
      alert('장바구니에 추가되었습니다.')
    }
  },
}
</script>

<style lang="css" scoped>
</style>
