google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Площадь ЦОД', 'Годовая стоимость за стойку', 'Годовая стоимость за кВт'],
          ['2004',  100000,  105000],
          ['2005',  75000,    55000],
          ['2006',  55000,    35000],
          ['2007',  50000,    25000],
          ['2007',  40000,    20000]
        ]);

        var options = {
          curveType: 'function',
            backgroundColor: 'none',
            legend: {position: 'bottom',
                 textStyle: {color: 'white' }
            },
            titleTextStyle: {
                 color: 'white'
        },
            width: 900,
        height: 500,
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

        var chart = new google.visualization.LineChart(document.getElementById('air6'));

        chart.draw(data, options);
      }