<template>
  <div class="home">
    <navbar/>
    <reset-pass/>
  </div>
</template>

<script>
// @ is an alias to /src
import ResetPass from '@/components/ResetPasswordUser.vue'

export default {
  name: 'HomeView',
  components: {
    ResetPass,
  }
}
</script>
