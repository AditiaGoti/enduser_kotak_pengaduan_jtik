<template>
  <div class="home">
    <navbar/>
    <detail-keluhan />
  </div>
</template>

<script>
// @ is an alias to /src
import DetailKeluhan from '@/components/DetailKeluhan.vue'
import Navbar from '@/components/Navbars/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    DetailKeluhan,
    Navbar
  }
}
</script>
