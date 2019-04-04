<template lang="html">
  <!-- Start Header Style -->
  <header id="header" class="htc-header">
      <!-- Start Mainmenu Area -->
      <div id="sticky-header-with-topbar" class="mainmenu__area sticky__header">
          <div class="container">
              <div class="row">
                  <div class="col-md-2 col-lg-2 col-6">
                      <div class="logo">
                          <router-link :to="{ name: 'Index' }">
                            <img src="/images/_custom/logo/artbox.png" alt="메인으로 가기">
                          </router-link>
                      </div>
                  </div>
                  <!-- Start MAinmenu Ares -->
                  <div class="col-md-8 col-lg-8 d-none d-md-block">
                      <nav class="mainmenu__nav  d-none d-lg-block">
                          <ul class="main__menu">
                              <li v-for="category in $store.state.category.categories" :key="category.id">
                                <a href="#" @click="handleMainMenu(category)">{{ category.name }}</a>
                              </li>
                          </ul>
                      </nav>

                      <div class="mobile-menu clearfix d-block d-lg-none">
                          <nav id="mobile_dropdown">
                              <ul>
                                <li v-for="category in $store.state.category.categories" :key="category.id">
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
                          <template v-if="$store.state.user.user.id == undefined">
                            <li>
                              <router-link :to="{ name: 'Login' }">
                                <span class="ti-user"></span>
                              </router-link>
                            </li>
                          </template>
                          <template v-else>
                            <li class="drop">
                              <a href="#"><span class="ti-user"></span></a>
                              <ul class="dropdown">
                                <li class="custom__dropdown__item"><a href="#" @click="logout()">Logout</a></li>
                                <li class="custom__dropdown__item"><router-link :to="{ name: 'UserInfo', params: { id: $store.state.user.user.id }}">MyPage</router-link></li>
                              </ul>
                            </li>
                          </template>
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
    },
    logout () {
      this.$store.dispatch('LOGOUT')
      this.$router.push({ name: 'Index' })
    }
  }
}
</script>

<style lang="css" scoped>
.menu-extra li.drop{
    position: relative;
}
.menu-extra li.drop a{
  position: relative;
}
.menu-extra li.drop ul.dropdown {
  background: #ffffff none repeat scroll 0 0;
  box-shadow: 0 0 0px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1);
  left: 0;
  margin: 0;
  opacity: 0;
  padding: 0;
  position: absolute;
  top: 120%;
  transition: all 0.2s ease-in-out 0s;
  visibility: hidden;
  width: 189px;
  z-index: 99;
}
.menu-extra li.drop:hover ul.dropdown {
  opacity: 1;
  top: 150%;
  visibility: visible;
}
.header--3 .menu-extra li.drop:hover ul.dropdown {
  top: 100%;
}
.menu-extra ul.dropdown li {
    border-bottom: 1px solid #f4f4f4;
    display: block;
}
.menu-extra ul.dropdown li a {
  background: #ffffff none repeat scroll 0 0;
  color: #333;
  display: block;
  font-size: 12px;
  font-weight: 400;
  padding: 10px 18px;
  text-align: left;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.3s ease 0s;
}
.menu-extra li.drop ul.dropdown li:hover > a {
  background: #fafafa none repeat scroll 0 0;
  color: #ff4136;
}
.scroll-header .menu-extra li.drop ul.dropdown {
  top: 100%;
}
.scroll-header .menu-extra li.drop a:hover ul.dropdown {
  top: 100%;
}
.custom__dropdown__item {
  padding: 0;
}
</style>
