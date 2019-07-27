import React from 'react';
function Friend(props){
    return(
       <div>
           <h1>{props.name}</h1>
           <h3>{props.job}</h3>
           <h3>{props.gender}</h3>
           <h3>{props.salary}</h3>
       </div> 
    )
}

export default Friend;