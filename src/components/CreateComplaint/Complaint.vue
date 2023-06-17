<template>
        <div class="text-left border-none w-[500px] p-4">
           <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium mx-4 text-center text-gray-500 bg-white sm:text-base  sm:p-1 mb-4 sm:space-x-4">
    <li class="flex items-center">
        
      <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0">
            1
        </span>
        Kategori
        <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center">
               <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 ">
            2
        </span>
        Pilih <span class="hidden sm:inline-flex sm:ml-2">Role</span>
                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500">
     <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 ">
            3
        </span>
        Isi Pengaduan
    </li>
</ol>
            <p class="font-bold text-md my-3"> Sampaikan Keluhan Anda !! </p>
        <p class="mb-3">Silakan masukan judul keluhan anda dan isi dari keluhan anda</p>
<form class="text-left">
  <div class="mb-6">
    <label for="judul" class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Judul Keluhan</label>
    <input type="text" v-model="title" @change="emitCreateComplaint" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="masukan judul disini" required>
  </div>
  <div class="mb-6">   
<label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-blacke">Isi Keluhan</label>
<textarea v-model="body" rows="4" @change="emitCreateComplaint" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukan isi keluhan"></textarea>
  </div>
  <div class="mb-6">
    <label  class="block mb-2 text-sm font-medium text-gray-900 dark:text-black">Foto</label>
    <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="attachmentImage" alt="Bonnie image"/>
    <input type="file" class="text-left" @change="handleFileUpload" accept="image/*">
  </div>
  <div class="mb-3">
  <label class="relative inline-flex items-center mb-4 cursor-pointer">
  <input type="checkbox" v-model="createdBy" @change="emitCreateComplaint" class="sr-only peer">
  <div class="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
  <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">Send As Anonym ?</span>
</label>
  </div>
</form>
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
  data() {
    return {
      Logo,
      complaint: new ComplaintController(false, false, ""),
      Profile: new ProfileController(false, false, ""),
      title: "",
      body: "",
      file: null,
      base64: '',
      attachmentImage:"",
      imageFolder:'complaint',
      createdBy: ""
    }
  },
  created() {
    this.profile();
  },
  computed: {
    profileList() {
      return this.Profile.lists;
    },
    createdBy: {
      get() {
        return this.createdBy;
      },
      set(value) {
        this.createdBy = value ? "anonym" : this.profileList.name;
      }
    }
  },
  methods: {
   
    async handleFileUpload(event) {
  const file = event.target.files[0];
  console.log("file", file.type);
  const allowedFormats = ["image/jpeg", "image/jpg", "image/png"];
  
  if (file && allowedFormats.includes(file.type)) {
    const imageUrl = URL.createObjectURL(file); // Convert File object to a data URL
    this.attachmentImage = imageUrl;

    const response = await this.complaint.uploadImageComplaint(
      this.attachmentImage,
      this.imageFolder
    );

    console.log(response, "response");
    return response;
  } else {
    alert("Accepted file formats are: jpg, jpeg, png");
  }
},

    emitCreateComplaint() {
      // Emit the necessary data
      this.$emit('selected-title', this.title);
      this.$emit('selected-body', this.body);
      this.$emit('handleFileUpload', this.attachmentImage);
      this.$emit('selected-createdBy', this.createdBy);
      this.$emit("selected-attachment", this.attachmentImage);
    },
    async getprofile() {
      return this.Profile.getProfile();
    },
    async profile() {
      await this.getprofile();
    }
  }
};
</script>