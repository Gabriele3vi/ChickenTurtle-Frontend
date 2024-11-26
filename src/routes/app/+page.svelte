<script>
    import * as api from "$lib/api"
    import { Chart } from 'chart.js';

    let url_to_analyze = ""
    let show_loading = false
    let status = "first"
    let data 
    let canvas

    function make_plot() {
        status="third"

        new Chart(canvas, {
            type: 'line',
            data: {
                labels: data.geneneral.dates,
                datasets: [{
                label: 'My First Dataset',
                data: data.geneneral.values,
                borderColor: 'rgb(75, 192, 192)',
                fill: false,
                }]
            },
            options: {
                responsive: true,
                scales: {
                x: {
                    title: {
                    display: true,
                    text: 'Months'
                    }
                },
                y: {
                    title: {
                    display: true,
                    text: 'Value'
                    }
                }
                }
            }
            });

    }
    
    function analyze(){
        console.log(url_to_analyze, "Analyzed")
        show_loading = !show_loading
        data = api.getData()

        console.log(data)
        status = "second"
        setTimeout(() => { make_plot()}, 2000)

    }

</script>
<div class="flex items-center justify-center">
    {#if status == "first"}
    <div class="flex flex-col gap-y-2 items-center justify-center mt-32 w-3/4">
        <h1 class="font-bold text-6xl">Let's start.</h1>
        <p>Insert the link to the youtube video</p>
        <div class="join w-3/4 mt-1.5">
            <input class="input input-bordered join-item w-full" placeholder="Youtube URL" bind:value={url_to_analyze}/>
            <button class="btn join-item rounded-r-full" on:click={analyze}>Analyze</button>
          </div>
        {#if show_loading}
            <span class="loading loading-spinner loading-lg"></span>
        {/if}
    </div>
    {:else if status=="second"}
    <div class="flex flex-col gap-y-2 items-center justify-center mt-32 w-3/4">
        <h1 class="font-bold text-6xl">Analyzing the comments...</h1>
        <span class="loading loading-spinner loading-lg"></span>
    </div>
    {:else if status == "third"}
        <div>
            <canvas bind:this={canvas} width="400" height="200"></canvas>
        </div>
    {/if}
</div>