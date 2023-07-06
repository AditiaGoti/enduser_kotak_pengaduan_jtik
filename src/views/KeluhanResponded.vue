<template>
    <div class="home">
      <navbar/>
      <FeedbackList/>
      <!-- <keluhan/> -->
<div class="item-center  mx-3">
         <Footer/>
      </div>
      </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import Navbar from '@/components/Navbars/Navbar.vue'
  import FeedbackList from '@/components/TanggapanKeluhanList.vue'
  import Footer from '@/components/Footer/footer.vue'

  export default {
    name: 'HomeView',
    components: {
      Navbar,
      FeedbackList,
      Footer
    }
  }
  </script>
  