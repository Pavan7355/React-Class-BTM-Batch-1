import React from 'react'

function Example3({condition,name}) {
  return (
    <div>
      {condition && <h2>Welcome user {name}</h2> }
      {condition &&<p>Logged in successfully</p>}
    </div>
  )
}

export default Example3
