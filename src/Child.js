import React from "react";
import Grandchild from"./Grandchild"



function Child ({handleChildClick, handleGrandchildClick}){


    return (

        <div> 
            <button onClick={handleChildClick} >Child button</button>
            <br/>
            <br/>
            <Grandchild handleGrandchildClick={handleGrandchildClick} />
        </div>

    );
};

export default Child;