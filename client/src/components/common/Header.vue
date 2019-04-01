<template lang="html">
  <!-- Start Header Style -->
  <header id="header" class="htc-header">
      <!-- Start Mainmenu Area -->
      <div id="sticky-header-with-topbar" class="mainmenu__area sticky__header">
          <div class="container">
              <div class="row">
                  <div class="col-md-2 col-lg-2 col-6">
                      <div class="logo">
                          <!-- <a href="/">
                              <img src="/images/logo/artbox.png" alt="logo">
                          </a> -->
                          <router-link :to="{ name: 'Index' }">
                            <img src="/images/logo/artbox.png" alt="logo">
                          </router-link>
                      </div>
                  </div>
                  <!-- Start MAinmenu Ares -->
                  <div class="col-md-8 col-lg-8 d-none d-md-block">
                      <nav class="mainmenu__nav  d-none d-lg-block">
                          <ul class="main__menu">
                              <li v-for="category in this.$store.state.category.categories" :key="category.id">
                                <a href="#" @click="handleMainMenu(category)">{{ category.name }}</a>
                              </li>
                          </ul>
                      </nav>

                      <div class="mobile-menu clearfix d-block d-lg-none">
                          <nav id="mobile_dropdown">
                              <ul>
                                <li v-for="category in this.$store.state.category.categories" :key="category.id">
                                  <a href="#" @click="handleMainMenu(category)">{{ category.name }}</a>
                                </li>
                              </ul>
                          </nav>
                      </div>
                  </div>
                  <!-- End MAinmenu Ares -->
                  <div class="col-md-2 col-lg-2 col-6">
                      <ul class="menu-extra">
                          <li class="search search__open d-none d-sm-block"><span class="ti-search"></span></li>
                          <li>
                            <router-link :to="{ name: 'Login' }">
                              <span class="ti-user"></span>
                            </router-link>
                          </li>
                          <li class="cart__menu"><span class="ti-shopping-cart"></span></li>
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

    }
  },
  methods: {
    async handleMainMenu (category) {
      this.setCategory(category)
      this.gotoCategory(category)
      await this.$store.dispatch('FETCH_PRODUCTS', { categoryId: category.id })
      window.sr.reveal('.foo')
    },
    setCategory (category) {
      this.$store.commit('SET_CATEGORY', category)
    },
    gotoCategory (category) {
      this.$router.push({ path: `/product?category=${category.id}` })
    }
  }
}
</script>

<style lang="css" scoped>
#header {
  /* height: 137px; */
}
</style>
