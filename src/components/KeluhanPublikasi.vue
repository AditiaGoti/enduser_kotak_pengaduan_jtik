<template>
    <div class="mt-24 px-36">  
    <p class="font-sans text-2xl text-left font-bold mb-4 text-black underline ">Keluhan Pengguna</p>
  <div v-if="complaintList.length > 0">
    <div class=" mb-4 border-none  hover:bg-gray-100" v-for="complaint in complaintList" :key="complaint._id"  @click="toComplaintDetail(complaint._id)">
    <div class="flex flex-row ">
        <img
        :src="complaint.attachmentImage"
        class="w-56 h-48 m-4"
        />
        <div class="flex flex-col py-3">
        <p class="text-left font-bold text-lg mt-3 mb-1">{{ complaint.lecturer_type  }}</p>
        <p class="text-left  font-bold text-xl">
          {{complaint.title}}
          </p>
          <p class="text-justify mr-2 text-md mt-1 break-words whitespace-normal mb-1">{{ complaint.body }}
                               </p>
          <div class="flex flex-row mb-3">
           <p class="text-left text-sm mr-3">
            {{ moment(complaint.createdAt).locale("id").format("DD-MM-YYYY") }}
        </p>
          <p class="text-left font-semibold text-sm">
          {{ complaint.category }}
          </p>
          </div>
          <p class="text-left font-bold text-sm">
          {{ complaint.status }}
          </p>
        </div>
    </div>
    <hr class="font-bold mb-3" />
      </div>
    </div>
    <div v-else>
        <div class="flex justify-center border-none mt-36">
  <div class="mb-4"><img :src="vote" class="w-32" alt="..."></div>
</div>
<div class="mb-8 text-xl font-semibold text-black"><p>Belum Memiliki Pengaduan</p></div>

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
    Logo,
    vote,
    moment : moment,
    complaintList:[],
    complaint: new ComplaintController(false, false, ""),
    }
  },
  computed:{
      isErrorComplaint() {
          return this.complaint.error;
        },
        complaintList() {
        return this.complaint.lists;
      },
        errorCauseComplaint() {
          return this.complaint.errorCause;
        },
        isLoadingComplaint() {
          return this.complaint.loading;
        },
    },
    created() {
  this.getComplaintListUser();
      },
      mounted() {
        this.getComplaintListUser();
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
      async getComplaintListUser() {
        await this.getListComplaintUser(this.$route.params.id);
      }, 
      async getListComplaintUser(id) {
        return this.complaint.getComplaintListUser(id);
      },
      },
    }
  </script>
  