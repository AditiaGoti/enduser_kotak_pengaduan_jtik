<template>
  <div class="mt-24 flex flex-col items-center border-none ">
    
<div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
        <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="profileLecturer.avatar" alt="Bonnie image"/>
        <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{profileLecturer.name}}</h5>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{profileLecturer.email}}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{profileLecturer.nip}}</span>
        <span class="text-sm text-gray-500 dark:text-gray-400">{{profileLecturer.phoneNumber}}</span>

        <div class="flex mt-4 space-x-3 md:mt-6">
          <router-link to="/editprofile">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</a>
          </router-link>
          <router-link to="/gantipassword"> 
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ganti Password</a>
          </router-link>
        </div>
    </div>
</div>

  </div>
</template>

<script>
import Logo from "@/assets/img/PENGADUAN.png";
import { ProfileController } from "@/controller/ProfileController.js";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
{
  return{
  Logo,
  Profile: new ProfileController(false, false, ""),
  }
},
created() {
    this.ProfileLecturer();

  },
  computed: {
    isError() {
      return this.Profile.error;
    },
    profileLecturer(){
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
     async getProfileLecturer() {
      return this.Profile.getProfileLecturer();
    },
    async ProfileLecturer() {
      await this.getProfileLecturer();
    },
  },
}
</script>
