<template>
      
    <button 
    v-if="isLoggedIn" 
    @click="toggleDropdown" 
    class="inline-flex items-center text-sm font-medium text-center text-gray-500 hover:text-blue-900 focus:outline-none" type="button"> 
    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
    <div class="relative flex">
  <div v-if="NotificationData.unOpened > 0">
    <div class="relative inline-flex w-4 h-4 text-white font-bold text-[8px] bg-red-500 border-2 border-white rounded-full -top-2 right-3 dark:border-gray-900" style="line-height: 13px; text-align: center;">
 <p class="ml-[2px]"> {{ NotificationData.unOpened }} </p>
</div>  </div>
  <div v-else>
    <div class="relative inline-flex w-3 h-3"></div>
  </div>
</div>

    </button>
    <!-- Dropdown menu -->
    <div v-if="isDropdownOpen" class="absolute z-50 bottom-0 top-14 w-64 h-10 right-20 max-w-sm bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-800 dark:divide-gray-700" >
    <div class="block px-4 py-2 font-bold text-center text-gray-700 rounded-t-lg bg-gray-50 dark:bg-gray-800 dark:text-white">
      Notifications
    </div>
    <div class="notification-container" style="max-height: 200px; overflow-y: auto;">
    <div v-if="NotificationList.length > 0">
        <router-link  v-for="(notif) in NotificationList" :key="notif._id" :to="notif.complaint_id !== null && notif.complaint_id !== undefined ? '/detail/' + notif.complaint_id : '/profile'">
          <div class="divide-y text-left text-xs border-1 border-black">
    <div v-if="notif.isOpened == null" >
      <!-- <input type="text"  v-model="notif._id" class="hidden"> -->
      <input v-model="notif._id" type="text" class=" hidden text-md text-left border-none break-words whitespace-normal mb-5" disabled />
      <button href="#" class="flex px-4 py-3 text-left font-light bg-blue-500 text-white hover:bg-black-100 hover:text-black"
      @click="updateStatusNotif(notif._id)">
        {{ notif.message }}
      </button>
    </div>
    <div v-else>
      <a href="#" class="flex bg-gray-50 dark:bg-gray-800 dark:text-white px-4 py-3 font-light text-black hover:bg-gray-200"
      >
        {{ notif.message }}
      </a>
    </div>
  </div>
      </router-link>
    </div>
    <div v-else class="px-4 py-3 text-center text-black bg-white">
      Tidak ada notifikasi
    </div>
    <!-- <a href="#" class="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:text-white">
      <div class="inline-flex items-center">
        <svg class="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"></path>
          <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"></path>
        </svg>
        View all
      </div>
    </a> -->
  </div>
  </div>

    </template>
<script>
import vote from "@/assets/img/voting.png";
import { NotificationController } from "@/controller/NotificationController.js";
export default {
data() {
 return {
   vote,
   NotificationList:[],
   meta: {
     page: 1,
     size: "",
   },
   notif: "yes",
   isDropdownOpen: false,
   notif: new NotificationController(false, false, ""),
 };
},
computed: {
 isLoggedIn() {
const token = localStorage.getItem('kpjtik_access_token');
return token !== null && token !== '';
},
 isError() {
   return this.notif.error;
 },
 NotificationList() {
   return this.notif.list;
 },
 NotificationData() {
   return this.notif.data;
 },
 errorCause() {
   return this.notif.errorCause;
 },

 isLoading() {
   return this.notif.loading;
 },


},
mounted() {
 this.getNotifList();
this.updateStatusNotif()

},
methods: {
  toComplaintDetail(Index) {
      this.$router.push({
        path: '/detail/:id',
        name: 'detail',
        params: { id: Index },
        item:"",
      });
    },
  toggleDropdown(){
    this.isDropdownOpen = !this.isDropdownOpen
  },
 async getNotificationlistLecturer(page, size) {
   return this.notif.getNotificationlistLecturer(page, size);
 },
 async getNotifList() {
   await this.getNotificationlistLecturer(this.meta.page, this.meta.size);
 },
async updateStatusNotif(notification_id) {
  await this.updateNotif(notification_id);
},
async updateNotif(notification_id) {
  return this.notif.updateNotif(notification_id);
},
 setNotification() {
   setNotif(this.notip);
   
 },
},
};
</script>
