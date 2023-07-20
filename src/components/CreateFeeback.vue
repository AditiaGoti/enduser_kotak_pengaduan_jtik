<template>
      <div class="flex flex-col border-2 rounded-md bg-gray-100 px-2 py-3" >
  <div class="text-md mt-1 ml-14 mb-3">
<h1><span class="font-bold">Harap berhati-hati dalam memberi tanggapan.</span>Tanggapan yang sudah dikirim tidak dapat dihapus kembali.</h1>
     </div>            
            <div class="flex flex-row mx-10 mb-4 ">
    <div>
      <img
                :src="profileList.avatar"
                class="h-16 w-16 bg-white rounded-full border"
                alt="..."
              />
    </div>
    <div class="ml-3 mt-1">
        
<label for="message" class="block mb-2 text-sm font-medium text-gray-900">Your message</label>
<input type="text"  v-model="ComplaintDetail._id" class="hidden">
<textarea id="message" rows="4" v-model="message" class="mb-2 block p-2.5 w-[800px] text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leave a comment..."></textarea>
<p >Dengan mengirim tanggapan, Anda menerima syarat dan ketentuan serta kebijakan privasi Kotak Pengaduan JTIK </p>
    </div>
            </div>
            <div class="flex justify-end ">
            <button  :onclick="createFeedbacks" class="w-44 mr-12  text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Kirim Tanggapan</button>
            </div>
    </div>
    <div class="toast-container"></div>
</template>
<script>
  import Logo from "@/assets/img/PENGADUAN.png";
  import { ComplaintController } from "@/controller/ComplaintController.js";
  import { FeedbackController } from "@/controller/FeedbackController.js";
  import moment from 'moment';
  import { CommentController } from "@/controller/CommentController.js";
  import vote from "@/assets/img/voting.png";
  import { ProfileController } from "@/controller/ProfileController.js";

  export default {
    name: 'HelloWorld',
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
    // moment: moment,
        meta: {
          page: 1,
          size: "",
        },
        complaint: "yes",
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
    console.log(this.complaint,"complaint")

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
      );
      setTimeout(() => {
        location.reload();
    }, 2000);},
    async createComment(complaint_id,message) {
      return this.comment.createComment(
        complaint_id,
        message
      );
    },
    async createCommentLectures() {
      await this.createCommentLecture(
        this.complaint_id,
        this.message,
      );
      setTimeout(() => {
        location.reload();
    }, 2000);},
    async createCommentLecture(complaint_id,message) {
      return this.comment.createCommentLecture(
        complaint_id,
        message
      );
    },
    async createFeedbacks() {
      await this.createFeedbackLecturer(
        this.complaint_id,
        this.message
      ).then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Tanggapan berhasil terbuat";

          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          if(this.message == ""){
            this.errorMessage = "Tolong Masukan Isi Tanggapan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          } 
          else if(this.errorCauseFeedback === "Jabatan tidak sesuai!"){
          this.errorMessage = "Gagal Mengirim Tanggapan, Keluhan bukan untuk anda";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else if(this.errorCauseFeedback === "Keluhan telah ditanggapi oleh creator"){
          this.errorMessage = "Gagal Mengirim Tanggapan, Keluhan sudah ditanggapi";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          else {
            this.errorMessage = "Terjadi kesalahan saat Membuat Tanggapan";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);
          }
          });},
    async createFeedbackLecturer(complaint_id,message) {
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
  background-color: red;
}
  </style>
  