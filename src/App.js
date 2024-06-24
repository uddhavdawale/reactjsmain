import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Demo} from './Component/Demo'
import Exam  from './Component/ClassDemo';
import { StateComp } from './Component/StateCom';
import { ListDemo } from './Component/ListDemo';
import PropsState from './Component/PropsState';
import Testing from './Component/Testing';
import StyleSheet from './Component/Stylesheet'
//import PresentList from './Component/PresentList';
import Form from './Component/Form';
import Routing from './Component/Routing';
import FetchData from './Component/FetchData';
import  PostAxios  from './Component/PostAxios'; 
import LoginPageUd from './Component/LoginPageUd';
import LoginForm from './Component/LoginForm'


const element1=<spam> Basic Tutorial ..</spam>
const ele = React.createElement('h1',{className:'Sampleclass'},'Actual text');
const test=() => {
  alert("Hello");
}

const add=(num)=>{
  if(num>18)
    {
      return <p> You are eligible ..</p>
    }
}
function App() {
const numList=[100,200,300];

  return (
   
    <div className="App">
      <header className="">
      {/*
      <h2> Welcome to React Programming ..</h2>
        {element1} 
        {ele}
       
          Learn React
   <button onClick={test} > Click on Me </button>
   {add(30)}<br/>
   <button onClick={test} > Add</button>  */}
   </header>
   <LoginPageUd/>

    {/* 
   <Routing />

  <PostAxios />

  
    <Form />
       <FetchData />
<Demo name="uddhav"/>
<Exam/>

<StateComp/>
<ListDemo numbers={numList}/>
<h2> Props and state Demo using class based Component </h2>
<PropsState number={numList}> </PropsState>
<Testing />
<StyleSheet isValue="demo" />
*/}
      


   
    </div>
  );
}

export default App;
