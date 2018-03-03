<script>
import _ from 'lodash'
import { mapState } from 'vuex'
import Highcharts from 'highcharts'

export default {
  computed: {
    ...mapState({
      employeesList: state => state.employees
    })
  },
  watch: {
    employeesList () {
      this.dataSource()
    }
  },
  methods: {
    setupChart (formatedEmployees) {
      Highcharts.chart('container-for-chart', {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
        },
        title: {
          text: ''
        },
        tooltip: {
          pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
          pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
              enabled: true
            },
            showInLegend: true
          }
        },
        series: [{
          name: 'Participação',
          colorByPoint: true,
          data: formatedEmployees
        }]
      })
    },
    calculatePercentage (x) {
      const total = _.sum(this.employeesList.map(item => item.participation))
      const calc = Math.round(x * 100 / total * 10) / 10
      return calc
    },
    dataSource () {
      const formatedEmployees = this.employeesList.map(employee => ({id: employee.id, firstname: employee.firstname, lastname: employee.lastname, name: `${employee.firstname} ${employee.lastname}`, participation: this.calculatePercentage(employee.participation) + '%', y: this.calculatePercentage(employee.participation)}))
      this.$store.commit('SET_FORMATED_EMPLOYEES', formatedEmployees)
      this.setupChart(this.$store.state.formatedEmployees)
    }
  }
}
</script>
