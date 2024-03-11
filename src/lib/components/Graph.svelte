<script lang="ts">
    import {onMount} from 'svelte'
    import { Line } from 'svelte-chartjs'
    import 'chart.js/auto'
    import {chartData, clearData, addData} from '$lib/stores'
    import {getTokenDataPair} from '$lib/api'
    import {token, graphControl} from '$lib/stores'
    
    let intervalId: ReturnType<typeof setInterval>;

    let data = {
        labels: [] as string[],
        datasets: [
            {
                label: 'Liquidity',
                data: [] as number[],
                borderColor: 'rgba(75, 192, 192, 1)',
                lineTension: 0.1
            }
        ]
    };

    onMount(() => {
        const unsubscribe = chartData.subscribe((graphData) => {
            data.labels = graphData.map((pair) => new Date(pair.time).toLocaleTimeString());
            data.datasets[0].data = graphData.map((pair) => pair.liquidity);
    });

    return () => {
      unsubscribe();
    };
    });

    function clearGraphData() {
        clearData();
    }

    async function startGraph() {
        //stop any previous interval
        stopGraph();
        //check if token isn't empty
        if ($token === '') {
            alert('Please enter a token address');
            return;
        }
        intervalId = setInterval(async () => {
            const pair = await getTokenDataPair($token);
            addData(pair);
        }, 500);
    }

    function stopGraph() {
        clearInterval(intervalId);
    }

    $: graphControl.set({ startGraph, stopGraph, clearGraphData });
</script>

<div> 
    <Line {data} options={{responsive: true}} />
</div>

<style>
    div {
        width: 100%;
        margin: auto;
    }
</style>