import React from 'react'
import './House.css'

export default function House(props){
  return(
    <div>
      <div className='property-container'>
      <div className='house-delete'>X</div> 
        <h2>{`Property Name: ${ props.propertyname }`}</h2>
        <h2>{`Address: ${ props.address }`}</h2>
        <h2>{`City: ${ props.city }`}</h2>
        <h2>{`State: ${ props.state }`}</h2>
        <h2>{`Zip: ${ props.zip }`}</h2>
      </div>
    </div>
  )
}

