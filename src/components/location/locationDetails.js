import React from 'react'

const LocationDetails = (props) => {

  const latitude = props.latitude
  const longitud = props.longitud
  return (
    <div>
      <span>{latitude}</span>
      <span>{longitud}</span>
    </div>
  )
}
export default LocationDetails
