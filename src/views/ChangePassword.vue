<template>
  <div class="home">
    <div v-if="profileList.lecturer_type > 0">
      <navbar-lecturer/>
      <change-pass-lecturer/>
    </div>
    <div v-else>
      <navbar/>
      <change-pass/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ChangePass from '@/components/ChangePasswordUser.vue'
import ChangePassLecturer from '@/components/ChangePasswordLecturer.vue'

import Navbar from '@/components/Navbars/Navbar.vue'
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import { ProfileController } from "@/controller/ProfileController.js";

export default {
  name: 'HomeView',
  components: {
    ChangePass,
    Navbar,
    NavbarLecturer,
    ChangePassLecturer
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
