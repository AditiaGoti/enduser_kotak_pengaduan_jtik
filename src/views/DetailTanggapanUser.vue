<template>
  <div class="home">
    <navbar/>
    <detail-tanggapan />
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbars/Navbar.vue'
import DetailTanggapan from '@/components/DetailTanggapan.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    DetailTanggapan
  }
}
</script>
