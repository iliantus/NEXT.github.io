google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Год', 'Объём'],
          ['2011', 5],
          ['2012', 7.1],
          ['2013', 9],
          ['2014', 11],
          ['2015', 13.4],
          ['2016', 15.7],
          ['2017', 18.2]
        ]);

        var options = {
          chart: {
            title: 'Объём рынка услуг дата-центров',
              
          },
            backgroundColor: 'none',
        };

        var chart = new google.charts.Bar(document.getElementById('air4'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }

