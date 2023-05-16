<template>
    <div class="text-left border-none w-[500px] p-4">
        
<ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium mx-4 text-center text-gray-500 bg-white dark:text-gray-400 sm:text-base dark:bg-gray-800 dark:border-gray-700 sm:p-1 mb-4 sm:space-x-4">
    <li class="flex items-center text-blue-600 dark:text-blue-500">
        <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 dark:border-blue-500">
            1
        </span>
        Kategori
        <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center">
        <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            2
        </span>
        Pilih <span class="hidden sm:inline-flex sm:ml-2">Role</span>
        <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center">
        <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 dark:border-gray-400">
            3
        </span>
                Isi Pengaduan

    </li>
</ol>

        <p class="font-bold text-md my-3"> Pilih Kategori Pengaduan </p>
        <p class="text-sm mb-5"> Pilih kategori pengaduan yang sesuai dengan konten pengaduan yang anda sampaikan </p>
        <div class="flex flex-col">
        <div class="text-sm flex flex-row justify-between mx-24 mb-3">
            <div class="">
                <img class="w-16 h-16 mb-3 rounded-full shadow-lg" :src="Logo" alt="Bonnie image"/>
                <p>Kategori 1 </p>
            </div>
            <div class="">
                <img class="w-16 h-16 mb-3 rounded-full shadow-lg" :src="Logo" alt="Bonnie image"/>
                <p>Kategori 2 </p>
            </div>
        </div>
        <div class="text-sm flex flex-row justify-between mx-24">
            <div>
                <img class="w-16 h-16 mb-3 rounded-full shadow-lg" :src="Logo" alt="Bonnie image"/>
                <p>Kategori 3 </p>
            </div>
            <div>
                <img class="w-16 h-16 mb-3 rounded-full shadow-lg" :src="Logo" alt="Bonnie image"/>
                <p>Lain Lain </p>
            </div>
        </div>
               <!-- <div class="flex justify-between p-2 mt-4 md:mt-6">
            <a href="#" class="inline-flex w-full items-center mr-5 px-20 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lanjut</a>
            <a href="#" class="inline-flex w-full items-center ml-2 px-20 py-2 text-sm font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Batal</a>
        </div> -->
        </div>
    </div>
</template>
<script>
import Logo from "@/assets/img/PENGADUAN.png";

export default {
  name: 'KetegoriKeluhan',
  props: {
    msg: String
  },
  data()
{
  return{
  Logo,
  }
}
}
</script>