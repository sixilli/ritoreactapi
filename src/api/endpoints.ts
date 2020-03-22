interface iEnds {
    [key: string]: string
}
export const endpoints:iEnds = {
    summonerName: 'https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/',
    challengerRankedSolo: 'https://na1.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5',
    match: 'https://na1.api.riotgames.com/lol/summoner/v4/lol/match/v4/matchlists/by-account/',
}