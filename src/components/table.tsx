
import * as React from "react";
import request from "../api/driver"

export interface ISummonerCtx  {
    'summoner-name': string,
    'api-key': string
}

export function core() {
    const [summmonerCtx, setSummonerCtx] = React.useState({})

    const updateCtx = (ctx: ISummonerCtx) => {
        setSummonerCtx(ctx)
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
export class TableRow extends React.Component<TableProps, {}> {
    render() {
        const rows = []

        this.props.summonerCtx
    }
}


class SummonerInfo extends React.Component<TableProps, {}> {
    render() {

    }
}