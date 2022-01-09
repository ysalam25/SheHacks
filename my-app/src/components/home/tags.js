import React from "react";
import ReactDOM from 'react-dom';
import {SignIn} from '../screens';


export class Tags extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return <div className="base-container">
                <div className="home-content">
                    <div className="home-header">These are my tags!</div>
                </div>
                <div className="home-footer">
                    <button type="button" className="homebtn"onClick={()=> {ReactDOM.render(<SignIn/>, document.getElementById('root'))}}>home</button>
                </div>
        </div>
    }
}