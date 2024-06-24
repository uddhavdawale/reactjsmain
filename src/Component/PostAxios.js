import axios from "axios";
import React from "react";

 class PostAxios extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
             username:'',
             password : ''
        }
    }
    componentDidMount () {
        axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
        .then()
        .catch()
    }
    eventHandler = (e1) => 
    {
        this.setState({
            [e1.target.name]:e1.target.value
        });
        console.log(this.state.username);
    }

    submitHandler = (e1) =>
        {
            alert(`UserName :${this.state.username} & Password :${this.state.password}`);
            e1.preventDefault();
            axios.post("https://jsonplaceholder.typicode.com/posts",this.state)
            .then((res)=>{
                console.log(res);
            })
            .catch((err)=>{
                console.log(err);
            })

        }

    render()
    {
        const {username,password} = this.state;
        return(
            <>
                <div> Axios Post Example ... </div>
                <form onSubmit={this.submitHandler}>
           <div>
           <h2> Student Login Page</h2>
                <label className="demo"> Username :</label>
                <input type="text" name="username" onChange={this.eventHandler}></input> 
                <br />

                <label className="demo"> Password :</label>
                <input type="password" name="password" onChange={this.eventHandler}></input> 

                <br />
                <button type="submit"  name="click"> Submit</button>
      
           </div>
        </form>
        <div> Post Data
        {
           `${username}, ${password}`
        }
      
        
        </div>
            </>
        )
    }
}

export default PostAxios;