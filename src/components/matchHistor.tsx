import * as React from "react";


export function matchHistory() {
    const [showMatches, setShow] = React.useState(false)

    return (
        <div>
            {showMatches && <Match name="Meow" />}
        </div>

    )
}