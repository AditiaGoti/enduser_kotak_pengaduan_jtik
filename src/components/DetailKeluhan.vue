<template>
  <div class="hello mt-24 border-none mx-36 mb-10">
<div class="flex flex-col">
  <div class="text-left mb-5 px-10 mt-3">
    <p class="text-3xl font-bold text-black"> {{ComplaintDetail.title}} </p>
    <div class="flex flex-row py-3">
    <p class="font-extralight text-sm">Publish at : {{moment(ComplaintDetail.createdAt).locale("id").format("DD-MM-YYYY")}}</p>
    <p class="mx-3 relative bottom-0.5 font-extralight"> | </p>
    <p class="font-extralight text-sm">Author : {{ ComplaintDetail.createdBy }}</p>
    </div>
    <div class="flex flex-row mb-3">
    <p class="font-extralight text-sm"> Kategori : {{ ComplaintDetail.category }}</p>
    <!-- <p class="font-bold text-sm">{{ComplaintDetail.lecturer_type}} </p> -->
    </div>
    <div v-if="ComplaintDetail.status === 'Responded'">
    <p class="font-bold text-md text-blue-600	">Sudah Ditanggapi</p>
  </div>
  <div v-else-if="ComplaintDetail.status === 'Moderated'">
    <p class="font-bold text-md text-red-600	">Tanggapan Dalam Moderasi</p>
  </div>
  <div v-else>
    <p class="font-bold text-md text-red-600	">Belum Ditanggapi</p>
  </div>
  </div>
    <hr class="mb-3 mx-10"/>
    <div class="flex justify-center border-none">
  <div class="mb-8"><img :src="ComplaintDetail.attachmentImage" class="w-64" alt="..."></div>
</div>
    <div class="mb-3"> 
    <p class="text-left px-10 text-md mt-1 break-words whitespace-normal">{{ ComplaintDetail.body }} </p>
  </div>
  <div class="px-10 text-left  py-3 ">
    <p class="font-bold text-lg underline underline-offset-8 mb-3"> TANGGAPAN</p>
    <div class="flex flex-col border-2 rounded-md bg-gray-100 px-2 py-2 mb-3" >
      <div v-if="feedbackList.length === 0">
 <p class="text-grey-200 text-md mt-1 text-center">Belum ada Tanggapan</p>
                              </div>
      <div v-else>
          <div class="ml-2">
          <div class="flex flex-row">
            <img
                :src="feedbackList.lecturer.avatar"
                class="h-9 w-9 mr-3 bg-white rounded-full border"
                alt="..."
              />
            <div class="flex flex-col">
            <p class="text-black text-xl font-bold mt-1">{{feedbackList.lecturer.type}}</p>
            <p class="text-black text-md mt-1 ">{{feedbackList.message}}</p>
          </div>
            </div>
          </div>
      </div>
                              <br>
      </div>
         <div v-if="profileList.lecturer_type > 0 && feedbackList.length === 0 ">

   <feedback/>
   </div>
   <!-- <div v-else-if="ComplaintDetail.status === 'Published'">
  </div> -->
  </div>   
  <div class="px-10 text-left">
    <p class="font-bold text-lg underline underline-offset-8 mb-3"> Komentar</p>
  <div>
    <div class="mb-6">
    <input type="text"  v-model="ComplaintDetail._id" class="hidden">
    <input type="text" v-model="message" placeholder="masukan komentar anda disini..." id="large-input" class="mb-3 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 overflow-x dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
   <div v-if="profileList.lecturer_type > 0">
    <button @click="createCommentLectures" class="justify-items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim Komentar</button>
  </div>  
  <div v-else >
    <button @click="createComments" class="justify-items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim Komentar</button>

  </div>  
  </div>
      <div class="toast-container"></div>
    <hr class="mb-3"/>
    <div v-if="commentList.length === 0" class="text-center text-lg">
      <div class="flex justify-center">
      <div><img :src="vote" class="w-16 h-16 item-center mb-2" alt="..."></div>
    </div>
    <div>    <p class="font-sans">Belum ada Komentar</p>
</div>
    </div>
    <div v-else>
    <div v-for="comment in commentList" :key="comment._id">
    <div class="ml-3 mt-1">
      <div class="flex flex-row">
        <img
                :src="comment.profileData.avatar"
                class="h-9 w-9 mr-3 bg-white rounded-full border"
                alt="..."
              />
      <div class="flex flex-col">
        <p class="font-bold mb-2 underline">{{comment.createdBy}}</p>
        <p class="mb-2">{{comment.message}}</p>
        <p class="mb-2 text-xs">{{moment(comment.createdAt).locale("id").format("DD-MM-YYYY")}}</p>
        <hr class="w-full"/>
      </div>
    </div>

      </div>
