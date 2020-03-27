
import * as React from "react"; 
import { FunctionComponent } from "react";
import { request } from "../api/driver";
import { endpoints } from "../api/endpoints"

export interface ISummonerCtx  {
    'summoner-name': string,
    'api-key': string
}

export const TableParent: FunctionComponent = () => {
    //const [summonerCtx, setSummonerCtx]: [ISummonerCtx, any] = React.useState()
    const [apiKey, setApiKey] = React.useState('')
    const [name, setName] = React.useState('')

    const updateCtx = (ctx: ISummonerCtx) => {
        setApiKey(ctx['api-key'])
        setName(ctx['summoner-name'])
    }


    //React.useEffect(async () => {
    //    if (summonerCtx) {
    //        setRequest(RequestDisplay(summonerCtx['api-key'], summonerCtx['summoner-name']))
    //    }
    //})

    return(
        <div className="Core">
            <SearchBar onSummonerCtxUpdate={updateCtx} />
            <RequestDisplay apiKey={apiKey} summonerName={name}/>
        </div>
    )
}

function SearchBar({ onSummonerCtxUpdate }: {onSummonerCtxUpdate: any}) {
    const [summonerName, setSummonerName] = React.useState('')
    const [apiKey, setApiKey] = React.useState('')

    const handleOnSubmit = () => {
        onSummonerCtxUpdate({
            'summoner-name': summonerName,
            'apiKey': apiKey
        })
    }

    return (
        <div className="search-bar">
            <input type="text" placeholder="Api Key" onChange={e => setApiKey(e.target.value)} />
            <input type="text" placeholder="Summoner Name" onChange={e => setSummonerName(e.target.value)} />
            <button onClick={handleOnSubmit}>Submit</button>
        </div>
    )
}

const RequestDisplay = ({ apiKey, summonerName }: { apiKey: string, summonerName: string }) => {
    let temp: string = 'RGAPI-ec09ccf9-8a8e-4dee-8ab5-8a8ab99c05c3'
    const req = (async () => {
        await request(temp, endpoints['summonerName'], summonerName)
    })()
    
    return (
        <div className="request-display">
            <ul>
                {Object.entries(req).map(([key, value]) => 
                    <li>{key}: {value}</li>)}
            </ul>
        </div>
    )
}