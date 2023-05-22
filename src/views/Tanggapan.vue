<template>
  <div class="home">
    <navbar/>
    <tanggapan/>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbars/Navbar.vue'
import Tanggapan from '@/components/TanggapanUser.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    Tanggapan
  }
}
</script>
