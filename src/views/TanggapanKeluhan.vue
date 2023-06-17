<template>
    <div class="home">
      <navbar/>
      <KeluhanFeedback/>
      <!-- <keluhan/> -->
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbars/Navbar.vue'
  // import Keluhan from '@/components/KeluhanUser.vue'
  import KeluhanFeedback from '@/components/FeedbackKeluhanList.vue'
  
  export default {
    name: 'HomeView',
    components: {
      Navbar,
      // Keluhan,
      KeluhanFeedback
    }
  }
  </script>
  