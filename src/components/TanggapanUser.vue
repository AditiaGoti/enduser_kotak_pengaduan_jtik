<template>
    <div class="mt-24 px-36">
    <p class="font-sans text-2xl text-left font-bold mb-4 text-black underline ">Tanggapan Pengaduan</p>
      <div v-if="FeedbackList.length > 0 ">
      <div
        v-for="feedback in FeedbackList"
        :key="feedback._id"
        class="mb-4 border-none w-full hover:bg-gray-100"
        @click="toComplaintDetail(feedback.complaint._id)"
      >
        <div class="flex flex-row my-1 hover:bg-gray-100 ">
        <img
        class="w-[200px] h-48 m-4 mx-12"
            />
        <div class="flex flex-col py-3">
        <p class="text-left font-bold text-lg mb-1">{{feedback.lecturer.name}}</p>
        <p class="text-left  font-bold text-xl">
            {{feedback.complaint.title}}
          </p>
          <p class="text-left  font-bold text-xl">
          </p>
 <p class="text-justify mr-2 text-md mt-1 text-ellipsis overflow-hidden" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
            {{ feedback.message }}
          </p>             <div class="flex flex-row mb-2">
           <p class="text-left text-sm">{{ moment(feedback.createdAt).locale("id").format("DD-MM-YYYY") }}</p>
          </div>
          <div class="mb-3 uppercase">
          <p class="text-left text-blue-600 font-semibold text-sm">
          {{feedback.status}}
          </p>
    </div>
          <div class="flex">
           <div> 
          <a href="#" class="inline-flex items-center px-3 text-white font-bold py-2 text-sm font-medium text-center font-bold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              Read more
              <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </a>
            </div>
          </div>
          </div>

    </div>
                      <hr class="my-2 w-full font-bold" />

         <div v-if="visibleComplaintCount < FeedbackList.length">
  <button class="inline-flex items-center px-3 text-white font-bold py-2 text-sm font-medium text-center font-bold bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" @click="loadMore">
    Muat Lebih Banyak
  </button>
</div>
<div v-else>
  <!-- Display other content when the ComplaintList length reaches the maximum -->
</div>
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
  import { FeedbackController } from "@/controller/FeedbackController";
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
          limit: "",
        },
        visibleComplaintList: [],
      visibleComplaintCount: 5,
        feedback: new FeedbackController(false, false, ""),
      };
    },
    computed: {
      isError() {
        return this.feedback.error;
      },
      FeedbackList() {
        return this.feedback.lists;
      },
      errorCause() {
        return this.feedback.errorCause;
      },
      isLoading() {
        return this.feedback.loading;
      },
    },
    mounted() {
           this.getFeedback().then(() => {
    this.updateVisibleComplaintList();
  });
        this.updateVisibleComplaintList();
        this.getFeedback();
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
       loadMore() {
  this.visibleComplaintCount += 5;
  this.updateVisibleComplaintList();
},

     updateVisibleComplaintList() {
      this.visibleComplaintList = this.FeedbackList.slice(0, this.visibleComplaintCount);
    },
        async getFeedbackLecturer(page, limit) {
        return this.feedback.getFeedbackLecturer(page, limit);
      },
      async getFeedback() {
        await this.getFeedbackLecturer(this.meta.page, this.meta.limit);
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
  