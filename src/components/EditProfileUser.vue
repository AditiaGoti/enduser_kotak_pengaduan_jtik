<template>
  <div class="mt-24 flex flex-col items-center border-none mb-10">
<div class="w-fit  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
  <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="profileList.avatar"/>
  <input type="file" class="text-left" @change="handleFileUpload" accept="image/*">
  <form class="item-start">
  <div class="flex flex-row">
  <div class="mb-6 mx-2">
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Nama</label>
    <input type="text"
    v-model="profileList.name"
     class="bg-gray-50 capitalize border 
     border-gray-300 text-gray-900 
     text-sm rounded-lg focus:ring-blue-500 
     focus:border-blue-500 block w-full p-2.5 
     dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  >
  </div>
  <div class="mb-6 mr-2">
  <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Nim</label>
  <input type="number"
    v-model="profileList.nim"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
</div>

  </div>
  <div class="flex flex-row">
  <div class="mb-6 mx-2">
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Jurusan</label>
    <input type="text"
     v-model="profileList.major "
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>
  <div class="mb-6 mr-2">
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">No.Telpon</label>
    <input type="text" 
    v-model="profileList.phoneNumber"
    class="bg-gray-50 border border-gray-300 
    text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 
    block w-full p-2.5 dark:bg-gray-700 
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
    dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>
  </div>
  <div class="mb-6 mx-2">
    <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Email</label>
    <input type="email" 
    v-model="profileList.email"
    class="bg-gray-50 border border-gray-300 text-gray-900
     text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>
</form>
<div class="toast-container"></div>

        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" :onClick="changeProfile" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</a>
          <router-link to="/gantipassword"> 
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ganti Password</a>
          </router-link>
        </div>
        <div id="toast-success" v-if="isSuccess" class=" mt-16 z-10 fixed flex items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x divide-gray-200 rounded-lg shadow top-5 right-5 dark:text-gray-400 dark:divide-gray-700 space-x dark:bg-gray-800" role="alert">
    <div class="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
        <span class="sr-only">Check icon</span>
    </div>
    <div class="ml-3 text-sm font-normal">Item moved successfully.</div>
    <button type="button" class="ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-8 w-8 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700" data-dismiss-target="#toast-success" aria-label="Close">
        <span class="sr-only">Close</span>
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
    </button>
</div>
    </div>
</div>
  </div>
</template>
<script>
import Logo from "@/assets/img/PENGADUAN.png";

import { ProfileController } from "@/controller/ProfileController.js";
import { ComplaintController } from "@/controller/ComplaintController.js";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
{
  return{
  Logo,
  errorMessage:"",
  file:"",
  Profile: new ProfileController(false, false, ""),
  complaint: new ComplaintController(false, false, ""),

  }
},
created() {
  this.profile();
  this.profileList.avatar = this.profileList.avatar || ''; // Assign value to profileList.avatar
  this.profileList.name = this.profileList.name || ''; // Assign value to profileList.name
  this.profileList.phoneNumber = this.profileList.phoneNumber || ''; // Assign value to profileList.phoneNumber
  this.profileList.email = this.profileList.email || ''; // Assign value to profileList.email
  },
  computed: {
    isError() {
      return this.Profile.error;
    },
    profileList() {
      return this.Profile.list;
    },
    errorCause() {
      return this.Profile.errorCause;
    },
    isSuccess() {
      return this.Profile.success; // Assuming you have a success property in your ProfileController
    },
    isLoading() {
      return this.Profile.loading;
    },
  },
  methods: {
    // logout() {
    //   removeNotif();
    //   this.loadingStatus = true;
    //   setTimeout(removeAuth(), 3500);
    //   localStorage.clear();
    //   window.location.reload();
    // },
    async changeProfile() {
      await this.updateProfile(
        this.profileList.avatar,
        this.profileList.name,
        this.profileList.phoneNumber,
        this.profileList.email,
      ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Mengubah Profile";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push('/profile');
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Mengubah Profile";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
      if (this.errorCause == "Validation error, \"phoneNumber\" is required") {
        this.errorMessage = "Mohon Isi No Telp Anda";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);      
      } 
      
    },
    dismissToastSuccess() {
      this.Profile.success = false; 
    },
    async handleFileUpload(event) {
  const file = event.target.files[0];
  let formData = new FormData();
  formData.append('image',file )
  formData.append('imageFolder', 'complaint');  
console.log("file", file.type);
  const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
  
  if (file && allowedFormats.includes(file.type)) {
    const imageUrl = URL.createObjectURL(file);
    this.avatar = imageUrl;
    const response = await this.Profile.uploadImageProfile(formData, 'complaint');
    console.log(response, "response");
    return response;
  } else {
    alert("Accepted file formats are: jpg, jpeg, png");
  }
},
    async getprofile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getprofile();
    },
    async updateProfile(avatar,name,phoneNumber,email) {
      return this.Profile.updateProfile(
        avatar,
        name,
        phoneNumber,
        email
       
      );
    },
  },
}
</script>
<style>
 .toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

.toast {
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 10px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  opacity: 0.9;
}

.toast-success {
  background-color: #2ecc71;
}
.toast-error {
  background-color: red;
}
</style>