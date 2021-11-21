<template>
  <div class="doctors">
    <div class="doctors__title">Врачи</div>
    <div class="table__doctor overflow-auto">
      <b-table 
      striped hover 
      :items="doctors" 
      :fields="fields"
      >
        <template #cell(name)="data">
          <b-avatar :src="getDoctorImg(data.item.id)" size="3rem"></b-avatar>
          {{ getDoctorName(data.item.id) }}
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [
        {
          key: "name",
          label: "Имя и фамилия"
        },
        {
          key: "mail",
          label: "Эл. адрес"
        },
        {
          key: "spec",
          label: "Специальность"
        },
        {
          key: "sect",
          label: "Рабочий отдел"
        },
        {
          key: "number",
          label: "Номер телефон"
        },
        {
          key: "btns",
          label: ""
        }
      ]
    }
    
  },
  computed: {
    doctors() {
      return this.$store.getters.doctors
    },
  },
  methods: {
    getDoctorImg(id) {
      let doctor = this.$store.getters.getDoctorById(id)
      return doctor[0].photo
    },
    getDoctorName(id) {
      let doctor = this.$store.getters.getDoctorById(id)
      return doctor[0].name
    }
  }
}
</script>

<style>

</style>