<template>
    <div class="home">
      <NavbarLecturer/>
      <HelloWorld />
      <Footer />
    </div>
  </template>
  
  <script>
  // @ is an alias to /src
  import HelloWorld from '@/components/HelloWorld.vue'
  import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
  import Footer from '@/components/Footer/footer.vue'
  
  export default {
    name: 'HomeView',
    components: {
      HelloWorld,
      NavbarLecturer,
      Footer
    }
  }
  </script>
  