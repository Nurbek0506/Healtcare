<template>
  <div class="patients">
    <div class="patients__title">Пациенты</div>
    <div class="table__patients">
      <b-table 
      striped hover 
      :items="patients" 
      :fields="fields"
      >
        <template #cell(name)="data">
          <b-avatar :src="getPatientImg(data.item.id)" size="3rem"></b-avatar>
          {{ getPatientName(data.item.id) }}
        </template>
      </b-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fields: [{
          key: "name",
          label: "Имя и фамилия"
        },
        {
          key: "mail",
          label: "Эл. адрес"
        },
        {
          key: "enter",
          label: "Дата прибытия"
        },
        {
          key: "doctors",
          label: "Прикрепленный врач"
        },
        {
          key: "diagnos",
          label: "Диагноз"
        },
        {
          key: "btns",
          label: ""
        }
      ],
    }
  },
  computed: {
    patients() {
      return this.$store.getters.patients
    },
  },
  methods: {
    getPatientImg(id) {
      let patient = this.$store.getters.getPatientById(id)
      return patient[0].photo
    },
    getPatientName(id) {
      let patient = this.$store.getters.getPatientById(id)
      return patient[0].name
    },
  }
}
</script>

<style>

</style>