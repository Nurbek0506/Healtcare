import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/chambers',
    name: 'chambers',
    component: () => import('../views/Chambers.vue')
  },
  {
    path: '/countchambers',
    name: 'countchambers',
    component: () => import('../views/CountChambers.vue')
  },
  {
    path: '/doctors',
    name: 'doctors',
    component: () => import('../views/Doctors.vue')
  },
  {
    path: '/doctors/:id',
    name: 'doctorDetail',
    component: () => import('../views/DoctorDetail.vue')
  },
  {
    path: '/sections',
    name: 'sections',
    component: () => import('../views/Sections.vue')
  },
  {
    path: '/patients',
    name: 'patients',
    component: () => import('../views/Patients.vue')
  },
  {
    path: '/patients/:id',
    name: 'patientDetail',
    component: () => import('../views/PatientDetail.vue')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../views/Help.vue')
  },
  {
    path: '/employees',
    name: 'employess',
    component: () => import('../views/Employees.vue')
  },
  {
    path: '/countpatient',
    name: 'countpatient',
    component: () => import('../views/CountPatient.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
