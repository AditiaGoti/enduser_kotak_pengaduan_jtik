<template>
  <div class="home">
    <navbar/>
    <profile-user />
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileUser from '@/components/ProfileUser.vue'
import Navbar from '@/components/Navbars/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    ProfileUser,
    Navbar
  }
}
</script>
