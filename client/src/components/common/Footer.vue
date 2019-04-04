<template lang="html">
  <!-- Start Footer Area -->
  <!-- style="background: rgba(0, 0, 0, 0) url(/images/bg/1.jpg) no-repeat scroll center center / cover ;" -->
  <footer  class="htc__foooter__area">
      <div class="container">
          <div class="row footer__container clearfix">
              <!-- Start Single Footer Widget -->
              <div class="col-md-6 col-lg-4 col-sm-6">
                  <div class="ft__widget">
                      <div class="ft__logo">
                          <router-link :to="{ name: 'Index' }">
                            <img src="/images/_custom/logo/artbox.png" alt="메인으로 가기">
                          </router-link>
                      </div>
                      <div class="footer__details">
                          <p>이 사이트는 포트폴리오용으로 제작되었습니다. 이 사이트의 운영은 어떠한 영리적 목적도 없음을 밝힙니다.</p>
                      </div>
                  </div>
              </div>
              <!-- End Single Footer Widget -->
              <!-- Start Single Footer Widget -->
              <div class="col-md-6 col-lg-4 col-sm-6 smt-30 xmt-30">
                  <div class="ft__widget contact__us">
                      <h2 class="ft__title">Contact Me</h2>
                      <div class="footer__inner">
                          <p>E-MAIL sds901234@naver.com</p>
                          <p>PHONE 010-7392-8550</p>
                      </div>
                  </div>
              </div>
              <!-- End Single Footer Widget -->
              <!-- Start Single Footer Widget -->
              <div class="col-md-6 col-lg-2 lg-offset-1 col-sm-6 smt-30 xmt-30">
                  <div class="ft__widget">
                      <h2 class="ft__title">Follow Me</h2>
                      <ul class="social__icon">
                          <li><a href="https://github.com/BlueCitron/portfolio_artbox" target="_blank"><i class="zmdi zmdi-github"></i></a></li>
                          <!-- <li><a href="https://www.instagram.com/devitems/" target="_blank"><i class="zmdi zmdi-instagram"></i></a></li>
                          <li><a href="https://www.facebook.com/devitems/?ref=bookmarks" target="_blank"><i class="zmdi zmdi-facebook"></i></a></li>
                          <li><a href="https://plus.google.com/" target="_blank"><i class="zmdi zmdi-google-plus"></i></a></li> -->
                      </ul>
                  </div>
              </div>
              <!-- End Single Footer Widget -->
          </div>
          <!-- Start Copyright Area -->
          <div class="htc__copyright__area">
              <div class="row">
                  <div class="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                      <div class="copyright__inner">
                          <div class="copyright">
                              <p>© {{ (new Date()).getFullYear() }} <a href="https://github.com/BlueCitron" target="_blank">BlueCitron</a>
                              All Right On Artbox Corporation.</p>
                          </div>
                          <ul class="footer__menu">
                              <li><router-link :to="{ name: 'Index' }">Home</router-link></li>
                              <li><router-link :to="{ path: `/product?category=1` }">Product</router-link></li>
                              <!-- <li><a href="contact.html">Contact Us</a></li> -->
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
          <!-- End Copyright Area -->
      </div>
  </footer>
  <!-- End Footer Area -->
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.footer__container {
  padding-top: 53px;
}
</style>
