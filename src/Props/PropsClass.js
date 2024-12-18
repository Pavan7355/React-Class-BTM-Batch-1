import React from "react";

class PropsClass extends React.Component{
    render(){
        return(
            <>
            <h1>Example props for class component</h1>
            <h5>I am from {this.props.city}</h5>
            <img src={this.props.imageurl} alt="no image"
            height={200} width={200}/>
            </>
        )
    }
}
export default PropsClass;