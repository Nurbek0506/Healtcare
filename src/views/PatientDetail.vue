<template>
  <div class="doctor__detail">
    <div class="doctor__detail--link">
      <b-button to='/patients' variant="info" class="mt-3 ms-3">
        <b-icon-arrow-left-short></b-icon-arrow-left-short>
        Назад
      </b-button>
    </div>
    <div class="doctor__detail--main">
      <div class="detail__main--top">
        <div class="detail__main--img">
          <img :src=patient.photo alt="">
        </div>
        <div class="detail__main--title">
          <div class="detail__main--title--top">
            <div class="main__title--name">{{ patient.name }}</div>
            <div class="main__title--btns">
              <button>

              </button>
              <button>

              </button>
            </div>
          </div>
          <div class="detail__main--title--bottom">
            <div class="title__bottom--left">
              <div class="title__left--line">
                <span class="title--left">Дата посещения:</span>
                <span class="title--right">{{ patient.enter }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Лечебный отдел:</span>
                <span class="title--right">{{ patient.section }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Причина болезна:</span>
                <span class="title--right">{{ patient.couse }}</span>
              </div>
            </div>
            <div class="title__bottom--right">
              <div class="title__left--line">
                <span class="title--left">Дата выхода: </span>
                <span class="title--right">{{ patient.exit }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Ответственный врач:</span>
                <span class="title--right">{{ patient.doctor }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Диагноз:</span>
                <span class="title--right">{{ patient.diagnos }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__main--center">
        <div class="detail__main--bottom--title">
          Персональные данные
        </div>
        <div class="detail__main--bottom--text">
          <div class="main__bottom--text--left">
            <div class="title__left--line">
              <span class="title--left">Дата рождения: </span>
              <span class="title--right">{{ patient.birth }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Адрес: </span>
              <span class="title--right">{{ patient.adress }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Место рождения: </span>
              <span class="title--right">{{ patient.place }}</span>
            </div>
          </div>
          <div class="main__bottom--text--center">
            <div class="title__left--line">
              <span class="title--left">Семейное положение:</span>
              <span class="title--right">{{ patient.status }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Образование:</span>
              <span class="title--right">{{ patient.educ }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Место работы:</span>
              <span class="title--right">{{ patient.work }}</span>
            </div>
          </div>
          <div class="main__bottom--text--right">
            <div class="title__left--line">
              <span class="title--left">Номер телефона:</span>
              <span class="title--right">{{ patient.phone }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Email::</span>
              <span class="title--right">{{ patient.mail }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">От членов семьи <br> номер телефона:</span>
              <span class="title--right">{{ patient.famphone }}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__main--bottom">
        <div class="detail__main--bottom--title">
          Медицинские данные
        </div>
        <div class="detail__main--bottom--text">
          <div class="main__bottom--text--left">
            <div class="title__left--line">
              <span class="title--left">Группа крови: </span>
              <span class="title--right">{{ patient.blood_group }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">RH faktor: </span>
              <span class="title--right">{{ patient.factor }}</span>
            </div>
          </div>
          <div class="main__bottom--text--center">
            <div class="title__left--line">
              <span class="title--left">Страховой полис:</span>
              <span class="title--right">{{ patient.polis }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Страховая компания:</span>
              <span class="title--right">{{ patient.insurance }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Инвалидность:</span>
              <span class="title--right">{{ patient.invalid }}</span>
            </div>
          </div>
          <div class="main__bottom--text--right">
            <div class="title__left--line">
              <span class="title--left">Аллергические реакции:</span>
              <span class="title--right">{{ patient.reaction }}</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Вес::</span>
              <span class="title--right">{{ patient.weight }} kg</span>
            </div>
            <div class="title__left--line">
              <span class="title--left">Рост:</span>
              <span class="title--right">{{ patient.height }} sm</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
      }
    },
    computed: {
      patient() {
        return this.$store.getters.patientId(this.id)
      },
      sections() {
        return this.$store.getters.sections
      },
      doctors() {
        return this.$store.getters.doctors
      }
    },
    methods: {
      getDoctorName(id) {
        let doctor = this.$store.getters.getDoctorById(id)
        return doctor[0].name
      },
    },
    created() {
      this.$store.dispatch('detailPatient', this.id)
    },
  }
</script>

<style>
</style>