<template>
  <div class="home">
    <navbar/>
    <reset-pass/>
  </div>
</template>

<script>
// @ is an alias to /src
import ResetPass from '@/components/ResetPasswordUser.vue'
import Navbar from '@/components/Navbars/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    ResetPass,
    Navbar
  }
}
</script>
