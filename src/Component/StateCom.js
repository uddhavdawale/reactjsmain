import React,{Component, Fragment} from "react";

export class StateComp extends React.Component
{
    constructor()
    {
        super();
        this.state={
            msg1:" State Getting changes .. "
        }
    }
    sub=()=>{
        console.log(this) // this is availbel in arrow function 
            this.setState({
                msg1:"state second value ",
                course:"BE"
            })
    }

    render(){
        return(
            <Fragment> Demonstration of state Component.. 
            <h6> {this.state.msg1}</h6>
            <button onClick={()=>{this.sub()}}> change state value </button>
            </Fragment>
        )
    }

}