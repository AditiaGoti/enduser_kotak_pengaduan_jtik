<template>
    <div class="text-left border-none w-[500px] p-4">
        <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium mx-4 text-center text-gray-500 sm:text-base sm:p-1 mb-4 sm:space-x-4">
            <!-- Step 1 -->
            <li class="flex items-center text-blue-600 dark:text-blue-500">
                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0 ">
                    1
                </span>
                Kategori
                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </li>
            <!-- Step 2 -->
            <li class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0">
                    2
                </span>
                Pilih <span class="hidden sm:inline-flex sm:ml-2">Role</span>
                <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
            </li>
            <!-- Step 3 -->
            <li class="flex items-center">
                <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0 ">
                    3
                </span>
                Isi Pengaduan
            </li>
        </ol>
        
        <p class="font-bold text-md my-3"> Pilih Kategori Pengaduan </p>
        <p class="text-sm mb-5"> Pilih kategori pengaduan yang sesuai dengan konten pengaduan yang anda sampaikan </p>
        
        <div class="flex flex-col">
            <div class="text-sm flex flex-row justify-between mx-24 mb-3">
                <div :class="{'image-selected': selectedCategory === 1, 'click-selected': clickedCategory === 1}" class="cursor-pointer" id="1" @click="handleCategoryClick(1)">
    <img class="w-16 h-16 mb-3 rounded-full shadow-lg border-4 outline hover:outline-2 hover:outline-blue-800 rounded-full" :src="Logo" alt="Bonnie image"/>
    <p>Akademik</p>
                </div>
                <div :class="{'image-selected': selectedCategory === 2}" class="cursor-pointer ml-36" id="2" @click="handleCategoryClick(2)">
                    <img class="w-16 h-16 mb-3 rounded-full border-4 outline hover:outline-2 hover:outline-blue-800 shadow-lg" :src="Logo" alt="Bonnie image"/>
                    <p>Fasilitas / Layanan</p>
                </div>
            </div>
            
            <div class="text-sm flex flex-row justify-between mx-24">
                <div :class="{'image-selected': selectedCategory === 3}" class="cursor-pointer" id="3" @click="handleCategoryClick(3)">
                    <img class="w-16 h-16 mb-3 rounded-full border-4 outline hover:outline-2 hover:outline-blue-800 shadow-lg" :src="Logo" alt="Bonnie image"/>
                    <p>Kemahasiswaan</p>
                </div>
                <div :class="{'image-selected': selectedCategory === 4}" class="cursor-pointer" id="4" @click="handleCategoryClick(4)">
                    <img class="w-16 h-16 mb-3 rounded-full border-4 outline hover:outline-2 hover:outline-blue-800 shadow-lg" :src="Logo" alt="Bonnie image"/>
                    <p>Keuangan</p>
                </div>
            </div>
            
            <div class="text-sm flex flex-row justify-between mx-24 mb-3">
                <div :class="{'image-selected': selectedCategory === 5}" class="cursor-pointer mt-4" id="5" @click="handleCategoryClick(5)">
                    <img class="w-16 h-16 mb-3 rounded-full border-4 outline hover:outline-2 hover:outline-blue-800 shadow-lg" :src="Logo" alt="Bonnie image"/>
                    <p>Lain Lain</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.image-selected {
  border: 2px solid blue;
}
.click-selected {
  outline-color: red; /* Change to the desired color */
}

</style>

<script>
import Logo from "@/assets/img/PENGADUAN.png";

export default {
  name: 'KetegoriKeluhan',
  props: ['selectedCategory'],
  data()
{
  return{
  Logo,
  }
},
methods: {
    handleCategoryClick(categoryId) {
      this.$emit('categorySelected', categoryId); // Mengirim nilai sebagai event dengan nama 'categorySelected'
    },
    },
}
</script>