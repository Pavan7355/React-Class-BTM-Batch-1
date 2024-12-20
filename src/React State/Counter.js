import React from "react";
import './counter.css'
class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count:0
        }
    }
    increment(){
        this.setState((prevState)=>({
count:prevState.count+1
        }))
    }
    render(){
        return(
            <>
            <h1 className="heading">Counter App</h1>
            <div className="container">
                <p>Counter value is : {this.state.count}</p>
                <button onClick={()=>this.increment()}>Increment</button>
            </div>
            </>
        )
    }
}
export default Counter