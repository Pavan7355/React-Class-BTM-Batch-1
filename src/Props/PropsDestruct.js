import React from 'react'

function PropsDestruct({name,city,skill}) {
    // const{name,city,skill}=props
  return (
    <div>
      <h1>My name is {name}</h1>
      <h3>I am from {city}</h3>
      <p>I have  {skill}  skill </p>
    </div>
  )
}

export default PropsDestruct
