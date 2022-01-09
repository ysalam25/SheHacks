import {Login, Register, Home, EditProfile, EditTags, TrendingTags, ViewProfile} from "./index"
import React, { Component }  from 'react';


function SignIn(props) 
{
    return(
        <div className="base-container">
            <Home/>
        </div>
    );
}

function SignUp(props){
    return(
        <div className="base-container">
            <EditTags/>
        </div>
    )
}

function EditTags(props){
    return(
        <div className="base-container">
            <EditProfile/>
        </div>
    )
}

function ViewTags(props){
    return(
        <div className="base-container">
            <TrendingTags/>
        </div>
    )
}

function ViewTags(props){
    return(
        <div className="base-container">
            <TrendingTags/>
        </div>
    )
}

export {SignIn, SignUp, ViewTags,}