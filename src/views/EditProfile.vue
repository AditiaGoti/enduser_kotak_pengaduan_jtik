<template>
  <div class="home">
    <div v-if="profileList.type > 0">
      <NavbarLecturer/>
    </div>
    <div v-else>
      <navbar/>
    </div>
    <edit-profile />
  </div>
</template>

<script>
// @ is an alias to /src
import EditProfile from '@/components/EditProfileUser.vue'
import Navbar from '@/components/Navbars/Navbar.vue'
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import { ProfileController } from "@/controller/ProfileController.js";

export default {
  name: 'HomeView',
  components: {
    EditProfile,
    Navbar,
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
