<template>
  <div class="h-[640px] bg-gradient-to-b from-emerald-600 to-white to-100%">
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
          class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg shadow-gray-700 border-2 bg-emerald-600 border-emerald-500"
        >
          <div class="flex-auto px-4 lg:px-10 py-10 pt-0">
            <form class="text-left"> 
              <div class="relative w-full mb-3 pt-8">
                <label
                  class="block uppercase text-white text-md font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Email
                </label>
                <input
                  type="email"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-red-600 bg-white rounded text-sm shadow focus:outline-emerald-900 focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Email"
                />
              </div>

              <div class="relative w-full mb-3">
                <label
                  class="block uppercase text-white text-md font-bold mb-2"
                  htmlFor="grid-password"
                >
                  Password
                </label>
                <input
                  type="password"
                  class="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                  placeholder="Password"
                />
              </div>
              <div class="flex flex-row justify-between">
                <div>
                <label class="inline-flex items-center cursor-pointer">
                  <input
                    id="customCheckLogin"
                    type="checkbox"
                    class="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                  />
                  <span class="ml-2 text-sm font-semibold text-white">
                    Remember me
                  </span>
                </label>
                </div>
                <div class="relative bottom-1">
            <router-link to="/resetpassword">
            <a  class=" font-semibold text-white">
              <small>Forgot password?</small>
            </a>
            </router-link>
        </div>
              </div>

              <div class="text-center mt-6">
                <router-link to="/">
                <button
                  class="bg-white text-emerald-600 active:bg-blueGray-600 text-md font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                  type="button"
                >
                  Sign In
                </button>
                </router-link>
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


export default {
  data() {
    return {
      vote,
    };
  },
};
</script>
