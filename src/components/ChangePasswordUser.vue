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
     placeholder="Input Password Lama"
     class="placeholder-blueGray-300 bg-gray-50 border border-gray-300 text-gray-900 
     text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
     dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white 
     dark:focus:ring-blue-500 dark:focus:border-blue-500" 
     :class="{
                  'mb-4 text-left': !errorMsg.passwordOld,
                  'inp-noerror text-left': !errorMsg.passwordOld,
                  'inp-error text-left': errorMsg.passwordOld,
                }"
     required>
    </div>
    <p v-if="errorMsg.passwordOld" class="text-red-star mb-4">
              {{ errorMsg.passwordOld }}
            </p>
    <!-- <div>
          <div
              class="
                absolute
                flex
                items-center
                text-base
                cursor-pointer
              "
            >
              <span class="bg-grey-darker"
                ><i
                  class="fa-lg fa-regular"
                  :class="{
                    'fa-eye-slash': !showPassword,
                    'fa-eye': showPassword,
                  }"
                  @click="toggleShow"
                ></i
              ></span>
            </div>
    </div> -->
</div>
  <div class="mb-6 mx-2">
    <label for="password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Password Baru</label>
    <input type="password"  v-model="passwordNew"
     placeholder="Input Password Baru"
      class="placeholder-blueGray-300 bg-gray-50 border 
      border-gray-300 text-gray-900 text-sm rounded-lg 
      focus:ring-blue-500 focus:border-blue-500 block 
      w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
      dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      :class="{
                  'mb-4': !errorMsg.passwordNew,
                  'inp-noerror': !errorMsg.passwordNew,
                  'inp-error': errorMsg.passwordNew,
                }"
      required>
  </div>
  <p v-if="errorMsg.passwordNew" class="text-red-star mb-4">
              {{ errorMsg.passwordNew }}
            </p>
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
      // showPassword: false,
      // showPassword1: false,
      // showPassword2: false,
      passwordOld: "",
      passwordNew: "",
      errorMsg: {
        passwordOld: "",
        passwordNew: "",
      },
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
  watch: {
    passwordOld(value) {
      this.passwordOld = value;
      this.validatePasswordOld(value);
    },
    passwordNew(value) {
      this.passwordNew = value;
      this.validatePasswordNew(value);
    },
  },
methods: {
  validatePasswordOld(pwOld) {
      if (/^(?=.*?[0-9])[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g.test(pwOld)) {
        this.errorMsg.passwordOld = "";
      } else {
        this.errorMsg.passwordOld =
          "Password minimal 8 karakter kombinasi huruf besar dan angka";
      }
      if (pwOld == "") {
        this.errorMsg.passwordOld = "Password tidak boleh Kosong";
      }
    },
    validatePasswordNew(pwNew) {
      if (/^(?=.*?[0-9])[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]{8,}$/g.test(pwNew)) {
        this.errorMsg.passwordNew = "";
      } else {
        this.errorMsg.passwordNew =
          "Password minimal 8 karakter kombinasi huruf besar dan angka";
      }
      if (pwNew == "") {
        this.errorMsg.passwordNew = "Password tidak boleh Kosong";
      }
    },
    async changePass() {
      await this.ChangePass(
        this.passwordOld,
        this.passwordNew,
      );
      if (!this.isError) {
        this.$router.push("/profile");
      } else if (this.errorCause == "password is incorrect") {
        this.errorMsg.passwordOld = "Password Salah";
      } else if (this.errorCause == "Not a valid currentPassword") {
        this.errorMsg.passwordOld = "Password tidak boleh Kosong";
        // validate(this.passwordNew, this.errorMsg.passwordNew);
        // validate(this.passwordConfirm, this.errorMsg.passwordConfirm);
        if (this.passwordNew == "") {
          this.errorMsg.passwordNew = "Password tidak boleh Kosong";
        }
      } else if (this.errorCause == "Not a valid newPassword") {
        this.errorMsg.passwordNew = "Password tidak boleh Kosong";
        if (this.passwordOld == "") {
          this.errorMsg.passwordOld = "Password tidak boleh Kosong";
        }
      }
    },
    async ChangePass(oldPassword, newPassword) {
      return this.auth.changePassStudent(
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
