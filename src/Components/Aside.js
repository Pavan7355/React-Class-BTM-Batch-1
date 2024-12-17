import React from 'react'
import './aside.css'
function Aside() {
  return (
    <>
      <div className='aside'>
        <h2>Aside Component</h2>
<Block/>
      </div>
    </>
  )
}

function Block(){
    return(
        <>
        <h1>Block 1 component</h1>
        </>
    )
}

export default Aside
