import type { DataPoint, DataPair } from "$lib/types"

const endpoint = 'https://api.dexscreener.com/latest/dex/tokens/'

async function getTokenDataPoint(token_address: string): Promise<DataPoint> {
    const raw_data = await fetch(endpoint + token_address)
    //serialize the data
    const data_point = await raw_data.json()
    return data_point
}

export async function getTokenDataPair(token_address: string): Promise<DataPair> {
    const data_point: DataPoint = await getTokenDataPoint(token_address)
    const data_pair: DataPair = {
        time: Date.now(),
        liquidity: data_point.pairs[0].liquidity.quote
    }
    return data_pair
}

