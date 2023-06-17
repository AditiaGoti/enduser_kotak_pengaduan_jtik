<template>
  <div class="hello mt-16">
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
    async getComplaintList(page, size) {
      return this.complaint.getComplaintList(page, size);
    },
    async getComplaint() {
      await this.getComplaintList(this.meta.page, this.meta.size);
    },
    // async getUpdateActivity(id) {
    //   return this.notif.getActivityListUpdate(id);
    // },
    // async getUpdateStatus(id) {
    //   await this.getUpdateActivity(id);
    //   this.getActivity();
    // },
    // setNotification() {
    //   setNotif(this.notip);
      
    // },
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
