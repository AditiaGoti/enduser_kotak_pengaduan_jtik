<template>
    <div class="h-[640px] bg-gradient-to-b from-blue-800 to-white to-100%">
      <div class="flex content-center items-center justify-center h-full">
        <div class="w-full lg:w-4/12 px-4">
          <div class="text-white mt-8 text-left px-5 mb-2 flex flex-row">
            <div>
          <img :src="vote" class="w-32 h-32"/>
            </div>
            <div>
                <p class="font-sans font-bold mt-16 text-2xl">KOTAK PENGADUAN JTIK</p>
            </div>
          </div>
                <hr class="mb-2"/>
          <p class="text-white font-bold text-lg mb-4">Reset Password</p>
          <div
            class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg shadow-gray-700 border-2 bg-blue-800 border-blue-500"
          >
            <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form class="text-left"> 
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-white text-md font-bold mb-2 mt-5"
                    htmlFor="grid-password"
                  >
                    NIP
                  </label>
                  <input
                  v-model="nip"
                  id="nim"
                    type="number"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Nip"
                  />
                </div>
                <div class="relative w-full mb-3">
                  <label
                    class="block uppercase text-white text-md font-bold mb-2 mt-5"
                    htmlFor="grid-password"
                  >
                    New Password
                  </label>
                    <input
                  v-model="newPassword"
                  v-if="showPassword"
                  id="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                  />
                  <input
                  v-model="newPassword"
                  v-else
                  id="password"
                    type="password"
                    class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Password"
                    @focus="focus"
                  />
                </div>
                <input
                  v-model="forgetPasswordToken"
                  id="password"
                    type="text"
                    class="hidden border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    placeholder="Nip"
                  />
  <div class="toast-container"></div>

                <div class="text-center mt-6">
            
                  <button
                  :onClick="ResetPasswordLecturer"
                    class="bg-white text-blue-800 active:bg-blueGray-600 text-md font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                    type="button"
                  >
                    Send
                  </button>
               
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  import vote from "@/assets/img/voting.png";
  import { AuthControllers } from "@/controller/AuthController.js";
import { ResetPasswordLecturer } from '@/api/Endpoint/Index';
  
  export default {
    data() {
      return {
        auth: new AuthControllers(false, false, ""),
        nip: "",
        newPassword:"",
        vote,
        errorMessage:""
      };
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
      buttonLabel() {
        return this.showPassword ? "Hide" : "Show";
      },
    },
    mounted(){
      console.log(this.$route.query.forgetPasswordToken,"token")
    },
    methods: {
      async doReset(nip,forgetPasswordToken,newPassword) {
        return this.auth.resetPassLecturer(
          nip,
          forgetPasswordToken,
          newPassword);
        },
      async ResetPasswordLecturer() {
        await this.doReset(
          this.nip,
          this.$route.query.forgetPasswordToken,
          this.newPassword)
        .then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Mengubah Password";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            this.$router.push("/loginlecturer");
          }, 2000);
        }) .catch((error) => {
             if(this.nip == "" && this.newPassword==""){
          this.errorMessage = "NIP dan Password Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       }
          else if(this.nip === ""){
          this.errorMessage = "NIP Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       }
          else if(this.newPassword === ""){
          this.errorMessage = "Password Tidak Boleh Kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       }
           else if (!/^(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9!@#$%^&*()+=._-]{8,}$/.test(this.newPassword)) {
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
        else if(this.errorCause === "Data tidak ditemukan!"){
          this.errorMessage = "NIP Tidak Terdaftar";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);
          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);       }

          else {
              this.errorMessage = "Terjadi Kesalahan, Reset Password Gagal";
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
      forgotPassAction() {
        this.forgotPasswordLecturer();
      },
      toggleShow() {
        if (this.showPassword === false) {
          this.showPassword = true;
        } else {
          this.showPassword = false;
        }
      },
    },
  };
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
  .toast-error {
  background-color: red;
}

  .toast-success {
    background-color: #2ecc71;
  }
</style>