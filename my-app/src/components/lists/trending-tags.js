import React from "react";
import ReactDOM from 'react-dom';
import { ConnectToSisters, EditProfile, EditTags} from "../screens";

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
                    <button type="button" className="profilebtn" onClick={()=> {ReactDOM.render(<EditProfile/>, document.getElementById('root'))}}>Edit Profile</button>
                    <button type="button" className="editbtn" onClick={()=> {ReactDOM.render(<EditTags/>, document.getElementById('root'))}}>Edit Tags</button>
                    <button type="button" className="connectbtn" onClick={()=> {ReactDOM.render(<ConnectToSisters/>, document.getElementById('root'))}}>Connect to Sisters</button>
                </div>
            
        </div>
    }
}