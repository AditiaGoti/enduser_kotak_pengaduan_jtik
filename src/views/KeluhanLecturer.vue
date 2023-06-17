<template>
  <div class="home">
    <NavbarLecturer/>
    <keluhanlecturers/>
    <!-- <keluhan/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import keluhanlecturers from '@/components/KeluhanListLecturer.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarLecturer,
    keluhanlecturers
  }
}
</script>
