<template>
  <div class="chambers">
    <div class="employees__btn">
      <b-button variant="outline-primary" to="/">
        <b-icon-arrow-return-left></b-icon-arrow-return-left>
        Главная страница</b-button>
    </div>
    <div class="row mt-4">
      <div class="col-12">
        <b-card bg-variant="light" header="Все палаты" class="text-center">
          <b-card-text>{{ countChamber }}</b-card-text>
        </b-card>
      </div>
    </div>
    <div class="row mt-4">
        <div class="col-4">
          <b-card bg-variant="primary" text-variant="white" header="Невропатология" class="text-center">
            <b-card-text>{{ countNevrologiya }}</b-card-text>
          </b-card>
        </div>
        <div class="col-4">
          <b-card bg-variant="secondary" text-variant="white" header="Хирургия" class="text-center">
            <b-card-text>{{ countXirurgiya }}</b-card-text>
          </b-card>
        </div>
        <div class="col-4">
          <b-card bg-variant="success" text-variant="white" header="Терапия" class="text-center">
            <b-card-text>{{ countTerapiya }}</b-card-text>
          </b-card>
        </div>
    </div>
    <div class="row mt-4">
        <div class="col-4">
          <b-card bg-variant="info" text-variant="white" header="Лор" class="text-center">
            <b-card-text>{{ countLor }}</b-card-text>
          </b-card>
        </div>
        <div class="col-4">
          <b-card bg-variant="warning" text-variant="white" header="Оптика" class="text-center">
            <b-card-text>{{ countOptika }}</b-card-text>
          </b-card>
        </div>
        <div class="col-4">
          <b-card bg-variant="danger" text-variant="white" header="Гинекология" class="text-center">
            <b-card-text>{{ countGen }}</b-card-text>
          </b-card>
        </div>
    </div>
    
  </div>
</template>

<script>
  export default {
    computed: {
      countChamber(){
        return this.$store.getters.countChamber
      },
      countNevrologiya() {
        return this.$store.getters.countNevrologiya
      },
      countXirurgiya() {
        return this.$store.getters.countXirurgiya
      },
      countTerapiya() {
        return this.$store.getters.countTerapiya
      },
      countLor() {
        return this.$store.getters.countLor
      },
      countOptika() {
        return this.$store.getters.countOptika
      },
      countGen() {
        return this.$store.getters.countGen
      },
    }
  }
</script>

<style>

</style>