import React from "react";



function Grandchild ({handleGrandchildClick}){


    return (

        <div>
            <button onClick={handleGrandchildClick}>Grandchild button</button>
        </div>

    );
};

export default Grandchild;