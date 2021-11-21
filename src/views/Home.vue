<template>
  <div class="home">
    <div class="home__top">
      <Static />
    </div>
    <div class="home__center">
      <Doctor />
    </div>
    <div class="home__bottom">
      <Patient />
    </div>
  </div>
</template>

<script>
import Static from '../components/Static.vue'
import Doctor from '../components/HomeDoctor.vue'
import Patient from '../components/HomePatient.vue'

  export default {
    name: 'Home',
    components: {
      Static,
      Doctor,
      Patient
    },
    
    
  }
</script>
