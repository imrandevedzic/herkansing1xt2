Chart.defaults.global.defaultFontColor = 'white';
var ctx = document.getElementById('linechart').getContext('2d');
var background_1 = ctx.createLinearGradient(0, 0, 0, 380);
    background_1.addColorStop(0, '#696969');
    background_1.addColorStop(0.8, '#000000');
var chart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [0, 10, 20, 30, 40, 50, 60],
        datasets: [{
            label: 'Distance',
            backgroundColor: background_1,
            borderColor: false,
            data: [0, 13333,26666, 39999, 53232, 66565, 79898],
            fill: true,
            pointRadius: 0,
            borderWidth: 1,
            offsetGridLines: false,
            responsive: true,
            
        }]
    },

    options: {
        legend:{
            display: false
        },
        scales: {
            yAxes: [{
                gridLines: {
                    display: false,
                    color: 'white'
                },
                ticks: {
                    maxTicksLimit: 7,
                    fontSize: 12
                },
               scaleLabel: {
                    display: false
                },
            
          
            }],
            xAxes: [{
                gridLines: {
                   display: false,
                   color: 'white'
                },
                scaleLabel: {
                    display: false
                },  
                ticks: {
                    fontSize: 13
                }
            }]
        }

    }
});



var ctx = document.getElementById('gasolineChart');
    var dashboardChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Empty', 'Full'],
            datasets: [{
                label: '%',
                data: [66,33],
                backgroundColor: [
                    'Black',
                    'grey'
                ],
                borderColor: [ 'white'
                ],
                borderWidth: 1,

            }]

        },
        options: {
            responsive: true,
            rotation: 1 * Math.PI,
            circumference: 1 * Math.PI,
            legend: {
                display: false
            },
            tooltip: {
                enabled: false
            },
            cutoutPercentage: 85,
            
        }
    });


var ctx = document.getElementById('waterchart').getContext('2d');
var background_1 = ctx.createLinearGradient(0, 0, 0, 400);
    background_1.addColorStop(0.1, '#696969');
    background_1.addColorStop(0.8, '#000000');
var myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ['day 1', 'day 30', 'day 60', 'day 120', 'day 240'],
    datasets: [{
        data: [100, 80, 60, 40, 20],
        backgroundColor: background_1,
        hoverBackgroundColor: '#929292'
    }]
  },
  options: {
    legend: false,
   responsive: true,
    scales: {
      xAxes: [{
        ticks: {
            maxRotation: 90,
            minRotation: 80,
            fontSize: 13,
        },
            barThickness: 'flex',
            minBarLength: 10,
            barPercentage: 0.7,  
            gridLines: {
                display: false,
                color: 'white'
        },
         
      }],
      
      yAxes: [{
        ticks: {
          beginAtZero: true,
          fontSize: 13,
          maxTicksLimit: 7,
        },
        barPercentage: 0.7,
         gridLines: {
          display: false,
          color: 'white'
      }

      }]
    }
  }
});

