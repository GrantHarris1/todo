import React from 'react'

export default function Item(props) {

    return(
                <div>
                    
                    <h3 className="border rounded-pill bi bi-hourglass-split">&nbsp;&nbsp;{props.data.name}</h3>
                    
                </div>
            )
    }