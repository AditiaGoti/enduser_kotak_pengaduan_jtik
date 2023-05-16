import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Detail from '../views/Detail.vue'
import DetailTanggapanUser from '../views/DetailTanggapanUser.vue'
import profile from '../views/Profile.vue'
import editprofile from '../views/EditProfile.vue'
import changepass from '../views/ChangePassword.vue'
import CreateComplaint from '../views/BuatKeluhan.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/detail',
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
    path: '/buatkeluhan',
    name: 'buatkeluhan',
    component: CreateComplaint
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
