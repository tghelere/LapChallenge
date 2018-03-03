<template>
  <div id="app">
    <div class="blue py-4">
      <div class="container">
        <h1>{{ blueTitle }}</h1>
        <p>{{ subTitle }}</p>
        <employee-form />
      </div>
    </div>
    <div class="container white py-4">
      <h2>{{ whiteTitle }}</h2>
      <p>{{ subTitle }}</p>
      <div class="chart row">
        <div class="employee-table col-md-6">
          <employee-table />
        </div>
        <div class="employee-chart col-md-6">
          <employee-chart />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeForm from './components/EmployeeForm'
import EmployeeTable from './components/EmployeeTable'
import EmployeeChart from './components/EmployeeChart'

import axios from 'axios'
const http = axios.create()

export default {
  name: 'App',
  components: {
    EmployeeForm,
    EmployeeTable,
    EmployeeChart
  },
  computed: {
    employees () {
      return this.$store.state.employees
    }
  },
  mounted () {
    http.get('http://localhost:8000/employees').then(response => {
      this.$store.commit('SET_EMPLOYEES', response.data.employees)
    }).catch((error) => {
      console.log(error)
    })
  },
  methods: {},
  data () {
    return {
      blueTitle: 'Cadastre-se',
      whiteTitle: 'Dados',
      subTitle: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.blue{ background-color: #00B8E2; }
h1{ color: #fff; font-size: 2em; text-transform: uppercase; }
h2{ text-transform: uppercase; }
.blue p{ color: #fff; }
.white p{ color: #000; }
</style>
