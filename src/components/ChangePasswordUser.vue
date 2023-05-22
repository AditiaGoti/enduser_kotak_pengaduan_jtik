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
    <input type="password" id="passwordLama" placeholder="Input Password Lama" class="placeholder-blueGray-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
    </div>
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
    <input type="password" id="passwordBaru" placeholder="Input Password Baru" class="placeholder-blueGray-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
  <div class="mb-6 mx-2">
    <label for="password" class="block mb-2 text-sm font-bold text-gray-900 dark:text-white text-left">Password Baru</label>
    <input type="password" id="passwordReBaru" placeholder="Input Password Baru" class="placeholder-blueGray-300 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
  </div>
</form>
        <div class="flex mt-4 space-x-3 md:mt-6 mx-2">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ganti Password</a>
            <router-link to="/">
            <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Kembali</a>
            </router-link>
        </div>
    </div>
</div>
  </div>
</template>
<script>

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data()
{
  return{
  
  }
},
methods: {
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
