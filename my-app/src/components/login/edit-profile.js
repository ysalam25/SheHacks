import React from "react";

export class EditProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
                <div className="edit-content">
                    <div className= "edit-form">
                        <div className="editform-group">
                        <input type="text" name="studentID" placeholder="eg. 123456"></input>
                        </div>
                        <div className="editform-group">
                        <input type="email" name="email" placeholder="eg. janedoe@gmail.com"></input>
                        </div>
                        <div className="editform-group">
                        <input type="text" name="university" placeholder="eg. Western University"></input>
                        </div>
                        <div className="editform-group">
                            show sisters from
                        <input type="text" name="university" placeholder="eg. Western University"></input>
                        </div>
                    </div>   
                </div>
                <div className="home-footer">
                    <button type="button" className="profilebtn">Profile Settings</button>
                    <button type="button" className="editbtn">Edit Tags</button>
                    <button type="button" className="connectbtn">Connect to Sisters</button>
                </div>
            
        </div>
    }
}