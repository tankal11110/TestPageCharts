google.charts.load('current', {'packages':['corechart', 'bar']});
google.charts.setOnLoadCallback(drawChart);
google.charts.setOnLoadCallback(drawChartBar);
    
  	function drawChart() {
		    var data = google.visualization.arrayToDataTable([
 			      ['Week', 'Net Comp', 'Analyzer HR', 'Question Right'],
          	['Week48', 600, 400, 300],
       			['Week49', 700, 300, 100],
       			['Week50', 800, 500, 300],
       			['Week51', 900, 700, 300],
       			['Week52', 300, 200, 100]
     		]);

     		var options = {
            width:500,
       			vAxis: {
           			ticks: [0, 500, 1000]
       			},
          		
       			colors:['#ed6e37','#259e01','#15a0c8'],
           		
       			legend:{
           			position:"bottom"
         		},
            pointsVisible:true 
     		};

     		var chart = new google.visualization.AreaChart(document.getElementById('revenue'));
     		chart.draw(data, options);
 		}

 		function drawChartBar() {
     		var data = google.visualization.arrayToDataTable([
       			['Week', 'Net Comp', 'Analyzer HR', 'Question Right'],
       			['Week48', 6, 4, 3],
       			['Week49', 7, 3, 1],
       			['Week50', 8, 5, 3],
       			['Week51', 9, 7, 3],
       			['Week52', 3, 2, 1]
     		]);

        var options = {
            width:500,
     		  	chart: {
          			title: 'Instalations per day'
       			},
          			
       			legend:{
           			position:"bottom"
         		},
          			
       			vAxis: {
           			ticks: [0, 5, 10]
       			},		
          			
       			colors:['#ed6e37','#259e01','#15a0c8'],


     		};

     		var chart = new google.visualization.ColumnChart(document.getElementById('instalations'));
   			chart.draw(data, options);
 		}