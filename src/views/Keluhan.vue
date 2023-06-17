<template>
  <div class="home">
    <navbar/>
    <keluhan-publish/>
    <!-- <keluhan/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbars/Navbar.vue'
// import Keluhan from '@/components/KeluhanUser.vue'
import KeluhanPublish from '@/components/KeluhanPublikasi.vue'

export default {
  name: 'HomeView',
  components: {
    Navbar,
    // Keluhan,
    KeluhanPublish
  }
}
</script>
