<template>
  <div class="home">
    <navbar/>
    <change-pass />
  </div>
</template>

<script>
// @ is an alias to /src
import ChangePass from '@/components/ChangePasswordUser.vue'
import Navbar from '@/components/Navbars/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    ChangePass,
    Navbar
  }
}
</script>
