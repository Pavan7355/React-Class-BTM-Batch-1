import React from 'react'

function Example1() {
    const names=["Virat","raj","Sachin","Kiran"]
     const fruits=["Apple","Mango","orange","grapes"]
    let nameList= names.map((ele,index)=>{
        return <li>{ele}</li>
       })
let fruitList=fruits.map((ele,index)=>{
return <li>{ele}</li>
})
    return (
    <div>
      <h1>ordered lsit Example</h1>
      <ol type="I">{nameList}</ol>
      <h1>unordered lsit Example</h1>
      <ul type="square">{fruitList}</ul>
    </div>
  )
}

export default Example1
