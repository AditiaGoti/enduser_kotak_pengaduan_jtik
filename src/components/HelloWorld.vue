<template>
  <div class="hello mt-24">
  <div class="text-left mx-32 mb-5">
    
<h1 class="mb-4 text-2xl font-extrabold text-gray-900 dark:text-white md:text-2xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400 mr-5">KOTAK PENGADUAN</span>JTIK</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>

  </div>
  <div class="flex flex-row">
  <div class="flex flex-col">
<div id="default-carousel" class="relative ml-32 mr-10 w-[700px] border-8 mb-3" data-carousel="slide">
    <!-- Carousel wrapper -->
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         <!-- Item 1 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img :src="Logo" class="absolute block w-full  z-10 top-0 -translate-x-1/2 -translate-y-1/2 bottom-0 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 2 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img :src="Logo" class="absolute block w-full  z-10 top-0 -translate-x-1/2 -translate-y-1/2 bottom-0 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 3 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img :src="Logo"  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
        <!-- Item 4 -->
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img :src="Logo"  class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>
    </div>
    <!-- Slider indicators -->
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    <!-- Slider controls -->
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
<div class="ml-32 mb-4 border-8 w-[700px]">
  <div class="flex flex-row ">
      <img
      :src="logo"
      class="w-64 h-48 m-4"
      />
      <div class="flex flex-col">
      <p class="text-left mt-3">
        Judul Keluhan
        </p>
        <p class="text-left">
        Isi keluhan 
        </p>
        <p class="text-left">
        Kepada siapa keluhan ditunjukan 
        </p>
         <p class="text-left">
          Tanggal Pembuatan
        </p>
      </div>
  </div>
    </div>
   <div class="ml-32 mb-4 border-8 w-[700px]">
  <div class="flex flex-row ">
      <img
      :src="logo"
      class="w-64 h-48 m-4"
      />
      <div class="flex flex-col">
      <p class="text-left mt-3">
        Judul Keluhan
        </p>
        <p class="text-left">
        Isi keluhan 
        </p>
        <p class="text-left">
        Kepada siapa keluhan ditunjukan 
        </p>
         <p class="text-left">
          Tanggal Pembuatan
        </p>
      </div>
  </div>
    </div>
   
  </div>
  <div class="flex flex-col">
    <div class="border-8 w-64 h-48 mb-4">
      <img
      :src="logo"
      />
    </div>
     <div class="border-8 w-64 h-48 mb-4">
      <img
      :src="logo"
      />
    </div>
     <div class="border-8 w-64 h-48 mb-4">
      <img
      :src="logo"
      />
    </div>
    <div class="border-8 w-64 h-48">
      <img
      :src="logo"
      />
    </div>
  </div>
  </div>
  </div>
</template>

<script>
import Logo from "@/assets/img/PENGADUAN.png";

export default {
  name: 'HelloWorld',
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
