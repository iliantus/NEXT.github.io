google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawStacked);

function drawStacked() {
      var data = google.visualization.arrayToDataTable([
        ['Task','Розница', 'Опт'],
        ['Equinix', 13, 0],
        ['Digital Realty', 2, 8.3],
        ['NTT', 5.5, 6.5],
        ['KDDI/Telehouse', 2.5, 0],
        ['China Telecom', 2.5, 0],
        ['CyrusOne', 0.9, 2.3],
        ['Interxion', 2, 0],
        ['Cyxtera', 1.8, 0],
         ['Global Swith', 0, 1.7],
        ['CoreSite', 1, 1.5]
      ]);

      var options = {
        title: 'Лидеры рынка Colocation Q1 2018',
        chartArea: {width: '70%'},
        isStacked: true,
          legend: {position: 'bottom',
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
          backgroundColor: 'none'
      };
      var chart = new google.visualization.BarChart(document.getElementById('air3'));
      chart.draw(data, options);
    }