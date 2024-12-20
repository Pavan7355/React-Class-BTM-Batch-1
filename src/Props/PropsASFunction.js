import React from 'react'

function PropsASFunction({fun}) {
  const  handleClick=()=>{
        alert("hello good after noon")
    }
  return (
    <div>
      <button onClick={handleClick}>Click here</button>
    <button onClick={fun}>greet</button>
    </div>
  )
}

export default PropsASFunction
