import React from 'react'

export default function Item(props) {

    return (
        <div>

            <h3 className="border rounded-pill ">
                <button className='bi bi-hourglass-split bg-secondary text-center'
                    id={props.data.key}
                    onClick={()=> props.completeItem(props.data.id)}
                >
                </button>
                &nbsp;&nbsp;
                {props.data.name}
                &nbsp;&nbsp;
                 <button className='bi bi-trash bg-secondary text-center'
                    id={props.data.key}
                    onClick={()=> props.deleteItem(props.data.id)}
                >
                </button>
            </h3>

        </div>
    )
}