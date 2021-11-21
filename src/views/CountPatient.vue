<template>
  <div class="employees">
    <div class="employees__btn">
      <b-button variant="outline-primary" to="/">
        <b-icon-arrow-return-left></b-icon-arrow-return-left>
        Главная страница</b-button>
    </div>
    <div class="row">
      <div class="col-4">
        <b-card
          title="Все пациенты"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpSPIc_ZkQk9T84b_ieYrI9btqrSJEK2RlV4EtlW1kyslAUtEmZ8X7m3F0zLjNZZXiQwk&usqp=CAU"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-title class="text-center">
            {{ countPatient }}
          </b-card-title>
        </b-card>
      </div>
      <div class="col-4">
        <b-card
          title="Мужчины-пациенты"
          img-src="https://img.freepik.com/free-vector/doctor-visits-patient-hospital-ward-flat-character-vector-illustration-concept_213110-56.jpg?size=626&ext=jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-title class="text-center">
            {{ manPatient }}
          </b-card-title>
        </b-card>
      </div>
      <div class="col-4">
        <b-card
          title="Женщины-пациенты"
          img-src="https://previews.123rf.com/images/estherqueen999/estherqueen9991802/estherqueen999180200188/96525359-cartoon-doctor-with-patient-in-the-hospital.jpg"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-title class="text-center">
            {{ womanPatient }}
          </b-card-title>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    countPatient(){
      return this.$store.getters.countPatient
    },
    womanPatient() {
      return this.$store.getters.womanPatient
    },
    manPatient() {
      return this.$store.getters.manPatient
    }
  }
}
</script>

<style>

</style>