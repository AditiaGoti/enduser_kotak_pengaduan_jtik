<template>
    <div id="default-carousel" class="relative ml-32 mr-10 w-[700px] border-8 rounded-lg mb-3" data-carousel="slide">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <div
        v-for="(complaint, index) in complaintList"
          :key="index"
          :class="['duration-1000', { 'ease-in-out': complaint._id === complaintList[activeSlide]._id }, { 'opacity-100': complaint._id === complaintList[activeSlide]._id }, { 'opacity-0': complaint._id !== complaintList[activeSlide]._id }]"
          :data-carousel-item="complaint._id"
          class="relative"
          @click="toComplaintDetail(complaint._id)"
        >
          <img
            :src="complaint.attachmentImage"
            class="absolute cover h-[390px] w-[900px]"
            alt="..."
          />
          <div class="border-none absolute p-4 cursor-pointer text-white bg-transparent mt-72 text-left w-full hover:bg-gray-200 hover:text-black"
            @click="toComplaintDetail(complaint._id)">
            <h2 class="text-3xl font-bold">{{ complaint.title }}</h2>
            <p class="mt-2 ml-2 text-lg">{{ complaint.body }}</p>
          </div>
        </div>
      </div>
  
      <!-- Slider indicators -->
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
        @click="prevSlide"
      >
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path>
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
        @click="nextSlide"
      >
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            aria-hidden="true"
            class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
  </template>
  <script>
  import Logo from "@/assets/img/PENGADUAN.png";
  import { ComplaintController } from "@/controller/ComplaintController.js";
  import Keluhanlist from "@/components/KeluhanList.vue";
  import FeedbackKeluhan from "@/components/FeedbackKeluhanList.vue";
  
  export default {
    name: "HelloWorld",
    components: {
      Keluhanlist,
      FeedbackKeluhan,
    },
    props: {
      msg: String,
    },
    data() {
      return {
        Logo,
        meta: {
          page: 1,
          size: "",
        },
        activeSlide: 0,
        complaintController: new ComplaintController(false, false, ""),
      };
    },
    computed: {
      isError() {
        return this.complaintController.error;
      },
      complaintList() {
        return this.complaintController.lists;
      },
      errorCause() {
        return this.complaintController.errorCause;
      },
      isLoading() {
        return this.complaintController.loading;
      },
      isLoggedIn() {
        const token = localStorage.getItem("kpjtik_access_token");
        return token !== null && token !== "";
      },
    },
    mounted() {
      this.getComplaint();
      this.startCarouselTimer();
    },
    methods: {
        toComplaintDetail(complaintId) {
            console.log('Complaint ID:', complaintId);

  this.$router.push({ name: 'detail', params: { id: complaintId } });
},
      async getComplaintListPopular(page, size) {
        return this.complaintController.getComplaintListPopular(page, size);
      },
      async getComplaint() {
        await this.getComplaintListPopular(this.meta.page, this.meta.size);
      },
      nextSlide() {
        if (this.activeSlide < this.complaintList.length - 1) {
          this.activeSlide++;
        } else {
          this.activeSlide = 0; // Wrap to the first slide
        }
        console.log('Active Slide:', this.activeSlide);
        console.log('Complaint ID:', this.complaintList._id);

      },
      prevSlide() {
        if (this.activeSlide > 0) {
          this.activeSlide--;
        } else {
          this.activeSlide = this.complaintList.length - 1; // Wrap to the last slide
        }
        console.log('Active Slide:', this.activeSlide);
        console.log('Complaint ID:', this.complaintList._id);


      },
      startCarouselTimer() {
        setInterval(() => {
          this.nextSlide();
        }, 5000); // Adjust the interval duration (in milliseconds) as needed
      },
    },
  };
  </script>
  