<template>
    <div>
      <button
      class="text-blueGray-500 md:block hidden"
      @click="toggleDropdown" 
    >
      <div class="flex justify-between">
        <div>
          <img
          class="w-8 h-8 rounded-full"            
          :src="profileList.avatar"
          />
          </div>
      </div>
      </button>
      <div class="flex justify-between md:hidden block">
        <div>
          <img
          class="w-8 h-8 rounded-full"            
          :src="profileList.avatar"
          />
          </div>
          <div>
          </div>
             <div @click="toggleDropdownProfile" 
    class="cursor-pointer text-xs uppercase py-3 font-bold block lg:hidden flex justify-end">
   <i
        v-if="isDropdownProfileOpen"
        class="fas fa-chevron-up ml-2"
      ></i>
      <i
        v-else
        class="fas fa-chevron-down ml-2"
      ></i>   
             </div>
             <ul v-if="isDropdownProfileOpen" class="text-left">
          <li>
         <router-link to="/profile">
         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
         </router-link>
       </li>
       <li>
         <router-link to="/keluhanlecturer">
         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Pengaduan</a>
         </router-link>
       </li>
       <li>
         <router-link to="/tanggapan">
         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Tanggapan</a>
         </router-link>
       </li>
       <li>
         <a href="#" :onClick="logout" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
       </li>
    </ul>
      </div>
    <div
      class="bg-white text-base list-none text-left rounded shadow-lg"
    
    >
<ul
          v-if="isDropdownOpen" class="absolute z-[1000] right-5 m-0 mt-1 min-w-max list-none rounded-lg border-2 border-blue-300 bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700"
>
           <div class="px-4 py-3">
          <span class="block text-sm font-bold text-gray-900 dark:text-white">{{profileList.name }}</span>
          <span class="block text-sm  font-bold text-gray-500 truncate dark:text-gray-400">{{profileList.email}}</span>
        </div>
    <li>
         <router-link to="/profile">
         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Profile</a>
         </router-link>
       </li>
       <li>
         <router-link to="/keluhanlecturer">
         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Pengaduan</a>
         </router-link>
       </li>
       <li>
         <router-link to="/tanggapan">
         <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Tanggapan</a>
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
          isDropdownProfileOpen: false,

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
    toggleDropdownProfile(){
      this.isDropdownProfileOpen = !this.isDropdownProfileOpen;
    },
    logout() {
      this.loadingStatus = true;
      setTimeout(() => {
      removeAuth()
      localStorage.clear();
      this.$router.push("/");
      location.reload();
          }, 3500);
      

    },
     async getProfileLecturer() {
   return this.Profile.getProfileLecturer();
 },
 async profile() {
   await this.getProfileLecturer();
 },
  },

};
</script>
