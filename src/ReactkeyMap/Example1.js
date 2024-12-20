import React from 'react'

function Example1() {
    const details=[{
        name:"viart",
        skill:"react"
    },{
         name:"Raj",
        skill:"Angular"
    },{
         name:"Sachin",
        skill:"java"
    },{
         name:"Kiran",
        skill:"Python"
    }]
  return (
    <div>
      <h1>Example For Key Map</h1>
    <table border="1">
<tr>
    <th>Name</th>
    <th>Skill</th>
</tr>
{details.map((ele,index)=>{
    return <tr key={index}>
        <td>{ele.name}</td>
        <td>{ele.skill}</td>
    </tr>
})}
    </table>
      
    </div>
  )
}

export default Example1
