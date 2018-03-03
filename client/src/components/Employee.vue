<script>
import _ from 'lodash'
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      employeesList: state => state.employees,
      employeesListChart: state => state.formatedEmployeesChart,
      employeesListTable: state => state.formatedEmployeesTable
    })
  },
  watch: {
    employeesList () {
      this.dataSource()
    }
    // employeesListChart () {
    //   this.dataSource()
    // },
    // employeesListTable () {
    //   this.dataSource()
    // }
  },
  methods: {
    calculatePercentage (x) {
      const total = _.sum(this.employeesList.map(item => item.participation))
      const calc = Math.round(x * 100 / total * 10) / 10
      return calc
    },
    dataSource () {
      const formatedEmployeesChart = this.employeesList.map(employee => ({name: `${employee.firstname} ${employee.lastname}`, y: this.calculatePercentage(employee.participation)}))
      this.$store.commit('SET_FORMATED_EMPLOYEES_CHART', formatedEmployeesChart)
      this.chart = this.setupChart(this.employeesListChart)

      const formatedEmployeesTable = this.employeesList.map(employee => ({firstname: employee.firstname, lastname: employee.lastname, participation: this.calculatePercentage(employee.participation) + '%'}))
      this.$store.commit('SET_FORMATED_EMPLOYEES_TABLE', formatedEmployeesTable)
      this.table = this.setupTable(this.employeesListTable)
    }
  }
}
</script>
