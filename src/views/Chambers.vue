<template>
  <div class="rooms"> 
    <div class="room__top">
      <div class="room__title">
        Палаты
      </div>
      <b-button v-b-modal.chambersModal class="">Добавить новая палата
      </b-button>
    </div>
    <b-table striped hover :items="chambers" :fields="fields">
      <template #cell(btns)="data">
        <div class="d-flex justify-content-end">
          <b-button v-b-modal.editChambers class="me-2" variant="warning" @click="editChamber(data.item)">
            <b-icon-pencil-square></b-icon-pencil-square>
          </b-button>
          <b-button @click="delChamber(data.item.id)" variant="danger">
            <b-icon-person-x></b-icon-person-x>
          </b-button>
        </div>
      </template>
      
    </b-table>

    <b-modal id="chambersModal" title="Добавить новая палата" hide-footer>
      <h5>Выберите отдель</h5>
      <b-form-select 
        v-model="chamber.sect" 
        :options="sections"
        value-field="name"
        text-field="name"
        class="mb-3"
      >
      </b-form-select>
      <b-form-input v-model="chamber.num" placeholder="Например, 1-палата"></b-form-input>
      <div class="btns">
        <b-button variant="danger" class="me-3"  @click="back(),$bvModal.hide('chambersModal')">Отмена</b-button>
        <b-button variant="success" @click="addChamber(),$bvModal.hide('chambersModal')">Добавить</b-button>
      </div>
    </b-modal>
    <b-modal id="editChambers" title="Изменить палаты" hide-footer>
      <h5>Выберите отдель</h5>
      <b-form-select 
        v-model="chamber.sect" 
        :options="sections"
        value-field="name"
        text-field="name"
        class="mb-3"
      >
      </b-form-select>
      <b-form-input v-model="chamber.num" placeholder="Например, 1-палата"></b-form-input>
      <div class="btns">
        <b-button variant="danger" class="me-3"  @click="back(),$bvModal.hide('editChambers')">Отмена</b-button>
        <b-button variant="success" @click="saveChamber(),$bvModal.hide('editChambers')">Сохранить</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    chamber: {},
    fields: [
      { key: 'sect',label: 'Названые отделы'},
      { key: 'num',label: 'Номер палаты'},
      { key: 'btns',label: ''},
    ]
  }),
  computed: {
    sections() {
      return this.$store.getters.sections
    },
    chambers() {
      return this.$store.getters.chambers
    }
  },
  methods: {
    addChamber() {
      this.$store.dispatch('addChambers',this.chamber)
      this.chamber = {}
    },
    delChamber(id) {
      this.$store.dispatch('delChamber', id)
    },
    editChamber(item) {
      this.chamber = item
    },
    saveChamber() {
      this.$store.dispatch('saveChamber', this.chamber)
      this.chamber = {}
    },
    back() {
      this.chamber = {}
    }
  }
}
</script>

<style>
</style>