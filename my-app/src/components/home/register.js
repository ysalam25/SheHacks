import React from "react";
import ReactDOM from 'react-dom';
import {SignUp} from '../screens';
//const newConn = require("../DBConnection.js");


export class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
        }
    }

    render() {
        return <div className="register-base-container">
            <div className="register-header">Find My Sisters</div>
            <div className="register-content"> 
                This is a safe space for building connections with other women and non-binary engineering students in the community who are interested in talking about the same topics as you. 
                </div>
                <div className="register">
                    <div className="register-group">
                        <input type="newUsername" name="newUsername" placeholder="create username"></input>
                    </div>
                    <div className="register-group">
                        <input type="newPassword" name="newPassword" placeholder="create password"></input>
                    </div>
                </div>
            <div className="footer">
                <button type="button" className="registerbtn" onClick={()=> {
                    // let conn = newConn();
                    // conn.connect();
                    //     conn.query(`INSERT INTO User values()`)
                    // conn.end();
                    ReactDOM.render(<SignUp/>, document.getElementById('root'));
                    }}>sign up!</button>
            </div> 
        </div>
    }
}