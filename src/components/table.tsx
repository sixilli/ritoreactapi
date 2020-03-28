
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
    const [hasCtx, setHasCtx] = React.useState(false)
    const [data, setData] = React.useState({})

    const updateCtx = (ctx: ISummonerCtx) => {
        setApiKey(ctx['api-key'])
        setName(ctx['summoner-name'])
        setHasCtx(true)
    }


    React.useEffect(() => {
        RequestDisplay({ apiKey:apiKey, summonerName:name }).then(result => {
            setData(result)
        })
    })

    if (hasCtx) {
        return(
        <div className="Core">
            {data}
        </div>
        )
    }

    return(
        <div className="Core">
            <SearchBar onSummonerCtxUpdate={updateCtx} />
        </div>
    )
}

function SearchBar({ onSummonerCtxUpdate }: {onSummonerCtxUpdate: any}) {
    const [summonerName, setSummonerName] = React.useState('')
    const [apiKey, setApiKey] = React.useState('')

    const handleOnSubmit = () => {
        onSummonerCtxUpdate({
            'summoner-name': summonerName,
            'api-key': apiKey
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

const RequestDisplay = async ({ apiKey, summonerName }: { apiKey: string, summonerName: string }) => {
    try {
        let secret: string = 'RGAPI-ec09ccf9-8a8e-4dee-8ab5-8a8ab99c05c3'
        let req = await request(secret, endpoints['summonerName'], summonerName)

        console.log('Request: ' + req)
        
        return (
            <div className="request-display">
                <ul>
                    {Object.entries(req).map(([key, value]) => 
                        <li>{key}: {value}</li>)}
                </ul>
            </div>
        )
    } catch(e) {
        console.log(e)
    }
}