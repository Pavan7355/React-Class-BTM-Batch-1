import React from 'react'

function DefaultProps(props) {
  return (
    <div>
      <h1>My name is {props.name}</h1>
      <h3>I am from {props.city}</h3>
      <h5>I am  {props.age} years old</h5>
    </div>
  )
}
DefaultProps.defaultProps={
    city:"bangalore",
    name:"Raj",
    age:"22"
}
export default DefaultProps
