<template>
  <div class="home">
<div v-if="profileList.lecturer_type > 0">
      <NavbarLecturer/>
    </div>
    <div v-else>
      <navbar/>
    </div>
        <keluhan-publish/>
    <!-- <keluhan/> -->
<div class="item-center  mx-3">
         <Footer/>
      </div>  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '@/components/Navbars/Navbar.vue'
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import KeluhanPublish from '@/components/KeluhanPublikasi.vue'
import Footer from '@/components/Footer/footer.vue'

import { ProfileController } from "@/controller/ProfileController.js";

export default {
  name: 'HomeView',
  components: {
    Navbar,
    NavbarLecturer,
    KeluhanPublish,
    Footer
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
}
}
</script>
