
google.charts.load('current', {'packages':['bar']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = google.visualization.arrayToDataTable([
         ['Год', 'BPaaS', 'PaaS', 'SaaS', 'IaaS', 'IaaS','Cloud Advertising'],
          ['2014', 40, 9, 48, 7, 25, 90],
          ['2015', 42, 11, 59, 9, 35, 105],
          ['2016', 46, 14, 71, 10, 46, 119],
          ['2017', 50, 17, 85, 12, 58, 134],
          ['2018', 54, 21, 100, 14, 72, 151]
        ]);

        var options = {
            series: {
            0: { color: '#E16673' },
            1: { color: '#E1B266' },
            2: { color: '#96E166' },
            3: { color: '#66E1C0' },
            4: { color: '#669EE1' },
            5: { color: '#B366E1' }},
            isStacked: true,
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
            chart: {
            title: '',
              
          },
            backgroundColor: 'none',
            legend: { position: 'bottom',
                 textStyle: {color: 'white'}
            },
            titleTextStyle: {
                 color: 'white'
        },
        };
          
        var chart = new google.charts.Bar(document.getElementById('air42'));

        chart.draw(data, google.charts.Bar.convertOptions(options));
      }