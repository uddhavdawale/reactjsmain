

export const Demo= (props) =>
{
    const name=props.name;
    const list=[10,20];
    const newList=list.map(
        (list) =>{        return <li key ={list}>{list}</li>          }
    );
    return (<>
    <h2> Demo.js  Demo Function Component  | {name}</h2>
        <ul > {newList} </ul>
        <ul key={list} >
        {    list.map((list)=><li key={list+1} value={list+1} > {list} </li>)}
        </ul>
        </>
)
}

//export default Demo;