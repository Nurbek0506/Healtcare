<template>
  <div>
    <b-button v-b-modal.newPatient variant="primary">
      <svg width="40" height="40" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.32967 1.3344C7.32967 2.0704 6.73287 2.6688 5.99527 2.6688C5.25767 2.6688 4.66087 2.072 4.66087 1.3344C4.66087 0.5968 5.26087 0 5.99687 0C6.73287 0 7.32967 0.5984 7.32967 1.3344ZM11.3937 12.256C11.1361 12.1328 10.8289 12.2416 10.7057 12.4992C9.98887 13.9968 8.45287 14.9648 6.79207 14.9648C4.40167 14.9648 2.45767 13.0208 2.45767 10.6304C2.45767 9.2736 3.07527 8.0192 4.15367 7.1904C4.38087 7.016 4.42247 6.6928 4.24807 6.4656C4.07527 6.24 3.75047 6.1984 3.52487 6.3712C2.18887 7.3984 1.42407 8.9504 1.42407 10.632C1.42407 13.5904 3.83207 16 6.79207 16C8.84647 16 10.7489 14.8 11.6369 12.9456C11.7601 12.688 11.6497 12.3792 11.3937 12.256ZM14.5025 12.6544L11.7217 8.1936C11.5889 7.9792 11.3265 7.9296 11.0449 7.9408H7.54407C7.40167 7.9408 7.28647 7.9248 7.28647 7.9072L7.28967 7.8752V7.3072C7.28967 7.1648 7.31207 7.0544 7.34087 7.056C7.35687 7.0576 7.37447 7.0592 7.39367 7.0592H10.4481C10.7921 7.0592 11.0721 6.7808 11.0721 6.4352C11.0721 6.0912 10.7937 5.8112 10.4481 5.8112H7.39367C7.37447 5.8112 7.35847 5.8128 7.34087 5.816C7.31207 5.8176 7.28967 5.7072 7.28967 5.5648V4.1056C7.28967 3.5504 6.83847 3.1008 6.28487 3.1008H6.00647C5.45287 3.1008 5.00327 3.5504 5.00327 4.1056V9.1536C5.00327 9.7072 5.45287 10.1584 6.00647 10.1584H10.8145C10.9569 10.1584 11.1345 10.2544 11.2145 10.3728C11.6977 11.1024 13.2449 13.44 13.2449 13.44C13.4305 13.7392 13.8657 13.808 14.2129 13.5904C14.5601 13.3744 14.6897 12.9552 14.5025 12.6544Z" fill="#DBDDE0"/></svg>+
    </b-button>
    <b-modal id="newPatient" title="Зарегистрировать нового пациенты" hide-footer >
      <div class="modall__top">
        <h5>Персональные данные</h5>
        <b-button  variant="primary"> 1 </b-button>
      </div>
      <div  class="modall__main d-flex  ">
        <div class="left me-3">
          <b-form-input 
            v-model="patient.name" 
            class="mb-3" 
            placeholder="Введите имя и фамилию"
          >
          </b-form-input>
          <b-form-input  
            v-model="patient.place" 
            class="mb-3" 
            placeholder="Место рождения"
          ></b-form-input>
          <b-form-input  
            v-model="patient.mail" 
            class="mb-3" 
            placeholder="Email"
          ></b-form-input>
          <b-form-select 
            v-model="patient.status" 
            :options="status"
            class="mb-3"
          >
          </b-form-select>
          <b-form-input 
            v-model="patient.phone" 
            class="mb-3" 
            placeholder="Номер телефона"
          >
          </b-form-input>
          <h6>Kаком отделе?</h6>
          <b-form-select
            v-model="patient.section" 
            :options="sections"
            value-field="name"
            text-field="name"
            class="mb-3"
          >
          </b-form-select>
        </div>
        <div class="right">
          <b-form-datepicker 
            id="example-datepicker" 
            v-model="patient.birth" 
            class="mb-3" 
            placeholder="Дата рождения"
          ></b-form-datepicker>
          <b-form-input 
            v-model="patient.adress" 
            class="mb-3" 
            placeholder="Адрес"
          ></b-form-input>
          <b-form-input 
            v-model="patient.work" 
            class="mb-3" 
            placeholder="Где работать?"
          ></b-form-input>
          <b-form-select 
            v-model="patient.educ" 
            :options="education"
            class="mb-3"
          >
          </b-form-select>
          <b-form-input 
            v-model="patient.famphone" 
            class="mb-3" 
            placeholder="Члены семьи номер телефона"
          >
          </b-form-input>
          <h6>Прикрепленный врач</h6>
          <b-form-select
            v-model="patient.doctor" 
            :options="doctors"
            value-field="name"
            text-field="name"
            class="mb-3"
          >
          </b-form-select>
        </div>
      </div>
      <div>
        <p class="my-1" size="sm">Если вы уверены, что информация верна, переходите к следующему</p>
      </div>
      <div class="btns">
        <b-button variant="danger" class="me-3" @click="back(),$bvModal.hide('newPatient')">Отмена</b-button>
        <b-button v-b-modal.newPatient2 variant="success">Следующая</b-button>
      </div>
    </b-modal>
    <b-modal id="newPatient2" title="Зарегистрировать нового пациенты" hide-footer >
      <div class="modall__top">
        <h5>Информация по пациенты</h5>
        <b-button  variant="primary"> 2 </b-button>
      </div>
      <div  class="modall__main d-flex  ">
        <div class="left me-3">
          
          <b-form-input  
            v-model="patient.couse" 
            class="mb-3" 
            placeholder="Причина болезни"
          ></b-form-input>
          <b-form-select
            v-model="patient.blood_group" 
            :options="groups"
            class="mb-3"
          >
          </b-form-select>
          <b-form-input  
            v-model="patient.insurance" 
            class="mb-3" 
            placeholder="Страховая компания"
          ></b-form-input>
          <b-form-input  
            v-model="patient.diagnos" 
            class="mb-3" 
            placeholder="Диагноз"
          ></b-form-input>
          <b-form-select
            v-model="patient.invalid" 
            :options="invalid"
            class="mb-3"
          >
          </b-form-select>
          <b-form-group label="Jinsini kiriting" class="mb-3">
            <b-form-radio v-model="patient.gender" name="gender" value="Erkak">Erkak</b-form-radio>
            <b-form-radio v-model="patient.gender" name="gender" value="Ayol">Ayol</b-form-radio>
          </b-form-group>
        </div>
        <div class="right">
          <b-form-datepicker 
            id="example-datepicker" 
            v-model="patient.enter" 
            class="mb-3" 
            placeholder="Дата прибытия"
          ></b-form-datepicker>
          <b-form-select
            v-model="patient.factor" 
            :options="factors"
            class="mb-3"
          >
          </b-form-select>
          <b-form-input  
            v-model="patient.polis" 
            class="mb-3" 
            placeholder="Страховой полис"
          ></b-form-input>
          <b-form-input  
            v-model="patient.reaction" 
            class="mb-3" 
            placeholder="Аллергические реакции"
          ></b-form-input>
          <b-form-input  
            v-model="patient.weight" 
            class="mb-3" 
            placeholder="Вес пациента"
          ></b-form-input>
          <b-form-input 
            v-model="patient.height" 
            class="mb-3" 
            placeholder="Рост пациента"
          ></b-form-input>
          <b-form-input 
            v-model="patient.photo" 
            class="mb-3" 
            placeholder="Ссылки на фотографии"
          >
          </b-form-input>
          
        </div>
      </div>
      <div>
        <p class="my-1" size="sm">Если вы уверены, что информация верна, сохраните ее</p>
      </div>
      <div class="btns">
        <b-button variant="danger" class="me-3" v-b-modal.newPatient @click="$bvModal.hide('newPatient2')">Назад</b-button>
        <b-button variant="success" @click="addPatient(),$bvModal.hide('newPatient2'),$bvModal.hide('newPatient')">Добавить</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () =>({
    patient: {
      status: null,
      educ: null,
      blood_group: null,
      factor: null,
      invalid: null
    },
    status: [
      { text: 'Семейное положение', value: 'null'},
      { text: 'Не замужем', value: 'Не замужем'},
      { text: 'Замужем', value: 'Замужем'},
      { text: 'Не женат', value: 'Не женат'},
      { text: 'Женат', value: 'Женат'}
    ],
    education: [
      { text: 'Образование', value: 'null'},
      { text: 'Высшее образование', value: 'Высшее образование'},
      { text: 'Неоконченное высшее', value: 'Неоконченное высшее'},
      { text: 'среднее образование', value: 'среднее образование'},
      { text: 'Нет образование', value: 'Нет образование'},
    ],
    groups: [
      { text: 'Группа крови', value: 'null'},
      { text: 'I группа', value: 'I группа'},
      { text: 'II группа', value: 'II группа'},
      { text: 'III группа', value: 'III группа'},
      { text: 'IV группа', value: 'IV группа'},
    ],
    invalid: [
      { text: 'Инвалидность', value: 'null'},
      { text: 'I группа', value: 'I группа'},
      { text: 'II группа', value: 'II группа'},
      { text: 'III группа', value: 'III группа'},
      { text: 'Нет', value: 'Нет'},
    ],
    factors: [
      { text: 'RH faktor', value: 'null'},
      { text: '+', value: '+'},
      { text: '-', value: '-'}
    ]
  }),
  computed: {
    sections() {
      return this.$store.getters.sections
    },
    doctors() {
      return this.$store.getters.doctors
    }
  },
  methods: {
    back() {
      this.patient = {
        status: null,
        educ: null,
        blood_group: null,
        factor: null,
        invalid: null
      }
    },
    addPatient() {
      this.$store.dispatch('addNewPatient', this.patient)
      this.patient = {
        status: null,
        educ: null,
        blood_group: null,
        factor: null,
        invalid: null
      }
    }
  }
}
</script>

<style>

</style>