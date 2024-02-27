/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React from 'react'

export default function MenuItem({pizza}) {
    const {id, name, unitPrice, ingredients, soldOut, imageUrl} = pizza
  return (
    <li>
        <img src={imageUrl} alt="name" />
        <div className="">
            <p>{name}</p>
            <p>{ingredients.join(",")}</p>
            <div className="">
                {!soldOut ? <p>{unitPrice}</p> : <p>sold out</p>}
            </div>
        </div>
    </li>
  )
}

/* eslint-enable no-unused-vars */
/* eslint-enable react/prop-types */



