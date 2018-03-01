<template>
  <div id="app">
    <employee-form></employee-form>
    <employee-results></employee-results>
  </div>
</template>

<script>
import EmployeeForm from './components/EmployeeForm'
import EmployeeResults from './components/EmployeeResults'
export default {
  name: 'App',
  components: {
    EmployeeForm,
    EmployeeResults
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
</style>
