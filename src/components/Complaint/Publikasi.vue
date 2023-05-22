<template>
  <router-link
        to="/detail"
        >
<div class=" mb-4 border-none  hover:bg-gray-100">
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
        </div>
      </div>
  </div>
    </div>
 </router-link>
    <hr class="font-bold mb-3" />
    <div class="mb-4 border-none hover:bg-gray-100">
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
        </div>
      </div>
  </div>
      </router-link>
    </div>
    <hr class="font-bold mb-3" />
    <div class="mb-4 border-none hover:bg-gray-100">
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
        </div>
      </div>
  </div>
      </router-link>
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
