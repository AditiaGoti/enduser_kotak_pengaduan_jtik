<template>
  <div class="home">
    <navbar/>
    <keluhan/>
  </div>
</template>

<script>
// @ is an alias to /src
import Keluhan from '@/components/BuatKeluhanUser.vue'
import Navbar from '@/components/Navbars/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    Keluhan,
    Navbar
  }
}
</script>
