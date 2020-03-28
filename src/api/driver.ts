import axios, { AxiosInstance } from "axios";
// import { apiKey } from "../../secrets"
import { endpoints } from "./endpoints";

export async function request(apiKey: string, endpoint: string, criteria?: string) {
    let instance: AxiosInstance = axios.create({
        timeout: 1000,
        headers: {
            //"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:74.0) Gecko/20100101 Firefox/74.0",
            "X-Riot-Token": apiKey,
        }
    })

    try {
        let response = await endpointManager(endpoint, instance, criteria)
        return response.data

    } catch (error) {
        console.error(error);
    }
}

// TODO make sure inputs are the right type
async function endpointManager(endpoint: string, instance: AxiosInstance, criteria?: string) {
        // Use for loop to match possible end points
        try {
            switch(endpoint) {
                case endpoint = endpoints['summonerName']:
                    return await instance.get(`${endpoint}${criteria}`)

                case endpoint = endpoints['challengerRankedSolo']:
                    return await instance.get(endpoint)

                // Only call from match history screen.
                case endpoint = endpoints['match']:
                    return await instance.get(`${endpoint}${criteria}`)

                case endpoint = endpoints['matchHistory']:
                    let r = await instance.get(endpoints['summonerName'] + criteria)
                    let id = r.data['accountId']
                    return await instance.get(`${endpoint}${id}`)

            }
        } catch (error) {
            console.log(error)
        }
}