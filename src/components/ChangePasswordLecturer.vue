<template>
  <div class="mt-24 flex flex-col items-center border-none mb-10">
<div class="w-[350px]  p-3 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <div class="flex justify-end px-4 pt-4">
    </div>
    <div class="flex flex-col items-center pb-10">
<p class="font-bold text-lg mb-3"> Ganti Password </p>
<form class="w-full">
  <div class="mb-6 mx-2">
    <div>
    <label for="password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Password Lama</label>
    <input type="password" 
    v-model="passwordOld"
    v-if="showPassword"
     placeholder="Input Password Lama"
     class="placeholder-blueGray-300 bg-gray-50 border border-gray-300 text-gray-900 
     text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
     dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     required>
         <input type="password" 
    v-model="passwordOld"
    v-else
     placeholder="Input Password Lama"
     class="placeholder-blueGray-300 bg-gray-50 border border-gray-300 text-gray-900 
     text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
     dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     required>
    </div>
</div>
  <div class="mb-6 mx-2">
    <label for="password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Password Baru</label>
    <input type="password"  v-model="passwordNew"
     placeholder="Input Password Baru"
     v-if="showPassword"
      class="placeholder-blueGray-300 bg-gray-50 border 
      border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-blue-500 focus:border-blue-500 block 
      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required>
      <input type="password"  
      v-model="passwordNew"
      v-else
      placeholder="Input Password Baru"
      class="placeholder-blueGray-300 bg-gray-50 border 
      border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-blue-500 focus:border-blue-500 block 
      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required>
      
  </div>
            <div class="toast-container"></div>

</form>
        <div class="flex mt-4 space-x-3 md:mt-6 mx-2">
            <button :onClick="changePass" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ganti Password</button>
            <router-link to="/">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Kembali</a>
            </router-link>
        </div>
    </div>
</div>
  </div>
</template>
<script>
import { AuthControllers } from "@/controller/AuthController.js";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
{
  return{
    auth: new AuthControllers(false, false, ""),
      showPassword: false,
      errorMessage:"",
      passwordOld: "",
      passwordNew: "",
  }
},
computed: {
  
    isError() {
      return this.auth.error;
    },

    errorCause() {
      return this.auth.errorCause;
    },

    isLoading() {
      return this.auth.loading;
    },
  },
methods: {
    async changePass() {
      await this.ChangePass(
        this.passwordOld,
        this.passwordNew,
      ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Password berhasil diubah";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/profile");
          }, 2000);
        })
        .catch((error) => {
          if(this.passwordOld == ""){
            this.errorMessage = "Tolong Masukan Password yang lama ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          
          }
        else if (!/^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()+=._-]{8,}$/.test(this.passwordOld)) {
        this.errorMessage = "Password Harus terdiri dari 1 huruf besar dan minimal 8 karakter";
        const toast = document.createElement("div");
        toast.className = "toast toast-error";
        toast.innerHTML = this.errorMessage;
        const toastContainer = document.querySelector(".toast-container");
        toastContainer.appendChild(toast);

        setTimeout(() => {
          toastContainer.removeChild(toast);
        }, 2000);
      }
          else if(this.passwordNew == ""){
            this.errorMessage = "Tolong Masukan Password yang Baru ";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
      else if (!/^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()+=._-]{8,}$/.test(this.passwordNew)) {
        this.errorMessage = "Password Harus terdiri dari 1 huruf besar dan minimal 8 karakter";
        const toast = document.createElement("div");
        toast.className = "toast toast-error";
        toast.innerHTML = this.errorMessage;
        const toastContainer = document.querySelector(".toast-container");
        toastContainer.appendChild(toast);

        setTimeout(() => {
          toastContainer.removeChild(toast);
        }, 2000);
      }
       else if (this.errorCause == "Password lama tidak sesuai!") {
        this.errorMessage = "Password lama tidak sesuai!";
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
            this.errorMessage = "Terjadi kesalahan saat Mengganti Password";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }});
    },
    async ChangePass(oldPassword, newPassword) {
      return this.auth.changePassLecturer(
        oldPassword,
        newPassword,
      );
    },
    toggleShow() {
      if (this.showPassword === false) {
        this.showPassword = true;
      } else {
        this.showPassword = false;
      }
    }
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
