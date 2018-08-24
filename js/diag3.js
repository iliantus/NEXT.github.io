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
        title: 'Population of Largest U.S. Cities',
        chartArea: {width: '50%'},
        isStacked: true,
        hAxis: {
          minValue: 0,
            
        },
          backgroundColor: 'none',
          legend: { color: 'white' }
      };
      var chart = new google.visualization.BarChart(document.getElementById('air3'));
      chart.draw(data, options);
    }