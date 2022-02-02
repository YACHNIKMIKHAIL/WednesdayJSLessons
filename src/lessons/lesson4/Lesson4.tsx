import React from 'react'
import './lesson_4';
import {create, rejP, resP} from "./lesson_4";

const Lesson4 = () => {
    return (
        <div>
            <button id='btn-create-promise' onClick={()=>create()}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={()=>resP()}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={()=>rejP()}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;