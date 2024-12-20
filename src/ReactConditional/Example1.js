import React from 'react'

function Example1({isloggedIn}) {
 if(isloggedIn){
    return <h1>Welcome user login successfully!!</h1>
 }
 else{
    return <h1>Welcome guest login again!!!</h1>
 }
}

export default Example1
