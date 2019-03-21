<template>
  <div class="hello">
    <!-- Body main wrapper start -->
    <div class="wrapper fixed__footer">

        <Header></Header>

        <div class="body__overlay"></div>

        <Offset></Offset>

        <!-- Start Slider Area -->
        <div class="slider__container slider--one">
            <div class="slider__activation__wrap owl-carousel owl-theme">
                <!-- Start Single Slide -->
                <div class="slide slider__full--screen" style="background: rgba(0, 0, 0, 0) url(images/slider/bg/1.png) no-repeat scroll center center / cover ;">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-4 col-sm-12 col-xs-12">
                                <div class="slider__inner">
                                    <h1>New Product <span class="text--theme">Collection</span></h1>
                                    <div class="slider__btn">
                                        <a class="htc__btn" href="cart.html">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Slide -->
                <!-- Start Single Slide -->
                <div class="slide slider__full--screen" style="background: rgba(0, 0, 0, 0) url(images/slider/bg/2.png) no-repeat scroll center center / cover ;">
                    <div class="container">
                        <div class="row">
                            <div class="col-md-8 col-lg-8 col-sm-12 col-xs-12">
                                <div class="slider__inner">
                                    <h1>New Product <span class="text--theme">Collection</span></h1>
                                    <div class="slider__btn">
                                        <a class="htc__btn" href="cart.html">shop now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End Single Slide -->
            </div>
        </div>
        <!-- Start Slider Area -->
        <!-- Start Our Product Area -->
        <section class="htc__product__area ptb--130 bg__white">
            <div class="container">
                <div class="htc__product__container">
                    <!-- Start Product MEnu -->
                    <div class="row">
                        <div class="col-md-12">
                            <div class="product__menu">
                                <button class="is-checked">All</button>
                                <button>쿠션인형</button>
                                <button>미니인형</button>
                                <button>피규어</button>
                                <button>FUN / TOY</button>
                                <button>DIY 취미</button>
                            </div>
                        </div>
                    </div>
                    <!-- End Product MEnu -->
                    <div class="row product__list">
                        <!-- Start Single Product -->
                        <template>
                        <div class="col-md-3 single__pro col-lg-3 col-md-4 cat--1 col-sm-12" v-for="item in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]" v-key="item">
                            <div class="product foo">
                                <div class="product__inner">
                                    <div class="pro__thumb">
                                        <a href="#">
                                            <img src="images/product/1.png" alt="product images">
                                        </a>
                                    </div>
                                    <div class="product__hover__info">
                                        <ul class="product__action">
                                            <li><a data-toggle="modal" data-target="#productModal" title="Quick View" class="quick-view modal-view detail-link" href="#"><span class="ti-plus"></span></a></li>
                                            <li><a title="Add TO Cart" href="cart.html"><span class="ti-shopping-cart"></span></a></li>
                                        </ul>
                                    </div>
                                    <div class="add__to__wishlist">
                                        <a data-toggle="tooltip" title="Add To Wishlist" class="add-to-cart" href="wishlist.html"><span class="ti-heart"></span></a>
                                    </div>
                                </div>
                                <div class="product__details">
                                    <h2><a href="product-details.html">Simple Black Clock</a></h2>
                                    <ul class="product__price">
                                        <li class="old__price">$16.00</li>
                                        <li class="new__price">$10.00</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        </template>
                        <!-- End Single Product -->
                    </div>
                </div>
            </div>
        </section>
        <!-- End Our Product Area -->

        <Footer></Footer>

    </div>
    <!-- Body main wrapper end -->

    <QuickView></QuickView>

    <!-- Placed js at the end of the document so the pages load faster -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Offset from '@/components/Offset.vue'
import Footer from '@/components/Footer.vue'
import QuickView from '@/components/QuickView.vue'

export default {
  components: {
    Header,
    Offset,
    Footer,
    QuickView,
  },

  created () {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
