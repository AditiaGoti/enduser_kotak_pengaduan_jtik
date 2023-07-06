<template>
  <div class="relative ml-32 mr-10 w-[700px] border-8 rounded-lg mb-3">
   <div class="carousel" data-fb-carousel>
  <!-- Carousel items -->
  <div class="carousel-inner">
    <div
      v-for="(complaint, index) in complaintList"
      :key="index"
      class="carousel-item cursor-pointer"
      :class="{ active: index === activeSlide }"
      @click="toComplaintDetail(complaint._id)"
    >
      <img :src="complaint.attachmentImage" class="block w-full h-[485px]" :alt="complaint.title" />
      <div class="carousel-caption text-left cursor-pointer" @click="toComplaintDetail(complaint._id)">
        <h5 class="text-xl">{{ complaint.title }}</h5>
        <p>{{ complaint.body }}</p>
      </div>
    </div>
  </div>

  <!-- <a class="carousel-control-prev" role="button" data-fb-slide="prev">
    <span class="carousel-control-icon" aria-hidden="true">
      <i class="fa fa-chevron-left"></i>
    </span>
  </a>
  <a class="carousel-control-next" role="button" data-fb-slide="next">
    <span class="carousel-control-icon" aria-hidden="true">
      <i class="fa fa-chevron-right"></i>
    </span>
  </a> -->

  <!-- Carousel indicators -->
  <ol class="carousel-indicators" data-fb-carousel-indicators>
    <li
      v-for="(complaint, index) in complaintList"
      :key="index"
      :data-fb-target="'#carouselExampleCaptions'"
      :data-fb-slide-to="index"
      :class="{ active: index === activeSlide }"
    ></li>
  </ol>
</div>

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
    // Add event listeners for slide navigation
    // const prevButton = document.querySelector('[data-fb-slide="prev"]');
    // prevButton.addEventListener('click', this.prevSlide);

    // const nextButton = document.querySelector('[data-fb-slide="next"]');
    // nextButton.addEventListener('click', this.nextSlide);

    this.getComplaint();
    this.startAutoSlide(); // Start auto slide when component is mounted

  },
  beforeDestroy() {
    // Remove event listeners before component is destroyed
    const prevButton = document.querySelector('[data-fb-slide="prev"]');
    prevButton.removeEventListener('click', this.prevSlide);

    const nextButton = document.querySelector('[data-fb-slide="next"]');
    nextButton.removeEventListener('click', this.nextSlide);
    this.stopAutoSlide(); // Stop auto slide before component is destroyed

  },
  methods: {
    toComplaintDetail(Index) {
      this.$router.push({
        path: '/detail/:id',
        name: 'detail',
        params: { id: Index },
        item:"",
      });
    },
     startAutoSlide() {
      this.autoSlideInterval = setInterval(() => {
        this.nextSlide(); // Move to the next slide
      }, 5000); // Change slide every 5 seconds (adjust as needed)
    },
    stopAutoSlide() {
      clearInterval(this.autoSlideInterval); // Clear the auto slide interval
    },
    async getComplaintListPopular(page, size) {
      return this.complaintController.getComplaintListPopular(page, size);
    },
    async getComplaint() {
      await this.getComplaintListPopular(this.meta.page, this.meta.size);
      this.activeSlide = 0; // Reset the active slide to the first one
    },
    nextSlide() {
      if (this.activeSlide < this.complaintList.length - 1) {
        this.activeSlide++;
      } else {
        this.activeSlide = 0; // Wrap to the first slide
      }
    },
    prevSlide() {
      if (this.activeSlide > 0) {
        this.activeSlide--;
      } else {
        this.activeSlide = this.complaintList.length - 1; // Wrap to the last slide
      }
    },
  },
};
</script>

<style scoped>
.carousel-inner {
  position: relative;
}

.carousel-item {
  display: none;
}

.carousel-item.active {
  display: block;
}

.carousel-caption {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
}
</style>
