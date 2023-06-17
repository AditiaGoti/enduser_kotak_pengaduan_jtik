<template>
    <div>
        <p class="font-bold text-2xl mb-2 underline decoration-2 text-left"> Tanggapan Keluhan </p>
      <div
        v-for="complaint in publishedComplaints"
        v-if="publishedComplaints.length > 0 "
        :key="complaint._id"
        class="border-none flex flex-col w-96 h-46"
        @click="toComplaintDetail(complaint._id)"
      >
        <div class="flex flex-row my-1 hover:bg-gray-100">
          <div>
            <img :src="complaint.attachmentImage" class="object-fill w-32 item-center" />
          </div>
          <div class="text-left w-64 ml-4">
            <p class="font-bold text-md mb-2">{{ complaint.title }}</p>
            <p class="mb-4">{{ truncateText(complaint.body, 50) }}</p>
            <!-- <p class="mb-4 text-ellipsis truncate overflow-hidden whitespace-nowrap	">0kjhjcshcksncksksnckjssdcnsdncsdcnsdkcnsdcnskdjcnscksbcjjsdcbksdcbscbscbscbscbasbasjbabcjaskcasnk</p> -->

            <p>{{ complaint.category }}</p>
          </div>
        </div>
        <hr class="my-2 w-full font-bold" />
      </div>
      <div v-else>
        <div class="flex justify-center border-none">
  <div class="mb-4"><img :src="vote" class="w-16" alt="..."></div>
</div>
<div class="mb-8 text-md font-semibold text-black"><p>Belum Memiliki Pengaduan</p></div>
<hr class="my-2 font-bold" />
      </div>
    </div>
  </template>
  
  <script>
  import Logo from "@/assets/img/PENGADUAN.png";
  import { ComplaintController } from "@/controller/ComplaintController.js";
  import moment from "moment";
  import vote from "@/assets/img/voting.png";
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
        complaint: new ComplaintController(false, false, ""),
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
      publishedComplaints() {
        return this.ComplaintList.filter(
          (complaint) => complaint.status === "Responded"
        );
      },
    },
    mounted() {
      this.getComplaint();
      console.log(this.complaint, "complaint"); // Add this line to log the complaint data
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
      async getComplaintList(page, size) {
        return this.complaint.getComplaintList(page, size);
      },
      async getComplaint() {
        await this.getComplaintList(this.meta.page, this.meta.size);
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
  