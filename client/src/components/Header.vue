<template lang="html">
  <!-- Start Header Style -->
  <header id="header" class="htc-header">
      <!-- Start Mainmenu Area -->
      <div id="sticky-header-with-topbar" class="mainmenu__area sticky__header">
          <div class="container">
              <div class="row">
                  <div class="col-md-2 col-lg-2 col-6">
                      <div class="logo">
                          <a href="index.html">
                              <img src="images/logo/artbox.png" alt="logo">
                          </a>
                      </div>
                  </div>
                  <!-- Start MAinmenu Ares -->
                  <div class="col-md-8 col-lg-8 d-none d-md-block">
                      <nav class="mainmenu__nav  d-none d-lg-block">
                          <ul class="main__menu">
                              <!-- <li class="drop"><a href="index.html">Home</a>
                                <ul class="dropdown">
                                    <li><a href="blog.html">blog</a></li>
                                    <li><a href="blog-details.html">blog details</a></li>
                                </ul>
                              </li> -->
                              <li v-for="category in categories"><a href="about.html">{{ category.name }}</a></li>
                          </ul>
                      </nav>

                      <div class="mobile-menu clearfix d-block d-lg-none">
                          <nav id="mobile_dropdown">
                              <ul>
                                  <li><a href="index.html">Home</a></li>
                                  <li><a href="about.html">About</a></li>
                                  <li><a href="blog.html">blog</a>
                                      <ul>
                                          <li><a href="blog.html">blog</a></li>
                                          <li><a href="blog-details.html">blog details</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="#">pages</a>
                                      <ul>
                                          <li><a href="about.html">about</a></li>
                                          <li><a href="shop.html">shop</a></li>
                                          <li><a href="product-details.html">product details</a></li>
                                          <li><a href="cart.html">cart</a></li>
                                          <li><a href="wishlist.html">wishlist</a></li>
                                          <li><a href="checkout.html">checkout</a></li>
                                          <li><a href="team.html">team</a></li>
                                          <li><a href="login-register.html">login & register</a></li>
                                      </ul>
                                  </li>
                                  <li><a href="contact.html">contact</a></li>
                              </ul>
                          </nav>
                      </div>
                  </div>
                  <!-- End MAinmenu Ares -->
                  <div class="col-md-2 col-lg-2 col-6">
                      <ul class="menu-extra">
                          <li class="search search__open d-none d-sm-block"><span class="ti-search"></span></li>
                          <li><a href="login-register.html"><span class="ti-user"></span></a></li>
                          <li class="cart__menu"><span class="ti-shopping-cart"></span></li>
                          <li class="toggle__menu d-none d-md-block"><span class="ti-menu"></span></li>
                      </ul>
                  </div>
              </div>
              <div class="mobile-menu-area"></div>
          </div>
      </div>
      <!-- End Mainmenu Area -->
  </header>
  <!-- End Header Style -->
</template>

<script>
export default {
  data () {
    return {
      categories: [
        { name: '인형/토이' },
        { name: '주방/욕실' },
        { name: '문구' },
        { name: '패션' },
        { name: '여행' },
        { name: '리빙/데코' },
        { name: '디지털/가전' },
        { name: '뷰티' },
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
