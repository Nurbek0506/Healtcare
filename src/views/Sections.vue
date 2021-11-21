<template>
  <div class="section"> 
    <div class="section__top">
      <div class="section__title">
        Отделы
      </div>
      <b-button v-b-modal.sectionModal class="">Добавить новый отдель
      </b-button>
    </div>
    <b-table striped hover :items="sections" :fields="fields">
      <template #cell(btns)="data">
        <div class="d-flex justify-content-end">
          <b-button v-b-modal.editSection class="me-2" variant="warning" @click="editSection(data.item)">
            <b-icon-pencil-square></b-icon-pencil-square>
          </b-button>
          <b-button @click="delSection(data.item.id)" variant="danger">
            <b-icon-person-x></b-icon-person-x>
          </b-button>
        </div>
      </template>
    </b-table>

    <b-modal id="sectionModal" title="Добавить новый отдель" hide-footer>
      <b-form-input v-model="section.name" placeholder="Введите название нового отдела"></b-form-input>
      <div class="btns">
        <b-button variant="danger" class="me-3"  @click="back(),$bvModal.hide('sectionModal')">Отмена</b-button>
        <b-button variant="success" @click="addSection(),$bvModal.hide('sectionModal')">Добавить</b-button>
      </div>
    </b-modal>
    <b-modal id="editSection" title="Добавить новый отдель" hide-footer>
      <b-form-input v-model="section.name" placeholder="Введите название нового отдела"></b-form-input>
      <div class="btns">
        <b-button variant="danger" class="me-3"  @click="back(),$bvModal.hide('editSection')">Отмена</b-button>
        <b-button variant="success" @click="saveSection(),$bvModal.hide('editSection')">Сохранить</b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data: () => ({
    section: {},
    fields: [
      { key: 'name',label: 'Названые отделы'},
      { key: 'btns',label: ''},
    ]
  }),
  computed: {
    sections() {
      return this.$store.getters.sections
    }
  },
  methods: {
    addSection() {
      this.$store.dispatch('addSection',this.section)
      this.section = {}
    },
    delSection(id) {
      this.$store.dispatch('delSection', id)
    },
    editSection(item) {
      this.section = item
    },
    saveSection() {
      this.$store.dispatch('saveSection', this.section)
      this.section = {}
    },
    back() {
      this.section = {}
    }
  }
}
</script>

<style>
</style>