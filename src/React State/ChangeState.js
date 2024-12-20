import React from "react";

class ChangeState extends React.Component{
    constructor(){
        super()
        this.state={
            message:"Welcome to React Js Class",
            greet:"good morning"
        }
    }
    changeMessage(){
        this.setState({
            message:"Thank you for visiting",
            greet:"Come again!!!"
        })
    }
    render(){
        return(
            <>
            <h1>Example Defining State</h1>
            <h3>{this.state.message}</h3>
            <p>{this.state.greet}</p>
            <button onClick={()=>this.changeMessage()}>Cilck here</button>
            </>
        )
    }
}

export default ChangeState