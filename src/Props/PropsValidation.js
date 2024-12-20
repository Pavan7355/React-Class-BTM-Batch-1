import React from 'react'
import PropsTypes from 'prop-types'
function PropsValidation({name,age,condition}) {
  return (
    <div>
      <h1>My name is {name}</h1>
      <h3>The age is {age}</h3>
      <p>{condition?'student':'not a student'}</p>
    </div>
  )
}


export default PropsValidation
