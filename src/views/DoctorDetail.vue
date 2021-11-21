<template>
  <div>
    <div class="doctor__detail">
      <div class="doctor__detail--link">
        <b-button to='/doctors' variant="info" class="mt-3 ms-3">
          <b-icon-arrow-left-short></b-icon-arrow-left-short>
          Назад
        </b-button>
        
      </div>
      <div class="doctor__detail--main">
        <div class="detail__main--top">
          <div class="detail__main--img">
            <img :src='doctors.photo' alt="">
          </div>
          <div class="detail__main--title">
            <div class="detail__main--title--top">
              <div class="main__title--name">{{ doctors.name }}</div>
            </div>
            <div class="detail__main--title--bottom">
              <div class="title__bottom--left">
                <div class="title__left--line">
                  <span class="title--left">Специальность:</span>
                  <span class="title--right">{{ doctors.spec }}</span>
                </div>
                <div class="title__left--line">
                  <span class="title--left">Рабочий отдел:</span>
                  <span class="title--right">{{ doctors.sect }}</span>
                </div>
                <div class="title__left--line">
                  <span class="title--left">Опыт работы:</span>
                  <span class="title--right">{{ doctors.exper }}</span>
                </div>
              </div>
              <div class="title__bottom--right">
                <div class="title__left--line">
                  <span class="title--left">Дата начала работы: </span>
                  <span class="title--right">{{ doctors.data }}</span>
                </div>
                <div class="title__left--line">
                  <span class="title--left">График работы:</span>
                  <span class="title--right">{{ doctors.grafic }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="detail__main--bottom">
          <div class="detail__main--bottom--title">
            Персональные данные
          </div>
          <div class="detail__main--bottom--text">
            <div class="main__bottom--text--left">
              <div class="title__left--line">
                <span class="title--left">Дата рождения: </span>
                <span class="title--right">{{ doctors.birth }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Адрес: </span>
                <span class="title--right">{{ doctors.adress }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Место рождения: </span>
                <span class="title--right">{{ doctors.place }}</span>
              </div>
            </div>
            <div class="main__bottom--text--center">
              <div class="title__left--line">
                <span class="title--left">Семейное положение:</span>
                <span class="title--right">{{ doctors.status }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Образование:</span>
                <span class="title--right">{{ doctors.educ }}</span>
              </div>
            </div>
            <div class="main__bottom--text--right">
              <div class="title__left--line">
                <span class="title--left">Номер телефона:</span>
                <span class="title--right">{{ doctors.number }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">Email::</span>
                <span class="title--right">{{ doctors.mail }}</span>
              </div>
              <div class="title__left--line">
                <span class="title--left">От членов семьи <br> номер телефона:</span>
                <span class="title--right">{{ doctors.famnum }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="detail__btn">
        <b-button variant="primary" class="me-3 mb-3" v-b-modal.newActivity>
          <b-icon-plus></b-icon-plus>
          Новая деятелность
        </b-button>
      </div>
      
    </div>
    <div class="work__detail">
      <div class="work__detail--title">
        Трудовая деятельность
      </div>
      <div class="work__detail--table">
        <b-table striped hover :items="activities" :fields="fields">
          <template #cell(workplace)="data">
            {{data.item.workplace_from}} - {{data.item.workplace_to}}
          </template>
          <template #cell(btns)="data">
            <div class="text-end">
              <b-button class="me-3" variant="warning" @click="editWork(data.item)">
                <b-icon-pencil-square></b-icon-pencil-square>
              </b-button>
              <b-button @click="delWork(data.item.id)" variant="danger">
                <b-icon-person-x></b-icon-person-x>
              </b-button>
            </div>
          </template>
        </b-table>
      </div>
      <b-modal id="newActivity" title="Новая деятелность" hide-footer>
        <div class="modall__main d-flex  ">
          <div class="left me-3">
            <b-form-input v-model="activity.workplace_name" class="mb-3" placeholder="Название рабочего место">
            </b-form-input>
            <b-form-datepicker id="example-datepicker" v-model="activity.workplace_from" class="mb-3"
              placeholder="Когда начал работать">
            </b-form-datepicker>
          </div>
          <div class="right">
            <b-form-input v-model="activity.workplace_career" class="mb-3" placeholder="Карьера">
            </b-form-input>
            <b-form-datepicker id="example-datepicker" v-model="activity.workplace_to" class="mb-3"
              placeholder="Когда ушел">
            </b-form-datepicker>
          </div>
        </div>
        <div class="btns">
          <b-button variant="danger" class="me-3" @click="backActivity(),$bvModal.hide('newActivity')">Отмена</b-button>
          <b-button v-b-modal.newDoctor2 variant="success" @click="addActivity(),$bvModal.hide('newActivity')">Добавить
          </b-button>
        </div>
      </b-modal>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        
        activity: {},
        fields: [{
            key: "workplace_name",
            label: "Название рабочего место"
          },
          {
            key: "workplace",
            label: "Продолжительность"
          },
          {
            key: "workplace_career",
            label: "Карьера"
          },
          {
            key: "btns",
            label: ""
          }
        ],
      }
    },
    computed: {
      doctors() {
        return this.$store.getters.doctorId(this.id)
      },
      sections() {
        return this.$store.getters.sections
      },
      activities() {
        return this.$store.getters.activities
      }
    },
    created() {
      this.$store.dispatch('detailDoctor', this.id)
      this.$store.dispatch('getAllActivity')
    },
    methods: {
      backActivity() {
        this.activity = {}
      },
      addActivity() {
        this.$store.dispatch('addActivity', this.activity)
        this.activity = {}
      },
    }
  }
</script>

<style>
</style>