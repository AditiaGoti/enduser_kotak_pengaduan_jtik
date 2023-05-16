<template>
  <div class="home">
    <navbar/>
    <edit-profile />
  </div>
</template>

<script>
// @ is an alias to /src
import EditProfile from '@/components/EditProfileUser.vue'
import Navbar from '@/components/Navbars/Navbar.vue'

export default {
  name: 'HomeView',
  components: {
    EditProfile,
    Navbar
  }
}
</script>
