import React from 'react'

const Cartao = (props) => {
    return (
        <div className="card">
            {/*Cabecalho do cartão*/}
            <div className="card-header text-muted">{props.data} {props.hora}</div>
            <div className="card-body">{props.children}</div>
        </div> 
    )
}

export default Cartao