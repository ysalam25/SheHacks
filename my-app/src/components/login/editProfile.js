import React from "react";

export class EditProfile extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="login-base-container">
            <div className="header">Edit Information</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <input type="username" name="username" placeholder="username"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="loginbtn">sign in!</button>
            </div> 
        </div>
    }
}