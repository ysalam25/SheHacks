import React from "react";

export class Home extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
                <div className="home-content">
                    <div className="home-header">Trending Tags on January 8th, 2022</div>
                    
                </div>
                <div className="home-footer">
                    <button type="button" className="profilebtn">Edit Profile</button>
                    <button type="button" className="editbtn">Edit Tags</button>
                    <button type="button" className="connectbtn">Connect to Sisters</button>
                </div>
            
        </div>
    }
}