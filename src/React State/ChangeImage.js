import React from "react";

class ChangeImage extends React.Component{
    constructor(){
        super()
        this.state={
            imageUrl:"https://th.bing.com/th/id/OIP.AujxjUvL4sVj4zGcYzoaUQHaGL?rs=1&pid=ImgDetMain"
        }
    }
    changeAngular(){
        this.setState({
            imageUrl:"https://th.bing.com/th/id/OIP.l6Ucj0Q8qOoviyhYbF40JwAAAA?rs=1&pid=ImgDetMain"
        })
    }
    changeReact(){
        this.setState({
            imageUrl:"https://th.bing.com/th/id/OIP.AujxjUvL4sVj4zGcYzoaUQHaGL?rs=1&pid=ImgDetMain"
        })
    }
    render(){
        return(
            <>
            <div style={{margin:"50px auto",
                textAlign:"center"}}>
<img src={this.state.imageUrl} 
alt="no image" height={400} width={400}/><br></br><br></br>
<button onClick={()=>this.changeReact()} >React</button>&nbsp;&nbsp;&nbsp;
<button onClick={()=>this.changeAngular()}>Angular</button>
            </div>
            </>
        )
    }
}

export default ChangeImage