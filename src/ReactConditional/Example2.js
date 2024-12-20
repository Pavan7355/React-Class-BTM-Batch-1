import React from 'react'

function Example2({condition,name}) {
    const welcomeing=<h2>Welcome user {name}</h2>
  const loginMsq=<h2>Please Log In</h2>
    return (
    <div>
      {condition?welcomeing:loginMsq}
    </div>
  )
}

export default Example2
