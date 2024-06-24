
import React from "react";

 class Form extends React.Component
{
    state={
        username:'',
        password:''
    }
    constructor(props)
    {
        super(props);

       // this.handleSubmit=this.handleSubmit.bind(this);
        
       // this.nameHandler=this.handleSubmit.bind(this);
        // this.pwdHandler=this.pwdHandler.bind(this);
    }
    nametHandler=(e1)=>
    {
        // console.log("username entered ."+e1.target.value);
       this.setState(
        {
            username:e1.target.value
        }
       )
     //  console.log(this.state.username);
            
     }
     pwdHandler = (e)=>{
            
       // console.log("password entered ."+e.target.value);
       this.setState(
        {
            password:e.target.value
        }
       )
       //console.log(this.state.password);
     }
     handleSubmit =(event)=>{
        
        event.preventDefault();
        console.log(`username : ${this.state.username}`);
       
        console.log(`password : ${this.state.password}`);
     }
    render()
    {
        return(
            <>
                <div> Login form Student
                <form onSubmit={this.handleSubmit}>
                    <div>
                    <label className="demo"> Username :</label>
                <input type="text"  onChange={this.nametHandler}></input> 
                <br />

                <label className="demo"> Password :</label>
                <input type="password" onChange={this.pwdHandler}></input> 

                <br />
                <button type="submit"  name="click"> Submit</button>
      
                    </div>
                </form>
                 </div>

            </>
        )
    }
}

export default Form;