google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
 var data = google.visualization.arrayToDataTable([
          ['Квартал', 'Microsoft', 'AWS', 'Google'],
          ['1Q2017',  13, 34, 6],
          ['2Q2017',  15, 30, 6],
          ['3Q2017',  15, 33, 7],
          ['4Q2017',  14, 33, 10],
          ['1Q2018',  17, 32, 8]
        ]);
      var options = {
         lineWidth: 5,
        series: {
            0: { color: '#4BC0EC' },
            1: { color: '#ECB64B' },
            2: { color: '#4BEC9B' }},
          titleTextStyle: {
                 color: 'white'
        },
          legend: {position: 'bottom',
                 textStyle: {color: 'white' }
            },
          backgroundColor: 'none',
        width: 1000,
        height: 600,
          
          hAxis: {
          minValue: 0,
            textStyle: {
                color: 'white'
  }
        },
          vAxis: {
            textStyle: {
                color: 'white'
  }
        },
         
      };

      var chart = new google.visualization.LineChart(document.getElementById('air5'));

      chart.draw(data, options);
    }