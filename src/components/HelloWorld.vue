<template>
  <div class="hello mt-16">
  <div class="text-left mb-5 bg-emerald-600 rounded shadow py-6">
    <div class="ml-36">
<h1 class="mb-4 text-2xl font-extrabold text-gray-900 text-white md:text-2xl lg:text-4xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-400 mr-2">KOTAK PENGADUAN</span>JTIK</h1>
<p class="text-lg font-normal text-white lg:text-xl dark:text-gray-400 w-[500px]">Dengan Kotak Pengaduan JTIK, pengaduan Anda dapat langsung dibaca dan ditanggapi oleh role yang ditunjukan.</p>
               <button
              class="bg-white text-emerald-600 active:bg-emerald-800 text-xs font-bold uppercase px-4 py-2 my-3 rounded shadow hover:shadow-lg outline-none focus:outline-none lg:mr-1 lg:mb-0 mb-3 ease-linear transition-all duration-150"
              type="button"
            >
              <i class="fas fa-arrow-alt-circle-down"></i> Buat Keluhan
            </button>
    </div>
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
<p class="font-bold text-2xl mb-2 underline decoration-2 text-left ml-32 "> Keluhan Pengguna </p>
 <router-link
        to="/detail"
        >
<div class="ml-32 mb-4 border-none w-[700px]">
  <div class="flex flex-row ">
      <img
      :src="Logo"
      class="w-64 h-48 m-4"
      />
      <div class="flex flex-col py-3">
      <p class="text-left font-bold text-lg mt-3 mb-1">Staff Akademik </p>
      <p class="text-left  font-bold text-xl">
        Susah Menyampaikan Pendapat
        </p>
        <p class="text-justify mr-2 text-md mt-1 break-words whitespace-normal mb-1">Lorem ipsum dolor sit amet, 
                          consectetur adipiscing elit. Faucibus velit, adipiscing senectus
                           eget semper id. Pretium venenatis ridiculus ornare nec a, arcu aenean. 
                            at scelerisque porta etiam consectetur varius. Arcu, quis sed dictum libero. 
                             </p>
        <div class="flex flex-row">
         <p class="text-left text-sm mr-3">
          13-04-2023
        </p>
        <p class="text-left font-semibold text-sm">
        Akademik 
        </p>
        <div class="flex justify-end">
          <router-link
        to="/detail"
        >
        <a href="#" class="inline-flex items-center ml-36 px-3 text-white font-bold py-2 text-sm font-medium text-center font-bold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
          </router-link>
        </div>
        </div>
      </div>
  </div>
    </div>
 </router-link>
    <hr class="ml-32 font-bold w-[700px] mb-3" />
    <div class="ml-32 mb-4 border-none w-[700px]">
      <router-link
        to="/detail"
        >
  <div class="flex flex-row ">
      <img
      :src="Logo"
      class="w-64 h-48 m-4"
      />
      <div class="flex flex-col py-3">
      <p class="text-left font-bold text-lg mt-3 mb-1">Staff Akademik </p>
      <p class="text-left  font-bold text-xl">
        Susah Menyampaikan Pendapat
        </p>
        <p class="text-justify mr-2 text-md mt-1 break-words whitespace-normal mb-1">Lorem ipsum dolor sit amet, 
                          consectetur adipiscing elit. Faucibus velit, adipiscing senectus
                           eget semper id. Pretium venenatis ridiculus ornare nec a, arcu aenean. 
                            at scelerisque porta etiam consectetur varius. Arcu, quis sed dictum libero. 
                             </p>
        <div class="flex flex-row">
         <p class="text-left text-sm mr-3">
          13-04-2023
        </p>
        <p class="text-left font-semibold text-sm">
        Akademik 
        </p>
        <div class="flex justify-end">
         <router-link
        to="/detail"
        > 
        <a href="#" class="inline-flex items-center ml-36 px-3 text-white font-bold py-2 text-sm font-medium text-center font-bold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
         </router-link>
        </div>
        </div>
      </div>
  </div>
      </router-link>
    </div>
    <hr class="ml-32 font-bold w-[700px] mb-3" />
  </div>
  <div class="flex flex-col">
    <div class="border-none flex justify-center w-96 h-46">
      <router-link to="/detailtanggapan">
      <div class="flex flex-row">
        <div>
      <img
      :src="Logo"
      class="object-fill w-96 item-center"
      />
        </div>
        <div class="text-left w-full mt-5">
            <p class="font-bold text-md mb-2"> Susah Menyampaikan Pendapat </p>
            <p> Susah Menyampaikan Pendapat </p>
        </div>
      </div>
      </router-link>
    </div>
    <hr class="my-2 font-bold"/>
       <div class="border-none flex justify-center w-96 h-46 hover:bg-gray-200 z-10">
        <router-link to="/detailtanggapan">
      <div class="flex flex-row">
        <div>
      <img
      :src="Logo"
      class="object-fill w-96 item-center"
      />
        </div>
        <div class="text-left w-full mt-5">
            <p class="font-bold text-md mb-2"> Susah Menyampaikan Pendapat </p>
            <p> Susah Menyampaikan Pendapat </p>
        </div>
      </div>
        </router-link>
    </div>
        <hr class="my-2 font-bold"/>

    <div class="border-none flex justify-center w-96 h-46">
      <div class="flex flex-row">
        <div>
      <img
      :src="Logo"
      class="object-fill w-96 item-center"
      />
        </div>
        <div class="text-left w-full mt-5">
            <p class="font-bold text-md mb-2"> Susah Menyampaikan Pendapat </p>
            <p> Susah Menyampaikan Pendapat </p>
        </div>
      </div>
    </div>
        <hr class="my-2 font-bold"/>

    <div class="border-none flex justify-center w-96 h-46">
      <div class="flex flex-row">
        <div>
      <img
      :src="Logo"
      class="object-fill w-96 item-center"
      />
        </div>
        <div class="text-left w-full mt-5">
            <p class="font-bold text-md mb-2"> Susah Menyampaikan Pendapat </p>
            <p> Susah Menyampaikan Pendapat </p>
        </div>
      </div>
    </div>
        <hr class="my-2 font-bold"/>

    <div class="border-none flex justify-center w-96 h-46">
      <div class="flex flex-row">
        <div>
      <img
      :src="Logo"
      class="object-fill w-96 item-center"
      />
        </div>
        <div class="text-left w-full mt-5">
            <p class="font-bold text-md mb-2"> Susah Menyampaikan Pendapat </p>
            <p> Susah Menyampaikan Pendapat </p>
        </div>
      </div>
    </div>
           <hr class="my-2 font-bold"/>        
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
</style>
