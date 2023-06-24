<template>
  <div class="home">
    <navbar/>
    <reset-pass-lect/>
  </div>
</template>

<script>
// @ is an alias to /src
import ResetPassLect from '@/components/ResetPasswordLecturer.vue'
import Navbar from '@/components/Navbars/NavbarLecturer.vue'

export default {
  name: 'HomeView',
  components: {
    ResetPassLect,
    Navbar
  }
}
</script>
