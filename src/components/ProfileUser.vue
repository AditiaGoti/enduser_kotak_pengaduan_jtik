<template>
  <div class="mt-24  md:px-0 px-5 flex flex-col items-center border-none ">
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
      <div v-if="profileList.avatar === null || profileList.avatar === ''">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="Profiles"/>
      </div>
      <div>
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="profileList.avatar" />
      </div>
        <h5 class="mb-1 md:text-xl text-lg font-bold dium text-gray-900 dark:text-white">{{profileList.name}}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{profileList.email}}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{profileList.major}}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{profileList.nim}}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{profileList.phoneNumber}}</span>

        <div class="flex mt-4 space-x-3 md:mt-6">
          <router-link to="/editprofile">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</a>
          </router-link>
          <router-link to="/gantipassword"> 
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ganti Password</a>
          </router-link>
        </div>
    </div>
</div>

  </div>
</template>

<script>
import Logo from "@/assets/img/PENGADUAN.png";
import { ProfileController } from "@/controller/ProfileController.js";
import Profiles from "@/assets/img/profile.svg";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
{
  return{
  Logo,
  Profiles,
  Profile: new ProfileController(false, false, ""),
  }
},
created() {
    this.profile();

  },
  computed: {
    isError() {
      return this.Profile.error;
    },
    profileList() {
      console.log(this.profileList,"profile")
      return this.Profile.list;
    },
    errorCause() {
      return this.Profile.errorCause;
    },

    isLoading() {
      return this.Profile.loading;
    },
  },
  methods: {
    async getprofile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getprofile();
    },
  },
}
</script>
