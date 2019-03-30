<template>
<!-- Body main wrapper start -->
<div class="wrapper fixed__footer">
  <Header></Header>

  <div class="body__overlay"></div>

  <Offset></Offset>

  <Footer></Footer>

  <QuickView></QuickView>

  <router-view />
</div>
<!-- Body main wrapper end -->
</template>
<script>
import Header from '@/components/common/Header.vue'
import Offset from '@/components/common/Offset.vue'
import Footer from '@/components/common/Footer.vue'
import QuickView from '@/components/common/QuickView.vue'

export default {
  components: {
    Header,
    Offset,
    Footer,
    QuickView,
  },
  mounted () {

  },
  async created() {
    await this.$store.dispatch('FETCH_CATEGORY')
  }
}
</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
  {
  opacity: 0;
}
</style>
