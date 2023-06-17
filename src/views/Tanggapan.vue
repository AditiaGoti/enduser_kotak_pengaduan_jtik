<template>
  <div class="home">
    <NavbarLecturer/>
    <tanggapan/>
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import Tanggapan from '@/components/TanggapanUser.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarLecturer,
    Tanggapan
  }
}
</script>
