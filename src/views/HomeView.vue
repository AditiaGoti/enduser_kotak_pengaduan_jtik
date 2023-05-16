<template>
  <div class="home">
    <navbar/>
    <HelloWorld />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbars/Navbar.vue'
import Footer from '@/components/Footer/footer.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    Footer
  }
}
</script>
