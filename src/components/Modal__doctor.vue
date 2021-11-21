<template>
  <div>
    <b-button v-b-modal.newDoctor variant="primary">
      <svg width="40" height="40" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_0:3449)"><path d="M24.4473 26.1468C24.3406 25.1255 24.314 24.0961 24.2126 23.0721C24.0606 21.5388 23.842 20.0135 23.3886 18.5335C23.1433 17.7415 22.77 17.0535 22.026 16.6161C21.314 16.1975 20.538 15.9495 19.7593 15.7068C19.4873 15.6215 19.5353 15.8135 19.5513 15.9521C19.6233 16.6215 19.562 17.2828 19.4233 17.9361C19.378 18.1468 19.45 18.2428 19.6313 18.3468C20.3993 18.7761 20.8366 19.4321 20.8846 20.3201C20.9326 21.2348 20.746 22.1335 20.69 23.0401C20.6526 23.6561 20.586 24.2748 20.3273 24.8481C20.0153 25.5415 19.4766 25.8161 18.7406 25.6748C18.4606 25.6215 18.2766 25.4935 18.322 25.1841C18.3673 24.8801 18.578 24.7735 18.858 24.8295C19.21 24.8988 19.4153 24.7335 19.5593 24.4455C19.658 24.2455 19.7113 24.0268 19.7326 23.8055C19.8366 22.7841 19.9486 21.7628 20.0313 20.7388C20.106 19.8135 19.61 19.1121 18.7886 18.9255C17.9406 18.7335 17.21 19.1175 16.8606 19.9815C16.5806 20.6721 16.3513 21.3841 16.0846 22.0828C15.9326 22.4775 15.802 22.8748 15.722 23.2881C15.618 23.8241 15.7246 24.0215 16.2206 24.2455C16.458 24.3521 16.5726 24.5201 16.49 24.7735C16.4073 25.0295 16.2206 25.1015 15.9646 25.0535C15.234 24.9148 14.81 24.3948 14.8233 23.6455C14.8286 23.3388 14.874 23.0428 14.9593 22.7495C15.274 21.6615 15.6873 20.6081 16.1086 19.5575C16.4873 18.6135 17.242 18.0935 18.2686 18.0215C18.4686 18.0055 18.554 17.9495 18.5913 17.7548C18.7166 17.1068 18.7353 16.4588 18.6766 15.8028C18.65 15.4935 18.53 15.3255 18.2073 15.2748C17.946 15.2348 17.6846 15.1468 17.4393 15.0455C17.194 14.9468 17.0873 14.9761 17.002 15.2535C16.7006 16.2615 16.2793 17.2241 15.7913 18.1575C15.5566 18.6081 15.2846 19.0401 14.9833 19.5628C14.8633 18.9015 14.7726 18.3388 14.6553 17.7788C14.602 17.5281 14.6073 17.3015 14.7166 17.0641C14.778 16.9281 14.9406 16.7681 14.778 16.6215C14.5193 16.3868 14.2366 16.1815 13.962 15.9655C13.954 15.9575 13.9166 15.9761 13.9006 15.9895C13.634 16.2188 13.33 16.4161 13.122 16.6881C12.9966 16.8508 13.2393 17.0641 13.2926 17.2615C13.3033 17.3068 13.3273 17.3548 13.322 17.3975C13.21 18.0855 13.0926 18.7708 12.9673 19.5228C12.8793 19.4188 12.8393 19.3788 12.8126 19.3335C12.1086 18.1975 11.5353 17.0028 11.1006 15.7388C11.0126 15.4801 11.0206 15.0801 10.7993 14.9975C10.5913 14.9201 10.2793 15.1255 10.0126 15.2001C9.87396 15.2401 9.75129 15.2775 9.69796 15.4401C9.59662 15.7548 9.45262 16.0535 9.37796 16.3681C8.88729 18.4161 9.00996 20.4428 9.64196 22.4455C9.73796 22.7495 9.85262 22.9148 10.1993 22.9815C10.8686 23.1148 11.2286 23.8481 10.9993 24.4828C10.7593 25.1521 10.0366 25.4668 9.40729 25.1788C8.77262 24.8908 8.50062 24.1095 8.86862 23.5281C9.00196 23.3175 8.98596 23.1548 8.91396 22.9468C8.23662 21.0028 8.05529 19.0135 8.36729 16.9761C8.43929 16.5068 8.59662 16.0588 8.70329 15.5628C7.77262 15.8348 6.87929 16.0615 6.07396 16.5308C5.48196 16.8748 5.02329 17.3255 4.76462 17.9815C4.45529 18.7681 4.26862 19.5841 4.11129 20.4108C3.74863 22.3308 3.63662 24.2801 3.48996 26.2241C3.44996 26.7548 3.68729 27.0828 4.10862 27.3308H23.8126C24.314 27.0935 24.506 26.7148 24.4473 26.1468ZM9.54596 9.7468C9.72729 9.7948 9.81262 9.8828 9.88196 10.0481C10.29 11.0241 10.794 11.9415 11.5433 12.7041C12.1353 13.3095 12.8206 13.7628 13.69 13.8508C14.7833 13.9628 15.6366 13.4748 16.3753 12.7361C17.1273 11.9815 17.65 11.0748 18.058 10.0935C18.114 9.96014 18.1326 9.79214 18.3353 9.77347C19.0633 9.70414 19.6313 8.55214 19.5113 7.8508C19.4766 7.6508 19.402 7.4668 19.1833 7.45347C18.9113 7.4348 18.962 7.2908 19.002 7.1228C19.146 6.52014 19.2073 5.90414 19.2366 5.37614C19.2553 4.84014 19.2046 4.3948 19.098 3.96814C18.9353 3.3228 18.602 2.76814 17.9966 2.4588C17.6393 2.2748 17.3646 2.07214 17.2446 1.6748C17.1993 1.52014 17.0473 1.4188 16.922 1.3148C16.458 0.930803 15.9086 0.762803 15.338 0.706803C13.6286 0.538803 12.034 0.904137 10.6233 1.8988C9.64996 2.58147 8.98062 3.4828 8.84462 4.70947C8.75396 5.51747 8.79929 6.31747 8.95129 7.1148C8.98329 7.28547 9.05262 7.46414 8.75129 7.4588C8.61529 7.45614 8.52729 7.5708 8.48196 7.70414C8.23129 8.4188 8.80996 9.55214 9.54596 9.7468Z" fill="white"/></g><defs><clipPath id="clip0_0:3449"><rect width="26.6667" height="26.6667" fill="white" transform="translate(0.666748 0.666687)"/></clipPath></defs></svg>+
    </b-button>

    <b-modal id="newDoctor" title="Зарегистрировать нового врача" hide-footer >
      <div class="modall__top">
        <h5>Персональные данные</h5>
        <b-button  variant="primary"> 1 </b-button>
      </div>
      <div  class="modall__main d-flex  ">
        <div class="left me-3">
          <b-form-input 
            v-model="doctor.name" 
            class="mb-3" 
            placeholder="Введите имя и фамилию"
          >
          </b-form-input>
          <b-form-input  
            v-model="doctor.place" 
            class="mb-3" 
            placeholder="Место рождения"
          ></b-form-input>
          <b-form-select 
            v-model="doctor.status" 
            :options="options"
            class="mb-3"
          >
          </b-form-select>
          <b-form-input 
            v-model="doctor.mail" 
            class="mb-3" 
            placeholder="Email"
          >
          </b-form-input>
          
        </div>
        <div class="right">
          <b-form-datepicker 
            id="example-datepicker" 
            v-model="doctor.birth" 
            class="mb-3" 
            placeholder="Дата рождения"
          ></b-form-datepicker>
          <b-form-input 
            v-model="doctor.adress" 
            class="mb-3" 
            placeholder="Адрес"
          ></b-form-input>
          <b-form-select 
            v-model="doctor.educ" 
            :options="education"
            class="mb-3"
          >
          </b-form-select>
          <b-form-input 
            v-model="doctor.number" 
            class="mb-3" 
            placeholder="Номер телефона"
          >
          </b-form-input>
          
        </div>
      </div>
      <div>
        <p class="my-1" size="sm">Если вы уверены, что информация верна, переходите к следующему</p>
      </div>
      <div class="btns">
        <b-button variant="danger" class="me-3" @click="back(),$bvModal.hide('newDoctor')">Отмена</b-button>
        <b-button v-b-modal.newDoctor2 variant="success">Следующая</b-button>
      </div>
    </b-modal>
    <b-modal id="newDoctor2" title="Зарегистрировать нового врача" hide-footer >
      <div class="modall__top">
        <h5>Информация по специальности</h5>
        <b-button  variant="primary"> 2 </b-button>
      </div>
      <div  class="modall__main d-flex  ">
        <div class="left me-3">
          <h6>Kаком отделе работает?</h6>
          <b-form-select
            v-model="doctor.sect" 
            :options="sections"
            value-field="name"
            text-field="name"
            class="mb-3"
          >
          </b-form-select>
          <b-form-input  
            v-model="doctor.exper" 
            class="mb-3" 
            placeholder="Опит работы"
          ></b-form-input>
          <b-form-datepicker 
            id="example-datepicker" 
            v-model="doctor.data" 
            class="mb-3" 
            placeholder="Дата начала работу?"
          ></b-form-datepicker>
          <b-form-group label="Jinsini kiriting" class="mb-3">
            <b-form-radio v-model="doctor.gender" name="gender" value="Erkak">Erkak</b-form-radio>
            <b-form-radio v-model="doctor.gender" name="gender" value="Ayol">Ayol</b-form-radio>
          </b-form-group>
        </div>
        <div class="rightt">
          <b-form-input  
            v-model="doctor.spec" 
            class="mb-3" 
            placeholder="Специальность"
          ></b-form-input>
          <b-form-input 
            v-model="doctor.grafic" 
            class="mb-3" 
            placeholder="Рабочий график"
          ></b-form-input>
          <b-form-input 
            v-model="doctor.famnum" 
            class="mb-3" 
            placeholder="Члены семьи номер телефона"
          >
          </b-form-input>
          <b-form-input 
            v-model="doctor.photo" 
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
        <b-button variant="danger" class="me-3" v-b-modal.newDoctor @click="$bvModal.hide('newDoctor2')">Назад</b-button>
        <b-button variant="success" @click="add(),$bvModal.hide('newDoctor2'),$bvModal.hide('newDoctor')">Добавить</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () =>({
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
  }),
  computed: {
    sections() {
      return this.$store.getters.sections
    }
  },
  methods: {
    back() {
      this.doctor = {
        status: null,
        educ: null,
      }
    },
    add() {
      this.$store.dispatch('addNewDoctor', this.doctor)
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