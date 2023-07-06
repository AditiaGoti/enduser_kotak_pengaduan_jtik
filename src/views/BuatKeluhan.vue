<template>
  <div class="home">
    <navbar/>
    <keluhan/>
        <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import Keluhan from '@/components/BuatKeluhanUser.vue'
import Navbar from '@/components/Navbars/Navbar.vue'
import Footer from '@/components/Footer/footer.vue'

export default {
  name: 'HomeView',
  components: {
    Keluhan,
    Navbar,
    Footer
  }
}
</script>
