import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import HomeViewLecturer from '../views/HomeViewLecturer.vue'
import Detail from '../views/Detail.vue'
import DetailTanggapanUser from '../views/DetailTanggapanUser.vue'
import profile from '../views/Profile.vue'
import editprofile from '../views/EditProfile.vue'
import changepass from '../views/ChangePassword.vue'
import CreateComplaint from '../views/BuatKeluhan.vue'
import LoginUser from '../views/LoginUser.vue'
import LoginLecturer from '../views/LoginLecturer.vue'
import ForgotPass from '../views/ForgotPassword.vue'
import ForgotPassStudent from '../views/ForgotPasswordUser.vue'
import ResetPass from '../views/ResetPassword.vue'
import ResetPassLect from '../views/ResetPassLecturer.vue'
import Keluhan from '../views/Keluhan.vue'
import KeluhanLecturer from '../views/KeluhanLecturer.vue'
import KeluhanUser from '../views/KeluhanMahasiswa.vue'
import Tanggapan from '../views/Tanggapan.vue'
import TanggapanKeluhan from '../views/KeluhanResponded.vue'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginUser
  },
  {
    path: '/loginlecturer',
    name: 'loginlecturer',
    component: LoginLecturer
  },
  {
    path: '/forgotpasslecturer',
    name: 'forgotpasslecturer',
    component: ForgotPass
  },
  {
    path: '/forgotpassstudent',
    name: 'forgotpassstudent',
    component: ForgotPassStudent
  },
  {
    path: '/resetpasswordlecturer',
    name: 'resetpasswordlecturer',
    component: ResetPassLect
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/lecturer',
    name: 'homeLecturer',
    component: HomeViewLecturer
  },
  {
    path: '/detail/:id',
    name: 'detail',
    component: Detail
  },
  {
    path: '/detailtanggapan',
    name: 'detailtanggapan',
    component: DetailTanggapanUser
  },
  {
    path: '/profile',
    name: 'profile',
    component: profile
  },
  {
    path: '/editprofile',
    name: 'editprofile',
    component: editprofile
  },
  {
    path: '/gantipassword',
    name: 'gantipassword',
    component: changepass
  },
  {
    path: '/resetpassword',
    name: 'resetpassword',
    component: ResetPass
  },
  {
    path: '/buatkeluhan',
    name: 'buatkeluhan',
    component: CreateComplaint
  },
  {
    path: '/keluhanpublikasi',
    name: 'keluhanpublikasi',
    component: Keluhan
  },
  {
    path: '/keluhanlecturer',
    name: 'keluhanlecturer',
    component: KeluhanLecturer
  },
  {
    path: '/keluhanmahasiswa',
    name: 'keluhanmahasiswa',
    component: KeluhanUser
  },
  {
    path: '/tanggapan',
    name: 'tanggapan',
    component: Tanggapan
  },
  {
    path: '/tanggapankeluhan',
    name: 'tanggapankeluhan',
    component: TanggapanKeluhan
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
