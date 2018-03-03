<template>
  <div>
    <form @submit.prevent="addEmployee">
      <div class="row">
        <div class="col-md-3 my-1">
          <input type="text" class="form-control" placeholder="Nome" v-model="employee.firstname" required minlength="3" maxlength="15">
        </div>
        <div class="col-md-3 my-1">
          <input type="text" class="form-control" placeholder="Sobrenome" v-model="employee.lastname" required minlength="3" maxlength="15">
        </div>
        <div class="col-md-3 my-1">
          <input type="number" class="form-control" placeholder="Participação" v-model="employee.participation" required min="1" max="500">
        </div>
        <div class="col-md-2 my-1">
          <button class="btn" type="submit">Enviar</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      employee: {
        firstname: '',
        lastname: '',
        participation: ''
      }
    }
  },
  methods: {
    addEmployee () {
      const newEmp = {
        firstname: this.employee.firstname,
        lastname: this.employee.lastname,
        participation: Number(this.employee.participation)
      }
      axios.post('http://localhost:8000/employees', newEmp)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })

      this.employee.firstname = ''
      this.employee.lastname = ''
      this.employee.participation = null
    }
  }

}
</script>

<style scoped>
button{ color: #fff; border: 1px solid #fff; background-color: #00B8E2; border-radius: 0; cursor: pointer; }
button:hover{ color: #00B8E2; background-color: #fff;}
</style>
