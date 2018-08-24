google.charts.load("current", {packages:["corechart"]});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {
        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['44 трлн Гб Составит накопленный объём цифровых данных',     44],
          ['1/3 всех этих данных будет в облаке',  14.6]
        ]);

        var options = {
          title: '1.7 Мб Данных на человека будет создаваться каждую секунду в 2020г.',
          pieHole: 0.5,
            pieSliceText: 'none',
            backgroundColor: 'none',
            width: 900,
        height: 500
        };

        var chart = new google.visualization.PieChart(document.getElementById('air'));
        chart.draw(data, options);
      }
