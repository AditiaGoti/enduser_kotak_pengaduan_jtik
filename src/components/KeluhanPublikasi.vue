<template>
    <div class="mt-24 md:px-36 px-3">
    <p class="font-sans md:text-2xl text-lg text-left font-bold mb-4 text-black underline ">Tanggapan Pengaduan</p>
  <div v-if="ComplaintList.length > 0" >
<div v-for="(complaint) in visibleComplaintList" :key="complaint._id" class="mb-4 border-none hover:bg-gray-100" @click="toComplaintDetail(complaint._id)">
    <div class="flex flex-row " >
        <img
        :src="complaint.attachmentImage"
        class="md:w-[200px] w-32 md:h-48 md:m-4 md:mx-12 mx-6 h-28"
        />
        <div class="flex flex-col md:py-3 py-0 md:mb-0 mb-2">
        <p class="text-left font-bold md:text-lg text-sm  md:mt-3 mt-0 mb-1">{{ complaint.lecturer_type}} </p>
        <p class="text-left  font-bold md:text-xl text-md">
            {{ complaint.title }}
          </p>
          <p class="text-justify mr-2 text-md mt-1 text-ellipsis overflow-hidden md:mb-5 mb-2" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical;">
            {{ complaint.body }}
          </p>
          <div class="flex flex-row md:mb-5 mb-2">
           <p class="text-left md:text-sm text-xs">{{ moment(complaint.createdAt).locale("id").format("DD-MM-YYYY") }}</p>
           <p class="text-left md:text-sm text-xs relative bottom-0.5 md:px-2 px-1"> | </p>
           <p class="text-left font-semibold md:text-sm text-xs">
          {{complaint.category}}
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
        <hr class="font-bold mb-3" />

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
        <div class="flex justify-center border-none">
  <div class="mb-4"><img :src="vote" class="w-16" alt="..."></div>
</div>
<div class="mb-8 text-md font-semibold text-black"><p>Belum Terdapat Pengaduan</p></div>
      </div>
    </div>

  </template>
  
  <script>
  import Logo from "@/assets/img/PENGADUAN.png";
  import { ComplaintController } from "@/controller/ComplaintController.js";
  import moment from 'moment';
  import vote from "@/assets/img/voting.png";

  export default {
    name: 'HelloWorld',
    props: {
      msg: String
    },
    data()
  {
    return{
        moment: moment,
    Logo,
    vote,
    // moment: moment,
        meta: {
          page: 1,
          size: "",
        },
        complaint: "yes",
   visibleComplaintList: [],
      visibleComplaintCount: 5,
        complaint: new ComplaintController(false, false, ""),
    }
  },
  computed:{
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
        this.updateVisibleComplaintList();

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
       loadMore() {
  this.visibleComplaintCount += 5;
  this.updateVisibleComplaintList();
},

     updateVisibleComplaintList() {
      this.visibleComplaintList = this.ComplaintList.slice(0, this.visibleComplaintCount);
    },
      async getComplaintList(page, size) {
        return this.complaint.getComplaintList(page, size);
      },
      async getComplaint() {
        await this.getComplaintList(this.meta.page, this.meta.size);
      },
    },
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
  