</div>
</div>
  </div>
  </div>
  </div>
  </div>
</template>

<script>
  import Logo from "@/assets/img/PENGADUAN.png";
  import { ComplaintController } from "@/controller/ComplaintController.js";
  import { FeedbackController } from "@/controller/FeedbackController.js";
  import moment from 'moment';
  import { CommentController } from "@/controller/CommentController.js";
  import vote from "@/assets/img/voting.png";
  import { ProfileController } from "@/controller/ProfileController.js";
  import feedback from '@/components/CreateFeeback.vue'

  export default {
    name: 'HelloWorld',
    components :{
      feedback
    },
    props: {
      msg: String,
      item:{
        type: Object,
      }
    },
    data()
  {
    return{
        moment: moment,
    Logo,
    vote,
    commentList:[],
    errorMessage:"",
    feedbackList:[],
    // moment: moment,
        meta: {
          page: 1,
          size: "",
        },
        complaint_id:"",
        message:"",
        messageLecturer:"",
        comment: new CommentController(false, false, ""),
        complaint: new ComplaintController(false, false, ""),
        feedback: new FeedbackController(false, false, ""),
        Profile: new ProfileController(false,false,""),

    }
  },
  computed:{
    isErrorComplaint() {
        return this.complaint.error;
      },
      ComplaintDetail() {
      return this.complaint.lists;
    },
      errorCauseComplaint() {
        return this.complaint.errorCause;
      },
      isLoadingComplaint() {
        return this.complaint.loading;
      },
      isErrorComment() {
        return this.comment.error;
      },
      commentList() {
      return this.comment.lists;
    },
      errorCauseComment() {
        return this.comment.errorCause;
      },
      isLoadingFeedback() {
        return this.feedback.loading;
      },
      isErrorFeedback() {
        return this.feedback.error;
      },
      feedbackList() {
      return this.feedback.lists;
    },
    profileList() {
      return this.Profile.list;
    },
      errorCauseFeedback() {
        return this.feedback.errorCause;
      },
      isLoadingFeedback() {
        return this.feedback.loading;
      },
  },
  created() {
    this.getComplaintDetail();
    this.complaint_id = this.$route.params.id || ''; // Assign value to profileList.avatar
    this.profile();

    },
    mounted() {
      this.getComplaintDetail();
      this.getComment();
      this.getFeedback();
      this.getProfileLecturer();

    },
  methods: {
      async getDetailComplaint(id) {
      return this.complaint.getComplaintDetail(id);
    },
    async getComplaintDetail() {
      await this.getDetailComplaint(this.$route.params.id);
    },
    async createComments() {
      await this.createComment(
        this.complaint_id,
        this.message,
        ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Membuat Komentar";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Import data mahasiswa";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
        },
    async createComment(complaint_id,message) {
      return this.comment.createComment(
        complaint_id,
        message
      ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Membuat Tanggapan, Tanggapan akan dimoderasi terlebih dahulu";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Membuat Tanggapan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
    },
    async createCommentLectures() {
      await this.createCommentLecture(
        this.complaint_id,
        this.message,
      ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Membuat Tanggapan, Tanggapan akan dimoderasi terlebih dahulu";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Membuat Tanggapan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });},
    async createCommentLecture(complaint_id,message) {
      return this.comment.createCommentLecture(
        complaint_id,
        message
      );
    },
    async createFeedbacks() {
      await this.createFeedback(
        this.complaint_id,
        this.message,
      ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Membuat Tanggapan, Tanggapan akan dimoderasi terlebih dahulu";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          this.errorMessage = "Terjadi kesalahan saat Membuat Tanggapan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);        });
    },
    async createFeedback(complaint_id,message) {
      return this.feedback.createFeedback(
        complaint_id,
        message
      );
    },
    async getCommentList(id) {
      return this.comment.getCommentList(id);
    },
    async getComment() {
      await this.getCommentList(this.$route.params.id);
    },
    async getFeedbackList(id) {
      return this.feedback.getFeedbackList(id);
    },
    async getFeedback() {
      await this.getFeedbackList(this.$route.params.id);
    },
    async getProfileLecturer() {
   return this.Profile.getProfileLecturer();
 },
 async profile() {
   await this.getProfileLecturer();
 },
      // async getUpdateActivity(id) {
      //   return this.notif.getActivityListUpdate(id);
      // },
      // async getUpdateStatus(id) {
      //   await this.getUpdateActivity(id);
      //   this.getActivity();
      // },
      // setNotification() {
      //   setNotif(this.notip);
        
      // },
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
  .toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

.toast {
  padding: 10px 20px;
  border-radius: 4px;
  box-shadow: 10px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  opacity: 0.9;
}

.toast-success {
  background-color: #2ecc71;
}
.toast-error {
  background-color: #2ecc71;
}
  </style>
  