<template>
  <div>
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
        <tr :key="employee.id" v-for="employee in employees">
          <th scope="row">{{ employee.id }}</th>
          <td>{{ employee.firstname }}</td>
          <td>{{ employee.lastname }}</td>
          <td class="part">{{ employee.participation }}</td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import Employee from './Employee'
export default {
  extends: Employee,
  mounted () {
    this.setupTable()
  },
  methods: {
    setupTable () {
      this.formatedEmployees = this.$store.state.formatedEmployeesTable
    }
  },
  data () {
    return {
      table: null,
      formatedEmployees: []
    }
  },
  computed: {
    employees () {
      return this.$store.state.formatedEmployeesTable
    }
  }
}
</script>

<style scoped>
table{ font-size: 0.9em; }
table td{ text-align: left;}
table .part{ text-align: center;}
</style>
