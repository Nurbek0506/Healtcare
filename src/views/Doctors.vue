<template>
  <div class="doctors">
    <div class="doctors__title">Врачи</div>
    <div class="table__doctor overflow-auto">
      <b-table 
      striped hover 
      :items="doctors" 
      :fields="fields"
      id="my-table"
      :per-page="perPage"
      :current-page="currentPage"
      small
      >
        <template #cell(name)="data">
          <b-avatar :src="getDoctorImg(data.item.id)" size="3rem"></b-avatar>
          {{ getDoctorName(data.item.id) }}
        </template>
        <template #cell(btns)="data">
          <b-button :to="'/doctors/'+data.item.id" variant="primary" class="me-2">
            <b-icon-eye></b-icon-eye>
          </b-button>
          <b-button v-b-modal.editDoctor class="me-2" variant="warning" @click="edit(data.item)">
            <b-icon-pencil-square></b-icon-pencil-square>
          </b-button>
          <b-button @click="del(data.item.id)" variant="danger">
            <b-icon-person-x></b-icon-person-x>
          </b-button>
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
      <ModalDoctor  />
    </div>


    <b-modal id="editDoctor" title="Изменить информацию о враче" hide-footer>
      <div class="modall__top">
        <h5>Персональные данные</h5>
        <b-button variant="primary"> 1 </b-button>
      </div>
      <div class="modall__main d-flex  ">
        <div class="left me-3">
          <b-form-input v-model="doctor.name" class="mb-3" placeholder="Введите имя и фамилию">
          </b-form-input>
          <b-form-input v-model="doctor.place" class="mb-3" placeholder="Место рождения"></b-form-input>
          <b-form-select v-model="doctor.status" :options="options" class="mb-3">
          </b-form-select>
          <b-form-input v-model="doctor.mail" class="mb-3" placeholder="Email">
          </b-form-input>

        </div>
        <div class="right">
          <b-form-datepicker id="example-datepicker" v-model="doctor.birth" class="mb-3" placeholder="Дата рождения">
          </b-form-datepicker>
          <b-form-input v-model="doctor.adress" class="mb-3" placeholder="Адрес"></b-form-input>
          <b-form-select v-model="doctor.educ" :options="education" class="mb-3">
          </b-form-select>
          <b-form-input v-model="doctor.number" class="mb-3" placeholder="Номер телефона">
          </b-form-input>

        </div>
      </div>
      <div>
        <p class="my-1" size="sm">Если вы уверены, что информация верна, переходите к следующему</p>
      </div>
      <div class="btns">
        <b-button variant="danger" class="me-3" @click="$bvModal.hide('editDoctor')">Отмена</b-button>
        <b-button v-b-modal.editDoctor2 variant="success">Следующая</b-button>
      </div>
    </b-modal>
    <b-modal id="editDoctor2" title="Изменить информацию о враче" hide-footer>
      <div class="modall__top">
        <h5>Информация по специальности</h5>
        <b-button variant="primary"> 2 </b-button>
      </div>
      <div class="modall__main d-flex  ">
        <div class="left me-3">
          <b-form-select v-model="doctor.sect" :options="sections" 
          value-field="name"
          text-field="name"
          class="mb-3">
          </b-form-select>
          <b-form-input v-model="doctor.exper" class="mb-3" placeholder="Опит работы"></b-form-input>
          <b-form-datepicker id="example-datepicker" v-model="doctor.data" class="mb-3"
            placeholder="Дата начала работу?"></b-form-datepicker>
          <b-form-group label="Jinsini kiriting" class="mb-3">
            <b-form-radio v-model="doctor.gender" name="gender" value="Erkak">Erkak</b-form-radio>
            <b-form-radio v-model="doctor.gender" name="gender" value="Ayol">Ayol</b-form-radio>
          </b-form-group>
        </div>
        <div class="right">
          <b-form-input v-model="doctor.spec" class="mb-3" placeholder="Специальность"></b-form-input>
          <b-form-input v-model="doctor.grafic" class="mb-3" placeholder="Рабочий график"></b-form-input>
          <b-form-input v-model="doctor.famnum" class="mb-3" placeholder="Члены семьи номер телефона">
          </b-form-input>
          <b-form-input v-model="doctor.photo" class="mb-3" placeholder="Ссылки на фотографии">
          </b-form-input>

        </div>
      </div>
      <div>
        <p class="my-1" size="sm">Если вы уверены, что информация верна, сохраните ее</p>
      </div>
      <div class="btns">
        <b-button variant="danger" class="me-3" v-b-modal.editDoctor @click="$bvModal.hide('editDoctor2')">Назад
        </b-button>
        <b-button variant="success" @click="save(`data.item.id`),$bvModal.hide('editDoctor2'),$bvModal.hide('editDoctor')">Сохранить
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import ModalDoctor from '../components/Modal__doctor.vue'
  export default {

    components: {
      ModalDoctor
    },
    data: () => ({
      currentPage: 1,
      perPage: 5,
      doctor: {
        status: null,
        educ: null,
      },
      options: [
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
      ],
      fields: [{
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
      ],
    }),
    computed: {
      doctors() {
        return this.$store.getters.doctors
      },
      rows() {
        return this.$store.getters.countDoctors
      },
      sections() {
        return this.$store.getters.sections
      }
    },
    methods: {
      getDoctorImg(id) {
        let doctor = this.$store.getters.getDoctorById(id)
        return doctor[0].photo
      },
      getDoctorName(id) {
        let doctor = this.$store.getters.getDoctorById(id)
        return doctor[0].name
      },
      
      del(id) {
        this.$store.dispatch('delDoctor', id)
      },
      edit(item) {
        this.doctor = item
      },
      save() {
        this.$store.dispatch('saveDoctor', this.doctor)
        this.doctor = {
          status: null,
          educ: null,
        }
      }
    }
  }
</script>

<style>

</style>