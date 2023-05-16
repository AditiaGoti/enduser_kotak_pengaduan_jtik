<template>
    <div class="mt-24 flex flex-col items-center border-none mb-10">  
    <div class="flex font-bold text-left">
    <p class=" text-xl"> Buat Keluhan</p>
    </div>
        <div>
            <component v-bind:is="steps[currentStep].component" />
        </div>
         <div class="flex justify-between p-2 mt-4 md:mt-6">
            <a href="#" v-on:click="next" class="inline-flex w-full items-center mr-5 px-20 py-2 text-sm font-bold text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Lanjut</a>
            <a href="#" v-on:click="previous" class="inline-flex w-full items-center ml-2 px-20 py-2 text-sm font-bold text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700">Batal</a>
        </div>
    </div>
</template>
<script>
import category from "../components/CreateComplaint/Kategori.vue"
import selectrole from "../components/CreateComplaint/SelectRole.vue"
import complaint from "../components/CreateComplaint/Complaint.vue"

export default {
  name: 'CreateComplaint',
  data(){
    return {
        currentStep:0,
        steps: [
            {
                component : category
            },
            {
                component : selectrole
            },
            {
                component : complaint
            },
        ]
    }
  },
  components: {
    category,
    selectrole,
    complaint,
  },
  methods:{
    next(){
        this.currentStep += 1;
    },
    previous(){
        this.currentStep -= 1;
    },
  }
}
</script>
