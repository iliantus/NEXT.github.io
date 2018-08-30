google.charts.load('current', {'packages':['line']});
      google.charts.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
        data.addColumn('number', 'Year');
      data.addColumn('number', 'Microsoft');
      data.addColumn('number', 'AWS');
      data.addColumn('number', 'Google');

      data.addRows([
        [1,  13, 34, 6],
        [2,  15, 30, 6],
        [3,  15, 33, 7],
        [4,  14, 33, 10],
        [5,  17, 32, 8]
        
      ]);

      var options = {
         lineWidth: 5,
        chart: {
          title: 'Тройка игроков, на которую приходится 55% мирового рынка услуг'
        },
          titleTextStyle: {
                 color: 'white'
        },
          legend: { position: 'bottom',
                 textStyle: {color: 'white'}
            },
          backgroundColor: 'none',
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

      var chart = new google.charts.Line(document.getElementById('air5'));

      chart.draw(data, google.charts.Line.convertOptions(options));
    }