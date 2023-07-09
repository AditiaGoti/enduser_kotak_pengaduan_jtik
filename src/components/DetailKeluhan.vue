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
    <p class="font-bold text-md text-green-600	">Pengaduan Dalam Moderasi</p>
  </div>
  <div v-else-if="ComplaintDetail.status === 'Published'">
    <p class="font-bold text-md text-yellow-600	">Publikasi</p>
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
      <div>
        <div v-if="isLoggedIn" >
        <div v-if="feedbackList.length === 0 && profileList.lecturer_type > 0 ">
  <feedback/>
        </div>
        </div>
</div>

<!-- <div v-else-if="profileList.lecturerType.LT_name === complaintDetail.division">
  <feedback/>
</div> -->

      <!-- <div v-else-if="profileRole != ComplaintDetail.division">
       <feedback/>
   </div>
   <div v-else>
   </div> -->
   <!-- <div v-else-if="ComplaintDetail.status === 'Published'">
  </div> -->
  </div>   
  <div class="px-10 text-left">
    <p class="font-bold text-lg underline underline-offset-8 mb-3"> Komentar</p>
  <div>
    <div class="mb-6">
    <input type="text"  v-model="ComplaintDetail._id" class="hidden">
    <textarea type="text" v-model="message" placeholder="masukan komentar anda disini..." id="large-input" class="mb-3 block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 overflow-x dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
  <div  v-if="!isLoggedIn">
        <button       
        :onClick="modal"
         class="justify-items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim Komentar</button>
  </div>
  <div v-else >
     <div v-if="profileList.lecturer_type > 0">
    <button @click="createCommentLectures" class="justify-items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim Komentar</button>
  </div>  
    <div v-else>
    <button @click="createComments" class="justify-items-end text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Kirim Komentar</button>
    </div>
  </div>  
   <div class="modal-backdrop" v-if="showModal"></div>

  </div>
      <div v-if="showModal" tabindex="-1" class="fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
    <div class="modal-backdrop"></div>
    <div class="modal w-full max-w-md max-h-full">
        <!-- Modal content -->
        <div class="relative bg-blue-800 rounded-lg shadow">
            <button type="button" :onClick="closeModal" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>  
                <span class="sr-only">Close modal</span>
            </button>
            <!-- Modal header -->
            <div class="px-6 py-4 border-b rounded-t">
              <div class="flex flex-row">
        <div>
              <img :src="vote" class="w-8 h-8 mr-1"/>
        </div>
        <div>
          <a
            class="text-white text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
            KOTAK PENGADUAN JTIK
          </a>
        </div>
       </div>
            </div>
            <!-- Modal body -->
            <div class="p-6">
                <p class="text-md font-semibold text-white text-left">Login Sebagai ?</p>
                <ul class="my-4 space-y-3">
                    <li>
                        <a :onclick="loginStudent"  data-modal-hide="crypto-modal" class="flex cursor-pointer text-left p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                            <!-- <svg aria-hidden="true" class="h-4" viewBox="0 0 40 38" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M39.0728 0L21.9092 12.6999L25.1009 5.21543L39.0728 0Z" fill="#E17726"/><path d="M0.966797 0.0151367L14.9013 5.21656L17.932 12.7992L0.966797 0.0151367Z" fill="#E27625"/><path d="M32.1656 27.0093L39.7516 27.1537L37.1004 36.1603L27.8438 33.6116L32.1656 27.0093Z" fill="#E27625"/><path d="M7.83409 27.0093L12.1399 33.6116L2.89876 36.1604L0.263672 27.1537L7.83409 27.0093Z" fill="#E27625"/><path d="M17.5203 10.8677L17.8304 20.8807L8.55371 20.4587L11.1924 16.4778L11.2258 16.4394L17.5203 10.8677Z" fill="#E27625"/><path d="M22.3831 10.7559L28.7737 16.4397L28.8067 16.4778L31.4455 20.4586L22.1709 20.8806L22.3831 10.7559Z" fill="#E27625"/><path d="M12.4115 27.0381L17.4768 30.9848L11.5928 33.8257L12.4115 27.0381Z" fill="#E27625"/><path d="M27.5893 27.0376L28.391 33.8258L22.5234 30.9847L27.5893 27.0376Z" fill="#E27625"/><path d="M22.6523 30.6128L28.6066 33.4959L23.0679 36.1282L23.1255 34.3884L22.6523 30.6128Z" fill="#D5BFB2"/><path d="M17.3458 30.6143L16.8913 34.3601L16.9286 36.1263L11.377 33.4961L17.3458 30.6143Z" fill="#D5BFB2"/><path d="M15.6263 22.1875L17.1822 25.4575L11.8848 23.9057L15.6263 22.1875Z" fill="#233447"/><path d="M24.3739 22.1875L28.133 23.9053L22.8184 25.4567L24.3739 22.1875Z" fill="#233447"/><path d="M12.8169 27.0049L11.9606 34.0423L7.37109 27.1587L12.8169 27.0049Z" fill="#CC6228"/><path d="M27.1836 27.0049L32.6296 27.1587L28.0228 34.0425L27.1836 27.0049Z" fill="#CC6228"/><path d="M31.5799 20.0605L27.6165 24.0998L24.5608 22.7034L23.0978 25.779L22.1387 20.4901L31.5799 20.0605Z" fill="#CC6228"/><path d="M8.41797 20.0605L17.8608 20.4902L16.9017 25.779L15.4384 22.7038L12.3988 24.0999L8.41797 20.0605Z" fill="#CC6228"/><path d="M8.15039 19.2314L12.6345 23.7816L12.7899 28.2736L8.15039 19.2314Z" fill="#E27525"/><path d="M31.8538 19.2236L27.2061 28.2819L27.381 23.7819L31.8538 19.2236Z" fill="#E27525"/><path d="M17.6412 19.5088L17.8217 20.6447L18.2676 23.4745L17.9809 32.166L16.6254 25.1841L16.625 25.1119L17.6412 19.5088Z" fill="#E27525"/><path d="M22.3562 19.4932L23.3751 25.1119L23.3747 25.1841L22.0158 32.1835L21.962 30.4328L21.75 23.4231L22.3562 19.4932Z" fill="#E27525"/><path d="M27.7797 23.6011L27.628 27.5039L22.8977 31.1894L21.9414 30.5138L23.0133 24.9926L27.7797 23.6011Z" fill="#F5841F"/><path d="M12.2373 23.6011L16.9873 24.9926L18.0591 30.5137L17.1029 31.1893L12.3723 27.5035L12.2373 23.6011Z" fill="#F5841F"/><path d="M10.4717 32.6338L16.5236 35.5013L16.4979 34.2768L17.0043 33.8323H22.994L23.5187 34.2753L23.48 35.4989L29.4935 32.641L26.5673 35.0591L23.0289 37.4894H16.9558L13.4197 35.0492L10.4717 32.6338Z" fill="#C0AC9D"/><path d="M22.2191 30.231L23.0748 30.8354L23.5763 34.8361L22.8506 34.2234H17.1513L16.4395 34.8485L16.9244 30.8357L17.7804 30.231H22.2191Z" fill="#161616"/><path d="M37.9395 0.351562L39.9998 6.53242L38.7131 12.7819L39.6293 13.4887L38.3895 14.4346L39.3213 15.1542L38.0875 16.2779L38.8449 16.8264L36.8347 19.1742L28.5894 16.7735L28.5179 16.7352L22.5762 11.723L37.9395 0.351562Z" fill="#763E1A"/><path d="M2.06031 0.351562L17.4237 11.723L11.4819 16.7352L11.4105 16.7735L3.16512 19.1742L1.15488 16.8264L1.91176 16.2783L0.678517 15.1542L1.60852 14.4354L0.350209 13.4868L1.30098 12.7795L0 6.53265L2.06031 0.351562Z" fill="#763E1A"/><path d="M28.1861 16.2485L36.9226 18.7921L39.7609 27.5398L32.2728 27.5398L27.1133 27.6049L30.8655 20.2912L28.1861 16.2485Z" fill="#F5841F"/><path d="M11.8139 16.2485L9.13399 20.2912L12.8867 27.6049L7.72971 27.5398H0.254883L3.07728 18.7922L11.8139 16.2485Z" fill="#F5841F"/><path d="M25.5283 5.17383L23.0847 11.7736L22.5661 20.6894L22.3677 23.4839L22.352 30.6225H17.6471L17.6318 23.4973L17.4327 20.6869L16.9139 11.7736L14.4707 5.17383H25.5283Z" fill="#F5841F"/></svg> -->
                            <div class="flex flex-row">
        <div>
              <img :src="vote" class="w-8 h-8 mr-1"/>
        </div>
        <div>
          <a
            class="text-blue-800 text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
