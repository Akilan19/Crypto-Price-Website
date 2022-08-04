import React from 'react'

function Coin(props) {
  return (
    <div className="coin">
        <h1> Name: {props.name} </h1>
        <img src={props.icon} />
        <h3> Price: ${props.price} </h3>
        <h3> Symbol: {props.symbol}</h3>
    </div>
  )
}

export default Coin;