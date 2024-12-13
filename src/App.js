import React from "react";
import './app.css'
const name="viart"
function App() {
  let styles={
    backgroundColor:"grey",
    color:"green",
    fontSize:"20px",
    textAlign:"center"
  }
  let imageurl="https://wallpapercave.com/wp/wp4097741.jpg"
  return (
    <>
    <h1 className="heading">Welcome to react js class</h1>
    <h2 style={{backgroundColor:"black",
      color:"white",border:"5px dashed orange"
    }}>Hello how are you</h2>
    <h2 style={styles}>Welcome to javascript class</h2>
    <p style={styles}>React js is libary</p>
    {/* <h1>{name}</h1> */}
    <h3>{20+89}</h3>
  {/* <h1>welcome</h1> */}
  <p>welcome to react js class</p>
  <img id="img" height="200"  width="200" 
  src={imageurl}    alt="noimage"/>
 <img src="sports-cars-1.jpg" alt="no-image"
 height="200"  width="200" />
 
  </>
  )
}

export default App;
