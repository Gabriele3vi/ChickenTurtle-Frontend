<script>
    import { onMount, onDestroy } from 'svelte';
    import { Chart } from 'chart.js/auto';
  
    export let data; // Data for the pie chart
    //export let options; // Chart options
  
    let chartContainer;
    let chartInstance;

    let pieOptsForPieCharts = {
        responsive: true,  // Make the chart responsive
        plugins: {        
        legend: {
            position: 'right'  // Position of the legend
        },
        tooltip: {
            enabled: true  // Enable tooltips on hover
        }
        }
    }

  
    onMount(() => {
      const ctx = chartContainer.getContext('2d');
      chartInstance = new Chart(ctx, {
        type: 'pie', // Pie chart type
        data: data,
        options: pieOptsForPieCharts
      });
  
      // Cleanup chart instance on destroy
      return () => {
        chartInstance.destroy();
      };
    });
  </script>
  
  <canvas bind:this={chartContainer}></canvas>
  