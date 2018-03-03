<template>
  <div id="container-for-chart"></div>
</template>

<script>
import Employee from './Employee'
import Highcharts from 'highcharts'
export default {
  extends: Employee,
  mounted () {
    this.setupChart()
  },
  data () {
    return{
      chart: null
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
    }
  }
}
</script>

<style scoped>

</style>
