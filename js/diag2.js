google.charts.load("current", {packages:["corechart"]}); google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Americas',     48],
          ['EMEA',  29],
          ['APAC',  24]
        ]);

        var options = {
          pieHole: 0.55,
            backgroundColor: 'none',
            legend: { position: 'bottom',
                 textStyle: {color: 'white'}
            },
            titleTextStyle: {
                 color: 'white', 
        }
            
        };

        var chart = new google.visualization.PieChart(document.getElementById('air2'));
        chart.draw(data, options);
      }

