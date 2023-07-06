<template>
    <div class="mt-24 flex flex-col items-center border-none mb-10">
      <div class="flex font-bold text-left">
        <p class="text-xl">Buat Keluhan</p>
      </div>
      <div>
        <component
  v-bind:is="steps[currentStep].component"
  @selected-role="handleSelectedRole"
  v-on:categorySelected="handleCategorySelected"
  @selected-title="handleSelectedTitle"
  @selected-body="handleSelectedBody"
  @handleFileUpload="handleSelectedAttachment"
  @selected-createdBy="handleSelectedCreatedBy"
></component>
      </div>
      <div class="toast-container"></div>
      <div class="flex justify-between p-2 mt-4 md:mt-6">
        <a
          href="#"
          v-if="currentStep !== 2"
          v-on:click="next"
          class="inline-flex w-full items-center mr-5 px-20 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Lanjut
        </a>
        <a
          href="#"
          v-else
          v-on:click="createComplaints"
          class="inline-flex w-full items-center mr-5 px-20 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Buat
        </a>
        <a
          href="#"
          v-on:click="previous"
          class="inline-flex w-full items-center ml-2 px-20 py-2 text-sm font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
        >
          Batal
        </a>
      </div>
    </div>
  </template>
<script>
import category from "../components/CreateComplaint/Kategori.vue"
import selectrole from "../components/CreateComplaint/SelectRole.vue"
import complaint from "../components/CreateComplaint/Complaint.vue"
import { ComplaintController } from "@/controller/ComplaintController.js"
export default {
  name: 'CreateComplaint',
  data(){
    return {
        category_id : "",
        lecturer_type: "",
        createdBy: "",
        title:"",
        body:"",
        attachmentImage: "", // Define attachmentImage as an array
        currentStep:0,
        steps: [
            {
                component : category
            },
            {
                component : selectrole
            },
            {
                component : complaint
            },
        ],
        complaint: new ComplaintController(false, false, ""),
    }
  },
  components: {
    category,
    selectrole,
    complaint,
  },
  methods:{
    handleCategorySelected(categoryId) {
      this.category_id = categoryId; // Assign the value to category_id
    },
    handleSelectedRole(roleId) {
      this.lecturer_type = roleId; // Update the selectedRole with the emitted role ID
    },
    handleSelectedTitle(title) {
      this.title = title;
    },
    handleSelectedBody(body) {
      this.body = body;
    },
    handleSelectedAttachment(attachmentImage) {
  this.attachmentImage = attachmentImage;
},
    handleSelectedCreatedBy(createdBy) {
      this.createdBy = createdBy;
    },
    createComplaints() {
      this.createComplaint(
        this.category_id,
        this.lecturer_type,
        this.createdBy,
        this.title,
        this.body,
        this.attachmentImage,
      )
        .then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Keluhan berhasil terbuat";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/");
          }, 2000);
        })
        .catch((error) => {
 if(this.category_id == ""){
            this.errorMessage = "Gagal Membuat Keluhan, Mohon Pilih Kategori Keluhan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          } 
          else if(this.lecturer_type == ""){
            this.errorMessage = "Gagal Membuat Keluhan, Mohon Pilih Divisi yang dituju";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          } 
          else if(this.title == ""){
            this.errorMessage = "Gagal Membuat Keluhan, Mohon Isi Judul Keluhan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          } 
          else if(this.body == ""){
            this.errorMessage = "Gagal Membuat Keluhan, Mohon Isi Keluhan yang disampaikan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else if(this.attachmentImage == ""){
            this.errorMessage = "Gagal Membuat Keluhan, Mohon Isi Gambar Keluhan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
           else {
            this.errorMessage = "Terjadi kesalahan saat Membuat Keluhan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
        });
    },
  createComplaint(category_id, lecturer_type, createdBy, title, body, attachmentImage) {
    return this.complaint.createComplaint(
      category_id,
      lecturer_type,
      createdBy,
      title,
      body,
      attachmentImage,
    );
  },
    next(){
        this.currentStep += 1;
    },
    previous(){
        this.currentStep -= 1;
    },
    
  }
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
    font-size: 14px;
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
