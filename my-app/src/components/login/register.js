import React from "react";

export class Register extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="register-base-container">
            <div className="register-header">Welcome!</div>
            <div className="register-content">Are you looking to connect?</div>
            <div className="footer">
                <button type="button" className="registerbtn">SIGN UP</button>
            </div> 
        </div>
    }
}