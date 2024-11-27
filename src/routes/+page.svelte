<script>
    import * as api from "$lib/api"
    import { goto } from '$app/navigation'
    import {
        Chart,
        LineController, // Import the line controller
        LineElement, // Import the line element
        PointElement, // Import the point element (for data points)
        LinearScale, // Import the linear scale (for the y-axis)
        CategoryScale, // Import the category scale (for the x-axis)
        Tooltip, // Optional: for tooltips
        Legend // Optional: for the legend
    } from 'chart.js';

    let url_to_analyze = ""
    let show_loading = false
    let status = "first"
    let data 
    let canvas

    function analyze() {
        console.log(url_to_analyze, "Analyzed")
        data = api.getData()

        console.log(data)
        status = "second"
        setTimeout(() => { goto("/analysis")}, 3000)
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
    </div>
    {:else if status=="second"}
    <div class="flex flex-col gap-y-2 items-center justify-center mt-32 w-3/4">
        <h1 class="font-bold text-6xl">Analyzing the comments...</h1>
        <span class="loading loading-spinner loading-lg"></span>
    </div>
    {/if}
</div>