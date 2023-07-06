<template>
  <div class="mt-24 px-36">
    <p class="font-sans text-2xl text-left font-bold mb-4 underline">Tanggapan</p>
    <div v-if="ComplaintList.length > 0">
      <div
        v-for="complaint in visibleComplaintList"
        :key="complaint._id"
        class="border-none flex flex-col h-46 hover:bg-gray-100"
        @click="toComplaintDetail(complaint._id)"
      >
        <!-- Complaint content -->
        <div class="flex flex-row">
          <!-- Image -->
          <div>
            <img :src="complaint.attachmentImage" class="object-fill w-32 item-center" />
          </div>
          <!-- Text content -->
          <div class="text-left w-64 ml-4">
            <p class="font-bold text-2xl mb-2">{{ complaint.title }}</p>
            <p class="mb-6">{{ truncateText(complaint.body, 50) }}</p>
            <p class="text-xs font-extralight">{{ complaint.category }}</p>
            <p class="text-blue-600 font-bold">{{ complaint.status }}</p>
          </div>
        </div>
        <hr class="my-2 w-full font-bold" />
      </div>
       <div v-if="visibleComplaintCount < ComplaintList.length">
  <button class="inline-flex items-center px-3 text-white font-bold py-2 text-sm font-medium text-center font-bold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="loadMore">
    Muat Lebih Banyak
  </button>
</div>
<div v-else>
  <!-- Display other content when the ComplaintList length reaches the maximum -->
</div>
    </div>
      <div v-else>
        <!-- No complaints message -->
        <div class="flex justify-center border-none mt-36">
          <div class="mb-4"><img :src="vote" class="w-32" alt="..." /></div>
        </div>
        <div class="mb-8 text-xl font-semibold text-black">
          <p>Belum Memiliki Tanggapan</p>
        </div>
      </div>
    </div>
</template>

<script>
import Logo from "@/assets/img/PENGADUAN.png";
import { ComplaintController } from "@/controller/ComplaintController.js";
import moment from "moment";
import vote from "@/assets/img/voting.png";
import { ProfileController } from "@/controller/ProfileController.js";

export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      moment: moment,
      Logo,
      vote,
      meta: {
        page: 1,
        size: "",
      },
      visibleComplaintList: [],
      visibleComplaintCount: 5,
      complaint: new ComplaintController(false, false, ""),
      Profile: new ProfileController(false,false,""),

    };
  },
  computed: {
    isError() {
      return this.complaint.error;
    },
    ComplaintList() {
      return this.complaint.lists;
    },
    errorCause() {
      return this.complaint.errorCause;
    },
    isLoading() {
      return this.complaint.loading;
    },
    profileList() {
      return this.Profile.list;
    },
    // lecturerType() {
    //   return this.profileList.lecturer_type; // Assuming you have the lecturer_type in the profileList
    // },
  },
  mounted() {
    this.getComplaint().then(() => {
    this.updateVisibleComplaintList();
  });
        this.updateVisibleComplaintList();
  },
  methods: {
    toComplaintDetail(Index) {
      this.$router.push({
        path: "/detail/:id",
        name: "detail",
        params: { id: Index },
        item: "",
      });
    },
    async getFeedbackList(page, size) {
      return this.complaint.getFeedbackList(page, size);
    },
    async getComplaint() {
      await this.getFeedbackList(this.meta.page, this.meta.size);
    },
    async getProfileLecturer() {
      return this.Profile.getProfileLecturer();
    },
    async profile() {
      await this.getProfileLecturer();
    },
     loadMore() {
  this.visibleComplaintCount += 5;
  this.updateVisibleComplaintList();
},

     updateVisibleComplaintList() {
      this.visibleComplaintList = this.ComplaintList.slice(0, this.visibleComplaintCount);
    },
    truncateText(text, limit) {
      if (text.split(" ").length > limit) {
        const words = text.split(" ");
        return words.slice(0, limit).join(" ") + "...";
      }
      return text;
    },
  },
};
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
