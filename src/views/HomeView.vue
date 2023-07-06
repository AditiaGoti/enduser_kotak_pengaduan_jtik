<template>
  <div class="home">
    <div v-if="profileList.lecturer_type > 0">
      <NavbarLecturer/>
    </div>
    <div v-else>
      <navbar/>
    </div>
    <HelloWorld />
    <footer class="bg-white">
    <div class="w-full py-6 lg:py-8">
        <div class="bg-blue-800 text-white font-bold rounded shadow" >
        <div class="md:flex md:justify-between mx-9">
          <div class="mb-6 md:mb-0">
            <div class="flex flex-col text-left mt-5">
                <div>
                  <!-- <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="FlowBite Logo" /> -->
<h1 class="mb-4 text-2xl font-extrabold text-white md:text-2xl lg:text-4xl ml-24"><span class="text-transparent bg-clip-text bg-gradient-to-r to-white from-sky-400 mr-5">KOTAK PENGADUAN</span>JTIK</h1>
                </div>
                <div class="w-[600px] ml-24">
                    <p> Kotak Pengaduan JTIK adalah sebuah wadah yang digunakan untuk menyampaikan segala pengaduan. serta diharapkan dengan adanya pengaduan tersebut dapat meningkatkan kualitas dari Jurusan Teknik Informatika dan Komputer </p>
                </div>
            </div>
          </div>

          <div class="grid grid-cols-2 gap-8 mt-5 sm:gap-6 mr-4 font-bold sm:grid-cols-3 mt-8">
              <!-- <div>
                  <h2 class="mb-6 text-sm uppercase">Resources</h2>
                  <ul class="font-medium">
                      <li class="mb-4">
                          <a href="https://flowbite.com/" class="hover:underline">Flowbite</a>
                      </li>
                      <li>
                          <a href="https://tailwindcss.com/" class="hover:underline">Tailwind CSS</a>
                      </li>
                  </ul>
              </div> -->
              <!-- <div>
                  <h2 class="mb-6 text-sm uppercase">Follow us</h2>
                  <ul class="font-medium">
                      <li class="mb-4">
                          <a href="https://github.com/themesberg/flowbite" class="hover:underline ">Github</a>
                      </li>
                      <li>
                          <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Discord</a>
                      </li>
                  </ul>
              </div> -->
              <!-- <div>
                  <h2 class="mb-6 text-sm uppercase">Legal</h2>
                  <ul class="font-medium">
                      <li class="mb-4">
                          <a href="#" class="hover:underline">Privacy Policy</a>
                      </li>
                      <li>
                          <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                      </li>
                  </ul>
              </div> -->
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        </div>
      <div class="item-center  mx-3">
          <span class="text-sm text-gray-500 sm:text-center">© 2023 <a href="https://flowbite.com/" class="hover:underline">Kotak Pengaduan JTIK</a>. All Rights Reserved.
          </span>
      </div>
    </div>
</footer>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Navbar from '@/components/Navbars/Navbar.vue'
import Footer from '@/components/Footer/footer.vue'
import NavbarLecturer from '@/components/Navbars/NavbarLecturer.vue'
import { ProfileController } from "@/controller/ProfileController.js";
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    Navbar,
    NavbarLecturer,
    Footer
  },  data() {
    return {
      Profile: new ProfileController(false,false,""),
    };
  },
  created(){
    this.profile();
console.log(this.profile,"test")
  },
  mounted() {
      this.getProfileLecturer();

    },
  computed: {
    profileList() {
      return this.Profile.list;
    },

  },
  methods: {
    async getProfileLecturer() {
   return this.Profile.getProfileLecturer();
 },
 async profile() {
   await this.getProfileLecturer();
 },
}
}
</script>
