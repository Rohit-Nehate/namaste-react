import { useState } from "react"
import userContext from '../utils/userContext'

const User = ({name, city, job})=>{

const [state]= useState(0)


    return<>
    
<div className="user-card">
<h1>state 1: {state}</h1>
<h1>{name}</h1>
<h2>{city}</h2>
<h3>{job}</h3>
<userContext.Consumer>
    {(data)=><p>{data.userName}</p>}
</userContext.Consumer>


</div>

    </>
}

export default User