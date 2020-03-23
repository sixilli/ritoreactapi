import axios, { AxiosInstance } from "axios"
import { apiKey } from "../../secrets"
import { endpoints } from "./endpoints"

export async function request(apiKey: string, endpoint: string, criteria?: string) {
    let instance: AxiosInstance = axios.create({
        timeout: 1000,
        headers: {"X-Riot-Token": apiKey}
    });

    try {
        let response = await endpointManager(endpoint, instance, criteria)
        console.log(response.data)
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
                case endpoint = 'summonerName':
                    return await instance.get(endpoints[endpoint] + criteria)

                case endpoint = 'challengerRankedSolo':
                    return await instance.get(endpoints[endpoint])

                // Only call from match history screen.
                case endpoint = 'match':
                    return await instance.get(endpoints[endpoint] + criteria)

                case endpoint = 'matchHistory':
                    let r = await instance.get(endpoints['summonerName'] + criteria)
                    let id = r.data['accountId']
                    return await instance.get(`${endpoints[endpoint]}${id}`)

            }
        } catch (error) {
            console.log(error)
        }
}