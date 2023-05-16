<template>
  <div class="hello mt-24 border-none mx-36">
<div class="flex flex-col">
  <div class="text-left mb-5 px-10 mt-3">
    <p class="text-3xl font-bold"> Susah Menyampaikan Pendapat </p>
    <div class="flex flex-row py-3">
    <p class="font-extralight text-sm">Publish at : 13-04-2023, 11:59</p>
    <p class="mx-3 relative bottom-0.5 font-extralight"> | </p>
    <p class="font-extralight text-sm">Author : Anonym</p>
    <p class="ml-3 font-bold text-md">Sudah Ditanggapi</p>
    </div>
    <div class="flex flex-row">
    <p class="font-extralight text-sm"> Kategori :</p>
    <p class="font-bold text-sm">Akademik </p>
    </div>
    </div>
    <hr class="mb-3 mx-10"/>
    <div>
    <img :src="Logo" class="object-cover h-[300px] w-[700px] justify-center mx-40 object-center border-4 mb-3 " alt="...">
    </div>
    <div class="mb-3"> 
    <p class="text-left px-10 text-md mt-1 break-words whitespace-normal">Lorem ipsum dolor sit amet, 
                          consectetur adipiscing elit. Faucibus velit, adipiscing senectus
                           eget semper id. Pretium venenatis ridiculus ornare nec a, arcu aenean. 
                            at scelerisque porta etiam consectetur varius. Arcu, quis sed dictum libero. 
                            Nulla eu commodo in odio aenean sit amet mattis. Purus massa velit sapien 
                            fermentum non amet, amet ac. Magnis mattis egestas lobortis elementum elit 
                            ut rhoncus. Viverra vivamus condimentum nisl erat lobortis dictum risus
                             scelerisque. Dapibus semper eu est et non neque, sed. Massa, id nunc lectus 
                             , tortor. Non a, eget imperdiet proin turpis placerat. Sagittis donec 
                              feugiat orci dolor. </p>
  </div>  
  <div class="px-10 text-left  py-3 ">
    <p class="font-bold text-lg underline underline-offset-8 mb-3"> TANGGAPAN</p>
    <div class="flex flex-col border-2 rounded-md bg-gray-100 px-2 py-3" >
<div class="flex flex-row">
    <div>
      <img
                :src="Logo"
                class="h-16 w-16 bg-white rounded-full border"
                alt="..."
              />
    </div>
    <div class="ml-3 mt-3">
        <p class="font-bold text-lg ">PIHAK PENANGGAP</p>
    </div>
</div>
 <p class="text-left px-10 text-md mt-1">Lorem ipsum dolor sit amet, 
                          consectetur adipiscing elit. Faucibus velit, adipiscing senectus
                           eget semper id. Pretium venenatis ridiculus ornare nec a, arcu aenean. 
                            at scelerisque porta etiam consectetur varius. Arcu, quis sed dictum libero. 
                            Nulla eu commodo in odio aenean sit amet mattis. Purus massa velit sapien 
                            fermentum non amet, amet ac. Magnis mattis egestas lobortis elementum elit 
                            ut rhoncus. Viverra vivamus condimentum nisl erat lobortis dictum risus
                             scelerisque. Dapibus semper eu est et non neque, sed. Massa, id nunc lectus 
                             , tortor. Non a, eget imperdiet proin turpis placerat. Sagittis donec 
                              feugiat orci dolor. </p>
                              </div>
  </div> 
  <div class="px-10 text-left">
    <p class="font-bold text-lg underline underline-offset-8 mb-3"> Komentar</p>
  <div>
    <div class="mb-6">
    <input type="text" placeholder="masukan komenta anda disini..." id="large-input" class="mb-3 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 overflow-x dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <button type="submit" class="justify-items-end	text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim Komentar</button>
</div>
    <hr class="mb-3 mx-"/>
<div class="flex flex-row">
    <div>
      <img
                :src="Logo"
                class="h-16 w-16 bg-white rounded-full border"
                alt="..."
              />
    </div>
    <div class="ml-3 mt-1">
        <p class="font-bold ">Anonym</p>
        <p>Ini isi komentar</p>
    </div>
</div>
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
