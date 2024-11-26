<script>
    import { onMount } from 'svelte';
    import { Chart } from 'chart.js/auto';  // Import Chart.js
    import PieChart from '../../components/PieChart.svelte';
    import * as api from "$lib/api"
    import { each } from 'chart.js/helpers';

    let pieChartContainer, chartContainer2, chartContainer3, chartContainer4;
    let dataToPlot = api.getData()

    let relatedVideoContainers = []

    
    for(const d of dataToPlot.related) {
        (api.dataToPieChartData(d.sent))
    }

    let type = 'bar'  // Change to the chart type you want

    function createPlot(cContainer, type, data, options) {
        const ctx = cContainer.getContext('2d');
        let c = new Chart(ctx, {
        type: type,  // Change to the chart type you want
        data: data,
        options: options
        });

        return c
    }
  
    onMount(() => {
      // Create a Chart.js chart once the component is mounted
        let pieValues = []
        for (const v of Object.values(dataToPlot.Total)) {
            pieValues.push(v)
        }

        let pieData = {
            labels: Object.keys(dataToPlot.Total),  // Labels for the segments
            datasets: [{
            data: pieValues,  // Data values corresponding to the segments
            backgroundColor: ['#FAB12F', '#FA812F', '#FA4032', '#cc632f'],  // Colors for each segment
            //borderColor: '#ffffff',  // Color of the border of the segments
            borderWidth: 1
            }]
        }

        let pieOpts = {
            responsive: true,  // Make the chart responsive
            plugins: {
                title: {
                    display: true, // Enables the title
                    text: '% of sentiments in total', // Title text
                    font: {
                    size: 18 // Font size for the title
                    },
                padding: {
                    top: 10,
                    bottom: 10 // Adds space around the title
                    }
                },
            
            legend: {
                position: 'top'  // Position of the legend
            },
            tooltip: {
                enabled: true  // Enable tooltips on hover
            }
            }
        }
        

        // Time series sentment analysis
        let timeSerisData = {
            labels: dataToPlot.timeSeries.dates,  // Labels for the segments
            datasets: [
          {
            label: 'Neutral',
            data: dataToPlot.timeSeries.Neutral,
            borderColor: 'rgba(250, 177, 47, 1)', // Line color
            backgroundColor: 'rgba(250, 177, 47, 1)', // Fill color under the line (optional)
            tension: 0.1 // Smooth curve
          },
          {
            label: 'Positive',
            data: dataToPlot.timeSeries.Positive,
            borderColor: 'rgba(250, 129, 47, 1)',
            backgroundColor: 'rgba(250, 129, 47, 1)',
            tension: 0.1
          },
          {
            label: 'Negative',
            data: dataToPlot.timeSeries.Negative,
            borderColor: 'rgba(250, 64, 50, 1)',
            backgroundColor: 'rgba(250, 64, 50, 1)',
            tension: 0.1
          },
          {
            label: 'Sarcastic',
            data: dataToPlot.timeSeries.Sarcastic,
            borderColor: 'rgba(204, 99, 47, 1)',
            backgroundColor: 'rgba(204, 99, 47, 1)',
            tension: 0.1
          }
        ]
        }

        let tsOptions = {
            responsive: true,
            scales: {
            x: {
                title: {
                display: true,
                text: 'Weeks'
                }
            },
            y: {
                beginAtZero: true,
                title: {
                display: true,
                text: '% of Sentiments'
                }
            }
            },

            plugins: {
                title: {
                    display: true, // Enables the title
                    text: '% of comments by sentiment over weeks', // Title text
                    font: {
                    size: 18 // Font size for the title
                    },
                padding: {
                    top: 10,
                    bottom: 10 // Adds space around the title
                    }
            },
            legend: {
                position: 'top'
            },
            tooltip: {
                enabled: true
          }
        }
      }

        createPlot(pieChartContainer, 'pie', pieData, pieOpts)
        createPlot(chartContainer2, 'line', timeSerisData, tsOptions)
        createPlot(chartContainer3, type, data, options)
        createPlot(chartContainer4, type, data, options)
    });
</script>
  
<div class="flex flex-col gap-y-5">
    <h1 class="font-bold text-4xl">Advertisment Campaign Analysis Results</h1>

    <div class="flex flex-row gap-x-5 w-full justify-around items-center">
        <div class="flex flex-col gap-y-1 items-center">
            <p class="text-3xl">123.342</p>
            <h3 class="font-bold text-md">Views</h3>
        </div>

        <div class="flex flex-col gap-y-1 items-center">
            <p class="text-3xl">90.231</p>
            <h3 class="font-bold text-md">Likes</h3>
        </div>

        <div class="flex flex-col gap-y-1 items-center">
            <p class="text-3xl">50.123</p>
            <h3 class="font-bold text-md">Comments</h3>
        </div>

        <div class="flex flex-col gap-y-1 items-center">
            <p class="text-3xl">5.73</p>
            <h3 class="font-bold text-md">Controversality score</h3>
        </div>

        <div class="flex flex-col gap-y-1">
            <div class="flex flex-row justify-between">
                <p class="font-bold text-sm">@Paula123</p>
                <p class="text-sm"> 1231 likes</p>
            </div>
            <p class="text-3xl">Best product ever!</p>
            <h3 class="font-bold text-md self-place-center">Most liked comment</h3>
        </div>
    </div>

    <h2 class="text-2xl font-bold place-self-center">Sentiment analysis of Advertisment video</h2>
    <div class="flex flex-row items-center justify-around">
        <div>
            <canvas class="w-3/4 h-72" bind:this={pieChartContainer}  id="1"></canvas>
        </div>
        <div>
            <canvas class="h-72" bind:this={chartContainer2}  id="2"></canvas>
        </div>
    </div>

    <h2 class="text-2xl font-bold place-self-center">Sentiment analysis of top 10 related videos</h2>

    {#each dataToPlot.related as relatedVideo}
    <div class="flex flex-row justify-around items-center">
        <div>
            <h3 class="font-bold">{relatedVideo.title}</h3>
            <div class="flex flex-row gap-x-5 justify-center items-center">
            <div class="w-fit">
                <iframe 
                    class="h-full w-full"
                    src="https://www.youtube.com/embed/{relatedVideo.url}" 
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
            </div>
            <div>
                <ul class="list-disc">
                    <li><b>Channel:</b> {relatedVideo.channelName}</li>
                    <li><b>Views:</b> {relatedVideo.views}</li>
                    <li><b>Like:</b> {relatedVideo.likes}</li>
                    <li><b>Comments:</b> {relatedVideo.comments}</li>
                    <!-- ... -->
                  </ul>
            </div>
            </div>
        </div>
        <div>
            <PieChart data={api.dataToPieChartData(relatedVideo.sent)}/>
        </div>
    </div>
    {/each}
</div>




  
