<template>
    <div id="app">
      <div class="left">
        <Navbar/>
      </div>
      <div class="right">
        <Sidebar/>
        <router-view></router-view>
      </div>
    </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';
export default {
  name: 'App',
  components: {
    Navbar,
    Sidebar,
  },
  data: () => ({
    //
  }),
  created() {
    this.$store.dispatch('getAllDoctors')
    this.$store.dispatch('getAllPatients')
    this.$store.dispatch('gettAllSections')
    this.$store.dispatch('getAllChambers')
  },
};
</script>
<style >
@import url('assets/css/style.css');

</style>
