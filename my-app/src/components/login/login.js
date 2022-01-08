import React from "react";

export class Login extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="login-base-container">
            <div className="header">Login</div>
            <div className="content">
                <div className="form">
                    <div className="form-group">
                        <input type="username" name="username" placeholder="Username"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="Password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="loginbtn">SIGN IN</button>
            </div> 
        </div>
    }
}