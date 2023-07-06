<template>
  <div class="hello mt-16">
  <div v-if ="isLoggedIn">
    <div v-if="profileList.email === null">
    <div v-if="isAlertVisible" id="alert-2" class="flex p-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">
  <svg aria-hidden="true" class="flex-shrink-0 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"></path></svg>
  <span class="sr-only">Info</span>
  <div class="ml-3 text-sm font-medium">
    Tolong Lengkapi Biodata Anda!! Email dibutuhkan Untuk Reset Password <router-link to="/editprofile" class="font-semibold underline hover:no-underline">Click to Edit Profile</router-link>
  </div>
<button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700" data-dismiss-target="#alert-2" aria-label="Close" @click="closeAlert">
    <span class="sr-only">Close</span>
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </button>
</div>
    </div>
  </div>
  <div class="text-left mb-5 bg-blue-800 rounded shadow py-6">
    <div class="ml-36">
<h1 class="mb-4 text-2xl font-extrabold text-gray-900 text-white md:text-2xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-400 mr-2">KOTAK PENGADUAN</span>JTIK</h1>
<p class="text-lg font-normal text-white lg:text-xl w-[500px]">Dengan Kotak Pengaduan JTIK, pengaduan Anda dapat langsung dibaca dan ditanggapi oleh role yang ditunjukan.</p>
            <div v-if="!isLoggedIn"> 
              <router-link to="/login">
            <button
              class="bg-white text-blue-600 active:bg-blue-800 text-xs font-bold uppercase px-4 py-2 my-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Buat Keluhan
            </button>
          </router-link>
          </div>
          <div v-else> 
              <router-link to="/buatkeluhan">
            <button
              class="bg-white text-blue-600 active:bg-blue-800 text-xs font-bold uppercase px-4 py-2 my-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Buat Keluhan
            </button>
          </router-link>
          </div>
    </div>
  </div>
  <div class="flex flex-row">
  <div class="flex flex-col">
<keluhan-popular/>
<keluhanlist />
  </div>
  <div class="flex flex-col">
    <feedback-keluhan/>
  </div>
  </div>
  </div>
</template>

<script>
import Logo from "@/assets/img/PENGADUAN.png";
import { ComplaintController } from "@/controller/ComplaintController.js";
import Keluhanlist from '@/components/KeluhanList.vue'
import KeluhanPopular from '@/components/KeluhanPopular.vue'
import { ProfileController } from "@/controller/ProfileController.js";
import FeedbackKeluhan from '@/components/FeedbackKeluhanList.vue'

export default {
  name: 'HelloWorld',
  components: {
    Keluhanlist,
    FeedbackKeluhan,
    KeluhanPopular,
  },
  props: {
    msg: String
  },
  data()
{
  return{
  Logo,
  // moment: moment,
      meta: {
        page: 1,
        size: "",
      },
      complaint: "yes",
      complaint: new ComplaintController(false, false, ""),
      Profile: new ProfileController(false, false, ""),
      isAlertVisible: true,

  }
},
computed:{
  isError() {
      return this.complaint.error;
    },
    ComplaintList() {
      return this.complaint.complaintLists;
    },
    errorCause() {
      return this.complaint.errorCause;
    },
    profileList() {
      // console.log(this.profileList,"profile")
      return this.Profile.list;
    },
    isLoading() {
      return this.complaint.loading;
    },
    isLoggedIn() {
  const token = localStorage.getItem('kpjtik_access_token');
  return token !== null && token !== '';
},
},
mounted() {
    this.getComplaint();
  },
methods: {
  closeAlert() {
    this.isAlertVisible = false;
  },
    async getComplaintList(page, size) {
      return this.complaint.getComplaintList(page, size);
    },
    async getComplaint() {
      await this.getComplaintList(this.meta.page, this.meta.size);
    },
     async getprofile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getprofile();
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
</style>
