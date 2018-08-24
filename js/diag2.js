google.charts.load("current", {packages:["corechart"]}); google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Americas',     48],
          ['EMEA',  29],
          ['APAC',  24]
        ]);

        var options = {
          title: 'Мировой рынок ЦОД по регионам',
          pieHole: 0.65,
            
            backgroundColor: 'none',
            
        };

        var chart = new google.visualization.PieChart(document.getElementById('air2'));
        chart.draw(data, options);
      }

