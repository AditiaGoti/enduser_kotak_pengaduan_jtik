<template>
    <div class="mt-1">
    <button
      class="text-blueGray-500"
      @click="toggleDropdown" 
    >
      <div class="items-center flex">
          <img
          class="w-8 h-8 rounded-full"            
          :src="profileList.avatar"
          />
      </div>
    </button>
    <div
      class="bg-white text-base list-none text-left rounded shadow-lg"
    
    >
<ul
          v-if="isDropdownOpen" class="absolute z-[1000] right-5 m-0 mt-1 min-w-max list-none rounded-lg border-2 border-blue-300 bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
>
           <div class="px-4 py-3">
          <span class="block text-sm text-gray-900 font-bold">{{profileList.name }}</span>
          <span class="block text-sm  text-gray-500 truncate font-bold">{{profileList.email}}</span>
        </div>
            <li>
            <router-link to="/profile">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
            </router-link>
          </li>
          <li>
            <router-link to="/keluhanmahasiswa">
            <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Pengaduan</a>
            </router-link>
          </li>
          <li>
            <a href="#" :onClick="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
          </li>
        </ul>
    </div>
  <!-- </div> -->
<!-- </div> -->

        </div>
</template>
<script>
import vote from "@/assets/img/voting.png";
import { ProfileController } from "@/controller/ProfileController.js";
import { removeAuth } from "@/Utils/localstorage";
import notification from '@/components/NotificationListStudent.vue'
export default {
  components:{
    notification,
  },
  data() {
    return {
      vote,
      meta: {
        page: 1,
        size: "",
      },
    isDropdownOpen: false,
      Profile: new ProfileController(false,false,""),
    };
  },
  created(){
    this.profile();

  },
  computed:{
  profileList() {
      return this.Profile.list;
    },
  },

  methods: {
     toggleDropdown(){
      this.isDropdownOpen = !this.isDropdownOpen;
      console.log(this.isDropdownOpen,"status")
    },
    logout() {
      this.loadingStatus = true;
      setTimeout(() => {
    localStorage.clear();
    removeAuth();
    location.reload();
    this.$router.push("/");
  }, 2000);
    },
    async getprofile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getprofile();
    },
  },

};
</script>
