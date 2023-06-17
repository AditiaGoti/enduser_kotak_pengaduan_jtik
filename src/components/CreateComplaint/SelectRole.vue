<template>
    <div class="text-left border-none w-[500px] p-4">
      <ol class="flex items-center w-full p-3 space-x-2 text-sm font-medium mx-4 text-center text-gray-500 bg-white sm:text-base sm:p-1 mb-4 sm:space-x-4">
    <li class="flex items-center">
        
      <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0">
            1
        </span>
        Kategori
        <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center text-blue-600 dark:text-blue-500">
        <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-blue-600 rounded-full shrink-0">
            2
        </span>
        Pilih <span class="hidden sm:inline-flex sm:ml-2">Role</span>
        <svg aria-hidden="true" class="w-4 h-4 ml-2 sm:ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path></svg>
    </li>
    <li class="flex items-center">
        <span class="flex items-center justify-center w-5 h-5 mr-2 text-xs border border-gray-500 rounded-full shrink-0">
            3
        </span>
                Isi Pengaduan

    </li>
</ol>

        <p class="font-bold text-md my-3"> Kepada Siapa Pengaduan diajukan ? </p>
        <p class="mb-3"> Pilih jabatan / Role yang ditujukan dalam penyampaian pengaduan</p>
        <div>
<label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Role</label>
<select id="countries" v-model="lecturer_type" @change="emitSelectedRole" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 menu">
  <option v-for="admin in adminList" :key="admin._id" :value="admin._id">{{ admin.name }}</option>
</select>

        </div>
    </div>
</template>
<script>
import Logo from "@/assets/img/PENGADUAN.png";
import { RoleController } from "@/controller/RoleController.js";

export default {
  name: 'KetegoriKeluhan',
  props: ['selectedRole'],
  data()
{
  return{
  Logo,
  adminList: [],
  lecturer_type:"",
  meta: {
        page: 1,
        size: "",
      },
  Role : new RoleController(false,false,"")
  }
},
computed:{
  isError() {
      return this.Role.error;
    },
    AdminList() {
      return this.Role.lists;
    },
    errorCause() {
      return this.Role.errorCause;
    },
},
mounted (){
  this.getAdmin();
},
methods :{
  emitSelectedRole() {
      this.$emit('selected-role', this.lecturer_type); // Emit the selected role ID to the parent component
    },
  async getAdminType(page, size) {
      return this.Role.getAdminType(page, size);
    },
    async getAdmin() {
    try {
      const response = await this.Role.getAdminType(this.meta.page, this.meta.size);
      this.adminList = response.data.data.list; // Assuming the response contains an array of admin objects
      // console.log(response.data.data.list,"respon")
    } catch (error) {
      console.error(error);
    }
  },
}
}
</script>