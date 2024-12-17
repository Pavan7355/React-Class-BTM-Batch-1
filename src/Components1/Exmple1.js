import React from 'react'

class Exmple1 extends  React.Component{
    render(){
        return(
            <>
            <h1>THis is class Component</h1>
            <Exampl2/>
            </>
        )
    }
}

class Exampl2 extends React.Component{
    render(){
        return(
            <>
            <h1>Nested Class component</h1>
            </>
        )
    }
}

export default Exmple1