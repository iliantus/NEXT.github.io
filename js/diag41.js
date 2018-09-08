google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Объём .'],
          ['2016', 26.12],
          ['2017', 30],
          ['2018', 41],
          ['2019', 52],
          ['2020', 63],
          ['2021', 83],
          ['2022', 108],
          ['2023', 121],
          ['2024', 147.8]
        ]);

        var options = {
          chart: {
            title: 'Глобальный рынок услуг дата-центров 2016-2024',
              
          },
            backgroundColor: 'none',
            legend: { position: 'bottom',
                 textStyle: {color: 'white'}
            },
            titleTextStyle: {
                 color: 'white'
        },
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

        var chart = new google.charts.Bar(document.getElementById('air41'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }
