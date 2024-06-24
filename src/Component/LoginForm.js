
function eventHandler(event)
{
    
}

export const LoginForm= (props) =>
    {
        const name=props.name;
        const list=[10,20];
        const newList=list.map(
            (list) =>{        return <li key ={list}>{list}</li>          }
        );
        return (<>

        <form>
           <div>
           <h2> Student Login Page</h2>
                <label className="demo"> Username :</label>
                <input type="text" onChange={eventHandler}></input> 
                <br />

                <label className="demo"> Password :</label>
                <input type="password"></input> 

                <br />
                <button type="submit"  name="click"> Submit</button>
      
           </div>
        </form>
        <h2> Demo.js  Demo Function Component  | {name}</h2>
            <ul > {newList} </ul>
            <ul key={list} >
            {    list.map((list)=><li key={list+1} value={list+1} > {list} </li>)}
            </ul>
            </>
    )
    }
    
    export default LoginForm;