
import React from "react";
import Stylesheet from './comstyle.css'

const Stylesheet1= (props)=>{
    let className=props.isValue?'demo':'demo1';
    return(
        <>
            <h2 className={`${className} demo1`}> Stylesheet Demo </h2>
        </>
    )
}

export default Stylesheet1;