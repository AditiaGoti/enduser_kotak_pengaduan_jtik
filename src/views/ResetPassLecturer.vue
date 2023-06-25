<template>
  <div class="home">
    <reset-pass-lect/>
  </div>
</template>

<script>
// @ is an alias to /src
import ResetPassLect from '@/components/ResetPasswordLecturer.vue'

export default {
  name: 'HomeView',
  components: {
    ResetPassLect,
    
  }
}
</script>
