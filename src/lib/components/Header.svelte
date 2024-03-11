<script lang="ts">
    import { token, graphControl } from '$lib/stores';

    let graphFunctions = {};

    graphControl.subscribe(value => {
        graphFunctions = value;
    });

</script>

<div class="header">
    <input type="text" class="token-input" placeholder="Enter token address" bind:value={$token} />
    <button class="start-button" on:click={graphFunctions.startGraph}>Start</button>
    <button class="stop-button" on:click={graphFunctions.stopGraph}>Stop</button>
    <button class="clear-button"on:click={graphFunctions.clearGraphData}>Clear</button>
</div>

<style>
    .header {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;
    }

    .token-input {
        width: 200px;
        height: 30px;
        margin-right: 10px;
    }

    button {
        width: 100px;
        height: 30px;
    }
    .start-button {
        background-color: green;
        color: white;
    }
    .stop-button {
        background-color: red;
        color: white;
    }
    .clear-button {
        background-color: blue;
        color: white;
    }
</style>