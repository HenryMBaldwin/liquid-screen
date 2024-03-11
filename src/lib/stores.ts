import {writable} from 'svelte/store'
import type { DataPair } from './types';

export const chartData = writable<DataPair[]>([])

export function addData(data: DataPair) {
    chartData.update(currentData => {
        return [...currentData, data];
    });
}

export function clearData() {
    chartData.set([]);
}

export const token = writable('');

export const graphControl = writable({
    startGraph: () => {},
    stopGraph: () => {},
    clearGraphData: () => {}
});
