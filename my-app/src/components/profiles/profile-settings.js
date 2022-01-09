import React from "react";
import ReactDOM from 'react-dom';
import {SignIn} from '../screens';


export class ProfileSettings extends React.Component {

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
                            <label className="show">show sisters from:</label>
                            <input type="radio" value="my university" name="uni" /> My University
                            <input type="radio" value="specific universities" name="specific" /> Specific University
                            <input type="radio" value="anywhere" name="anywhere" /> Anywhere
                        </div>
                    </div>
                    <div className="edit-form2">
                        <div className="photo">
                        <img></img>
                        </div>
                        <label className="editPhoto">change photo</label>
                        <div className="editName">
                        <input type="textEdit" name="editname" placeholder="eg. janey doey"></input>
                        <label className="editNamelbl">change name</label>
                        </div>
                    </div>   
                </div>

                <div className="edit-footer">
                    <button type="button" className="homebtn" onClick={()=> {ReactDOM.render(<SignIn />, document.getElementById('root'))}}>home</button>
                </div>
            
        </div>
    }
}