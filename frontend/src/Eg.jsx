import React, { useState } from 'react'

const Eg = () => {
  var [x,setX] = useState("");
    
  return (
    <div>
     <input type="text" onChange={(event)=>{setX(event.target.value)}}/>
     {x}
    </div>
  )
}

export default Eg
