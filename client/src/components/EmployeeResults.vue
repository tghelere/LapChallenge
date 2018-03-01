<template>
  <div class="container py-5">
    <h2 class="mb-3">Dados</h2>
    <p class="mb-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
    <div class="chart row">
      <div class="employee-table col-md-6">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Sobrenome</th>
              <th scope="col" class="part">Participação</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td class="part">10%</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td class="part">87%</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="employee-chart col-md-6">
        <employee-chart></employee-chart>
      </div>
    </div>
  </div>
</template>

<script>
import EmployeeChart from './EmployeeChart'
import axios from 'axios'

const http = axios.create()
export default {
  components: {
    EmployeeChart
  },
  mounted () {
    http.get('').then(Response => console.log(Response.data))
  }
}
</script>

<style scoped>
table{ font-size: 0.9em; }
table td{ text-align: left;}
table .part{ text-align: center;}
</style>
