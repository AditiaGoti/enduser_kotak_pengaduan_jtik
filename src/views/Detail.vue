<template>
  <div class="home">
    <div v-if="profileList.lecturer_type > 0">
      <NavbarLecturer/>
    </div>
    <div v-else>
      <navbar/>
    </div>
    <detail-keluhan />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import DetailKeluhan from '@/components/DetailKeluhan.vue'
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import Navbar from '@/components/Navbars/Navbar.vue'
import Footer from '@/components/Footer/footer.vue'
import { ProfileController } from "@/controller/ProfileController.js";
export default {
  name: 'HomeView',
  components: {
    DetailKeluhan,
    Navbar,
    Footer,
    NavbarLecturer,
  },
  data() {
    return {
      Profile: new ProfileController(false,false,""),
    };
  },
  created(){
    this.profile();
console.log(this.profile,"test")
  },
  mounted() {
      this.getProfileLecturer();

    },
  computed: {
    profileList() {
      return this.Profile.list;
    },

  },
  methods: {
    async getProfileLecturer() {
   return this.Profile.getProfileLecturer();
 },
 async profile() {
   await this.getProfileLecturer();
 },
}}
</script>
