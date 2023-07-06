<template>
  <div class="home">
      <navbar/>
        <keluhan-user/>
<div class="item-center  mx-3">
         <Footer/>
      </div>
      </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbars/Navbar.vue'
import KeluhanUser from '@/components/KeluhanUser.vue'
import Footer from '@/components/Footer/footer.vue'


export default {
  name: 'HomeView',
  components: {
    Navbar,
    KeluhanUser,
    Footer
  },
}
</script>
