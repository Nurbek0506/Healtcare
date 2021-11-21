<template>
  <div class="employees">
    <div class="employees__btn">
      <b-button variant="outline-primary" to="/">
        <b-icon-arrow-return-left></b-icon-arrow-return-left>
        Главная страница</b-button>
    </div>
    <div class="row">
      <div class="col-4">
        <b-card
          title="Все врачи"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2XN74BkZpK6YZufFTSLOQVXNuiT3xO_rkAA&usqp=CAU"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-title class="text-center">
            {{ count }}
          </b-card-title>
        </b-card>
      </div>
      <div class="col-4">
        <b-card
          title="Мужчины-врачи"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQilowu0B1dgBiECzgU8zR6B1CNb0eSjO8A9w&usqp=CAU"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-title class="text-center">
            {{ man }}
          </b-card-title>
        </b-card>
      </div>
      <div class="col-4">
        <b-card
          title="Женщины-врачи"
          img-src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScOerokX-5FwgG3iaDTdhjmcuPp9ucEgtnCw&usqp=CAU"
          img-alt="Image"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-title class="text-center">
            {{ woman }}
          </b-card-title>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      
    }
  },
  computed: {
    count(){
      return this.$store.getters.countDoctors
    },
    woman() {
      return this.$store.getters.countWomans
    },
    man() {
      return this.$store.getters.countMans
    }
  }
}
</script>

<style>

</style>