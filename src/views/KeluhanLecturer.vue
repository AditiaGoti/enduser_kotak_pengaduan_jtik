<template>
  <div class="home">
    <NavbarLecturer/>
    <keluhanlecturers/>
    <!-- <keluhan/> -->
<div class="item-center  mx-3">
         <Footer/>
      </div>  </div>
</template>

<script>
// @ is an alias to /src
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import keluhanlecturers from '@/components/KeluhanListLecturer.vue'
import Footer from '@/components/Footer/footer.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarLecturer,
    keluhanlecturers,
    Footer
  }
}
</script>
