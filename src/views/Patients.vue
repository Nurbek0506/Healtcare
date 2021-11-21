<template>
  <div class="patients">
    <div class="patients__title">Пациенты</div>
    <div class="table__patients">
      <b-table 
      striped hover 
      :items="patients" 
      :fields="fields"
      id="my-table"
      :per-page="perPage"
      :current-page="currentPage"
      small
      >
        <template #cell(name)="data">
          <b-avatar :src="getPatientImg(data.item.id)" size="3rem"></b-avatar>
          {{ getPatientName(data.item.id) }}
        </template>
        <template #cell(btns)="data">
          <div class="d-flex justify-content-end">
            <b-button :to="'/patients/'+data.item.id" variant="primary" class="me-2">
              <b-icon-eye></b-icon-eye>
            </b-button>
            <b-button v-b-modal.editPatient class="me-2" variant="warning" @click="editPatient(data.item)">
              <b-icon-pencil-square></b-icon-pencil-square>
            </b-button>
            <b-button @click="delPatient(data.item.id)" variant="danger">
              <b-icon-person-x></b-icon-person-x>
            </b-button>
          </div>
        </template>
      </b-table>


      <p class="mt-3 mb-3 mx-3">Текущая страница: {{ currentPage }}</p>
      <b-pagination
        class="mx-3"
        v-model="currentPage"
        :total-rows="rows"
        :per-page="perPage"
        aria-controls="my-table"
      ></b-pagination>
    </div>

    <div class="d-flex justify-content-end">
      <ModalPatient />
    </div>


    <b-modal id="editPatient" title="Изменить информацию о пациенты" hide-footer>
      <div class="modall__top">
        <h5>Персональные данные</h5>
        <b-button variant="primary"> 1 </b-button>
      </div>
      <div class="modall__main d-flex  ">
        <div class="left me-3">
          <b-form-input v-model="patient.name" class="mb-3" placeholder="Введите имя и фамилию">
          </b-form-input>
          <b-form-input v-model="patient.place" class="mb-3" placeholder="Место рождения"></b-form-input>
          <b-form-input v-model="patient.mail" class="mb-3" placeholder="Email"></b-form-input>
          <b-form-select v-model="patient.status" :options="status" class="mb-3">
          </b-form-select>
          <b-form-input v-model="patient.phone" class="mb-3" placeholder="Номер телефона">
          </b-form-input>

        </div>
        <div class="right">
          <b-form-datepicker id="example-datepicker" v-model="patient.birth" class="mb-3" placeholder="Дата рождения">
          </b-form-datepicker>
          <b-form-input v-model="patient.adress" class="mb-3" placeholder="Адрес"></b-form-input>
          <b-form-input v-model="patient.work" class="mb-3" placeholder="Где работать?"></b-form-input>
          <b-form-select v-model="patient.educ" :options="education" class="mb-3">
          </b-form-select>
          <b-form-input v-model="patient.famphone" class="mb-3" placeholder="Члены семьи номер телефона">
          </b-form-input>
        </div>
      </div>
      <div>
        <p class="my-1" size="sm">Если вы уверены, что информация верна, переходите к следующему</p>
      </div>
      <div class="btns">
        <b-button variant="danger" class="me-3" @click="$bvModal.hide('editPatient')">Отмена</b-button>
        <b-button v-b-modal.editPatient2 variant="success">Следующая</b-button>
      </div>
    </b-modal>
    <b-modal id="editPatient2" title="Изменить информацию о пациенты" hide-footer>
      <div class="modall__top">
        <h5>Информация по пациенты</h5>
        <b-button variant="primary"> 2 </b-button>
      </div>
      <div class="modall__main d-flex  ">
        <div class="left me-3">
          <h6>Kаком отделе?</h6>
          <b-form-select v-model="patient.section" :options="sections" value-field="name" text-field="name" class="mb-3">
          </b-form-select>
          <b-form-input v-model="patient.couse" class="mb-3" placeholder="Причина болезни"></b-form-input>
          <b-form-select v-model="patient.blood_group" :options="groups" class="mb-3">
          </b-form-select>
          <b-form-input v-model="patient.insurance" class="mb-3" placeholder="Страховая компания"></b-form-input>
          <b-form-input v-model="patient.diagnos" class="mb-3" placeholder="Диагноз"></b-form-input>
          <b-form-select v-model="patient.invalid" :options="invalid" class="mb-3">
          </b-form-select>
          <b-form-group label="Jinsini kiriting" class="mb-3">
            <b-form-radio v-model="patient.gender" name="gender" value="Erkak">Erkak</b-form-radio>
            <b-form-radio v-model="patient.gender" name="gender" value="Ayol">Ayol</b-form-radio>
          </b-form-group>
        </div>
        <div class="right">
          <h6>Прикрепленный врач</h6>
          <b-form-select v-model="patient.doctor" :options="doctors" value-field="name" text-field="name" class="mb-3">
          </b-form-select>
          <b-form-datepicker id="example-datepicker" v-model="patient.enter" class="mb-3" placeholder="Дата прибытия">
          </b-form-datepicker>
          <b-form-select v-model="patient.factor" :options="factors" class="mb-3">
          </b-form-select>
          <b-form-input v-model="patient.polis" class="mb-3" placeholder="Страховой полис"></b-form-input>
          <b-form-input v-model="patient.reaction" class="mb-3" placeholder="Аллергические реакции"></b-form-input>
          <b-form-input v-model="patient.weight" class="mb-3" placeholder="Вес пациента"></b-form-input>
          <b-form-input v-model="patient.height" class="mb-3" placeholder="Рост пациента"></b-form-input>
          <b-form-input v-model="patient.photo" class="mb-3" placeholder="Ссылки на фотографии">
          </b-form-input>

        </div>
      </div>
      <div>
        <p class="my-1" size="sm">Если вы уверены, что информация верна, сохраните ее</p>
      </div>
      <div class="btns">
        <b-button variant="danger" class="me-3" v-b-modal.editPatient @click="$bvModal.hide('editPatient2')">Назад
        </b-button>
        <b-button variant="success" @click="savePatient(),$bvModal.hide('editPatient2'),$bvModal.hide('editPatient')">Сохранить
          </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import ModalPatient from '../components/Modal__patient.vue'
  export default {

    components: {
      ModalPatient
    },
    data: () => ({
      perPage: 5,
      currentPage: 1,
      patient: {
        status: null,
        educ: null,
        blood_group: null,
        factor: null,
        invalid: null
      },
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
          key: "doctor",
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
      patients() {
        return this.$store.getters.patients
      },
      sections() {
        return this.$store.getters.sections
      },
      doctors() {
        return this.$store.getters.doctors
      },
      rows() {
        return this.$store.getters.countPatient
      }
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
      delPatient(id) {
        this.$store.dispatch('delPatient', id)
      },
      editPatient(item) {
        this.patient = item
      },
      savePatient() {
        this.$store.dispatch('savePatient', this.patient)
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