import React from "react";
import ReactDOM from 'react-dom';
import {SignIn} from './screens';

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
                        <input type="username" name="username" placeholder="username"></input>
                    </div>
                    <div className="form-group">
                        <input type="password" name="password" placeholder="password"></input>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="button" className="loginbtn" onClick={()=> {ReactDOM.render(<SignIn />, document.getElementById('root'))}}>sign in!</button>
            </div> 
        </div>
    }
}