<template>
  <div class="home">
    <div v-if="profileList.lecturer_type > 0">
      <NavbarLecturer/>
      <profile-lecturer/>
    </div>
    <div v-else>
      <navbar/>
      <profile-user/>
    </div>
    <edit-profile />
    <div class="mt-20">
        <Footer />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import ProfileUser from '@/components/ProfileUser.vue'
import ProfileLecturer from '@/components/profileLecturer.vue'
import Navbar from '@/components/Navbars/Navbar.vue'
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import { ProfileController } from "@/controller/ProfileController.js";
import Footer from '@/components/Footer/footer.vue'

export default {
  name: 'HomeView',
  components: {
    ProfileUser,
    ProfileLecturer,
    Navbar,
    NavbarLecturer,
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
}}
</script>
