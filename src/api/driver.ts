import wretch from "wretch"
import { apiKey } from "../../secrets"
import { endpoints } from "./endpoints"

// "X-Riot-Token": 'api-key'
export async function request(key: String, param: String) {
    console.log(endpoints.summonerName)
}


console.log(request(apiKey, 'summonerName'))