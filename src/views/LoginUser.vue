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
        <p class="text-white font-bold text-lg mb-4">SIGN IN TO YOUR ACCOUNT</p>
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
                  Nim
                </label>
                <input
                v-model="nim"
                id="nim"
                  type="number"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Nim"
                  @focus="focus"
              @keyup.enter="loginAction"
              :class="{
                 'mb-4': !errorMsg.nim,
                'outline-blue-input': !errorMsg.nim,
                'outline-red-star': errorMsg.nim,
              }"
                />
              </div>
              <p v-if="errorMsg.nim" class="text-red-star mb-2">
            {{ errorMsg.nim }}
          </p>
              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-white text-md font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                v-model="password"
                v-if="showPassword"
                id="password"
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  @focus="focus"
              @keyup.enter="loginAction"
              :class="{
                'outline-blue-input': !errorMsg.password,
                'outline-red-star': errorMsg.password,
              }"
                />
                <input
                v-model="password"
                v-else
                id="password"
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                  @focus="focus"
              @keyup.enter="loginAction"
              :class="{
                'outline-blue-input': !errorMsg.password,
                'outline-red-star': errorMsg.password,
              }"
                />
              </div>
              <p v-if="errorMsg.password" class="text-red-star mx-[30px] mb-4">
          {{ errorMsg.password }}
        </p>
              <div class="flex flex-row justify-between">
                <div class="relative bottom-1">
            <router-link to="/resetpassword">
            <a  class=" font-semibold text-white">
              <small>Forgot password?</small>
            </a>
            </router-link>
        </div>
              </div>
              <div class="toast-container"></div>
              <div class="text-center mt-6">
          
                <button
                :onClick="loginAction"
                  class="bg-white text-blue-800 active:bg-blueGray-600 text-md font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  Sign In
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
// import { setModal, removeOnboarding } from "@/Utils/cookies";

export default {
  data() {
    return {
      auth: new AuthControllers(false, false, ""),
      showPassword: false,
      nim: "",
      password: "",
      vote,
      validate: {
        emptyNim: false,
        emptyPassword: false,
        nim: false,
        password: false,
      },
      errorMsg: {
        nim: "",
        password: "",
      },
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
  watch: {
    nim(value) {
      // binding this to the data value in the email input
      this.nim = value;
      this.validatenim(value);
    },
    password(value) {
      this.password = value;
      this.validatePassword(value);
    },
  },
  methods: {
    async doLogin(nim, password) {
      return this.auth.signInStudent(nim, password);
      },
      createToast(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.innerHTML = message;

    const toastContainer = document.querySelector('.toast-container');
    toastContainer.appendChild(toast);

    setTimeout(() => {
      toastContainer.removeChild(toast);
    }, 2000);
  },
    async LoginStudent() {
      await this.doLogin(this.nim, this.password)
      .then(response => {
        localStorage.setItem('kpjtik_access_token', response.data.data.accessToken)
        localStorage.setItem('kpjtik_acc_name', response.data.data.name)
        localStorage.setItem('kpjtik_id', response.data.data._id)
        localStorage.setItem('kpjtik_email', response.data.data.email)
        localStorage.setItem('kpjtik_nim', response.data.data.nim)
      });
      if (!this.isError) {
        this.$router.push("/");
        this.createToast('Berita berhasil terbuat', 'success');
        // this.$store.dispatch("pin/getPin");
      } else if (this.errorCause == "user not found") {
        this.errorMsg.nim = "Nim Belum Terdaftar";
        this.errorMsg.password = "Password salah. Silahkan coba lagi";
      } else if (this.errorCause == "Not a valid Nim") {
        this.errorMsg.nim = "Nim tidak boleh kosong";
        if (this.password == "") {
          this.errorMsg.password = "Password tidak boleh kosong";
        } else {
          this.errorMsg.password = "";
        }
      } else if (
        this.errorCause == "password invalid" ||
        this.errorCause == "Not a valid password"
      ) {
        if (this.password == "") {
          this.errorMsg.password = "Password tidak boleh kosong";
        } else {
          this.errorMsg.password = "Password salah. Silahkan coba lagi";
        }
      }
    },
    loginAction() {
      this.LoginStudent();
    },
    validatenim(nim) {
      // if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      //   this.errorMsg.email = "";
      // } else {
      //   this.errorMsg.email = "Email tidak Valid";
      // }
      if (nim == "") {
        this.errorMsg.email = "Email tidak boleh Kosong";
      }
    },
    validatePassword(password) {
      // if (/^(?=.*?[0-9])[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g.test(password)) {
      //   this.errorMsg.password = "";
      // } else {
      //   this.errorMsg.password =
      //     "Password minimal 8 karakter kombinasi huruf dan angka";
      // }
      if (password == "") {
        this.errorMsg.password = "Password tidak boleh Kosong";
      }
    },
    focus() {
      this.validate.empty = false;
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

  .toast-success {
    background-color: #2ecc71;
  }
</style>