Mahasiswa          </a>
        </div>
       </div>                        </a>
                    </li>
                    <li>
                        <a :onclick="loginLecturer"  data-modal-hide="crypto-modal" class="flex cursor-pointer text-left p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow">
                          <div class="flex flex-row">
        <div>
              <img :src="vote" class="w-8 h-8 mr-1"/>
        </div>
        <div>
          <a
            class="text-blue-800 text-md font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
          >
Dosen       </a>
        </div>
       </div>                                         </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
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
        <p class="mb-2 break-all whitespace-normal">{{comment.message}}</p>
        <p class="mb-2 text-xs">{{moment(comment.createdAt).locale("id").format("DD-MM-YYYY")}}</p>
        <hr class="w-full"/>
      </div>
    </div>

      </div>
</div>
</div>
  </div>
  </div>
  <div class="toast-container"></div>
            <div class="toast-container-comment"></div>

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
    showModal: false,
    vote,
    commentList:[],
    errorMessage:"",
    feedbackList:[],
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
     isLoggedIn() {
  const token = localStorage.getItem('kpjtik_access_token');
  return token !== null && token !== '';
},
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
    profileRole() {
      return this.Profile.data;
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
      this.profile();


    },
  methods: {
       closeModal() {
    this.showModal = false;
    console.log('Modal telah ditutup'); // tambahkan console log di sini
  },
      modal(){
        this.showModal = true;
    console.log(this.showModal,"modal")
    },
 loginStudent() {
      this.$router.push('/login');
  },
  loginLecturer() {
      this.$router.push('/loginlecturer');
  },
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
        )
        .then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Membuat Komentar";

          const toastContainer = document.querySelector(".toast-container-comment");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          if(this.message == ""){
            this.errorMessage = "Konten Komentar tidak boleh kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container-comment");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);     
          } else{
            this.errorMessage = "Terjadi kesalahan saat mengirim komentar";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container-comment");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);     
          }
          });
        },
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
      )  .then(() => {
          const toast = document.createElement("div");
          toast.className = "toast toast-success";
          toast.innerHTML = "Berhasil Membuat Komentar";

          const toastContainer = document.querySelector(".toast-container-comment");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
            location.reload();
          }, 2000);
        })
        .catch((error) => {
          console.error(error);
          if(this.message == ""){
            this.errorMessage = "Konten Komentar tidak boleh kosong";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container-comment");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);     
          } else{
            this.errorMessage = "Terjadi kesalahan saat mengirim komentar";
          const toast = document.createElement("div");
          toast.className = "toast toast-error";
          toast.innerHTML = this.errorMessage;
          const toastContainer = document.querySelector(".toast-container-comment");
          toastContainer.appendChild(toast);

          setTimeout(() => {
            toastContainer.removeChild(toast);
          }, 2000);     
          }
          });},
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
    //  async getprofile() {
    //   return this.Profile.getProfile();
    // },
    // async profilestudent() {
    //   await this.getprofile();
    // },

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
  .toast-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
 .toast-container-comment {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}
.modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.modal {
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 5px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.3);
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
  