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
                        <label>student ID:</label>
                        <input type="text" name="studentID" placeholder="eg. 123456"></input>
                        </div>
                        <div className="editform-group">
                        <label>email:</label>
                        <input type="email" name="email" placeholder="eg. janedoe@gmail.com"></input>
                        </div>
                        <div className="editform-group">
                        <label>university:</label>
                        <input type="text" name="university" placeholder="eg. Western University"></input>
                        </div>
                        <div className="editform-group">
                            <label>show sisters from:</label>
                            <input type="radio" value="my university" name="uni" /> My University
                            <input type="radio" value="specific universities" name="specific" /> Specific University
                            <input type="radio" value="anywhere" name="anywhere" /> Anywhere
                        </div>
                    </div>   
                </div>
                <div className="edit-footer">
                </div>
            
        </div>
    }
}