import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.use(axios)

export default new Vuex.Store({
  state: {
    doctors: [],
    activities: [],
    sections: [],
    patients: [],
    chambers: []
    
  },
  mutations: {
    // Doctors
    newDoctor(state, payload) {
      state.doctors.push(payload)
    },
    toDoctors(state, payload) {
      state.doctors = payload;
    },
    removeDoctor(state, payload) {
      state.doctors.splice(state.doctors.findIndex(function(i){
        return i.id === payload
      }), 1)
    },
    detailDoctors(state,payload) {
      state.doctors.findIndex(function(i){
        return i.id === payload
      })
    },
    saveDoctor(state,payload) {
      state.doctors[payload.id] = payload
    },
    // Activity
    newActivity(state, payload) {
      state.activities.push(payload)
    },
    toActivity(state, payload) {
      state.activities = payload
    },
    // Section
    newSection(state, payload) {
      state.sections.push(payload)
    },
    toSection(state, payload) {
      state.sections = payload
    },
    removeSection(state, payload) {
      state.sections.splice(state.sections.findIndex(function(i){
        return i.id === payload
      }), 1)
    },
    saveSection(state, payload) {
      state.sections[payload.id] = payload
    },
    // Patients
    newPatient(state, payload) {
      state.patients.push(payload)
    },
    toPatients(state, payload) {
      state.patients = payload
    },
    removePatient(state, payload) {
      state.patients.splice(state.patients.findIndex(function(i){
        return i.id === payload
      }), 1)
    },
    savePateint(state, payload) {
      state.patients[payload.id] = payload
    },
    detailPatient(state, payload) {
      state.patients.findIndex(function(i){
        return i.id === payload
      })
    },
    // Chambers
    newChamber(state, payload) {
      state.chambers.push(payload)
    },
    toChambers(state, payload) {
      state.chambers = payload
    },
    removeChamber(state, payload) {
      state.chambers.splice(state.chambers.findIndex(function(i){
        return i.id === payload
      }), 1)
    },
    saveChamber(state, payload) {
      state.chambers[payload.id] = payload
    }
  },
  actions: {
    // Doctors
    addNewDoctor(context, newDoctor) {
      axios.post('http://localhost:3000/doctors', newDoctor)
        .then(response => {
          context.commit('newDoctor', response.data)
        })
    },
    getAllDoctors(context) {
      axios.get('http://localhost:3000/doctors')
        .then(response => {
          context.commit('toDoctors', response.data)
        })
    },
    delDoctor(context, id) {
      axios.delete('http://localhost:3000/doctors/'+id)
        .then(response => {
          console.log(response);
          context.commit('removeDoctor', id)
        })
    },
    detailDoctor(context, id) {
      axios.get('http://localhost:3000/doctors/'+id)
        .then(response => {
          context.commit('detailDoctors',response.data)
        })
    },
    saveDoctor(context, saveDoctor) {
      axios.put('http://localhost:3000/doctors/'+saveDoctor.id, saveDoctor)
        .then(response => {
          console.log(response);
          context.commit('saveDoctor', saveDoctor)
        })
    },
    // Activities
    addActivity(context, newActivity) {
      axios.post('http://localhost:3000/activities', newActivity)
        .then(response => {
          context.commit('newActivity', response.data)
        })
    },
    getAllActivity(context) {
      axios.get('http://localhost:3000/activities')
        .then(response => {
          context.commit('toActivity', response.data)
        })
    },
    // section
    addSection(context, newSection) {
      axios.post('http://localhost:3000/sections', newSection)
        .then(response => {
          context.commit('newSection', response.data)
        })
    },
    gettAllSections(context) {
      axios.get('http://localhost:3000/sections')
        .then(response => {
          context.commit('toSection', response.data)
        })
    },
    delSection(context, id) {
      axios.delete('http://localhost:3000/sections/'+id)
        .then(response => {
          console.log(response);
          context.commit('removeSection', id)
        })
    },
    saveSection(context, saveSection) {
      axios.put('http://localhost:3000/sections/'+saveSection.id, saveSection)
        .then(response => {
          console.log(response);
          context.commit('saveSection', saveSection)
        })
    },
    // Patients
    addNewPatient(context, newPatient) {
      axios.post('http://localhost:3000/patients', newPatient)
        .then(response => {
          context.commit('newPatient', response.data)
        })
    },
    getAllPatients(context) {
      axios.get('http://localhost:3000/patients')
        .then(response => {
          context.commit('toPatients', response.data)
        })
    },
    delPatient(context, id) {
      axios.delete('http://localhost:3000/patients/'+id)
      .then(response => {
        console.log(response);
        context.commit('removePatient', id)
      })
    },
    savePatient(context, savePatient) {
      axios.put('http://localhost:3000/patients/'+savePatient.id, savePatient)
        .then(response => {
          console.log(response);
          context.commit('savePateint', savePatient)
        })
    },
    detailPatient(context, id) {
      axios.get('http://localhost:3000/patients/'+id)
        .then(response => {
          context.commit('detailPatient',response.data)
        })
    },
    // Chambers
    addChambers(context, newChamber) {
      axios.post('http://localhost:3000/chambers', newChamber)
        .then(response => {
          context.commit('newChamber', response.data)
        })
    },
    getAllChambers(context) {
      axios.get('http://localhost:3000/chambers')
        .then(response => {
          context.commit('toChambers', response.data)
        })
    },
    delChamber(context, id) {
      axios.delete('http://localhost:3000/chambers/'+id)
      .then(response => {
        console.log(response);
        context.commit('removeChamber', id)
      })
    },
    saveChamber(context, saveChamber) {
      axios.put('http://localhost:3000/chambers/'+saveChamber.id, saveChamber)
        .then(response => {
          console.log(response);
          context.commit('saveChamber', saveChamber)
        })
    }
  },
  modules: {
  },
  getters: {
    // Doctors
    doctors(state) {
      return state.doctors
    },
    getDoctorById(state) {
      return id => {
        return state.doctors.filter(doctor => {
          
          return doctor.id == id
        })
      }
    },
    doctorId(state) {
      return doctorId => {
        return state.doctors.find(doctor => doctor.id == doctorId)
      }
    },
    countDoctors(state) {
      return state.doctors.length
    },
    countWomans(state) {
      let womans = state.doctors.filter(doctor => {
        return doctor.gender == 'Ayol'
      })
      return womans.length
    },
    countMans(state) {
      let Mans = state.doctors.filter(doctor => {
        return doctor.gender == 'Erkak'
      })
      return Mans.length
    },
    activities(state) {
      return state.activities
    },
    sections(state) {
      return state.sections
    },
    // Patients
    patients(state) {
      return state.patients
    },
    getPatientById(state) {
      return id => {
        return state.patients.filter(patient => {
          
          return patient.id == id
        })
      }
    },
    patientId(state) {
      return patientId => {
        return state.patients.find(patient => patient.id == patientId)
      }
    },
    countPatient(state) {
      return state.patients.length
    },
    womanPatient(state) {
      let womans = state.patients.filter(patient => {
        return patient.gender == 'Ayol'
      })
      return womans.length
    },
    manPatient(state) {
      let mans = state.patients.filter(patient => {
        return patient.gender == 'Erkak'
      })
      return mans.length
    },
    // Chambers
    chambers(state) {
      return state.chambers
    },
    countChamber(state) {
      return state.chambers.length
    },
    countNevrologiya(state) {
      let countNew = state.chambers.filter(chamber => {
        return chamber.sect == 'Невропатология'
      })
      return countNew.length
    },
    countXirurgiya(state) {
      let countXir = state.chambers.filter(chamber => {
        return chamber.sect == 'Хирургия'
      })
      return countXir.length
    },
    countTerapiya(state) {
      let countTer = state.chambers.filter(chamber => {
        return chamber.sect == 'Терапия'
      })
      return countTer.length
    },
    countLor(state) {
      let countLor = state.chambers.filter(chamber => {
        return chamber.sect == 'Лор'
      })
      return countLor.length
    },
    countOptika(state) {
      let countOptika = state.chambers.filter(chamber => {
        return chamber.sect == 'Оптика'
      })
      return countOptika.length
    },
    countGen(state) {
      let countGen = state.chambers.filter(chamber => {
        return chamber.sect == 'Гинекология'
      })
      return countGen.length
    },
  }
})
