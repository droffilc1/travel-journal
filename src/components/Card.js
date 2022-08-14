import React from 'react'

function Card(props) {
  return (
    <div>
      <div className='card'>
        <img src={props.imageUrl} alt=''/>
        <div className='card--state'>
          <div className='card--location'>
            <img src='assets/location.png' alt=''/>
            <h3>{props.location}</h3>
            <a target='_blank' rel='noreferrer' href={props.googleMapsUrl}>View on Google Maps</a>
          </div>
          <div className='card--content'>
            <h1>{props.title}</h1>
            <p>{props.startDate} - {props.endDate}</p>
            <p>{props.description}</p>
          </div>
        </div>       
      </div>      
    </div>
  )
}

export default Card