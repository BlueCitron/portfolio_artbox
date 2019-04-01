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
              <h6 class="title__5">주문/배송</h6>
              <h6 class="title__6" style="margin-bottom: 0;">100</h6>
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
                <a class="lookup-btn" href="#"><span class="ti-shopping-cart"></span>주문/배송</a>
            </div>
            <div class="htc__login__btn w-50">
                <a class="lookup-btn" href="#"><span class="ti-heart"></span>위시리스트</a>
            </div>
          </div>
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

  </div>
</template>

<script>
export default {
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
.lookup-btn span {
  font-size: 24px;
  margin-right: 20px;
}
</style>
