<template>
    <div>
        <p class="font-bold md:text-2xl md:ml-0 ml-3 text-md mb-2 underline decoration-2 text-left"> Tanggapan Pengaduan </p>
      <div v-if="ComplaintList.length > 0 ">
      <div
        v-for="complaint in visibleComplaintList"
        :key="complaint._id"
        class="border-none flex flex-col md:w-96 md:h-46 w-82 md:ml-0 ml-5"
        @click="toComplaintDetail(complaint._id)"
      >
        <div class="flex flex-row my-1 hover:bg-gray-100">
          <div>
            <img :src="complaint.attachmentImage" class="object-fill w-32 item-center" />
          </div>
          <div class="text-left w-64 ml-4 flex flex-col">
            <p class="font-bold  md:text-md text-sm md:mb-2 mb-0">{{ complaint.title }}</p>
             <p class="text-justify mr-2 md:text-md text-sm md:mt-1 mt-0 text-ellipsis overflow-hidden" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
            {{ complaint.body }}
          </p>   
            <p class="font-bold md:text-sm text-xs md:mb-0 mb-3">{{ complaint.category }}</p>
             <div class="flex">
           <div> 
          <a href="#" class="md:hidden inline-flex items-center px-3 text-white font-bold py-2 md:text-sm text-xs font-medium text-center font-bold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
            </div>
          </div>
          </div>
         
        </div>
        <hr class="my-2 md:w-full w-92 md:mx-0 mx-3 font-bold" />
      </div>
       <div v-if="visibleComplaintCount < ComplaintList.length">
  <button class="inline-flex items-center md:px-3 px-2 text-white font-bold py-2 md:text-sm text-xs mb-2 md:mb-0 font-medium text-center font-bold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="loadMore">
    Muat Lebih Banyak
  </button>
</div>
<div v-else>
  <!-- Display other content when the ComplaintList length reaches the maximum -->
</div>
      </div>
      <div v-else>
        <div class="flex justify-center border-none">
  <div class="mb-4"><img :src="vote" class="w-16" alt="..."></div>
</div>
<div class="mb-8 text-md font-semibold text-black"><p>Belum Terdapat Tanggapan</p></div>
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
        visibleComplaintList: [],
      visibleComplaintCount: 5,
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
    },
    mounted() {
      this.getComplaint().then(() => {
    this.updateVisibleComplaintList();
  });
        this.updateVisibleComplaintList(); },
    methods: {
      toComplaintDetail(Index) {
        this.$router.push({
          path: "/detail/:id",
          name: "detail",
          params: { id: Index },
          item: "",
        });
      },
      async getFeedbackComplaintList(page, size) {
        return this.complaint.getFeedbackComplaintList(page, size);
      },
      async getComplaint() {
        await this.getFeedbackComplaintList(this.meta.page, this.meta.size);
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
  