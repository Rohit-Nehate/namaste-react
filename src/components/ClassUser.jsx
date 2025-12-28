import React from "react"

class ClassUser extends React.Component{

constructor(props){
    super(props)

    this.state ={
        state1: 2,
        state2: 3
    }
}

render(){

    const {name, city, job} = this.props
    const {state1, state2} = this.state

    return <>

    <div className="user-card">

        <h1>state: {state1}</h1>
        <button onClick={()=>{
      this.setState({
        state1: this.state.state1+1
      }
    )
        }}>update state</button>


    <h1>{name}</h1>
    <h2>{city}</h2>
    <h3>{job}</h3>
    

    </div>

    </>
}


}


export default ClassUser