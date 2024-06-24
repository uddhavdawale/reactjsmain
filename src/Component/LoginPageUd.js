import axios from "axios";
import React, { useState } from "react";


class User 
{
    constructor(username,password)
    {
        this.username=username;
        this.password=password;
    }
}

class Marks{
    constructor(per)
    {
        this.per=per;
    }
    getPercentage()
    {
        console.log(this.per);
    }
}
 class Student extends Marks{

    constructor(id,name,per)
    { super(per);
        this.id=id;
        this.name=name;
//this.getdata.bind(this);
    }

    getdata()
    {
      
        console.log( " "+this.id+ " "+this.name+" "+this.per+"%");
    }
}

 const LoginPageUd = () =>
{
   
    const arr=["ram","shyam","Dny"];
    const st=new Student("23","Ram","72");
   const arrayofStudent=[new Student("100","Ram","72"),new Student("101","Ram","72")]
   st.getdata();
   const [user, setUser] = useState({
                username: '',
                password: ''
            });


        const submitHandle = (event) => {
            console.log("Test : "+user.username);
            axios.post("http://localhost:8080/auth",user).then((response)=>{
                alert(response.data);
                console.log(response.data);

            }).catch((error)=>{
                console.log("error occured .."+error);
            }

            );
          

            event.preventDefault();
            console.log("Handling login page event ..");
            console.log(user);
        } 
      const   getUserName = (e1) =>{
 //       console.log("username : "+e1.target.value);
               //  setUser(new User(e1.target.value,""));
               const { name, value } = e1.target;
               console.log(value);
                 setUser({
                    ...user,
                    [name] : value
                 });
                 console.log(user.username)
                
        }  
        
        const handleInputChange = (event) => {
            const { name, value } = event.target;
            setUser(() => ({
               ...user,
                [name]: value
            }));
        };
return(
    <>
    <div> 
        <form onSubmit={submitHandle}>
            <label> username :</label>
            <input   type="text"
                    name="username"
                    value={user.username}
                     onChange={handleInputChange}></input> <br />
            <label> password :</label>
            <input  type="password"
                    name="password"
                    value={user.password}
                    onChange={handleInputChange}></input> <br />
            <label> password :</label>
            <button type="submit" > Login</button>
            {user.username}< br />
            
        </form>
    {user.username}  {user.password}
    
    
    </div>
        {/*<div> Login Page </div>
        <h2> {st.id} | "" 
       {st.name}  ` `
        {st.per} </h2>
        <ul>
        <h4> {
           
        }
<ul>     {   arr.map(arr => (
            <div key={arr}>{`  ${arr} ` } </div>
          ))
        }
          </ul>

          <ul>
            {
                arrayofStudent.map((arrayofStudent) => <h3> {`${arrayofStudent.id} : name- ${arrayofStudent.name} : Per- ${arrayofStudent.per}` }</h3>)
            }
          </ul>

        </h4> </ul>
        */}
    </>
)
}

export default LoginPageUd;