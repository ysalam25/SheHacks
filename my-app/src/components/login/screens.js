import {Login, Register, Home, ProfileSettings, Tags, TrendingTags, PublicProfile, SisterList} from "./index"
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
            <TrendingTags/>
        </div>
    )
}

function EditProfile(props){
    return(
        <div className="base-container">
            <ProfileSettings/>
        </div>
    )
}

function EditTags(props){
    return(
        <div className="base-container">
            <Tags/>
        </div>
    )
}

function ConnectToSisters(props){
    return(
        <div className="base-container">
            <SisterList/>
        </div>
    )
}

function OpenProfile(props){
    return(
        <div className="base-container">
            <PublicProfile/>
        </div>
    )
}

export {SignIn, SignUp, EditProfile, EditTags, ConnectToSisters, OpenProfile}