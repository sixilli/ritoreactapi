
import * as React from "react";
import from "../api/driver.ts"

export interface TableProps {
    summonerCtx: object
}

export class Table extends React.Component<{}, TableProps> {
    constructor(props: TableProps) {
        super(props)
        this.state = {
            summonerCtx: {}
        }

        this.handleSummonerCtxChange = this.handleSummonerCtxChange.bind(this)
    }


    handleSummonerCtxChange(obj: any) {
        this.setState({
            summonerCtx: obj
        })
    }
    
    render() {
        return (
            <div>
                <SearchBar updateSummoner={this.handleSummonerCtxChange} />
                <TableRow summonerCtx={this.state.summonerCtx} />
            </div>
        )
    }
}

export class TableRow extends React.Component<TableProps, {}> {
    render() {
        const rows = []

        this.props.summonerCtx
    }
}

class SearchBar extends React.Component<TableProps, {}> {
    render() {
        return (
            <form>
                <input type="text" placeholder="Summoner Name" />
            </form>
        )
    }
}

class SummonerInfo extends React.Component<TableProps, {}> {
    render() {

    }
}