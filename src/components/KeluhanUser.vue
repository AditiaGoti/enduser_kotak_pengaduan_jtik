<template>
    <div class="mt-24 px-36">  
    <p class="font-sans text-2xl text-left font-bold mb-4 ">Keluhan Pengguna</p>
             <div class="flex flex-row">
             <div class="font-bold text-md cursor-pointer">
                <a v-on:click="next" class="mr-5 hover:text-emerald-600">PUBLIKASI</a>
                <a v-on:click="previous" class="hover:text-emerald-600">DITANGGAPI</a>
             </div>
             </div>
             <hr/>
        <div>
            <component v-bind:is="steps[currentStep].component" />
        </div>
    </div>
</template>
<script>
import ComplintPublish from "../components/Complaint/Publikasi.vue"
import ComplaintResponded from "../components/Complaint/TanggapanKeluhan.vue"
import { ComplaintController } from "@/controller/ComplaintController.js";


export default {
  name: 'CreateComplaint',
  data(){
    return {
        currentStep:0,
        steps: [
            {
                component : ComplintPublish
            },
            {
                component : ComplaintResponded
            },
        ]
    }
  },
  components: {
    ComplintPublish,
    ComplaintResponded
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
