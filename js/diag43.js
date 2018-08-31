google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawMultSeries);

function drawMultSeries() {
      var data = google.visualization.arrayToDataTable([
        ['Компания', '4Q2017', '1Q2018'],
        ['Google', 3, 1],
        ['SAP', 1, 1.24],
        ['Oracle', 1.6, 1.5],
        ['Selesforce', 2.28, 2.68],
        ['IBM', 4.2, 5.5],
        ['Amazon', 5.44, 5.1],
        ['Microsoft', 6, 5.3]
      ]);

      var options = {
          width: 1000,
           backgroundColor: 'none',
        chartArea: {width: '50%'},
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
          legend: { 
                 textStyle: {color: 'white'}
            },
      };

      var chart = new google.visualization.BarChart(document.getElementById('air43'));
      chart.draw(data, options);
    }