<template>
  <div class="home">
    <NavbarLecturer/>
    <tanggapan/>
<div class="item-center  mx-3">
         <Footer/>
      </div> </div>
</template>

<script>
// @ is an alias to /src
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import Tanggapan from '@/components/TanggapanUser.vue'
import Footer from '@/components/Footer/footer.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarLecturer,
    Tanggapan,
    Footer
  }
}
</script>
