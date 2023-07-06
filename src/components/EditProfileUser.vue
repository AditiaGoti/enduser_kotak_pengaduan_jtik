<template>
  <div class="mt-24 flex flex-col items-center border-none mb-10">
<div class="w-fit  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
  <div v-if="profileList.lecturer_type > 0">
  <img class="w-24 h-24 mb-3 rounded-full ml-24 shadow-lg" :src="profileLecturer.avatar"/>
  <input type="file" class="text-left" @change="handleFileUpload" accept="image/*">
  </div>
  <div v-else>
  <img class="w-24 h-24 mb-3 rounded-full ml-24 shadow-lg" :src="profileList.avatar"/>
  <input type="file" class="text-left" @change="handleFileUpload" accept="image/*">
  </div>
  <form class="item-start">
  <div class="flex flex-row">
  <div class="mb-6 mx-2">
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Nama</label>
    <div v-if="profileList.lecturer_type > 0">
    <input type="text"
    v-model="profileLecturer.name"
     class="bg-gray-50 capitalize border 
     border-gray-300 text-gray-900 
     text-sm rounded-lg focus:ring-blue-500 
     focus:border-blue-500 block w-full p-2.5 
     dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500" 
  >
    </div>
    <div v-else>
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
  </div>
  <div class="mb-6 mr-2">
  <div v-if="profileList.lecturer_type > 0">
  <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">NIP</label>
  <input type="number"
    v-model="profileLecturer.nip"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
  </div>
  <div v-else>
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">NIM</label>
  <input type="number"
    v-model="profileList.nim"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
  >
  </div>
</div>

  </div>
  <div class="flex flex-row">
  <div class="mb-6 mx-2">
    <div v-if="profileList.lecturer_type > 0">
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Divisi</label>
    <input type="text"
     v-model="profileLecturer.lecturerType.LT_name"
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>
  <div v-else>
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Jurusan</label>
    <input type="text"
     v-model="profileList.major "
    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm 
    rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full 
    p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 
    dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>
    </div>
  <div class="mb-6 mr-2">
    <label for="text" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">No.Telpon</label>
    <div v-if="profileList.lecturer_type > 0">
    <input type="text" 
    v-model="profileLecturer.phoneNumber"
    class="bg-gray-50 border border-gray-300 
    text-gray-900 text-sm rounded-lg 
    focus:ring-blue-500 focus:border-blue-500 
    block w-full p-2.5 dark:bg-gray-700 
    dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
    dark:focus:ring-blue-500 dark:focus:border-blue-500">
    </div>
    <div v-else>
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
  </div>
  <div class="mb-6 mx-2">
    <label for="email" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Email</label>
    <div v-if="profileList.lecturer_type > 0">
    <input type="email" 
    v-model="profileLecturer.email"
    class="bg-gray-50 border border-gray-300 text-gray-900
     text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>
  <div v-else>
    <input type="email" 
    v-model="profileList.email"
    class="bg-gray-50 border border-gray-300 text-gray-900
     text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 
     block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
     dark:placeholder-gray-400 dark:text-white
      dark:focus:ring-blue-500 dark:focus:border-blue-500">
  </div>
  </div>
</form>
<div class="toast-container"></div>
        <div v-if="profileList.lecturer_type > 0">
        <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" :onClick="ChangeProfileLecturer" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</a>
          <router-link to="/gantipassword"> 
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ganti Password</a>
          </router-link>
        </div>
        </div>
        <div v-else>
          <div class="flex mt-4 space-x-3 md:mt-6">
            <a href="#" :onClick="changeProfile" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Edit Profile</a>
          <router-link to="/gantipassword"> 
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Ganti Password</a>
          </router-link>
        </div>
        </div>
    </div>
</div>
  </div>
</template>
<script>
import Logo from "@/assets/img/PENGADUAN.png";

import { ProfileController } from "@/controller/ProfileController.js";
import { ComplaintController } from "@/controller/ComplaintController.js";
import { ChangeProfileLecturer } from '@/api/Endpoint/Index';

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
  Profile: new ProfileController(false, false, ""),
  complaint: new ComplaintController(false, false, ""),

  }
},
created() {
  this.profile();
  this.ProfileLecturer();
  this.profileList.avatar = this.profileList.avatar || ''; // Assign value to profileList.avatar
  this.profileList.name = this.profileList.name || ''; // Assign value to profileList.name
  this.profileList.phoneNumber = this.profileList.phoneNumber || ''; // Assign value to profileList.phoneNumber
  this.profileList.email = this.profileList.email || ''; // Assign value to profileList.email
  this.profileLecturer.avatar = this.profileLecturer.avatar || ''; // Assign value to profileList.avatar
  this.profileLecturer.name = this.profileLecturer.name || ''; // Assign value to profileList.name
  this.profileLecturer.phoneNumber = this.profileLecturer.phoneNumber || ''; // Assign value to profileList.phoneNumber
  this.profileLecturer.email = this.profileLecturer.email || ''; // Assign value to profileList.email
  },
  computed: {
    isError() {
      return this.Profile.error;
    },
    profileList() {
      return this.Profile.list;
    },
    profileLecturer(){
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
    async handleFileUpload(event) {
  let formData = new FormData();
  this.file = event.target.files[0];
  formData.append('image', this.file);
  formData.append('imageFolder', 'student');
  const responseUploadImage = await this.Profile.uploadImageProfile({data : formData});
  this.setAvatar(responseUploadImage.data.data)
  console.log(responseUploadImage.data.data)
  return responseUploadImage
// const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
  
//   if (file && allowedFormats.includes(file.type)) {
//     const imageUrl = URL.createObjectURL(file); // Convert File object to a data URL
//     this.avatar = imageUrl;

//     const response = await this.lecturer.uploadImage(
//       this.avatar,
//       this.imageFolder
//     );

    // console.log(response, "response");
    // return response;
  // } else {
  //   alert("Accepted file formats are: jpg, jpeg, png");
  // }
},
setAvatar(data){
  this.profileList.avatar = data
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
    async getProfileLecturer() {
      return this.Profile.getProfileLecturer();
    },
    async ProfileLecturer() {
      await this.getProfileLecturer();
    },
    async ChangeProfileLecturer() {
      await this.updateProfileLecturer(
        this.profileLecturer.avatar,
        this.profileLecturer.name,
        this.profileLecturer.phoneNumber,
        this.profileLecturer.email,
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
      async handleFileUploadLecturer(event) {
  let formData = new FormData();
  this.file = event.target.files[0];
  formData.append('image', this.file);
  formData.append('imageFolder', 'lecturer');
  const responseUploadImage = await this.Profile.uploadImageProfileLecturer({data : formData});
  this.setAvatar(responseUploadImage.data.data)
  console.log(responseUploadImage.data.data)
  return responseUploadImage
// const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
  
//   if (file && allowedFormats.includes(file.type)) {
//     const imageUrl = URL.createObjectURL(file); // Convert File object to a data URL
//     this.avatar = imageUrl;

//     const response = await this.lecturer.uploadImage(
//       this.avatar,
//       this.imageFolder
//     );

    // console.log(response, "response");
    // return response;
  // } else {
  //   alert("Accepted file formats are: jpg, jpeg, png");
  // }
},
setAvatar(data){
  this.profileLecturer.avatar = data
},
    async updateProfileLecturer(avatar,name,phoneNumber,email) {
      return this.Profile.updateProfileLecturer(
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