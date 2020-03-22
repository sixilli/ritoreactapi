import axios from "axios"
import { apiKey } from "../../secrets"
import { endpoints } from "./endpoints"

export async function request(apiKey: string, endpoint: string) {
    let instance = axios.create({
        timeout: 1000,
        headers: {"X-Riot-Token": apiKey}
    });

    try {
        const response = await instance.get(endpoints[endpoint])
        console.log(response);
    } catch (error) {
        console.error(error);
    }
}

request(apiKey, 'summonerName')

// ask for endpoint/api key => additional information => display
// Need to create a function that handles fetching data for the end point. 
// so there isn't too much logic here.