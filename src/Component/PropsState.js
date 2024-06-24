import React from "react"
 class PropsState extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            msg2:" State 2 .... ",
            users:[
                {id:2,name:"uddhav",class:"java"},
                {id:3,name:"shyam",class:"python"}
            ]
        }
    }
    render()
    { const number=this.props.number;
        console.log(this.state.users[0]);
        return (
            <>
         <h2> {this.state.msg2} </h2>{}
         <h2> {this.state.users[0].id} </h2>{}
            <ul><h3> Propes data in jsx </h3>
                {
                    number.map((number)=><li key={number} > {number}</li>)
                    }
                
            </ul>

        <h3> Class Component example </h3>
        </>
        )
    }
}


export default PropsState;