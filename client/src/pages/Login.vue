<template>
  <div>
    <!-- Start Login Register Area -->
    <div class="htc__login__register bg__white ptb--130">
        <div class="container">
            <div class="row">
                <div class="col-md-6 ml-auto mr-auto">
                    <ul class="login__register__menu nav justify-contend-center" role="tablist">
                        <li role="presentation" class="login active"><a class="active" href="#login" role="tab" data-toggle="tab" ref="loginTab">Login</a></li>
                        <li role="presentation" class="register"><a href="#register" role="tab" data-toggle="tab" ref="registerTab">Register</a></li>
                    </ul>
                </div>
            </div>
            <!-- Start Login Register Content -->
            <div class="row tab-content">
                <div class="col-md-6  ml-auto mr-auto">
                    <div class="htc__login__register__wrap">
                        <!-- Start Single Content -->
                        <div id="login" role="tabpanel" class="single__tabs__panel tab-pane active">
                            <form class="login" method="post">
                                <input type="text" placeholder="Account*" v-model="authUsername">
                                <input type="password" placeholder="Password*" v-model="authPassword">
                            </form>
                            <!-- <div class="tabs__checkbox">
                                <input type="checkbox">
                                <span> Remember me</span>
                                <span class="forget"><a href="#">Forget Pasword?</a></span>
                            </div> -->
                            <div class="htc__login__btn mt--30">
                                <a href="#" @click="authenticate()">Login</a>
                            </div>
                            <!-- <div class="htc__social__connect">
                                <h2>Or Login With</h2>
                                <ul class="htc__soaial__list">
                                    <li><a class="bg--twitter" href="https://twitter.com/devitemsllc" target="_blank"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a class="bg--instagram" href="https://www.instagram.com/devitems/" target="_blank"><i class="zmdi zmdi-instagram"></i></a></li>
                                    <li><a class="bg--facebook" href="https://www.facebook.com/devitems/?ref=bookmarks" target="_blank"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a class="bg--googleplus" href="https://plus.google.com/" target="_blank"><i class="zmdi zmdi-google-plus"></i></a></li>
                                    <h2>Comming Soon</h2>
                                </ul>
                            </div> -->
                        </div>
                        <!-- End Single Content -->
                        <!-- Start Single Content -->
                        <div id="register" role="tabpanel" class="single__tabs__panel tab-pane">
                            <form class="login">
                                <input
                                v-model="regUsername"
                                type="text"
                                placeholder="Account*">
                                <input
                                v-model="regEmail"
                                type="email"
                                placeholder="Email*">
                                <input
                                v-model="regPassword"
                                type="password"
                                placeholder="Password*">
                                <input
                                v-model="regPasswordRe"
                                type="password"
                                placeholder="PasswordRe*">
                                <input
                                v-model="regPostCode"
                                type="text"
                                placeholder="PostCode* ex) 123-456">
                                <input
                                v-model="regAddress"
                                type="text"
                                placeholder="Address* ex) OO도 OO시 OO동 OO건물 OOO번지">
                                <input
                                v-model="regPhone"
                                type="text"
                                placeholder="Phone* ex) 010-1234-5678">
                            </form>
                            <div class="htc__login__btn">
                                <a href="#" @click="register()">register</a>
                            </div>
                            <!-- <div class="htc__social__connect">
                                <h2>Or Login With</h2>
                                <ul class="htc__soaial__list">
                                    <li><a class="bg--twitter" href="https://twitter.com/devitemsllc" target="_blank"><i class="zmdi zmdi-twitter"></i></a></li>
                                    <li><a class="bg--instagram" href="https://www.instagram.com/devitems/" target="_blank"><i class="zmdi zmdi-instagram"></i></a></li>
                                    <li><a class="bg--facebook" href="https://www.facebook.com/devitems/?ref=bookmarks" target="_blank"><i class="zmdi zmdi-facebook"></i></a></li>
                                    <li><a class="bg--googleplus" href="https://plus.google.com/" target="_blank"><i class="zmdi zmdi-google-plus"></i></a></li>
                                    <h2>Comming Soon</h2>
                                </ul>
                            </div> -->
                        </div>
                        <!-- End Single Content -->
                    </div>
                </div>
            </div>
            <!-- End Login Register Content -->
        </div>
    </div>
    <!-- End Login Register Area -->
  </div>
</template>

<script>
export default {
  data () {
    return {
      authUsername: '',
      authPassword: '',
      regUsername: '',
      regEmail: '',
      regPassword: '',
      regPasswordRe: '',
      regPostCode: '',
      regAddress: '',
      regPhone: '',
    }
  },
  methods: {
    async authenticate () {
      const { state, dispatch, commit } = this.$store
      const username    = this.authUsername
      const password    = this.authPassword

      try {
        const { success, accessToken } = (await dispatch('LOGIN', { username, password })).data
        if (success) {
          commit('SET_ACCESS_TOKEN', accessToken)
          await dispatch('VERIFY', { accessToken })
          this.initiateModel()
          const { fullPath } = state.from
          this.$router.push({ path: fullPath })
        }
      } catch({ response }) {
        const { success, message } = response.data
        console.log('Error from authenticate/Login.vue : ', message)
        this.initiateModel()
      }

    },

    async register () {
      const { dispatch, commit } = this.$store
      const username    = this.regUsername
      const email       = this.regEmail
      const password    = this.regPassword
      const passwordRe  = this.regPasswordRe
      const postCode    = this.regPostCode
      const address     = this.regAddress
      const phone       = this.regPhone

      if (password != passwordRe) {
        alert('비밀번호가 일치하지 않습니다.')
        this.regPassword    = ''
        this.regPasswordRe  = ''
        return
      }

      try {
        const { success } = (await dispatch('REGISTER', { username, email, password, postCode, address, phone })).data
        if (success) {
          alert('가입이 완료되었습니다.')
          this.initiateModel()
          this.$refs.loginTab.click()
        }
      } catch ({ response }) {
        console.log('Error from register/Login.vue : ', message)
        alert('가입에 실패했습니다. 다시 시도해주세요.')
        this.initiateModel()
      }
    },

    initiateModel () {
      this.authUsername = ''
      this.authPassword = ''
      this.regUsername    = ''
      this.regEmail       = ''
      this.regPassword    = ''
      this.regPasswordRe  = ''
      this.regPostCode    = ''
      this.regAddress     = ''
      this.regPhone       = ''
    },

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
.product__menu button {
  padding: 0 10px;
}
.login>input {
  margin-top: 30px;
  font-size: 12px;
}
..htc__login__register__wrap {
  max-width: 420px;
}
</style>
